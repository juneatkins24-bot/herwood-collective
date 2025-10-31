# REMATCHED

**You're Too Good For Swiping. Play for it instead.**

A competitive dating game app where players compete in 4 different games, have real conversations, and the winner decides if there's a rematch. Three games together unlocks contact info.

## NYC Aesthetic
- Black & white with yellow taxi accent colors
- Grainy, vintage photography treatment
- Bold Helvetica typography
- Gritty, honest, no-BS copy

## The Games
1. **PATTERN** - Speed pattern recognition
2. **SUDOKU SHOWDOWN** - Same puzzle, two players, first to solve wins
3. **WORD BATTLE** - Build words faster than your opponent
4. **GET REAL** - Truth prompts and hot takes

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone this repo or open in your terminal:
```bash
cd rematched
```

2. Install dependencies:
```bash
npm install --break-system-packages
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deploy to Vercel

### Option 1: GitHub Desktop + Vercel Dashboard
1. Open GitHub Desktop
2. Create new repository from this folder
3. Publish to GitHub
4. Go to [vercel.com](https://vercel.com)
5. Click "Import Project"
6. Select your GitHub repo
7. Click Deploy (Vercel auto-detects Next.js)

### Option 2: Terminal
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Project Structure
```
rematched/
├── app/
│   ├── globals.css       # Global styles with grain texture
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── public/
│   └── images/            # NYC photography
├── components/            # Future React components
├── tailwind.config.ts     # Tailwind with NYC color palette
└── package.json
```

## Next Steps
- [ ] Set up Clerk for authentication
- [ ] Build game components (Pattern, Sudoku, Word Battle, Get Real)
- [ ] Implement Pusher/Ably for real-time gameplay
- [ ] Set up Supabase/Firebase for user profiles and game state
- [ ] Integrate Stripe for in-app purchases (Rematch, Veto)
- [ ] Add matching/queue system
- [ ] Build message character minimum enforcement
- [ ] Create "3 games = unlock contact" flow
- [ ] Seasonal 5th game system

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel
- **Auth** (planned): Clerk
- **Real-time** (planned): Pusher or Ably
- **Database** (planned): Supabase or Firebase
- **Payments** (planned): Stripe

## Design Philosophy
Brutal honesty. No fake positivity. Dating is competitive—this app just admits it. 
Winner decides. Earn your connection. Real recognizes real.

---

**EARN IT.**
