---
title: Transactions & ACID – Interview Questions
sidebar_label: Interview Questions
---

# Transactions & ACID – Interview Questions

---

## 1️⃣ What is a database transaction?

### Expected Answer
A transaction is a sequence of database operations that are executed as a single logical unit of work and must either fully succeed (commit) or fully fail (rollback).

### Interview One-Liner ⭐
> A transaction guarantees all-or-nothing execution.

---

## 2️⃣ What does ACID stand for?

### Expected Answer
- **Atomicity**
- **Consistency**
- **Isolation**
- **Durability**

---

## 3️⃣ Explain Atomicity.

### Expected Answer
Atomicity ensures that either all operations in a transaction succeed or none do. If any operation fails, the entire transaction is rolled back.

---

## 4️⃣ Explain Consistency.

### Expected Answer
Consistency ensures that a transaction brings the database from one valid state to another, preserving constraints such as foreign keys, uniqueness, and checks.

---

## 5️⃣ Explain Isolation.

### Expected Answer
Isolation ensures that concurrent transactions do not interfere with each other in a way that violates correctness.

---

## 6️⃣ Explain Durability.

### Expected Answer
Durability ensures that once a transaction is committed, its changes will survive crashes or power failures.

---

## 7️⃣ What are isolation levels?

### Expected Answer
Isolation levels define how transactions interact with each other and what kinds of inconsistencies are allowed.

Common levels:
- Read Uncommitted
- Read Committed
- Repeatable Read
- Serializable

---

## 8️⃣ What is a dirty read?

### Expected Answer
A dirty read occurs when a transaction reads data that has been modified but not yet committed by another transaction.

---

## 9️⃣ What is a non-repeatable read?

### Expected Answer
A non-repeatable read occurs when a transaction reads the same row twice and gets different values because another transaction modified it.

---

## 🔟 What is a phantom read?

### Expected Answer
A phantom read occurs when new rows appear in a result set due to another committed transaction.

---

## 1️⃣1️⃣ Which isolation level is safest?

### Expected Answer
Serializable.

### Trade-Off
Highest consistency but lowest performance.

---

## 1️⃣2️⃣ Why do higher isolation levels reduce performance?

### Expected Answer
Because they require more locking or coordination, which reduces concurrency.

---

## 1️⃣3️⃣ What is a distributed transaction?

### Expected Answer
A transaction that spans multiple services or databases and must maintain atomicity across them.

---

## 1️⃣4️⃣ What is Two-Phase Commit (2PC)?

### Expected Answer
A distributed transaction protocol with two phases:
1. Prepare phase
2. Commit/Rollback phase

It ensures all participants agree before committing.

---

## 1️⃣5️⃣ What are the problems with Two-Phase Commit?

### Expected Points
- Blocking protocol
- Slow performance
- Coordinator as Single Point of Failure
- Not scalable

### Interview Gold Line ⭐
> 2PC guarantees atomicity but hurts scalability.

---

## 1️⃣6️⃣ Why do microservices avoid distributed transactions?

### Expected Answer
Because they reduce scalability and increase system complexity. Instead, systems prefer eventual consistency and Saga patterns.

---

## 1️⃣7️⃣ ACID vs BASE?

### Expected Answer
- ACID → Strong consistency
- BASE → Eventual consistency

Large distributed systems often relax ACID for availability.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Why is atomicity critical in payments?
2. Why is Serializable isolation expensive?
3. What happens if the coordinator fails in 2PC?
4. Why are distributed transactions hard to scale?
5. Why is idempotency important in distributed transactions?

---

## ⭐ Keywords Interviewers Like to Hear

- Atomicity
- Isolation levels
- Dirty read
- Serializable
- Distributed transactions
- Two-Phase Commit
- Eventual consistency

---

## ✅ You’re Strong in 3.6 If You Can:
- Clearly explain all ACID properties
- Compare isolation levels confidently
- Discuss distributed transaction challenges
- Explain why 2PC is problematic at scale

---
