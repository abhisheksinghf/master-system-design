---
title: Payment Gateway – Interview Questions
sidebar_label: Interview Questions
---

# Payment Gateway – Interview Questions

---

## 1. Why are idempotency keys required in payments?

### Expected Answer
To ensure retries do not create duplicate charges.

---

## 2. What is the difference between authorization and capture?

### Expected Answer
Authorization reserves funds; capture transfers funds.

---

## 3. Why are webhooks used?

### Expected Answer
External PSP processing is asynchronous; webhooks provide final status updates.

---

## 4. How do you verify webhook authenticity?

### Expected Answer
Validate provider signature and timestamp.

---

## 5. What if API call times out after sending to PSP?

### Expected Answer
Mark as pending and retry/check status idempotently.

---

## 6. Why reconciliation is mandatory?

### Expected Answer
To detect and resolve mismatch between internal records and PSP settlements.

---

## 7. What should be unique: orderId or paymentId?

### Expected Answer
Both can be unique by context; typically one successful payment per order via unique `order_id`.

---

## 8. How do you avoid processing duplicate webhooks?

### Expected Answer
Store webhook/event ID and process once.

---

## 9. What statuses are typical in payment lifecycle?

### Expected Answer
Pending, authorized, captured, failed, refunded.

---

## 10. Why avoid storing raw card data?

### Expected Answer
Security/compliance risk; use tokenization.

---

## 11. What is an outbox pattern here?

### Expected Answer
Persist business state + event record in one transaction, publish asynchronously.

---

## 12. What are key SLIs?

### Expected Answer
Payment success rate, authorization latency, duplicate charge rate, webhook lag.

---

## 13. How would you design refunds?

### Expected Answer
Separate refund entity, idempotent API, async status tracking.

---

## 14. CP or AP preference for core payment writes?

### Expected Answer
Prefer consistency/correctness over availability for money movement.

---

## 15. Biggest interview red flag in payment design?

### Expected Answer
Missing idempotency and reconciliation strategy.
