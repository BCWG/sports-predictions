from flask import Flask, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__, 
            template_folder='../frontend/templates',
            static_folder='../frontend/static')
CORS(app)

# Mock data for now
MOCK_METRICS = {
    'win_rate': 67.5,
    'current_balance': 8750.00,
    'starting_balance': 5000.00
}

MOCK_MATCHES = [
    {
        'id': 1,
        'team1': 'Lakers',
        'team2': 'Warriors',
        'date': '2024-01-15',
        'time': '19:30',
        'odds': '+150',
        'status': 'upcoming'
    },
    {
        'id': 2,
        'team1': 'Celtics',
        'team2': 'Heat',
        'date': '2024-01-15',
        'time': '20:00',
        'odds': '-110',
        'status': 'upcoming'
    },
    {
        'id': 3,
        'team1': 'Nuggets',
        'team2': 'Suns',
        'date': '2024-01-14',
        'time': '21:00',
        'odds': '+200',
        'status': 'completed'
    }
]

@app.route('/')
def dashboard():
    return render_template('dashboard.html')

@app.route('/api/metrics')
def get_metrics():
    return jsonify(MOCK_METRICS)

@app.route('/api/matches')
def get_matches():
    return jsonify(MOCK_MATCHES)

if __name__ == '__main__':
    app.run(debug=True, port=5000)