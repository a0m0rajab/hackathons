import { Card } from "@/components/ui/card"

const scheduleItems = [
  { time: "09:00 AM", event: "☕ Check-in & morning coffee/breakfast" },
  { time: "10:00 AM", event: "💬 Intro to Hacktoberfest + participant meet & greet 🤝" },
  { time: "11:15 AM", event: "🧠 showcase & live demo on how to contribute 👩‍💻👨‍💻" },
  { time: "12:00 PM", event: "🍴 Lunch break (fuel up, hackers 😋)" },
  { time: "01:00 PM", event: "💻 Contribution time, code, commit, and collaborate with mentors 👏" },
  { time: "04:30 PM", event: "🎉 Wrap-up session, share wins, feedback, and celebrate your hacks 🌟" },
]

export function ScheduleSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-[oklch(0.96_0.02_180)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[oklch(0.45_0.15_290)]">Today's Journey 🌼</h2>
          <p className="text-lg text-muted-foreground">
            A joyful day of inspiration, learning, and open source collaboration ✨
          </p>
        </div>

        <div className="space-y-4">
          {scheduleItems.map((item, index) => (
            <Card
              key={index}
              className="p-6 rounded-2xl border-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white/80 backdrop-blur-sm"
              style={{
                borderColor: `oklch(${0.85 - index * 0.02} ${0.08 + index * 0.01} ${290 + index * 15})`,
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="text-lg font-bold text-primary min-w-[120px]">{item.time}</div>
                <div className="h-px sm:h-8 sm:w-px bg-border sm:mx-4" />
                <div className="text-lg font-medium text-foreground flex-1">{item.event}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
