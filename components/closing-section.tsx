export function ClosingSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-[oklch(0.92_0.08_290)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[oklch(0.45_0.15_290)]">
          Thank You for Making Magic 💫
        </h2>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
          This wasn't just a hackathon — it was a celebration of kindness, curiosity, and creativity. Thank you for
          sharing your code, your care, and your heart with the community 💻💖
        </p>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/20 shadow-xl mb-12 max-w-2xl mx-auto">
          <p className="text-2xl font-semibold text-[oklch(0.45_0.15_290)] italic">
            "Keep contributing. Keep creating. Keep being kind." 🌷
          </p>
        </div>

        <footer className="text-muted-foreground">
          <p className="text-lg">✨ Built with love for Hacktoberfest 2025 ✨</p>
        </footer>
      </div>
    </section>
  )
}
