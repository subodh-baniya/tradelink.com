# TradeLink Startup Script
# Starts both backend and frontend servers

Write-Host "Starting TradeLink..." -ForegroundColor Green

# Start Backend in new window
Write-Host "Starting Django backend..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot'; .\env\Scripts\Activate.ps1; cd backend; python manage.py runserver"

# Wait a moment for backend to initialize
Start-Sleep -Seconds 2

# Start Frontend in current window
Write-Host "Starting React frontend..." -ForegroundColor Cyan
cd "$PSScriptRoot\frontend"
npm run dev
