# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Python-based sports predictions dashboard with Flask backend and vanilla JavaScript frontend. Features betting metrics tracking and sports match listings with a clean, modern UI.

## Development Commands

**Start the application:**
```bash
python backend/app.py
```

**Install dependencies:**
```bash
pip install -r requirements.txt
```

## Project Architecture

**Backend (Flask):**
- `backend/app.py` - Main Flask application with API endpoints
- Uses Flask-CORS for frontend communication
- Mock data endpoints for metrics and matches

**Frontend (Vanilla JS + CSS):**
- `frontend/templates/dashboard.html` - Main dashboard template
- `frontend/static/css/style.css` - Custom responsive CSS styling
- `frontend/static/js/dashboard.js` - Dashboard functionality and API calls

**Key Features:**
- Dashboard metrics: win rate, win amount, current/starting balance, profit/loss
- Sports matches list with odds and status
- Responsive design with hover effects and clean typography
- API-driven data loading with error handling

## API Endpoints

- `GET /` - Serves dashboard HTML
- `GET /api/metrics` - Returns betting performance metrics  
- `GET /api/matches` - Returns sports matches data

## Development Notes

- Frontend uses fetch API for backend communication
- CSS follows modern design principles with card-based layout
- All data is currently mocked - ready for real data integration
- Flask serves both API and static files from single server