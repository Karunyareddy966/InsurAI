# Admin Dashboard Guide

## Overview
The admin dashboard is a comprehensive control panel for managing all aspects of the InsurAI application. It provides a centralized interface for administrators to monitor and manage users, appointments, enquiries, plans, agents, and notifications.

## Access
- **URL**: `http://localhost:3000/admin/login` (Hidden from regular users)
- **Credentials**: admin@insurai.com / admin123
- **Security**: Only accessible with ADMIN role

## Dashboard Sections

### 1. 📊 Overview Tab
Displays key statistics at a glance:
- **Total Users**: Count of all registered users
- **Total Appointments**: All appointments in the system
- **Pending Appointments**: Appointments awaiting confirmation
- **Customer Enquiries**: Total enquiries submitted

**Use Case**: Quick health check of the system

### 2. 👥 User Management
View and manage all registered users:
- **View**: User ID, Name, Email, Phone, Role
- **Actions**: Delete users
- **Role Badges**: Visual distinction between ADMIN and USER roles

**Use Case**: Monitor user registrations, remove inactive accounts

### 3. 📅 Appointment Management
Complete appointment lifecycle management:
- **View**: All appointment details (ID, Name, Email, Plan Type, Date, Time, Status)
- **Actions**: Update appointment status
- **Status Options**:
  - Pending (Yellow badge)
  - Confirmed (Blue badge)
  - Completed (Green badge)
  - Cancelled (Red badge)

**Use Case**: Confirm appointments, track completion, manage cancellations

### 4. 📧 Customer Enquiries
Handle customer queries and support requests:
- **View**: Name, Email, Phone, Message, Date, Status
- **Actions**: Mark as resolved
- **Status Indicators**:
  - Pending (Yellow badge)
  - Resolved (Green badge)

**Use Case**: Respond to customer queries, track resolution status

### 5. 📋 Plan Information Management
View all insurance plans:
- **Details**: Plan Name, Type, Coverage Amount, Premium, Description
- **Display**: Card-based layout for easy scanning

**Use Case**: Review available plans, verify pricing and coverage

### 6. 👨‍💼 Agent Availability Management
Manage insurance agent availability:
- **View**: Agent ID, Name, Email, Specialization, Status
- **Actions**: Toggle availability (Enable/Disable)
- **Status Indicators**:
  - Available (Green badge)
  - Unavailable (Red badge)

**Use Case**: Manage agent schedules, control appointment assignments

### 7. 🔔 Notification System
View all system notifications:
- **Display**: Notification title, message, timestamp
- **Layout**: Chronological list with icons

**Use Case**: Monitor system events, track user activities

## Features

### Visual Design
- **Color-Coded Badges**: Quick status identification
- **Responsive Tables**: Scrollable on mobile devices
- **Card Layouts**: For plans and enquiries
- **Gradient Headers**: Professional appearance
- **Hover Effects**: Interactive feedback

### User Experience
- **Tab Navigation**: Easy switching between sections
- **Real-time Updates**: Changes reflect immediately
- **Confirmation Dialogs**: Prevent accidental deletions
- **Loading States**: Visual feedback during operations

### Data Management
- **Sorting**: Most recent items first
- **Filtering**: By status (pending, resolved, etc.)
- **Search**: Quick data lookup (future enhancement)
- **Export**: Data export capability (future enhancement)

## Workflow Examples

### Managing New Appointments
1. Navigate to "Appointments" tab
2. Review pending appointments
3. Select status from dropdown
4. Status updates automatically

### Handling Customer Enquiries
1. Navigate to "Enquiries" tab
2. Read customer message
3. Contact customer (external)
4. Click "Mark as Resolved"

### Managing Agent Availability
1. Navigate to "Agents" tab
2. View current availability
3. Click "Enable" or "Disable" button
4. Status updates immediately

## Best Practices

### Daily Tasks
- Check pending appointments
- Review new enquiries
- Monitor agent availability
- Verify system notifications

### Weekly Tasks
- Review user registrations
- Analyze appointment trends
- Update plan information
- Check agent performance

### Security
- Keep admin credentials secure
- Don't share admin login URL
- Regularly review user accounts
- Monitor suspicious activities

## Technical Details

### API Endpoints Used
- `GET /api/auth/users` - Fetch all users
- `GET /api/appointments/all` - Fetch all appointments
- `PUT /api/appointments/{id}/status` - Update appointment status
- `GET /api/contact/all` - Fetch all enquiries
- `PUT /api/contact/{id}/resolve` - Mark enquiry as resolved
- `GET /api/plans/all` - Fetch all plans
- `GET /api/agents/all` - Fetch all agents
- `PUT /api/agents/{id}/availability` - Toggle agent availability
- `GET /api/notifications/all` - Fetch all notifications

### State Management
- React hooks for local state
- Real-time data fetching
- Automatic re-fetching after updates

### Styling
- Custom CSS with gradients
- Responsive grid layouts
- Mobile-first design
- Accessibility compliant

## Future Enhancements
- Search and filter functionality
- Data export (CSV/PDF)
- Analytics and reports
- Email notifications
- Bulk operations
- Advanced user roles
- Activity logs
- Dashboard customization
