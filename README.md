# Sports Predictions Dashboard

A Python-based sports predictions dashboard with a clean, modern frontend and Flask backend.

## Features

- **Dashboard Metrics**: Track win rate, win amount, current balance, starting balance, and profit/loss
- **Sports Matches**: View upcoming and completed matches with odds
- **Clean UI**: Modern, responsive design with lightweight CSS

## Quick Start

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the application:
   ```bash
   python backend/app.py
   ```

3. Open your browser to `http://localhost:5000`

## Project Structure

```
sports-predictions/
├── backend/
│   └── app.py              # Flask backend server
├── frontend/
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css   # Custom CSS styles
│   │   └── js/
│   │       └── dashboard.js # Dashboard JavaScript
│   └── templates/
│       └── dashboard.html   # Main dashboard template
└── requirements.txt         # Python dependencies
```

## API Endpoints

- `GET /` - Dashboard homepage
- `GET /api/metrics` - Get betting metrics
- `GET /api/matches` - Get sports matches