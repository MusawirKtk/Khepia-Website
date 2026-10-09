# The client's flow — authoritative

The product owner's own specification, received 13 September 2026 and **revised
26 September 2026** (email confirmation code, a sixth readiness gate, the
sender's CNIC in the unpacked photo, a PKR 25,000 value ceiling, weight asked
first, and photos at collection). **Where this disagrees with anything else in
`design/`, this wins.** `CLAUDE.md` describes how the product is built; this
describes what it must do.

Recorded here so it is not lost in a chat log, and so the divergences at the
bottom stay visible until they are decided.

---

## Website — not built at all

Nothing in this section exists yet. It is not part of the Flutter app.

- Training video
- Support: email, WhatsApp


---

## Registration

- CNIC (username, with format enforcement)
- First name, last name — **as per CNIC**, with format enforcement
- Upload CNIC front and back
- Overseas mobile: country dropdown (UAE / KSA), with an example and format
  - **WhatsApp confirmation code**
- Pakistan mobile, with an example and format
  - **WhatsApp confirmation code**
- Email
  - **Email confirmation code** *(added 26 Sep)*
- "Your account is under verification and you will be notified soon"
- Admin receives an email on registration
- Database updated
- Manual verification → "You have been registered as Sender and Passenger
  between *Country* and Pakistan"
- Then: proceed as Sender or Passenger?

---

## Sender

1. Training video seen confirmation — yes/no
2. Which non-dutiable items are you sending? Multi-select, **alphabetical**:
   canned food, clothes, confectionery, electronics, household items,
   machinery parts, over-the-counter medicine, perfume.
   *If your item is not listed, email support@khepia.pk for review.*
3. Six gates, each a **yes/no question**. On "no":
   *"please click cancel and come back when you have…"* *(revised 26 Sep)*
   - Is the item already in your possession and ready to send?
   - Do you have a picture of the items unpacked **and showing your CNIC**?
   - …packed, without the recipient name & number label?
   - …packed, with the recipient name & number label?
   - …packed/unpacked and on a weighing machine showing the exact kg?
   - …unpacked **and with** the recipient name & number label? *(new)*
4. Total weight — dropdown, 0.5 kg to 32.0 kg in 0.5 steps — **asked here,
   straight after the gates**
5. Pickup country → city (filtered) → area
6. Pickup expected date range, min 2 days. *A longer range gives better results*
7. Pickup expected time — morning / afternoon / evening
8. Expected delivery date range, min 2 days
9. Deliver-to country — **derived**: not-Pakistan → Pakistan; Pakistan → UAE or
   Saudi Arabia. Then city (filtered) → area
10. Recipient name (as per CNIC), recipient CNIC (format)
    *required to ensure your precious package is delivered to the right person*
11. Upload the pictures. The revised flow lists four (unpacked with CNIC;
    packed without label; open package on the scale; open package with the
    label) — **we upload all five photographed gates**, by decision on 26 Sep,
    so nothing the sender confirms having goes unevidenced.
12. Package dimensions in inches (w/h/d, with a max)
13. Package weight (32 kg max) — the same value as step 4, pre-filled
14. Package total value in PKR — **max 25,000** *(revised 26 Sep)*. Built as a
    number field capped at 25,000, not a dropdown, by decision.
15. Willing to pay per kg → auto-calculate total → confirm
16. Disclaimer — yes/no: weight is accurate, items as declared, non-dutiable,
    customs confiscation.
    On yes: *"Your order details will now be shared with matching Passengers
    (your personal details will be hidden until you have accepted the
    Passenger)"*

---

## Passenger

1. Training video seen confirmation — yes/no
2. Flight date (calendar)
3. Travelling from country
4. Which cities can you pick up from — **multi-select**, filtered
5. Travelling to country — derived, as above
6. Which cities can you deliver in — **multi-select**, filtered
7. Maximum spare weight — dropdown, 1 kg to 32 kg in whole steps

