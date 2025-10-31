#!/bin/bash

echo "🎮 Setting up REMATCHED..."
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install --break-system-packages

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the dev server:"
echo "  npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
echo ""
echo "To deploy to Vercel:"
echo "  1. Push to GitHub using GitHub Desktop"
echo "  2. Go to vercel.com and import your repo"
echo "  OR"
echo "  npm i -g vercel && vercel"
echo ""
echo "EARN IT. 💪"
