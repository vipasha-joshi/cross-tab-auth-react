# 🔐 Cross-Tab Login/Logout Sync using BroadcastChannel API

This React project demonstrates how to synchronize **authentication state (login/logout)** across multiple **browser tabs** using the **BroadcastChannel API**. When a user logs in or logs out in one tab, all other open tabs reflect the change instantly.

---

## 🚀 Features

- ✅ Cross-tab **login** sync
- ✅ Cross-tab **logout** sync
- ✅ Auto redirect to dashboard or login based on auth state
- ✅ No backend — purely front-end based
- ✅ Session persists using `localStorage`

---

## 🛠️ Tech Stack

- **React**
- **React Router v6**
- **Bootstrap 5**
- **BroadcastChannel API**

---

## 📡 What is BroadcastChannel?

The [BroadcastChannel API](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel) allows simple communication between browsing contexts (tabs, windows, iframes) on the **same origin**.

We use it to **broadcast login/logout events** across tabs so that all open tabs update their state accordingly.

📌 Basic Example:

    // Create or join a channel
    const channel = new BroadcastChannel('my-channel');

    // Listen for messages
    channel.onmessage = (event) => {
    console.log('Received message:', event.data);
    };

    // Send a message
    channel.postMessage('Hello from this tab!');

    // Close the channel when you're done
    channel.close();

---

## 💻 How It Works

### 1. On Login:

- `isAuthenticated` is set to `true` in localStorage
- A `LOGIN` message is sent via `BroadcastChannel`
- Other tabs receive the message, update their state, and redirect to dashboard

### 2. On Logout:

- `isAuthenticated` is set to `false`
- A `LOGOUT` message is sent via `BroadcastChannel`
- Other tabs receive the message, update their state, and redirect to login

### 3. On App Load:

- Checks `localStorage` to determine initial auth state

---

## 📂 Project Structure

    src/
    ├── Components/
    │ ├── LoginPage.jsx
    │ ├── Dashboard.jsx
    │ ├── About.jsx
    │ └── Navbar.jsx
    ├── hooks/
    │ └── useBroadcastAuth.js
    ├── App.js
    └── index.js

---

## 🧪 Try It Yourself

1. Clone the repo
2. Run `npm install`
3. Run `npm start`
4. Open the app in **two different tabs**
5. Log in from one tab — watch the second tab automatically navigate to the dashboard!
6. Log out — all tabs are instantly logged out

---

## 🔐 Protected Routing

We use a simple `ProtectedRoute` component to ensure only authenticated users can access `/dashboard`.

---

## 🧠 Learning Outcomes

- Understand the **BroadcastChannel API**
- Learn how to **synchronize app state** across tabs
- Use `localStorage` effectively for simple persistence
- Handle **authentication logic** with React Context and Router

---
