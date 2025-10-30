import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.65_0.18_200)] via-[oklch(0.60_0.22_210)] to-[oklch(0.55_0.20_220)] py-20 px-4 sm:px-6 lg:px-8">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-bounce-slow opacity-70">💻</div>
        <div
          className="absolute top-40 right-20 text-5xl animate-bounce-slow opacity-60"
          style={{ animationDelay: "0.5s" }}
        >
          🚀
        </div>
        <div
          className="absolute bottom-32 left-1/4 text-5xl animate-bounce-slow opacity-70"
          style={{ animationDelay: "1s" }}
        >
          🌍
        </div>
        <div
          className="absolute top-1/3 right-1/3 text-4xl animate-bounce-slow opacity-50"
          style={{ animationDelay: "1.5s" }}
        >
          🤝
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6 bg-gradient-to-r from-[oklch(0.80_0.35_200)] to-[oklch(0.85_0.32_210)] bg-clip-text text-transparent">
          Hacktoberfest Mini Hackathon 2025
        </h1>

        <p className="text-2xl sm:text-3xl font-semibold mb-4 text-[oklch(0.85_0.35_200)]">
          A one-day celebration of open source, creativity, and kindness 🤝
        </p>

        <p className="text-lg sm:text-xl text-[oklch(0.80_0.35_200)] max-w-3xl mx-auto mb-12 leading-relaxed">
          Join us for 9 hours of learning, coding, and collaboration! Whether it's your first PR or your 100th, this
          day is all about creating something wonderful together 🌷
        </p>

        {/* Event Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[oklch(0.85_0.08_290)]">
            <div className="text-3xl mb-2">🗓️</div>
            <div className="text-sm font-semibold text-[oklch(0.50_0.12_290)] mb-1">Date</div>
            <div className="text-base font-bold text-[oklch(0.35_0.10_290)]">October 18, 2025</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[oklch(0.82_0.12_30)]">
            <div className="text-3xl mb-2">🕘</div>
            <div className="text-sm font-semibold text-[oklch(0.50_0.12_30)] mb-1">Time</div>
            <div className="text-base font-bold text-[oklch(0.35_0.10_30)]">9:00 AM – 5:00 PM</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[oklch(0.85_0.10_180)]">
            <div className="text-3xl mb-2">📍</div>
            <div className="text-sm font-semibold text-[oklch(0.50_0.12_180)] mb-1">Location</div>
            <div className="text-base font-bold text-[oklch(0.35_0.10_180)]">Fatih Sultan Mehmet University</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[oklch(0.88_0.08_330)]">
            <div className="text-3xl mb-2">💬</div>
            <div className="text-sm font-semibold text-[oklch(0.50_0.12_330)] mb-1">Theme</div>
            <div className="text-base font-bold text-[oklch(0.35_0.10_330)]">Get into open source!</div>
          </div>
        </div>

        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-[oklch(0.80_0.35_200)] to-[oklch(0.85_0.32_210)] hover:from-[oklch(0.75_0.38_200)] hover:to-[oklch(0.80_0.35_210)] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Join the Hackathon 🚀
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 rounded-full border-2 border-[oklch(0.70_0.18_290)] text-[oklch(0.50_0.18_290)] hover:bg-[oklch(0.95_0.05_290)] shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
          >
            View Schedule 📅
          </Button>
        </div> */}
      </div>
    </section>
  )
}
