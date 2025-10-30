import { Card } from "@/components/ui/card"

const partners = [
  { name: "GitHub", emoji: "💻" },
  { name: "DevCafé", emoji: "☕" },
  { name: "Design4Good", emoji: "🎨" },
  { name: "Local Tech Hubs", emoji: "🧡" },
]

export function PartnersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[oklch(0.96_0.02_180)] to-[oklch(0.94_0.04_290)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[oklch(0.45_0.15_290)]">
            With Love and Support from Our Friends 💕
          </h2>
          <p className="text-lg text-muted-foreground">
            We're grateful for our partners who made this day full of creativity and care 🌷
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm border-2 border-primary/20"
            >
              <div className="text-5xl mb-3">{partner.emoji}</div>
              <div className="font-semibold text-foreground">{partner.name}</div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground italic">
            Thank you for helping us grow a global garden of open source kindness 🌸
          </p>
        </div>
      </div>
    </section>
  )
}
