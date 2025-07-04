# Sikits Playground

Interactive playground for testing and exploring Sikits utility functions.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🎮 Features

- **Interactive Testing**: Test all Sikits functions with real-time input
- **Function Categories**: Organized by string, number, array, and object utilities
- **Live Results**: See function results instantly
- **Copy to Clipboard**: Easy copying of results
- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Theme**: Beautiful UI with gradient backgrounds

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
playground/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── App.tsx          # Main application component
│   ├── index.tsx        # Application entry point
│   └── index.css        # Global styles
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Adding New Functions

To add new functions to the playground:

1. Update the `functionExamples` array in `src/App.tsx`
2. Add the function to the appropriate category
3. Provide a clear description and example
4. Test the function in the playground

### Styling

The playground uses CSS modules and custom CSS. Main styles are in:
- `src/index.css` - Global styles
- Component-specific styles can be added as needed

### Configuration

Key configuration files:
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `public/manifest.json` - PWA manifest

## 🚀 Deployment

The playground is automatically deployed to GitHub Pages via GitHub Actions.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Environment Variables

No environment variables are required for the playground.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the playground
5. Submit a pull request

## 📄 License

This playground is part of the Sikits project and is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with React and TypeScript
- Styled with modern CSS
- Deployed on GitHub Pages
- Powered by Sikits utility library 