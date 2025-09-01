# LSTcoins Website

Official website for LSTcoins with email subscription functionality.

## 🚀 Features

- **Modern Design**: Full-screen background with blurred central card
- **Email Subscription**: Collect and store user emails
- **Responsive Layout**: Works on all devices
- **Navigation**: Links to Testnet, Documentation, and Social Media

## 📁 Project Structure

```
lstcoins/
├── index.html          # Main website
├── styles.css          # Styling
├── script.js           # JavaScript functionality
├── api/
│   └── subscribe.js    # Vercel serverless function
├── vercel.json         # Vercel configuration
├── package.json        # Dependencies
├── background.jpg      # Background image
├── logo.gif           # Logo animation
└── favicon.jpeg       # Browser icon
```

## 🚀 Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Set project name
   - Deploy

### Option 2: Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/lstcoins.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Deploy

## 📧 Email Collection

- Emails are stored in `emails.txt` file
- Serverless function handles POST requests to `/api/subscribe`
- Duplicate emails are prevented
- File is automatically created on first subscription

## 🔧 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run locally:**
   ```bash
   npm run dev
   ```

3. **Test email subscription:**
   - Open `http://localhost:3000`
   - Enter email and subscribe
   - Check `emails.txt` file

## 🌐 Live URLs

- **Main Site**: `https://your-project.vercel.app`
- **API Endpoint**: `https://your-project.vercel.app/api/subscribe`
- **Testnet**: `https://testnet.lstcoins.org`
- **Documentation**: `https://docs.lstcoins.org`

## 📱 Features

- ✅ Full-screen background image
- ✅ Central blurred card
- ✅ Email subscription form
- ✅ Success animations
- ✅ Responsive design
- ✅ Navigation buttons
- ✅ Social media dropdown
- ✅ Logo animation
- ✅ Email validation
- ✅ Serverless backend

## 🎨 Customization

- **Background**: Replace `background.jpg`
- **Logo**: Replace `logo.gif`
- **Colors**: Edit `styles.css`
- **Content**: Modify `index.html`

## 📞 Support

For issues or questions, contact the LSTcoins team.

---

**Built with ❤️ for LSTcoins Community**
