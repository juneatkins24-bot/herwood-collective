import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/AdobeStock_447712610.jpeg"
            alt="NYC street"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="text-shadow-brutal mb-6 text-6xl font-bold uppercase tracking-tight md:text-8xl">
            You're Too Good<br />For Swiping
          </h1>
          <p className="mb-12 max-w-2xl text-xl md:text-2xl">
            Play for it instead.<br />
            Four games. Real conversation. Winner decides if you're worth their time.
          </p>
          <button className="btn-primary">
            GET IN THE GAME
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <div className="h-12 w-px bg-white/50" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative bg-black py-24">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/AdobeStock_132550835.jpeg"
            alt="Subway tiles"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <h2 className="mb-16 text-center text-5xl font-bold uppercase tracking-tight">
            How It Works
          </h2>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="border-gritty p-8">
              <div className="mb-4 text-6xl font-bold text-taxi-yellow">01</div>
              <h3 className="mb-4 text-2xl font-bold uppercase">Get Matched</h3>
              <p className="leading-relaxed text-gray-300">
                We'll find someone. You'll get their photo (a little grainy, keeps it mysterious), 
                their age, one fact they chose to tell you, and a doodle they drew. That's it. 
                The rest? You gotta earn it.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border-gritty p-8">
              <div className="mb-4 text-6xl font-bold text-taxi-yellow">02</div>
              <h3 className="mb-4 text-2xl font-bold uppercase">Play. Talk. Compete.</h3>
              <p className="leading-relaxed text-gray-300">
                Pick your game. Every turn, you gotta say something real—none of that "hey" garbage. 
                Minimum 15 characters or we boot you both. We're not here for lazy.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border-gritty p-8">
              <div className="mb-4 text-6xl font-bold text-taxi-yellow">03</div>
              <h3 className="mb-4 text-2xl font-bold uppercase">Win or Go Home</h3>
              <p className="leading-relaxed text-gray-300">
                Winner calls the shots. They want a rematch? You're in. They want next? 
                Tough luck, champ. It's brutal because dating's brutal. At least this is honest about it.
              </p>
            </div>

            {/* Step 4 */}
            <div className="border-gritty p-8">
              <div className="mb-4 text-6xl font-bold text-taxi-yellow">04</div>
              <h3 className="mb-4 text-2xl font-bold uppercase">Three Games = The Goods</h3>
              <p className="leading-relaxed text-gray-300">
                Survive three rounds together and you unlock the real prize: actual contact info. 
                You earned each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE GAMES */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-center text-5xl font-bold uppercase tracking-tight">
            The Games
          </h2>
          <p className="mb-16 text-center text-xl text-gray-400">
            Pick your poison
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* PATTERN */}
            <div className="group relative overflow-hidden border-gritty bg-zinc-900 p-8 transition-all hover:border-taxi-yellow">
              <div className="mb-4 text-4xl font-bold uppercase tracking-tight">Pattern</div>
              <p className="mb-4 text-gray-300">
                Speed. Shapes. Don't overthink it.<br />
                Match the sequence before they do.
              </p>
              <div className="text-sm uppercase tracking-widest text-taxi-yellow">
                → Visual Speed Test
              </div>
            </div>

            {/* SUDOKU SHOWDOWN */}
            <div className="group relative overflow-hidden border-gritty bg-zinc-900 p-8 transition-all hover:border-taxi-yellow">
              <div className="mb-4 text-4xl font-bold uppercase tracking-tight">Sudoku Showdown</div>
              <p className="mb-4 text-gray-300">
                Same puzzle. Two players. First to crack it wins.<br />
                Hope you paid attention in the subway.
              </p>
              <div className="text-sm uppercase tracking-widest text-taxi-yellow">
                → Logic Battle
              </div>
            </div>

            {/* WORD BATTLE */}
            <div className="group relative overflow-hidden border-gritty bg-zinc-900 p-8 transition-all hover:border-taxi-yellow">
              <div className="mb-4 text-4xl font-bold uppercase tracking-tight">Word Battle</div>
              <p className="mb-4 text-gray-300">
                Build words faster than your opponent.<br />
                Vocabulary is sexy. Use it.
              </p>
              <div className="text-sm uppercase tracking-widest text-taxi-yellow">
                → Verbal Dexterity
              </div>
            </div>

            {/* GET REAL */}
            <div className="group relative overflow-hidden border-gritty bg-zinc-900 p-8 transition-all hover:border-taxi-yellow">
              <div className="mb-4 text-4xl font-bold uppercase tracking-tight">Get Real</div>
              <p className="mb-4 text-gray-300">
                Truth prompts. Hot takes. The stuff that actually matters.<br />
                No wrong answers, just honest ones.
              </p>
              <div className="text-sm uppercase tracking-widest text-taxi-yellow">
                → Authenticity Test
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IAP SECTION */}
      <section className="relative overflow-hidden bg-black py-24">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/AdobeStock_260886006.jpeg"
            alt="NYC brownstones"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-5xl font-bold uppercase tracking-tight">
            When You Can't Let Go
          </h2>
          <p className="mb-16 text-xl text-gray-400">
            Sometimes losing isn't the end. Sometimes you need another shot.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* REMATCH ANYWAY */}
            <div className="border-gritty bg-zinc-900 p-8">
              <div className="mb-4 text-3xl font-bold uppercase">Rematch Anyway</div>
              <p className="mb-6 text-gray-300">
                They said no. You're saying "not done yet."
              </p>
              <div className="text-2xl font-bold text-taxi-yellow">$2.99</div>
            </div>

            {/* VETO */}
            <div className="border-gritty bg-zinc-900 p-8">
              <div className="mb-4 text-3xl font-bold uppercase">Veto</div>
              <p className="mb-6 text-gray-300">
                Hard pass on their rematch request.<br />
                Sometimes you gotta be cold.
              </p>
              <div className="text-2xl font-bold text-taxi-yellow">$1.99</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/AdobeStock_1437151174.jpeg"
            alt="NYC skyline"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h2 className="text-shadow-brutal mb-8 text-6xl font-bold uppercase tracking-tight md:text-7xl">
            Real Recognizes Real
          </h2>
          <p className="mb-12 max-w-2xl text-xl md:text-2xl">
            No participation trophies. No second chances unless you buy them.<br />
            Play for keeps.
          </p>
          <button className="btn-primary">
            GET IN THE GAME
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="mb-4 text-2xl font-bold uppercase tracking-widest">REMATCHED</div>
          <p className="text-gray-500">Earn it.</p>
        </div>
      </footer>
    </main>
  )
}
