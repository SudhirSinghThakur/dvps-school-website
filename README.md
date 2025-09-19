# 🎓 Dada Vikram Public School Website (DVPS)

A modern, responsive **school website** built with **React + Tailwind CSS**.  
The site is designed to showcase school information, academics, contact details, and achievements in a clean, professional layout.

---

## 🚀 Tech Stack
- **Frontend:** React (Vite), React Router, Tailwind CSS, React Icons
- **Design System:** Tile-based responsive layout
- **Hosting Ready:** AWS Amplify, AWS S3/CloudFront, Netlify, Vercel
- **Deployment:** Production build via `npm run build`

---

## 📌 Features
- 📖 **Home Page:** Hero section with school name & admissions highlight  
- 🏫 **About Us:** Vision, Mission, Core Values in tile-based layout  
- 📘 **Academics:** Structured learning journey (Nursery–Class 8)  
- 🌱 **Why Choose DVPS:** Achievements, Facilities, Holistic Development, Faculty  
- 📸 **Gallery (optional):** Can add photos & videos of events  
- 📍 **Contact Us:** Address, phone, email, social links, Google Maps embed  
- 📱 **Responsive Navbar:** Desktop + Mobile (hamburger menu)  
- 🎨 **Consistent Design:** Gradient backgrounds, hover animations, shadows  

---

## 📐 System Design & Flow

### UI/UX Flow
- **Navbar (sticky)** → Home, About, Academics, Contact  
- **Home Page** → Hero (logo + school name + admissions badge) → Why Choose DVPS → Director’s Message → Achievements  
- **About Us** → Intro + Vision + Mission + Core Values  
- **Academics** → Nursery–KG | Primary (1–5) | Middle (6–8) + Teaching Approach  
- **Contact Us** → Address | Phone | Email | Social Links | Map  

### Component Hierarchy
```
App.jsx
 ├── Navbar.jsx
 ├── Footer.jsx
 ├── Routes
 │    ├── Home.jsx
 │    │    ├── HeroSection.jsx
 │    │    ├── InfoTiles.jsx (Why Choose DVPS)
 │    │    ├── DirectorMessage.jsx
 │    │    └── Achievements.jsx
 │    ├── About.jsx (Vision, Mission, Core Values)
 │    ├── Academics.jsx (Class tiles + Teaching Approach)
 │    └── Contact.jsx (Tiles + Map)
```

---

## 🛠️ Setup & Run

### Clone repo & install
```bash
git clone https://github.com/YOUR-USERNAME/dvps-website.git
cd dvps-website
npm install
```

### Run locally
```bash
npm run dev
```
Visit 👉 [http://localhost:5173](http://localhost:5173)

### Build for Production
```bash
npm run build
```
The `dist/` folder will contain the production-ready files.

---

## 🌍 Deployment Options

### 🔹 AWS Amplify (Recommended for School)
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/).  
2. Click **New App → Host web app**.  
3. Select **GitHub** as the source → Connect your repo.  
4. Pick the **main branch**.  
5. Amplify will auto-detect React + Vite → sets **Build Command:** `npm run build` and **Publish Directory:** `dist`.  
6. Click **Save and Deploy**.  
7. Amplify will give you a live domain like:  
   ```
   https://dvpsschool.amplifyapp.com
   ```
8. (Optional) Connect your custom domain: `dvps.com` or `dadavikrampublicschool.com`.  
   - In Amplify → **Domain Management → Add domain**  
   - Update domain DNS in your registrar (e.g., GoDaddy, Wix) to point to Amplify.  
   - Amplify provides **free SSL certificate (HTTPS)** automatically.

---

### 🔹 AWS S3 + CloudFront
- Upload `/dist` folder to **S3 bucket**.  
- Enable **Static Website Hosting**.  
- Use **CloudFront** for CDN + HTTPS.  

---

### 🔹 Netlify (Simple Free Hosting)
1. Login at [Netlify](https://app.netlify.com/).  
2. Connect GitHub repo.  
3. Build command: `npm run build`  
4. Publish directory: `dist`  
5. Click **Deploy** → live in seconds.  

---

## 👨‍💻 Contributors
- **Sudhir Singh Thakur** – Developer & Maintainer  

---

## 📜 License
MIT License – free to use, modify, and distribute.
