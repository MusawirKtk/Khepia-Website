// ============================================================
// Khepia Training Video Data
// ============================================================

export interface VideoChapter {
  time: string;
  label: string;
}

export interface TrainingVideo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  youtubeId: string;
  chapters: VideoChapter[];
  ctaLabel: string;
  secondaryCta?: {
    label: string;
    href: string;
  };
}

/** Single training video — client-flow lists "Training video" (singular). */
export const trainingVideo: TrainingVideo = {
  id: "overview",
  title: "How Khepia works",
  subtitle: "Training",
  description:
    "Watch once before you send or carry — matching, payment, collection, delivery, and payout.",
  duration: "4:34",
  youtubeId: "hk6QekysJ_w",
  chapters: [
    { time: "0:00", label: "What Khepia is" },
    { time: "0:30", label: "Sender creates a parcel" },
    { time: "1:10", label: "Passenger posts a trip" },
    { time: "1:50", label: "Matching" },
    { time: "2:30", label: "Payment and deposit" },
    { time: "3:20", label: "Collection and delivery" },
    { time: "4:00", label: "Payout and ratings" },
  ],
  ctaLabel: "Watch training",
  secondaryCta: {
    label: "Read the rules",
    href: "/terms",
  },
};
