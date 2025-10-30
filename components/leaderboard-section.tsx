import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { leaderboard } from "@/data/contributions"

export function LeaderboardSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[oklch(0.94_0.04_290)] to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[oklch(0.45_0.15_290)]">
            Leaderboard of contributors 🌟
          </h2>
          <p className="text-lg text-muted-foreground">
            Celebrating the amazing contributors who made this hackathon shine 💖
          </p>
        </div>

        <Card className="overflow-hidden rounded-3xl border-2 border-primary/20 shadow-2xl bg-white/90 backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[oklch(0.92_0.08_290)] to-[oklch(0.90_0.10_330)]">
                  <th className="px-6 py-5 text-left text-base font-bold text-[oklch(0.40_0.15_290)]">Emoji</th>
                  <th className="px-6 py-5 text-left text-base font-bold text-[oklch(0.40_0.15_290)]">Name</th>
                  <th className="px-6 py-5 text-left text-base font-bold text-[oklch(0.40_0.15_290)]">Participant</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry, index) => (
                  <tr key={index} className="border-t border-border hover:bg-[oklch(0.98_0.02_290)] transition-colors">
                    <td className="px-6 py-6 text-3xl">{entry.rank}</td>
                    <td className="px-6 py-6 font-semibold text-lg text-foreground">
                      {entry.name ? entry.name : "Anonymous"}
                    </td>
                    <td className="px-6 py-6 font-semibold text-lg text-blue-800 underline">
                      <a href={`https://github.com/${entry.participant}`} target="_blank" rel="noopener noreferrer">
                        {entry.participant}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/leaderboard">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              View Full Leaderboard →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
