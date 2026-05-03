# 🎯 StudyBea - Aesthetic Time Tracker

An elegant and minimal **time tracking web application** with a modern UI, customizable themes, and backend-powered data storage.
Track your daily study/work time and visualize it using interactive charts.

---

## ✨ Features

### ⏱️ Time Tracker

* Start, pause, and reset timer
* Accurate time tracking in hours, minutes, and seconds
* Automatically stores daily study time

### 📊 Data Visualization

* Interactive **bar chart (Chart.js)**
* Displays **minutes studied per day**
* Toggle chart visibility anytime

### 🎨 Theme Customization

* Predefined themes (Default, Nature, Dark)
* Upload your own background image
* Persistent theme (saved across sessions)

### 💾 Backend Storage

* Node.js + Express backend
* Study time stored in a `.txt` file
* Image uploads saved in server directory

---

## 🛠️ Tech Stack

**Frontend**

* HTML5
* CSS3 (Glassmorphism UI)
* JavaScript
* Chart.js

**Backend**

* Node.js
* Express.js
* Multer (file uploads)
* CORS

---

## 📁 Project Structure

```
StudyBea/
│
├── index.html        # Frontend UI
├── server.js         # Backend server
├── study_log.txt     # Stores daily study data
├── uploads/          # Uploaded images
├── package.json
```

---

## 🚀 How to Run

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Install dependencies

```
npm install express multer cors
```

---

### 3️⃣ Start backend server

```
node server.js
```

You should see:

```
Server running on port 3000
```

---

### 4️⃣ Run frontend

* Open `index.html` in your browser

---

## 📊 How Data Works

* Each time you click **Pause**, time is saved as:

```
YYYY-MM-DD,time_in_milliseconds
```

Example:

```
2026-05-03,7264000
```

* Backend aggregates data for chart display

---

## 🧪 Testing the Chart

To manually test:

1. Open `study_log.txt`
2. Add:

```
2026-05-03,7264000
2026-05-02,3600000
```

3. Refresh → Click **Bar Chart**

---

## 🎯 Future Improvements

* User authentication (login/signup)
* Weekly & monthly analytics
* Export data as PDF
* Dark/light mode toggle
* Mobile responsiveness improvements

---

## 📸 Preview

> Add screenshots here (UI, chart, themes)

---
## 🎥 Demo Video

[Watch Demo](./Demo.mp4)


## 🤝 Contribution

Feel free to fork and improve this project. Pull requests are welcome!

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 💡 Author

Developed with ❤️ by Safeena

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share it!

---
