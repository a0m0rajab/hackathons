import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const fullLeaderboard = [
  { rank: "🥇", participant: "@sarah-dev", prsOpened: 7, prsAccepted: 7 },
  { rank: "🥈", participant: "@leo-byte", prsOpened: 6, prsAccepted: 5 },
  { rank: "🥉", participant: "@nour-js", prsOpened: 5, prsAccepted: 5 },
  { rank: "🌸", participant: "@omar-ai", prsOpened: 4, prsAccepted: 4 },
  { rank: "🌷", participant: "@hana-creates", prsOpened: 3, prsAccepted: 3 },
  { rank: "🌼", participant: "@maya-code", prsOpened: 3, prsAccepted: 2 },
  { rank: "🌻", participant: "@alex-dev", prsOpened: 2, prsAccepted: 2 },
  { rank: "🌺", participant: "@zara-tech", prsOpened: 2, prsAccepted: 2 },
  { rank: "🪷", participant: "@kai-builds", prsOpened: 2, prsAccepted: 1 },
  { rank: "🌹", participant: "@emma-codes", prsOpened: 1, prsAccepted: 1 },
]

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-[oklch(0.96_0.03_290)] to-background">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="outline" className="rounded-full bg-transparent">
                ← Back to Home
              </Button>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-[oklch(0.45_0.15_290)]">Full Leaderboard 🌟</h1>
            <p className="text-xl text-muted-foreground">
              All the amazing contributors who made this hackathon special
            </p>
          </div>

          <Card className="overflow-hidden rounded-3xl border-2 border-primary/20 shadow-2xl bg-white/90 backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[oklch(0.92_0.08_290)] to-[oklch(0.90_0.10_330)]">
                    <th className="px-6 py-5 text-left text-base font-bold text-[oklch(0.40_0.15_290)]">Rank</th>
                    <th className="px-6 py-5 text-left text-base font-bold text-[oklch(0.40_0.15_290)]">Participant</th>
                    <th className="px-6 py-5 text-center text-base font-bold text-[oklch(0.40_0.15_290)]">
                      PRs Opened
                    </th>
                    <th className="px-6 py-5 text-center text-base font-bold text-[oklch(0.40_0.15_290)]">
                      PRs Accepted
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fullLeaderboard.map((entry, index) => (
                    <tr
                      key={index}
                      className="border-t border-border hover:bg-[oklch(0.98_0.02_290)] transition-colors"
                    >
                      <td className="px-6 py-6 text-3xl">{entry.rank}</td>
                      <td className="px-6 py-6 font-semibold text-foreground text-lg">{entry.participant}</td>
                      <td className="px-6 py-6 text-center font-bold text-primary text-lg">{entry.prsOpened}</td>
                      <td className="px-6 py-6 text-center font-bold text-secondary text-lg">{entry.prsAccepted}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Thank you to all {fullLeaderboard.length} contributors for making this hackathon amazing! 💖
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
