# 🎨 Surmolkoltypo — PWA App

> आपका Digital संसार — Articles, Wishes & Files  
> A Progressive Web App built for permanent data storage

---

## 🚀 GitHub Pages पर Deploy कैसे करें?

### Step 1 — GitHub Account बनाएं
👉 [github.com](https://github.com) पर जाएं और Sign Up करें (अगर account नहीं है)

### Step 2 — New Repository बनाएं
1. GitHub Dashboard पर **"New"** या **"+"** बटन दबाएं
2. Repository name: **`surmolkoltypo`**
3. **Public** चुनें (GitHub Pages के लिए जरूरी)
4. **"Create repository"** दबाएं

### Step 3 — Files Upload करें
इस ZIP के सभी files upload करें:
```
surmolkoltypo/
├── index.html       ← Main App
├── manifest.json    ← PWA Manifest
├── sw.js            ← Service Worker
└── icons/
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-192.png  ← Home Screen Icon
    ├── icon-512.png  ← Splash Screen Icon
    └── screenshot.png
```

GitHub पर: **"uploading an existing file"** link दबाएं → सभी files drag करें → **Commit**

### Step 4 — GitHub Pages Enable करें
1. Repository page पर **Settings** tab खोलें
2. Left menu में **Pages** पर click करें
3. **Source** में: **"Deploy from a branch"** चुनें
4. **Branch** में: **"main"** और **"/ (root)"** चुनें
5. **Save** दबाएं

### Step 5 — App Live! 🎉
कुछ seconds में आपकी App यहाँ live होगी:
```
https://[आपका-username].github.io/surmolkoltypo/
```

---

## 📱 Phone पर Install कैसे करें?

### Android (Chrome):
1. App open करें
2. Browser menu (⋮) → **"Add to Home screen"**
3. या App के अंदर **"📲 Install"** button दबाएं

### iPhone (Safari):
1. Safari में App open करें
2. नीचे Share button (□↑) दबाएं
3. **"Add to Home Screen"** चुनें

---

## 💾 Data Permanently Save कैसे रहेगा?

App **localStorage** use करती है जो:
- ✅ Browser Restart के बाद भी safe रहता है
- ✅ Phone/PC Switch off करने के बाद भी
- ✅ App Update के बाद भी

⚠️ **Browser "Clear All Data" से Data Delete हो सकता है।**  
इसलिए:
1. **Files Tab → "📤 Data Export"** button से Backup लें
2. अगर Data Delete हो तो **"📥 Data Import"** से वापस लाएं

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📰 Articles | Date-wise articles publish करें |
| 🎉 Wishes | Birthday, Anniversary wishes save करें |
| 📁 Files | Images, PDFs, Docs upload करें (4MB max) |
| 📲 PWA | Phone पर App की तरह Install होती है |
| 🌐 Offline | Internet बंद होने पर भी काम करती है |
| 💾 Backup | Data Export/Import की सुविधा |
| 🎨 Colorful | Beautiful colorful UI |

---

## 🛠️ Tech Stack

- Pure HTML, CSS, JavaScript (No framework)
- Service Worker (Offline support)
- localStorage (Data persistence)
- Web App Manifest (PWA)
- Google Fonts (Noto Sans Devanagari)

---

Made with ❤️ — Surmolkoltypo
