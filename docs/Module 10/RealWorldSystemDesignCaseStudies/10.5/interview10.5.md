---
title: Chat / Messaging System – Interview Questions
sidebar_label: Interview Questions
---

# Chat / Messaging System – Interview Questions

---

## 1. Why is WebSocket preferred for chat?

### Expected Answer
It provides persistent bidirectional low-latency communication.

---

## 2. Why persist message before sender ACK?

### Expected Answer
To avoid message loss if server crashes after ACK.

---

## 3. How do offline users receive messages?

### Expected Answer
Messages are stored durably and synced on reconnect.

---

## 4. How do you maintain order in a conversation?

### Expected Answer
Use per-conversation sequence numbers.

---

## 5. Exactly-once possible in chat?

### Expected Answer
Usually no; use at-least-once plus deduplication.

---

## 6. How are read receipts modeled?

### Expected Answer
As events mapping user to last read message/sequence.

---

## 7. What is presence service?

### Expected Answer
Tracks online/offline status, often via heartbeat TTL.

---

## 8. Why partition by conversation ID?

### Expected Answer
Keeps related messages together and scales horizontally.

---

## 9. How to handle large group fanout?

### Expected Answer
Asynchronous fanout workers and batched delivery.

---

## 10. What if gateway crashes?

### Expected Answer
Client reconnects and requests missed messages from last offset.

---

## 11. What storage fits message history?

### Expected Answer
Write-optimized store with partitioning by conversation and time.

---

## 12. Why separate typing indicators from persisted messages?

### Expected Answer
Typing is ephemeral and high-frequency; persistence is unnecessary.

---

## 13. Key metrics to monitor?

### Expected Answer
Message latency, delivery success, reconnect rate, queue lag.

---

## 14. How to secure chat transport?

### Expected Answer
TLS, authenticated sockets, authorization per conversation.

---

## 15. Common interview trap?

### Expected Answer
Designing only transport, not storage, ordering, and offline sync.