---

## Matching

Runs on **every new sender or passenger order**:

    pickup country      == travelling from country
    pickup city         ∈  travelling from cities
    delivery country    == travelling to country
    delivery city       ∈  travelling to cities
    flight date         within the pickup expected date range
    package weight      ≤  maximum spare weight

If a match is found, send the offer to **ALL** matching passengers. Each sees:
package weight, contents, value of goods, pickup city/area, pickup date range
(**truncated at the flight date — hide anything after it**), delivery city/area,
expected delivery date range, and the rate per kg with the total.

### The passenger's three options

**Cancel** → "Do you want to still receive new Sender offers?"
- **Yes** → both orders return to the match query; notify admin; inform the
  sender of the passenger's decision
- **No** → delete the passenger's order (*"We look forward to your next
  trip"*); the sender's order returns to the match query; notify admin; inform
  the sender; refund the sender

**Counter-offer** → enter your offer in PKR per kg, auto-calculate the total to
receive, confirm.
*The Sender can only accept or reject your offer. If the Sender rejects your
offer then you will not see this order again.*
- Proceed → *"Your offer has been sent to the Sender for their review. You will
  be notified if they accept your offer."*

**Accept** → "You are accepting to collect and deliver the package for total
PKR *X*."
- Proceed → same confirmation as above

### The sender answers

*"We have found a passenger (show rating / number of Khepia trips) willing to
collect & deliver your package. They have…"*
- accepted your offer of total PKR *X*, or
- provided a counter-offer of total PKR *Y*

Either way: **proceed with this passenger** or **reject this passenger**
- Reject → *"We will keep looking for a passenger matching your
  requirements"*; inform the passenger of the decision; **both orders stay in
  the match query**
- Accept → **both orders are removed from the match query**

---

## Payment — SEQUENTIAL, and this is the key divergence

The client's order is explicit and one-directional:

**Step 1 — the sender pays first.**
> "Kindly proceed with payment of PKR *X* via bank transfer to *account*
> (account number to be **copiable** for pasting in a bank app). After payment
> is done, please save the transfer screenshot and upload here."

- 15-minute timer shown. On expiry → back to the offer screen
- Back → also returns to the offer screen
- Payment done → screenshot **optional**, transaction reference **required**,
  proceed → notify admin
- **Admin manually confirms whether the payment was received**
  - Cancel order → delete the sender's order; inform the passenger; refund
  - Received → go to step 2

**Step 2 — only once the admin has confirmed the sender's payment, the
passenger is asked to pay.**
> "Congratulations. Sender has chosen you to collect & deliver their package.
> Kindly proceed with payment via bank transfer to *account* of PKR *Z*."

Where **Z = 10% of the total to receive + value of goods**. Show the two parts
separately: commission PKR *X*, and PKR *Y* the value of goods, with
*"PKR Y will be returned to you upon completion of delivery."*

- 15-minute timer. On expiry → notify admin → wait for payment, or cancel the
  order (inform the sender, refund)
- Cancel → the same "do you still want new Sender offers?" branch as above
- Back → returns to the start of step 2
- Payment done → screenshot optional, reference required → notify admin
- Admin manually confirms
  - Cancel order → delete the passenger's order; inform the sender; refund
  - **Received → auto-assign the tracking ID**

---

## After both payments

Notify both sides. Each gets the tracking ID, the other party's **name,
overseas mobile and Pakistan mobile**, and *"Please contact the … to arrange
collection"*. Both see **Package Collected** and **Package Delivered**.

The passenger's Delivered step: *"Ensure you take a picture of the recipient's
CNIC on the package"* → upload.

*Revised 26 Sep:* the passenger's Collected step also uploads a *"pic of
collected package with sender CNIC"*, and the tracking page displays it.
**Built.** The passenger takes it; it is required before the parcel can be
marked delivered. The sender still marks collection. See divergence 9.

