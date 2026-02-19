# Storage Space Frontend - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/aquiiibbb/store-space-pr3.git
cd store-space-pr3
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
# Copy the example env file
cp .env.example .env

# The .env file should contain:
REACT_APP_API_URL=https://store-backend-nine-opal.vercel.app
```

4. **Start the development server**
```bash
npm start
```

The app will open at `http://localhost:3000`

## 📡 API Integration

### Backend URL
- **Production**: `https://store-backend-nine-opal.vercel.app`
- **Local Development**: `http://localhost:5000`

### API Endpoints

All forms are connected to the following endpoints:

| Form | Endpoint | Space Type |
|------|----------|------------|
| `/form` | `/api/reservations` | 10' x 10' - $170/month |
| `/tentwentyform` | `/api/tent` | 10' x 20' - $190/month |
| `/un1` | `/api/un1` | Storage Unit 1 |
| `/un2` | `/api/un2` | Storage Unit 2 |
| `/un3` | `/api/un3` | Storage Unit 3 |
| `/un4` | `/api/un4` | Storage Unit 4 |
| `/un5` | `/api/un5` | Storage Unit 5 |

### Form Submission

Each form sends a POST request with the following data:
```json
{
  "email": "user@example.com",
  "mobile": "1234567890",
  "firstName": "John",
  "lastName": "Doe",
  "moveInDate": "2024-03-15T00:00:00.000Z"
}
```

### Response Format

**Success Response:**
```json
{
  "success": true,
  "message": "Reservation created successfully! Check your email for confirmation.",
  "data": {
    "id": "...",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "moveInDate": "2024-03-15T00:00:00.000Z",
    "spaceNumber": "#3008",
    "totalCost": 195
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message here"
}
```

## 🎨 Features

### Form Validation
- ✅ Email validation (proper format)
- ✅ Mobile number validation (10-15 digits)
- ✅ Required field validation
- ✅ Date validation (no past dates)
- ✅ Real-time error messages

### User Experience
- ✅ Loading states during submission
- ✅ Success/Error notifications
- ✅ Form reset after successful submission
- ✅ Auto-scroll to show messages
- ✅ Interactive calendar for date selection

## 🛠️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variable:
   - `REACT_APP_API_URL` = `https://store-backend-nine-opal.vercel.app`
4. Deploy!

### Other Platforms

Make sure to set the `REACT_APP_API_URL` environment variable in your deployment platform.

## 🔧 Troubleshooting

### CORS Issues
If you encounter CORS errors, make sure:
1. Backend CORS is configured to allow your frontend domain
2. You're using the correct API URL in `.env`

### API Connection Failed
1. Check if backend is running: `https://store-backend-nine-opal.vercel.app`
2. Verify environment variables are set correctly
3. Check browser console for detailed error messages

## 📝 Notes

- All forms use the same validation logic
- Backend automatically sends confirmation emails
- Admin notifications are sent for each reservation
- Security deposit is $50 for all units
- Admin fee is $25 for all units

## 🔗 Related Repositories

- **Backend**: [store-backend](https://github.com/aquiiibbb/store-backend)
- **Backend URL**: https://store-backend-nine-opal.vercel.app

## 📧 Support

For issues or questions, please create an issue in the GitHub repository.
