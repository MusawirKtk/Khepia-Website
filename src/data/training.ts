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
  chapters: VideoChapter[];
  ctaLabel: string;
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export const trainingVideos: TrainingVideo[] = [
  {
    id: "overview",
    title: "Khepia in 60 seconds",
    subtitle: "Overview",
    description:
      "A fast overview of how Khepia works — from creating a parcel to confirmed delivery and payout.",
    duration: "1:00",
    chapters: [
      { time: "0:00", label: "What Khepia is" },
      { time: "0:08", label: "Sender creates parcel" },
      { time: "0:15", label: "Passenger creates trip" },
      { time: "0:22", label: "Matching" },
      { time: "0:30", label: "Payment and deposit" },
      { time: "0:38", label: "Collection" },
      { time: "0:43", label: "Travel" },
      { time: "0:48", label: "Delivery" },
      { time: "0:54", label: "Payout" },
    ],
    ctaLabel: "Watch overview",
  },
  {
    id: "sender",
    title: "Sending safely",
    subtitle: "Sender training",
    description:
      "Learn what can be sent, how to photograph and pack a parcel, and what you're declaring before you post it.",
    duration: "2:14",
    chapters: [
      { time: "0:00", label: "What can be sent" },
      { time: "0:35", label: "Packing the parcel" },
      { time: "1:03", label: "Required photographs" },
      { time: "1:31", label: "Labels and recipient information" },
      { time: "1:50", label: "Customs responsibility" },
      { time: "2:08", label: "Your declaration" },
    ],
    ctaLabel: "Watch sender training",
    secondaryCta: {
      label: "Read sender rules",
      href: "/sender-terms",
    },
  },
  {
    id: "passenger",
    title: "Carrying safely",
    subtitle: "Passenger training",
    description:
      "Learn how to inspect a parcel, understand your customs responsibility, handle the refundable deposit, and complete delivery safely.",
    duration: "3:02",
    chapters: [
      { time: "0:00", label: "Before accepting" },
      { time: "0:34", label: "Inspecting the parcel" },
      { time: "1:02", label: "What you must never carry" },
      { time: "1:35", label: "Why there is a deposit" },
      { time: "2:02", label: "Collection" },
      { time: "2:29", label: "Delivery proof" },
      { time: "2:50", label: "Getting paid" },
    ],
    ctaLabel: "Watch passenger training",
    secondaryCta: {
      label: "Read passenger rules",
      href: "/passenger-terms",
    },
  },
];
