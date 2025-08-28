# 🚨 Assignment-005: Emergency Hotline Website

এটা আমার Emergency Hotline প্রজেক্ট। এখানে জরুরি সার্ভিসের নম্বর, কপি সিস্টেম, কল হিস্ট্রি, কয়েন কমা—সবগুলো বেসিক ফিচার আছে।

---

## Main Features

- **Navbar:** Logo + Heart Count + Coin Count (ডিফল্ট 100) + Copy Count
- **Hero Section:** Gradient background, title, small slogan
- **Cards (কমপক্ষে 6টা):**
  - আইকন/ইমেজ, সার্ভিস নাম (BN/EN), নম্বর, ক্যাটাগরি badge
  - **Heart**, **Copy** ও **Call** বাটন
- **History Section:** কলের তালিকা + **Clear History** বাটন

---

## Functionality (সিম্পল ভাষায়)

- **Heart:** কার্ডের হার্টে ক্লিক করলে navbar-এর heart সংখ্যা বাড়ে।
- **Call:**
  - ক্লিক করলে alert দেখায় (নাম + নম্বর)
  - প্রতিটি কলে **20 coin** কমে। 20-এর কম হলে কল হবে না, alert আসবে।
  - কল হলে **History** সেকশনে নাম, নম্বর, **সময়** যুক্ত হবে।
- **Copy:** Copy বাটনে ক্লিক করলে নম্বর **clipboard**-এ কপি হয় এবং **Copy Count** বাড়ে।
- **Clear History:** সব history মুছে দেয়।

---

## Challenges (Done)

- Copy করলে সত্যিই নম্বর কপি হয়।
- Call করলে সঠিক **local time** history তে দেখায়।

---

## Tech Stack

- **HTML**
- **CSS** (Tailwind)
- **JavaScript** (Vanilla)

---

## Questtons

**1) `getElementById` vs `getElementsByClassName` vs `querySelector(All)`**

- **getElementById("id")**: একটাই element দেয়।
- **getElementsByClassName("cls")**: একাধিক element (HTMLCollection) দেয়।
- **querySelector("css-selector")**: প্রথম ম্যাচ করা element দেয়।
- **querySelectorAll("css-selector")**: সব ম্যাচ করা element (NodeList) দেয়।

**2) নতুন element DOM এ কিভাবে যোগ করব?**

```js
const div = document.createElement("div");
div.innerText = "Hello";
document.body.appendChild(div);
```

**3) Event Bubbling কীভাবে কাজ করে?**  
যখন কোনো ছোট element-এ event ঘটে (যেমন button ক্লিক), সেই event প্রথমে ঐ element-এ কাজ করে, তারপর ধাপে ধাপে তার parent → grandparent পর্যন্ত উপরে যেতে থাকে। এটাকেই Event Bubbling বলে।

**4) Event Delegation কী এবং কেন দরকার?**  
অনেক child element-এ আলাদা listener না দিয়ে তাদের common parent-এ একটাই listener লাগানো হয়। parent listener **event.target** দেখে বুঝে নেয় কোন child-এ event ঘটেছে। এতে কোড কম হয় এবং future-এ নতুন child যোগ হলেও কাজ করে।

**5) preventDefault() আর stopPropagation() এর মধ্যে পার্থক্য কী?**

- **preventDefault()**: element-এর default কাজ বন্ধ করে (যেমন form submit বা link নেভিগেট করা বন্ধ করা)।
- **stopPropagation()**: event-কে parent element-এ যেতে দেয় না, অর্থাৎ bubbling বন্ধ করে।
