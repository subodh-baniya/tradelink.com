# TradeLink

A Django REST API + React application for trading.

## Prerequisites

- Python 3.13+
- Node.js 18+
- Git

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/hoppercraft/tradelink.com.git
cd tradelink.com
```

### 2. Backend Setup (Django)

```powershell
# Create and activate virtual environment
python -m venv env
.\env\Scripts\Activate.ps1

# Install dependencies
pip install -r backend\requirements.txt

# Create .env file (copy from example)
# Copy backend\.env.example to backend\.env and update values

# Run migrations
cd backend
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Start backend server
python manage.py runserver
```

Backend will run at: `http://127.0.0.1:8000/`

### 3. Frontend Setup (React + Vite)

```powershell
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run at: `http://localhost:5173/`

## Running the Project

**Option 1: Two Terminals (Recommended)**

Terminal 1 (Backend):
```powershell
.\env\Scripts\Activate.ps1
cd backend
python manage.py runserver
```

Terminal 2 (Frontend):
```powershell
cd frontend
npm run dev
```

**Option 2: Use the startup script**

```powershell
.\start.ps1
```

## Project Structure

```
tradelink.com/
├── backend/           # Django REST API
│   ├── api/          # API app
│   ├── backend/      # Project settings
│   ├── manage.py
│   └── requirements.txt
├── frontend/         # React + Vite
│   ├── src/
│   ├── public/
│   └── package.json
└── env/             # Python virtual environment (gitignored)
```

## Environment Variables

### Backend (.env)
- `SECRET_KEY`: Django secret key
- `DEBUG`: Debug mode (True/False)
- `ALLOWED_HOSTS`: Comma-separated allowed hosts

### Frontend (.env)
- `VITE_API_URL`: Backend API URL (default: http://localhost:8000)

## API Endpoints

- `/api/` - API root
- `/api/admin/` - Django admin panel

## Technologies Used

### Backend
- Django 6.0
- Django REST Framework
- Django CORS Headers
- Simple JWT Authentication
- SQLite (development)
- PostgreSQL ready (production)

### Frontend
- React 19
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- JWT Decode

## Development

- Backend runs on port 8000
- Frontend runs on port 5173
- CORS is configured for local development

## Deployment Notes

1. **Security**: Change `SECRET_KEY` in production
2. **Debug**: Set `DEBUG=False` in production
3. **Database**: Switch to PostgreSQL for production
4. **Static Files**: Configure static file serving
5. **CORS**: Update `CORS_ALLOWED_ORIGINS` for production domain
6. **Environment Variables**: Use environment-specific .env files

## License

All rights reserved.
