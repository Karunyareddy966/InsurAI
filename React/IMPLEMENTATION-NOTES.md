# InsurAI Implementation Notes

## Changes Implemented

### 1. Separate Login Pages
- **Customer Login**: `/login` - For regular users
- **Admin Login**: `/admin/login` - Hidden route for administrators only
- Admin login is not visible in navigation or accessible to regular users
- Each login validates user role and redirects accordingly

### 2. Enhanced Admin Dashboard
The admin dashboard now includes comprehensive management features:

#### Features:
- **Overview Tab**: Statistics dashboard showing:
  - Total Users
  - Total Appointments
  - Pending Appointments
  - Customer Enquiries

- **User Management**: 
  - View all registered users
  - See user roles (Admin/User)
  - Delete users

- **Appointment Management**:
  - View all customer appointments
  - Update appointment status (Pending/Confirmed/Completed/Cancelled)
  - See appointment details (name, email, plan type, date, time)

- **Customer Enquiries**:
  - View all enquiries submitted via Contact Us form
  - Mark enquiries as resolved
  - See enquiry details (name, email, phone, message, date)

- **Plan Information Management**:
  - View all insurance plans
  - See plan details (type, coverage, premium, description)

- **Agent Availability Management**:
  - View all agents
  - Toggle agent availability (Available/Unavailable)
  - See agent specializations

- **Notification System**:
  - View all system notifications
  - See notification timestamps

### 3. Improved UI/UX
- Modern gradient designs for login pages
- Responsive layouts for all screen sizes
- Color-coded status badges
- Interactive hover effects
- Clean, professional admin interface

### 4. Backend Enhancements
Created new backend endpoints for enquiry management:
- `POST /api/contact/submit` - Submit new enquiry
- `GET /api/contact/all` - Get all enquiries (admin)
- `GET /api/contact/pending` - Get pending enquiries
- `PUT /api/contact/{id}/resolve` - Mark enquiry as resolved
- `DELETE /api/contact/{id}` - Delete enquiry

### 5. Security Features
- Admin routes are hidden from regular users
- Role-based access control
- Separate authentication flows for customers and admins
- Admin dashboard only accessible after admin login

## File Structure

### Frontend (React)
```
src/pages/
├── CustomerLogin.js      # Customer login page
├── AdminLogin.js         # Admin login page (hidden)
├── AdminDashboard.js     # Comprehensive admin dashboard
├── AdminDashboard.css    # Admin dashboard styles
├── Auth.css              # Authentication pages styles
├── Register.js           # Updated registration
└── ContactUs.js          # Updated contact form
```

### Backend (Spring Boot)
```
com/insuranceapp/
├── controller/
│   └── ContactEnquiryController.java
├── model/
│   └── ContactEnquiry.java
├── repository/
│   └── ContactEnquiryRepository.java
└── service/
    └── ContactEnquiryService.java
```

## Database Tables
- `users` - User accounts (customers and admins)
- `plans` - Insurance plans
- `agents` - Insurance agents
- `appointments` - Customer appointments
- `notifications` - System notifications
- `voice_queries` - Voice query history
- `contact_enquiries` - Customer enquiries (NEW)

## Access URLs

### Customer Access
- Login: `http://localhost:3000/login`
- Register: `http://localhost:3000/register`
- Dashboard: `http://localhost:3000/dashboard`

### Admin Access (Hidden)
- Login: `http://localhost:3000/admin/login`
- Dashboard: `http://localhost:3000/admin/dashboard`
- Credentials: admin@insurai.com / admin123

## Key Features Implemented

✅ User Authentication and Registration
✅ Separate Customer and Admin Login Pages
✅ Voice Query System
✅ Appointment Scheduling Interface
✅ Agent Availability Management
✅ Plan Information Management
✅ Appointment Management
✅ Notification System
✅ Customer Enquiries Management
✅ Admin Dashboard with all features
✅ Role-based access control
✅ Responsive design
✅ Modern UI with gradients and animations

## Notes
- Admin login route is intentionally hidden from navigation
- Regular users cannot access admin features
- All admin actions are centralized in one dashboard
- The system uses role-based authentication to separate customer and admin access
