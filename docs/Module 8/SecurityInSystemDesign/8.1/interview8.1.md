---
title: Network Security – Interview Questions
sidebar_label: Interview Questions
---

# Network Security – Interview Questions

---

## 1. What is the difference between HTTP and HTTPS?

### Expected Answer
- HTTP sends data in plain text.
- HTTPS encrypts data using TLS.

### Interview One-Liner ⭐
> HTTPS is HTTP over TLS encryption.

---

## 2. Why is HTTPS mandatory for production systems?

### Expected Points
- Prevents data interception
- Protects user credentials
- Ensures secure API communication
- Prevents session hijacking

---

## 3. What is TLS?

### Expected Answer
TLS (Transport Layer Security) is a cryptographic protocol that encrypts communication between client and server.

---

## 4. What guarantees does TLS provide?

### Expected Answer
- Confidentiality (encryption)
- Integrity (tamper detection)
- Authentication (identity verification)

---

## 5. What happens during a TLS handshake?

### Expected Answer (High-Level)
1. ClientHello
2. Server sends certificate
3. Client verifies certificate
4. Session key established
5. Encrypted communication begins

---

## 6. What is a digital certificate?

### Expected Answer
A certificate is issued by a Certificate Authority (CA) and verifies the server’s identity using a public key.

---

## 7. What is a Man-in-the-Middle (MITM) attack?

### Expected Answer
An attack where an attacker intercepts communication between client and server to read or modify data.

---

## 8. How does TLS prevent MITM attacks?

### Expected Answer
By encrypting data and validating the server’s certificate to ensure authenticity.

---

## 9. What is encryption in transit?

### Expected Answer
Encryption of data while it is being transmitted across networks.

---

## 10. What is mTLS (Mutual TLS)?

### Expected Answer
In mTLS, both client and server authenticate each other using certificates.

---

## 11. Why is mTLS used in microservices architecture?

### Expected Answer
To ensure secure service-to-service communication in zero-trust environments.

---

## 12. What is the difference between encryption in transit and encryption at rest?

### Expected Answer
- In transit → Data encrypted while traveling over network.
- At rest → Data encrypted while stored on disk.

---

## 13. What happens if certificate validation is skipped?

### Expected Answer
System becomes vulnerable to MITM attacks.

---

## 14. Why should internal services also use HTTPS?

### Expected Answer
Because internal networks are not inherently secure and may be vulnerable to lateral movement attacks.

---

## 15. What TLS version should modern systems use?

### Expected Answer
TLS 1.2 or TLS 1.3.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. What does HTTPS stand for?
2. What does TLS provide?
3. What prevents MITM attacks?
4. What is mTLS used for?
5. Why encrypt internal traffic?

---

## ⭐ Keywords Interviewers Like to Hear

- HTTPS
- TLS
- Encryption in transit
- Certificate Authority
- MITM attack
- mTLS
- TLS handshake
- Zero-trust

---

## ✅ You’re Strong in 8.1 If You Can:
- Clearly explain HTTP vs HTTPS
- Describe TLS handshake at high level
- Explain MITM prevention
- Discuss mTLS in microservices

---
