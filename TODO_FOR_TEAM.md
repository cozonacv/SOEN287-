# TODO for Team Members

## ✅ Completed Pages

The following pages are **fully implemented and ready to use**:

1. ✅ **index.html** - Landing page with navigation
2. ✅ **loginPage.html** - Student login
3. ✅ **loginPageStaff.html** - Staff login  
4. ✅ **createAccount.html** - User registration
5. ✅ **browseResources.html** - Browse available resources
6. ✅ **reserve.html** - Make a reservation
7. ✅ **style.css** - Complete styling for all pages

## 📋 Pages to be Implemented by Team Members

The following pages **need to be created** by team members:

### 1. **myAccount.html** - User Dashboard
**What it should contain:**
- Welcome message with user's name
- Quick action buttons:
  - Browse Resources
  - My Profile
  - My Reservations (link to myReservations.html)
  - Sign Out
- User profile section:
  - First Name
  - Last Name
  - Username
  - Email
  - Student/Faculty ID
  - Password (with change option)
  - Modify button

**Style:** Use the same `style.css` file, follow the minimalist design

---

### 2. **myReservations.html** - Booking History
**What it should contain:**
- **Upcoming Reservations** section:
  - List of upcoming bookings
  - Resource name
  - Date and time
  - Purpose
  - Status badge (Confirmed, Pending, etc.)
  - Cancel button for upcoming bookings

- **Past Reservations** section:
  - List of completed/cancelled bookings
  - Same information as above
  - Marked as "Completed"

**Style:** Use the same `style.css` file, include status badges (`.status-badge`, `.status-confirmed`, `.status-pending`, `.status-completed` classes are already in CSS)

---

### 3. **adminAccount.html** - Admin Dashboard
**What it should contain:**
- Admin actions menu:
  - Manage Resources (links to manageResources.html)
  - Manage Bookings (links to manageBookings.html)
  - View Statistics
  - Sign Out

- **System Overview** (stats cards):
  - Total Resources (number)
  - Total Bookings (number)
  - Pending Approvals (number)
  - Active Users (number)

**Style:** Use the same `style.css` file, stats should be in colored boxes

---

### 4. **manageResources.html** - Admin: Manage Resources (Optional)
**What it should contain:**
- List of all resources
- Add new resource button
- Edit resource button for each
- Delete resource option

---

### 5. **manageBookings.html** - Admin: Manage Bookings (Optional)
**What it should contain:**
- List of all bookings
- Filter by status (Pending, Confirmed, Cancelled)
- Approve/Reject buttons for pending bookings

---

## 🎨 Design Guidelines

When creating new pages, follow these rules:

### ✅ DO:
- Use the existing `style.css` file
- Keep minimalist design with black borders
- Use blue buttons (#7db8ff)
- Maintain consistent spacing
- Use same font (Poppins, Arial)
- Include hover effects
- Make it responsive

### ❌ DON'T:
- Create new CSS files (use existing style.css)
- Change the color scheme
- Add too much animation
- Make design too complex

---

## 📝 Notes for Implementation

### Linking Pages:
- Dashboard should link to: myReservations.html, browseResources.html
- Reservations page should link back to myAccount.html or browseResources.html
- Admin dashboard should link to manage pages (when created)
- Use `style.css` for all styling
- Use `.form-container` class for forms
- Use `.info-section` class for content boxes
- Use `.resource-card` class for cards

### Sample Code Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Page Title</h1>
        
        <!-- Your content here -->
        
    </div>
</body>
</html>
```

---

## 🔗 Current User Flow

```
index.html
  ├── loginPage.html
  │   ├── browseResources.html
  │   │   └── reserve.html → (back to browseResources.html)
  ├── loginPageStaff.html
  │   └── browseResources.html (for now, should go to admin dashboard)
  └── createAccount.html
      └── browseResources.html (for now, should go to myAccount.html)
```

### After Implementation:
```
index.html
  ├── loginPage.html
  │   ├── myAccount.html (NEW - to be created)
  │   │   ├── browseResources.html
  │   │   │   └── reserve.html → (back to browseResources.html)
  │   │   ├── myReservations.html (NEW - to be created)
  │   │   └── myProfile.html (optional)
  ├── loginPageStaff.html
  │   └── adminAccount.html (NEW - to be created)
  │       ├── manageResources.html (optional)
  │       └── manageBookings.html (optional)
  └── createAccount.html
      └── myAccount.html (NEW - to be created)
```

---

## ✨ Quick Reference

**Current Working Links:**
- Landing → Login/Register/Staff Login
- Login → Browse Resources
- Browse → Reserve → Back to Browse
- Staff Login → Browse (should go to admin dashboard when created)

**To Be Added:**
- Login → My Account (Dashboard)
- My Account → My Reservations
- My Account → Browse Resources
- Staff Login → Admin Dashboard
- Admin Dashboard → Manage Resources/Bookings

---

## 🚀 Getting Started

1. Open `style.css` to see all available styles
2. Look at existing pages for structure examples
3. Create the new HTML files in the same directory
4. Use existing CSS classes
5. Follow the same design pattern
6. Test the page in browser (http://localhost:8002)

Good luck! 🎉

