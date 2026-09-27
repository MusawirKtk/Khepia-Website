// ============================================================
// Khepia FAQ Data
// ============================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What can I send with Khepia?",
    answer: "Khepia supports non-dutiable, permitted personal items such as clothes, confectionery, electronics, gifts, and personal belongings. Before creating a parcel, check the prohibited items list for restricted categories. Senders must declare all contents accurately."
  },
  {
    question: "How does Khepia verify users?",
    answer: "Every user goes through CNIC verification, overseas and Pakistan WhatsApp number verification, email verification, and manual account review by the Khepia team. Both senders and travellers must be verified before they can use the platform."
  },
  {
    question: "Can the same person send and carry?",
    answer: "Yes. One verified Khepia account works both ways. You can send a parcel today and carry one on your next flight. Sender and Passenger are modes, not separate accounts."
  },
  {
    question: "How does Khepia find a matching traveller?",
    answer: "Khepia matches based on four conditions: compatible origin city, compatible destination city, flight date within the sender's collection window, and parcel weight within the traveller's spare baggage capacity."
  },
  {
    question: "When does the sender pay?",
    answer: "The sender pays the carrying amount after a match is agreed upon and before contact details are unlocked. Khepia holds the payment until delivery is confirmed."
  },
  {
    question: "Why does the passenger pay a refundable deposit?",
    answer: "The traveller temporarily has possession of a parcel belonging to someone else. The refundable deposit is linked to the parcel's declared value and is returned after the delivery flow completes successfully."
  },
  {
    question: "When does the passenger get the deposit back?",
    answer: "The deposit is returned after the parcel is delivered, proof is uploaded, and the sender confirms delivery (or the automatic confirmation period passes without a dispute)."
  },
  {
    question: "When does the passenger earn the carrying amount?",
    answer: "The passenger's net carrying earning is released after successful delivery confirmation, along with the full deposit return. The net earning is the carrying amount minus Khepia's commission."
  },
  {
    question: "When do the other person's contact details become visible?",
    answer: "Contact details remain private until both sides are committed — the match is agreed, payments are verified, and all required steps are complete. Only then do names, phone numbers, and WhatsApp access unlock."
  },
  {
    question: "What happens if customs stops a parcel?",
    answer: "Customs authorities can hold a traveller responsible for the contents of their baggage. Both senders and travellers should understand customs rules for their route. Khepia provides training and guidelines, but customs risk remains with the users as outlined in the terms."
  },
  {
    question: "What happens if collection is missed?",
    answer: "If collection cannot happen within the agreed window, both parties should use in-app support. The order status can be updated accordingly, and Khepia's team will assist with next steps."
  },
  {
    question: "What happens if delivery is disputed?",
    answer: "After the passenger marks delivery, the sender has approximately 24 hours to confirm delivery or open a dispute. If a dispute is opened, Khepia's support team reviews the evidence from both sides."
  },
  {
    question: "What happens if the sender does not confirm delivery?",
    answer: "If the sender does not confirm delivery or open a dispute within the confirmation period, the order follows Khepia's automatic completion rule as outlined in the terms."
  },
  {
    question: "How is recipient identity verified?",
    answer: "At delivery, the passenger verifies the recipient's identity against the delivery record. The recipient may need to provide CNIC evidence at handover. Delivery proof including recipient identification is uploaded to the platform."
  },
  {
    question: "How is CNIC information used?",
    answer: "CNIC information is used for user verification and identity matching at handover. It is handled according to Khepia's privacy policy and is not shared publicly or used for unrelated purposes."
  },
  {
    question: "Where can I get support?",
    answer: "You can reach Khepia support through WhatsApp or email. Support is available for verification problems, payment issues, parcel problems, missed collections, delivery issues, disputes, and account problems."
  },
];
