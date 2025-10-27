# Simplified Campus Resource Booking System

A clean, minimalist booking system for campus resources. Perfect for SOEN 287 Deliverable 1.

## 📁 Project Structure

```
simplified-booking-system/
│
├── index.html                  ✅ Landing page
├── loginPage.html              ✅ Student login
├── loginPageStaff.html         ✅ Staff login
├── createAccount.html          ✅ Registration
├── browseResources.html        ✅ Browse resources
├── reserve.html                ✅ Make reservation
│
├── myAccount.html              ❌ TO BE CREATED BY TEAM
├── myReservations.html         ❌ TO BE CREATED BY TEAM
├── adminAccount.html           ❌ TO BE CREATED BY TEAM
│
├── style.css                   ✅ Complete styling
├── README.md                   ✅ This file
├── UI_ENHANCEMENTS.md         ✅ UI ideas
└── TODO_FOR_TEAM.md           ✅ What needs to be done
```

## ✅ Completed Pages

- Landing page (index.html)
- Student/Staff login
- User registration
- Browse resources with cards
- Make reservations
- Complete styling (style.css)

## 📋 Pages for Team Members

See **TODO_FOR_TEAM.md** for detailed instructions on creating:
- myAccount.html (User Dashboard)
- myReservations.html (Booking History)
- adminAccount.html (Admin Dashboard)

## 🚀 How to Run

```bash
cd simplified-booking-system
python3 -m http.server 8002
```

Open: **http://localhost:8002**

## 🎨 Design

- **Minimalist**: Clean, simple design
- **Consistent**: Same styling throughout
- **User-friendly**: Easy to navigate
- **Responsive**: Works on all devices

## 📝 Current User Flow

```
Landing → Login/Create Account → Browse Resources → Reserve
```

## 🔗 Links That Need Updating

When team members create the missing pages:
- `loginPage.html` → should link to `myAccount.html` instead of `browseResources.html`
- `createAccount.html` → should link to `myAccount.html` instead of `browseResources.html`
- `loginPageStaff.html` → should link to `adminAccount.html` instead of `browseResources.html`

## 📖 See Also

- **TODO_FOR_TEAM.md** - What team members need to do
- **UI_ENHANCEMENTS.md** - Design enhancement ideas
- **style.css** - All styling (check for available classes)
