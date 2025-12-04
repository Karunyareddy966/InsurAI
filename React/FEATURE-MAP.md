# InsurAI Feature Map

## 🎯 Application Structure

```
InsurAI Application
│
├── 👤 Customer Portal (Public)
│   ├── Login (/login)
│   ├── Register (/register)
│   └── After Login:
│       ├── 🏠 Home
│       ├── 📊 Dashboard
│       ├── 📋 Plans
│       ├── 📅 Appointments
│       ├── 🎤 Voice Assistant
│       └── 📧 Contact Us
│
└── 🔐 Admin Portal (Hidden)
    ├── Login (/admin/login) - HIDDEN URL
    └── Admin Dashboard (/admin/dashboard)
        ├── 📊 Overview
        │   ├── Total Users
        │   ├── Total Appointments
        │   ├── Pending Appointments
        │   └── Customer Enquiries
        │
        ├── 👥 User Management
        │   ├── View All Users
        │   ├── See User Roles
        │   └── Delete Users
        │
        ├── 📅 Appointment Management
        │   ├── View All Appointments
        │   ├── Update Status
        │   └── Track Progress
        │
        ├── 📧 Customer Enquiries
        │   ├── View All Enquiries
        │   ├── Read Messages
        │   └── Mark as Resolved
        │
        ├── 📋 Plan Information
        │   ├── View All Plans
        │   └── See Details
        │
        ├── 👨‍💼 Agent Availability
        │   ├── View All Agents
        │   └── Toggle Availability
        │
        └── 🔔 Notifications
            └── View System Notifications
```

## 🔄 User Flows

### Customer Flow
```
1. Visit Website
   ↓
2. Register/Login (/login)
   ↓
3. Access Customer Features
   ├── Browse Plans
   ├── Book Appointments
   ├── Use Voice Assistant
   ├── Submit Enquiries
   └── View Dashboard
   ↓
4. Logout
```

### Admin Flow
```
1. Navigate to Hidden URL (/admin/login)
   ↓
2. Login with Admin Credentials
   ↓
3. Access Admin Dashboard
   ├── View Statistics
   ├── Manage Users
   ├── Handle Appointments
   ├── Respond to Enquiries
   ├── Review Plans
   ├── Manage Agents
   └── Check Notifications
   ↓
4. Logout (redirects to /admin/login)
```

## 📋 Feature Checklist (From Image)

### ✅ 1. User Authentication and Registration
- [x] Customer registration
- [x] Customer login
- [x] Admin login (separate)
- [x] Role-based access
- [x] Secure authentication

### ✅ 2. Solving Customers Queries Using Voice Recognition
- [x] Voice query interface
- [x] Speech recognition
- [x] Query history
- [x] Response display

### ✅ 3. Appointment Scheduling Interface
- [x] Book appointments
- [x] Select plan type
- [x] Choose date/time
- [x] View appointment status
- [x] Admin can manage appointments

### ✅ 4. Agent Availability Management
- [x] View all agents
- [x] See specializations
- [x] Toggle availability
- [x] Real-time status updates
- [x] Admin control

### ✅ 5. Plan Information Management
- [x] Display all plans
- [x] Show coverage details
- [x] Display premiums
- [x] Plan descriptions
- [x] Admin can view all

### ✅ 6. Appointment Management
- [x] View all appointments
- [x] Update status
- [x] Track customer details
- [x] Filter by status
- [x] Admin dashboard integration

### ✅ 7. Notification System
- [x] System notifications
- [x] User notifications
- [x] Timestamp tracking
- [x] Admin can view all
- [x] Notification display

### ✅ Admin Dashboard (Additional)
- [x] Statistics overview
- [x] User management
- [x] Enquiry management
- [x] Centralized control
- [x] Hidden from customers

## 🎨 UI Components

### Customer UI
- Modern gradient backgrounds (purple theme)
- Clean navigation bar
- Responsive forms
- Interactive cards
- Status badges
- Footer with info

### Admin UI
- Professional gradient (blue theme)
- Tab-based navigation
- Data tables
- Statistics cards
- Action buttons
- No navbar/footer (focused interface)

## 🔐 Security Layers

1. **Route Protection**
   - Hidden admin URL
   - Role-based routing
   - Authentication checks

2. **Login Validation**
   - Customer login blocks admins
   - Admin login blocks customers
   - Role verification

3. **Access Control**
   - Separate interfaces
   - Conditional rendering
   - Protected endpoints

## 📊 Data Management

### Customer Data
- User profiles
- Appointments
- Voice queries
- Enquiries

### Admin Data
- All customer data
- User management
- Appointment tracking
- Enquiry resolution
- Agent management
- Plan information
- System notifications

## 🚀 Technology Stack

### Frontend
- React.js
- React Router
- CSS3 (Gradients, Animations)
- Fetch API

### Backend
- Spring Boot
- Spring Data JPA
- MySQL Database
- REST APIs

### Features
- Role-based authentication
- Real-time updates
- Responsive design
- Modern UI/UX

## 📱 Responsive Design

### Desktop
- Full navigation
- Multi-column layouts
- Expanded tables
- Large cards

### Tablet
- Adapted navigation
- 2-column layouts
- Scrollable tables
- Medium cards

### Mobile
- Hamburger menu
- Single column
- Stacked cards
- Touch-friendly buttons

## 🎯 Key Achievements

✅ Separate login pages for customers and admins
✅ Hidden admin portal (not visible to users)
✅ Comprehensive admin dashboard
✅ All 7 features from image implemented
✅ Modern, professional UI design
✅ Complete backend support
✅ Responsive across devices
✅ Secure role-based access
✅ Real-time data management
✅ User-friendly interfaces

## 🔗 Important URLs

### Customer Access
- Login: `http://localhost:3000/login`
- Register: `http://localhost:3000/register`

### Admin Access (HIDDEN)
- Login: `http://localhost:3000/admin/login`
- Dashboard: `http://localhost:3000/admin/dashboard`

### API Endpoints
- Backend: `http://localhost:8080`
- All APIs: `http://localhost:8080/api/*`