### Tracking status page

- Waiting for collection
- Package collected from sender — confirmed by Sender / Passenger / Admin, with
  date and time
- Package delivered by passenger — confirmed by Sender / Passenger / Admin,
  with date and time

When the **passenger** marks it delivered, notify the sender:
> "Your package has been marked as delivered. Kindly confirm delivery. If no
> response is received from you within 24 hours then the package will be auto
> confirmed as delivered and this order will be marked as completed."

- Delivery confirmed, **or** the wait expires → notify admin → return the
  package-value deposit to the passenger **plus the amount to pay** → rating by
  sender on passenger, and by passenger on sender → mark the order completed
- Dispute delivery → notify admin

### Admin alerts

- If the package is not marked Collected by the end of the flight date
- If the package is not marked Delivered by the end of the expected delivery
  date range

---

## Where our build differs — open, not decided

**1. Payment sequencing — FIXED, 13 September 2026.** Now matches the client.
Only the sender's 15-minute hold starts at acceptance. `confirmPayment` writes
`travellerPaymentDueAt` when an admin confirms the sender's transfer, and that
is what starts the traveller's clock. `submitPayment` refuses a traveller whose
clock has not started, and a new `TravellerAcceptedScreen` holds them in a
waiting state that promotes itself to the payment screen when their turn comes.

**2. The six gates are one screen of checkboxes, not six yes/no questions.**
Same gate, same refusal to proceed, fewer taps — and a "Save and come back
later" route to a blocked-exit screen instead of a per-question cancel.
Needs confirming with the client. The server now checks the exact set of six;
it used to accept whichever gates happened to be present.

**3. Declared value — DECIDED 26 Sep.** A number field capped at PKR 25,000,
enforced on the server too, since the traveller's deposit is this number. Not
a dropdown: fixed steps would force rounding and make the deposit wrong.

**4. Weight — DECIDED 26 Sep.** Asked straight after the gates, as the revised
flow orders it, and shown again pre-filled on the package screen. One value,
so the two appearances can never disagree.

**5. Notifications — BUILT, by email.** Gmail via Nodemailer. Every "notify"
and "inform" in this document sends, to the user or to the admin address set
in Settings. Not sent: anything on collection (the flow names none), and a
sender's own payment window lapsing (the flow sends them back to the offers
screen, no message).

**6. WhatsApp confirmation codes are not built**, by decision — `KOtpInput`
exists and is unused. Sign-in is CNIC-only.

**7. The training video is a checkbox** with a placeholder, and nothing is
logged against the account.

**8. The whole Website section** — training video, support, analytics — does
not exist.

**9. Collection — photo BUILT, confirmation unchanged, 26 Sep.** The passenger
photographs the parcel with the sender's CNIC (`submitCollectionPhoto`,
write-once), and `markDelivered` refuses until it exists. The sender, the
passenger and the admin panel all show it beside the delivery photo.
Confirmation stays as it was, by decision: the sender marks collection — the
revised flow's "confirmed by Sender, Passenger or Admin" is not built. The
tracking page says truthfully who confirmed; it used to print "confirmed by
both of you".

**10. Email confirmation — BUILT 26 Sep.** The account is created, unconfirmed,
when the email step is submitted; it reaches a reviewer only once the code is
verified. Codes are server-generated, hashed, 10 minutes, 5 tries, 60-second
resend, 5 sends an hour. Accounts registered before this are left as they are.

**11. Payment clocks — FIXED 26 Sep.** The sweep treated any payment not yet
*confirmed* as unpaid, so an admin taking longer than 15 minutes to check the
bank had the order returned to the pool and the sender's payment wiped off it.
Now the clock stops once a reference is submitted; a sender who never paid
goes back to the pool; and a **traveller** who misses their window no longer
does — the sender has paid by then — so the admin is alerted to extend the
window or refund and cancel, exactly as step 2 above describes.
