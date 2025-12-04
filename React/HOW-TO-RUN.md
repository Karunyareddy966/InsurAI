# How to Run InsurAI Application

## Prerequisites
- Java 11 or higher
- Node.js 14 or higher
- MySQL Database

## Database Setup
1. Create a MySQL database named `insurance_db`
2. Run the SQL scripts:
   - `setup-database.sql` (creates tables)
   - `sample-data.sql` (adds sample data)

## Backend Setup
1. Navigate to `insurai-app-backend`
2. Update `application.properties` with your database credentials
3. Run: `mvn spring-boot:run`
4. Backend will start on `http://localhost:8080`

## Frontend Setup
1. Navigate to `insurai-app-frontend/insurai-app-frontend`
2. Install dependencies: `npm install`
3. Start the app: `npm start`
4. Frontend will open on `http://localhost:3000`

## Login Credentials

### Customer Login
- URL: `http://localhost:3000/login`
- Use any registered customer account

### Admin Login (Hidden)
- URL: `http://localhost:3000/admin/login`
- Email: admin@insurai.com
- Password: admin123

## Features
1. User Authentication and Registration
2. Voice Query System
3. Appointment Scheduling
4. Agent Availability Management
5. Plan Information Management
6. Appointment Management
7. Notification System
8. Customer Enquiries Management (Admin)

## Admin Dashboard Access
- Admin dashboard is only accessible after logging in through `/admin/login`
- Regular users cannot access admin features
- Admin sees all enquiries, appointments, users, plans, agents, and notifications
