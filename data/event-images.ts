export type EventImage = {
    src: string
    alt: string
    label: string
    emoji: string
    ratio: number
}

export const eventImages: EventImage[] = [
    { src: "https://github.com/user-attachments/assets/68463551-4583-478e-bd52-53ee977131fd", alt: "Open Source Journey", label: "Open Source Journey", emoji: "🎉", ratio: 1707 / 1280 },
    {
        src: "https://github.com/user-attachments/assets/3c2871df-6902-412c-94df-f7cd0f854359",
        alt: "Open Source Journey - with mentors",
        label: "Open Source Journey - Mentors",
        emoji: "🤝",
        ratio: 1280 / 1707,
    },
    { src: "https://github.com/user-attachments/assets/a1f4c120-2a97-4972-b2c2-b140c9bf3d0c", alt: "Food time", label: "Food Time", emoji: "🚀", ratio: 1707 / 1280 },
    { src: "https://github.com/user-attachments/assets/b78709e5-f006-4645-b79c-f8ba36015135", alt: "Food Time 2", label: "Food Time 2", emoji: "🧠", ratio: 1707 / 1280 },
]
