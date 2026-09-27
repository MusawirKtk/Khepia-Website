// ============================================================
// Khepia Demo Data — Single Source of Truth
// All marketing demo values derive from this file.
// ============================================================

export const demoParcel = {
  origin: "Dubai",
  destination: "Rawalpindi",
  weightKg: 7.5,
  collectionWindow: "14–19 Sep",
  deliveryTarget: "20–27 Sep",
  ratePerKg: 900,
  carryingAmount: 6_750,
  declaredValue: 45_000,
  items: ["Clothes", "Confectionery"],
  trackingId: "KHP-7F42-9210",
} as const;

export const demoTrip = {
  origin: "Dubai",
  destination: "Rawalpindi",
  flightDate: "17 Sep",
  spareKg: 12,
  remainingAfterMatch: 4.5,
} as const;

export const demoMoney = {
  senderCarryingAmount: demoParcel.carryingAmount,          // 6,750
  commissionRate: 0.10,
  commission: 675,                                          // 10% of 6,750
  passengerDeposit: demoParcel.declaredValue,                // 45,000
  passengerUpfront: 45_675,                                 // deposit + commission
  passengerNetEarning: 6_075,                               // carrying - commission
  passengerCompletionRelease: 51_075,                       // deposit + net earning
  khepiaRetains: 675,                                       // commission
} as const;

// Validate arithmetic at import time
if (demoMoney.commission !== Math.round(demoMoney.senderCarryingAmount * demoMoney.commissionRate)) {
  console.error("[Khepia Demo Data] Commission arithmetic mismatch.");
}
if (demoMoney.passengerUpfront !== demoMoney.passengerDeposit + demoMoney.commission) {
  console.error("[Khepia Demo Data] Passenger upfront arithmetic mismatch.");
}
if (demoMoney.passengerNetEarning !== demoMoney.senderCarryingAmount - demoMoney.commission) {
  console.error("[Khepia Demo Data] Passenger net earning arithmetic mismatch.");
}
if (demoMoney.passengerCompletionRelease !== demoMoney.passengerDeposit + demoMoney.passengerNetEarning) {
  console.error("[Khepia Demo Data] Passenger completion release arithmetic mismatch.");
}

// Formatted currency helper
export function formatPKR(amount: number): string {
  return `PKR ${amount.toLocaleString("en-PK")}`;
}

// Demo sender info (all fictional)
export const demoSender = {
  name: "Ahmed K.",
  maskedCnic: "•••••-•••••••-•",
  maskedPhone: "+971 •••• ••87",
} as const;

// Demo passenger info (all fictional)
export const demoPassenger = {
  name: "Bilal R.",
  maskedCnic: "•••••-•••••••-•",
  maskedPhone: "+971 •••• ••43",
} as const;

// Demo recipient info (all fictional)
export const demoRecipient = {
  name: "Fatima K.",
  maskedCnic: "•••••-•••••••-•",
  phone: "+92 •••• ••••12",
  city: "Rawalpindi",
} as const;

// Tracking states
export const trackingStates = [
  { id: 1, label: "Waiting for collection", who: "System", completed: true },
  { id: 2, label: "Collected", who: "Passenger confirmed", completed: true },
  { id: 3, label: "In transit", who: "System", completed: true },
  { id: 4, label: "Delivery due", who: "System", completed: true },
  { id: 5, label: "Delivered", who: "Passenger confirmed", completed: false },
  { id: 6, label: "Awaiting sender confirmation", who: "Sender", completed: false },
  { id: 7, label: "Complete", who: "System", completed: false },
] as const;

// Match conditions
export const matchConditions = [
  { label: "Origin compatible", result: true },
  { label: "Destination compatible", result: true },
  { label: "Flight date fits collection window", result: true },
  { label: "Parcel weight ≤ spare baggage", result: true },
] as const;

// Sender readiness checklist
export const senderChecklist = [
  "Items are physically with sender",
  "Unpacked photo taken",
  "Packed photo taken",
  "Labelled photo taken",
  "Weight-scale photo taken",
] as const;

// Sender item categories
export const senderItemCategories = [
  "Clothes",
  "Confectionery",
  "Electronics",
  "Gifts",
  "Personal items",
] as const;
