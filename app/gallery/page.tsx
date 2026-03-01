import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { eventImages } from "@/data/event-images"

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-linear-to-b from-background via-[oklch(0.97_0.02_210)] to-background">
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <Link href="/">
                            <Button variant="outline" className="rounded-full bg-transparent">
                                ← Back to Home
                            </Button>
                        </Link>
                    </div>

                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Hackathon Gallery</h1>
                        <p className="text-lg text-muted-foreground">Moments, smiles, demos, and collaboration from event day ✨</p>
                    </div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:balance]">
                        {eventImages.map((image, index) => (
                            <div key={`${image.label}-${index}`} className="mb-5 break-inside-avoid">
                                <Card className="group overflow-hidden border-border/60 transition-transform duration-300 hover:-translate-y-1">
                                    <AspectRatio ratio={image.ratio}>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/10 to-transparent" />
                                        <div className="absolute top-3 left-3 rounded-full bg-background/80 px-3 py-1 text-sm font-medium backdrop-blur">
                                            {image.emoji}
                                        </div>
                                        <div className="absolute right-3 top-3 text-lg">{index % 2 === 0 ? "✨" : "🌈"}</div>
                                    </AspectRatio>
                                    <div className="px-4 py-3 text-sm font-semibold text-foreground">{image.label}</div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
