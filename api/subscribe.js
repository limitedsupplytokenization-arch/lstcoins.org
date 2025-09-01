import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validate email format
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Path to the emails file
    const emailsPath = path.join(process.cwd(), 'emails.txt');

    // Read existing emails (empty array if file doesn't exist)
    let existingEmails = [];
    try {
      const fileContent = fs.readFileSync(emailsPath, 'utf8');
      existingEmails = fileContent.split('\n').filter(email => email.trim() !== '');
    } catch (error) {
      // If file doesn't exist, it will be created later
    }

    // Check if email already subscribed
    if (existingEmails.includes(email)) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    // Add new email
    const newEmail = email.trim();
    const updatedEmails = [...existingEmails, newEmail];

    // Write to file
    fs.writeFileSync(emailsPath, updatedEmails.join('\n') + '\n');

    // Successful response
    res.status(200).json({
      message: 'Email subscribed successfully!',
      totalSubscribers: updatedEmails.length
    });

  } catch (error) {
    console.error('Error saving email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
