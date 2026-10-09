// ============================================================
// Khepia FAQ Data — core questions only
// ============================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What can I send with Khepia?",
    answer:
      "Non-dutiable, permitted personal items — clothes, confectionery, electronics, household items, and similar. Check the prohibited items list before you post. If your item isn't listed, email khepia.pk@gmail.com.",
  },
  {
    question: "How does Khepia verify users?",
    answer:
      "CNIC (with front/back photos), overseas and Pakistan mobile, email confirmation, and manual account review. Both senders and passengers must be verified before using the platform.",
  },
  {
    question: "Can the same person send and carry?",
    answer:
      "Yes. One verified account works both ways — sender and passenger are modes, not separate accounts.",
  },
  {
    question: "How does matching work?",
    answer:
      "A match needs the same corridor (pickup ↔ travelling from, delivery ↔ travelling to), cities that overlap, flight date inside the pickup window, and parcel weight within the passenger's spare capacity. Matching offers go to every qualifying passenger.",
  },
  {
    question: "Who pays, and in what order?",
    answer:
      "The sender pays the carrying amount first (bank transfer, with a short timer). After Khepia confirms that payment, the passenger pays a refundable deposit (declared value, max PKR 25,000) plus 10% commission. Contacts unlock only after both payments are confirmed.",
  },
  {
    question: "When does the passenger get paid and get the deposit back?",
    answer:
      "After delivery is confirmed (or auto-confirmed if the sender doesn't respond within 24 hours), the deposit returns and the passenger receives the carrying amount minus commission.",
  },
  {
    question: "What about customs?",
    answer:
      "Customs can hold a traveller responsible for baggage contents. Senders must declare accurately; passengers must inspect before accepting. Training and terms cover the rules — customs risk stays with the users.",
  },
  {
    question: "Where can I get support?",
    answer:
      "WhatsApp or email at khepia.pk@gmail.com — verification, payments, collection, delivery, and disputes.",
  },
];
