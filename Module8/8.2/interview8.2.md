---
title: Data Security – Interview Questions
sidebar_label: Interview Questions
---

# Data Security – Interview Questions

---

## 1. What is encryption at rest?

### Expected Answer
Encryption at rest protects data while it is stored on disk, database, or backup systems so that it remains unreadable if storage is compromised.

---

## 2. What is encryption in transit?

### Expected Answer
Encryption in transit protects data while it is being transmitted across networks using protocols like TLS.

---

## 3. Why do we need both encryption at rest and in transit?

### Expected Answer
Because data can be compromised either during transmission or while stored. Both layers protect against different threat vectors.

---

## 4. What is the difference between hashing and encryption?

### Expected Answer

- **Encryption** is reversible and requires a key.
- **Hashing** is one-way and cannot be reversed.

### Interview One-Liner ⭐
> Passwords should be hashed, not encrypted.

---

## 5. Why should passwords be hashed instead of encrypted?

### Expected Answer
Because encryption can be reversed if the key is compromised, whereas hashing is one-way and safer for storing passwords.

---

## 6. What is salting in password security?

### Expected Answer
Salting adds a random value to a password before hashing to prevent rainbow table attacks and ensure identical passwords produce different hashes.

---

## 7. What is secrets management?

### Expected Answer
Secrets management is the secure storage and access control of sensitive information such as API keys, database credentials, and encryption keys.

---

## 8. Why should secrets never be hardcoded?

### Expected Answer
Hardcoded secrets can be exposed in version control systems, logs, or deployments, leading to security breaches.

---

## 9. What is key management?

### Expected Answer
Key management involves securely storing, rotating, and controlling access to encryption keys.

---

## 10. Why is encryption useless without proper key management?

### Expected Answer
Because if encryption keys are exposed, attackers can decrypt the protected data.

---

## 11. What is the principle of least privilege?

### Expected Answer
Each service or user should have only the minimum permissions required to perform its tasks.

---

## 12. What are common mistakes in data security?

### Expected Points
- Storing passwords in plain text
- Logging sensitive data
- Hardcoding secrets
- Not rotating keys
- Granting excessive permissions

---

## 13. How do you protect sensitive payment data?

### Expected Answer
- Encrypt at rest
- Encrypt in transit
- Use strong key management
- Restrict access
- Audit access logs

---

## 14. What is a rainbow table attack?

### Expected Answer
A precomputed table used to reverse cryptographic hash functions to crack passwords without salting.

---

## 15. Why should API keys be rotated periodically?

### Expected Answer
To reduce the impact of key compromise and limit long-term exposure.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Should passwords be encrypted or hashed?
2. What prevents rainbow table attacks?
3. Why is key rotation important?
4. What protects data if disk is stolen?
5. What does least privilege mean?

---

## ⭐ Keywords Interviewers Like to Hear

- Encryption at rest
- Encryption in transit
- Hashing
- Salting
- Secrets management
- Key rotation
- Least privilege
- KMS

---

## ✅ You’re Strong in 8.2 If You Can:
- Differentiate hashing vs encryption
- Explain why salting is important
- Discuss key management practices
- Apply security principles to real systems

---
