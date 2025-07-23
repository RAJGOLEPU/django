# 🌐 Django Web App (Docker + Render)

A beginner-friendly **Django** application featuring a responsive landing page, deployed using **Docker**, **GitHub**, and **Render**.

---

## ✨ Features

- Responsive homepage (desktop & mobile)
- Clean and simple HTML/CSS/JS
- Dockerized setup for easy deployment
- Ready for Render deployment
- GitHub Codespaces compatible

---

## 📁 Project Structure

```
.
├── core/
│   └── settings.py
├── homepage/
│   ├── templates/
│   │   └── homepage/index.html
│   └── static/
│       ├── css/style.css
│       └── js/script.js
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
└── README.md
```

---

## 🚀 Run Locally

### 🔧 Prerequisites

- Python 3.11+
- Docker & Docker Compose
- Git

### 🛠️ Steps

1. **Clone the Repository**
```bash
git clone https://github.com/RAJGOLEPU/django
cd django
```

2. **Build and Start the Project**
```bash
docker-compose up --build
```

3. **Visit in Your Browser**
```
http://localhost:8000
```

---

## 🌍 Deploy to Render

1. Push your code to GitHub.

2. Go to [https://render.com](https://render.com) and create a new **Web Service**.

3. Connect your GitHub repo and set the following:

| Setting         | Value                                |
|-----------------|--------------------------------------|
| Build Command   | docker build . -t myapp              |
| Start Command   | gunicorn core.wsgi:application       |
| Environment     | Docker                               |

4. Add this to your `settings.py`:
```python
ALLOWED_HOSTS = ['your-site.onrender.com']
```

5. (Optional) Collect static files before pushing:
```bash
python manage.py collectstatic
```

6. Commit & Push:
```bash
git add .
git commit -m "Deploy ready"
git push origin main
```

---

## 🛠 Tech Stack

- Django 5.2
- HTML5 / CSS3 / JS
- Docker
- Render.com
- Git & GitHub

---

## 🧠 Author

Made by **Golepu Raj Kumar** — feel free to fork, modify & share!

🔗 GitHub: [https://github.com/RAJGOLEPU/django](https://github.com/RAJGOLEPU/django)

