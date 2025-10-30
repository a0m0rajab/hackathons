"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function JoinFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    github: "",
    email: "",
    reason: "",
    agree: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[oklch(0.94_0.04_290)] to-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[oklch(0.45_0.15_290)]">Join the Hackathon! 🌈</h2>
          <p className="text-lg text-muted-foreground">
            Ready to code, connect, and create with kindness? We'd love to have you 💕
          </p>
        </div>

        <Card className="p-8 rounded-3xl border-2 border-primary/20 shadow-2xl bg-white/90 backdrop-blur-sm">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🌸</div>
              <h3 className="text-2xl font-bold text-primary mb-2">Yay! You're in!</h3>
              <p className="text-muted-foreground">See you at the hackathon! 💖</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base font-semibold mb-2 flex items-center gap-2">
                  🪴 Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-xl border-2 border-input focus:border-primary h-12"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="github" className="text-base font-semibold mb-2 flex items-center gap-2">
                  🧑‍💻 GitHub Username
                </Label>
                <Input
                  id="github"
                  type="text"
                  required
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="rounded-xl border-2 border-input focus:border-primary h-12"
                  placeholder="@yourusername"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-base font-semibold mb-2 flex items-center gap-2">
                  💌 Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl border-2 border-input focus:border-primary h-12"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label htmlFor="reason" className="text-base font-semibold mb-2 flex items-center gap-2">
                  💬 Why do you want to join?
                </Label>
                <Textarea
                  id="reason"
                  required
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="rounded-xl border-2 border-input focus:border-primary min-h-[100px]"
                  placeholder="Tell us what excites you about this hackathon..."
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="agree"
                  checked={formData.agree}
                  onCheckedChange={(checked) => setFormData({ ...formData, agree: checked as boolean })}
                  className="mt-1"
                />
                <Label htmlFor="agree" className="text-sm leading-relaxed cursor-pointer">
                  🌷 I agree to follow the community kindness guidelines
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={!formData.agree}
                className="w-full text-lg py-6 rounded-full bg-gradient-to-r from-[oklch(0.70_0.18_290)] to-[oklch(0.75_0.15_310)] hover:from-[oklch(0.65_0.20_290)] hover:to-[oklch(0.70_0.17_310)] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                💖 Count Me In!
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}
