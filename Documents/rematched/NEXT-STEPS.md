# REMATCHED - Development Roadmap

## Phase 1: MVP Foundation (Week 1-2)
**Goal**: Get a playable prototype with one game

### 1.1 Authentication
- [ ] Set up Clerk account
- [ ] Add Clerk provider to app
- [ ] Create sign-up/sign-in pages
- [ ] Add protected routes
- [ ] User profile setup flow

### 1.2 Database Setup
- [ ] Choose: Supabase or Firebase
- [ ] Design schema:
  - `users` (id, name, age, photo, mysterious_fact, doodle, contact_info)
  - `matches` (id, user1_id, user2_id, status, games_played)
  - `games` (id, match_id, game_type, winner_id, messages)
  - `messages` (id, game_id, user_id, content, turn_number)
- [ ] Set up database connection
- [ ] Create API routes for CRUD operations

### 1.3 Matching System (Simple)
- [ ] Create "Find Match" button
- [ ] Queue system (Firestore/Supabase real-time)
- [ ] Random pairing algorithm
- [ ] Profile preview component (grainy photo, age, fact, doodle)

### 1.4 Build ONE Game (Word Battle)
Why Word Battle first? Simplest to implement.
- [ ] Game board component
- [ ] Letter generation logic
- [ ] Word validation (dictionary API)
- [ ] Score tracking
- [ ] Turn timer (30 seconds)
- [ ] Real-time updates with Pusher/Ably

### 1.5 Chat Integration
- [ ] Chat component (bottom half of game screen)
- [ ] 15 character minimum enforcement
- [ ] Message send on each turn
- [ ] Chat history display

---

## Phase 2: Core Gameplay (Week 3-4)
**Goal**: All 4 games working, basic game flow complete

### 2.1 Game 2: Pattern Recognition
- [ ] Pattern generator
- [ ] Sequence matching logic
- [ ] Speed scoring system
- [ ] Visual feedback

### 2.2 Game 3: Sudoku Showdown
- [ ] Sudoku puzzle generator API
- [ ] Shared puzzle state
- [ ] Real-time cell updates
- [ ] First-to-complete detection

### 2.3 Game 4: Get Real
- [ ] Truth prompt database (start with 100 prompts)
- [ ] Hot take topics
- [ ] Voting/judging mechanism
- [ ] Response display

### 2.4 Winner Flow
- [ ] Winner selection screen
- [ ] "REMATCH" or "NEXT OPPONENT" buttons
- [ ] Handle both accept/reject scenarios
- [ ] Update match status

### 2.5 Three Games = Unlock
- [ ] Track games played together
- [ ] Lock contact info until 3 games
- [ ] Unlock animation/screen
- [ ] Contact exchange UI

---

## Phase 3: Monetization (Week 5)
**Goal**: In-app purchases working

### 3.1 Stripe Setup
- [ ] Create Stripe account
- [ ] Add Stripe SDK
- [ ] Create products:
  - Rematch Anyway ($2.99)
  - Veto ($1.99)
- [ ] Payment flow components

### 3.2 Purchase Features
- [ ] "Rematch Anyway" - force rematch after rejection
- [ ] "Veto" - block someone's rematch request
- [ ] Purchase confirmation modals
- [ ] Receipt/transaction history

---

## Phase 4: Polish & Launch Prep (Week 6-7)
**Goal**: App Store ready

### 4.1 UI/UX Refinements
- [ ] Loading states
- [ ] Error handling
- [ ] Animations (keep it minimal, NYC grit)
- [ ] Sound effects? (subway sounds, cash register for purchases)
- [ ] Haptic feedback
- [ ] Responsive design for all screens

### 4.2 Profile Features
- [ ] Edit profile
- [ ] Upload doodle (drawing canvas component)
- [ ] Change mysterious fact
- [ ] Photo upload/crop

### 4.3 Safety & Moderation
- [ ] Report user button
- [ ] Block user feature
- [ ] Profanity filter for messages
- [ ] Age verification
- [ ] Terms of Service
- [ ] Privacy Policy

### 4.4 Testing
- [ ] User testing with 10-20 people
- [ ] Fix critical bugs
- [ ] Performance optimization
- [ ] Analytics setup (Vercel Analytics or Mixpanel)

---

## Phase 5: App Store Submission (Week 8)
**Goal**: Native mobile apps

### 5.1 Mobile Conversion
**Option A: PWA** (Faster, cheaper)
- [ ] Service worker
- [ ] Offline support
- [ ] Install prompt
- [ ] App icon/splash screen

**Option B: React Native** (Better experience)
- [ ] Convert to Expo/React Native
- [ ] Native navigation
- [ ] Push notifications
- [ ] App store optimization

### 5.2 App Store Prep
- [ ] App Store Connect account
- [ ] Screenshots
- [ ] Description (use your brutal copy!)
- [ ] Keywords
- [ ] Age rating
- [ ] Privacy policy hosted

---

## Phase 6: Post-Launch (Ongoing)
**Goal**: Growth & iteration

### 6.1 Seasonal 5th Game
- [ ] Design rotation system
- [ ] Holiday themes
- [ ] Special event games

### 6.2 Analytics & Optimization
- [ ] Track key metrics:
  - Games played
  - Match-to-contact conversion rate
  - Purchase conversion rate
  - Retention (Day 1, 7, 30)
- [ ] A/B test features
- [ ] Optimize matching algorithm

### 6.3 Growth Features
- [ ] Referral system
- [ ] Share your profile link
- [ ] Social proof ("X games played today")
- [ ] Leaderboards (optional, keep it low-key)

---

## Tech Stack Recommendations

### Auth: Clerk
- Clean UI
- Easy social login
- Good docs
- Free tier generous

### Real-time: Pusher
- Simple API
- Good free tier (100 connections)
- Alternative: Ably (also great)

### Database: Supabase
- PostgreSQL (reliable)
- Real-time subscriptions built-in
- Auth included (but use Clerk for better UX)
- Great free tier

### Payments: Stripe
- Industry standard
- Excellent docs
- Easy web integration

### Hosting: Vercel
- Zero config for Next.js
- Great free tier
- Easy custom domains

---

## MVP Feature Cut
**What to skip for MVP:**
- ❌ Advanced matching algorithm (random is fine at first)
- ❌ Complex profile customization
- ❌ Chat history beyond current game
- ❌ Friend lists
- ❌ Instagram integration
- ❌ Video chat
- ❌ Voice messages
- ❌ Location-based matching

**Keep it SIMPLE. Ship fast. Iterate based on real user feedback.**

---

## Success Metrics

### Week 1
- 50 sign-ups
- 100 games played

### Month 1
- 500 active users
- 5% purchase conversion
- Average 3 games per user

### Month 3
- 5,000 active users
- $5K MRR
- App Store rating >4.5

---

**NOW GO BUILD IT.** 🎮

No overthinking. No perfection. Just ship something people can play.

The brutal honesty of your concept WILL resonate if you execute it right.

Winner takes all. Earn it.
