# InsurAI Quick Start Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Database
```bash
# Create database
mysql -u root -p
CREATE DATABASE insurance_app;
USE insurance_app;
```

### Step 2: Start Backend
```bash
# Windows
start-backend.bat

# Or manually
cd insurai-app-backend
mvn spring-boot:run
```

### Step 3: Start Frontend
```bash
# Windows
start-frontend.bat

# Or manually
cd insurai-app-frontend/insurai-app-frontend
npm install
npm start
```

## 🔑 Login Credentials

### Customer Login
- URL: http://localhost:3000/login
- Register new account or use sample data

### Admin Login (Hidden)
- URL: http://localhost:3000/admin/login
- Email: admin@insurai.com
- Password: admin123

## 📋 Features Checklist

### Customer Features
- ✅ Register/Login
- ✅ View Insurance Plans
- ✅ Book Appointments
- ✅ Voice Query System
- ✅ View Dashboard
- ✅ Submit Enquiries

### Admin Features (All in One Dashboard)
- ✅ View Statistics Overview
- ✅ Manage Users
- ✅ Manage Appointments
- ✅ View & Resolve Enquiries
- ✅ Manage Plans
- ✅ Manage Agent Availability
- ✅ View Notifications

## 🎯 Key Points

1. **Admin Login is Hidden**: Regular users won't see the admin login link
2. **Role-Based Access**: Customers and admins have separate interfaces
3. **Centralized Admin Panel**: All admin actions in one dashboard
4. **Responsive Design**: Works on desktop, tablet, and mobile

## 🔧 Troubleshooting

**Backend won't start?**
- Check MySQL is running
- Verify database credentials in `application.properties`

**Frontend won't start?**
- Run `npm install` first
- Check if port 3000 is available

**Can't login as admin?**
- Use the hidden URL: `/admin/login`
- Verify admin user exists in database

## 📞 Support
For issues, check the database connection and ensure both backend (port 8080) and frontend (port 3000) are running.
