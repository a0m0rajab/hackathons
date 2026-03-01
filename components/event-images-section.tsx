import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { eventImages } from "@/data/event-images"

export function EventImagesSection() {
    const previewImages = eventImages.slice(0, 5)

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Event Images</h2>
                    <p className="mt-2 text-muted-foreground">A place to showcase highlights from the hackathon day.</p>
                </div>

                <Card className="p-4 sm:p-6 border-border/60">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:balance]">
                        {previewImages.map((image, index) => (
                            <div key={image.label} className="mb-5 break-inside-avoid group">
                                <div className="overflow-hidden rounded-xl border border-border/50 transition-transform duration-300 group-hover:-translate-y-1">
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
                                        <div className="absolute right-3 top-3 text-lg">
                                            {index % 2 === 0 ? "✨" : "🌟"}
                                        </div>
                                    </AspectRatio>
                                    <div className="px-4 py-3 text-sm font-semibold text-foreground">{image.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <div className="mt-8 text-center">
                    <Link href="/gallery">
                        <Button variant="outline" className="rounded-full bg-transparent">
                            View Full Gallery →
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
