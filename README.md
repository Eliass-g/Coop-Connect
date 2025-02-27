<div align="center">

<img src="https://github.com/Eliass-g/CoOpConnect/blob/database-readme-tweaks/storage/COOPCONNECTLOGO.png" alt="Co-op Connect Logo" width="400">

#

Co-op Connect is a web application that connects students with employers for co-op job opportunities. Students can apply for jobs, while employers can manage job postings and student applications.

![App Demo](https://github.com/Eliass-g/CoOpConnect/blob/database-readme-tweaks/storage/Coop%20Connect%20Runthrough.gif)

## 📽️ Video Walkthrough

[![Co-op Connect Demo](https://img.youtube.com/vi/IKI8_Rs_hNQ/0.jpg)](https://youtu.be/IKI8_Rs_hNQ?si=mqY5XBwORA6ubxnO)

---

</div>

## 🚀 Features

-   🏢 **Employer Management** - Employers can create and manage job postings.
-   🎓 **Student Applications** - Students can apply for co-op jobs and track application status.
-   🔔 **Real-time Notifications** - Employers and students receive updates on applications.
-   💬 **Real-time Chat** - Messaging system with unread message count.
-   📅 **Interview Scheduling** - Employers can schedule interviews, and both students and employers have a **calendar** to track scheduled interviews.
-   👤 **User Profile & Settings** - Users can manage their profiles and customize settings.

---

## 🛠️ Tech Stack

-   **Frontend:** React + Tailwind CSS + Styled Components
-   **Backend:** Laravel
-   **Database:** MySQL
-   **Real-time Features:** Laravel Echo & Pusher

---

## 🔧 Installation & Setup

To run the project locally, follow these steps:

### Clone the Repository:

```bash
git clone git@github.com:CoOpConnect2023/CoOpConnect.git
cd CoOpConnect
```

### Install Dependencies:

```bash
npm install
composer install
```

### Generate the application key:

After copying the .env file, run:

```bash
cp .env.example .env
```

### Install Dependencies:

```bash
php artisan key:generate
```

Update `.env` with your database and Pusher credentials.

### Run Database Migrations & Seed Data:

```bash
php artisan migrate:fresh --seed
```

### Start the Development Servers:

```bash
npm run dev
php artisan serve
```

---

## 📄 Environment Variables

Ensure the following environment variables are set up in your `.env` file:

```env
APP_KEY=your_app_key
DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password
MAIL_USERNAME=your_email@example.com
MAIL_PASSWORD=your_email_password
PUSHER_APP_ID=your_pusher_app_id
PUSHER_APP_KEY=your_pusher_app_key
PUSHER_APP_SECRET=your_pusher_app_secret
```

---

## 📬 Contact

If you have any questions, feel free to reach out:

📧 **Email:** eliass.ghauss@gmail.com  
🔗 **LinkedIn:** [Eliass Ghauss](https://www.linkedin.com/in/eliass-ghauss/)
