// Dashboard JavaScript
class Dashboard {
    constructor() {
        this.init();
    }

    async init() {
        await this.loadMetrics();
        await this.loadMatches();
    }

    async loadMetrics() {
        try {
            const response = await fetch('/api/metrics');
            const metrics = await response.json();
            this.renderMetrics(metrics);
        } catch (error) {
            console.error('Error loading metrics:', error);
            this.showError('metrics-grid', 'Failed to load metrics');
        }
    }

    async loadMatches() {
        try {
            const response = await fetch('/api/matches');
            const matches = await response.json();
            this.renderMatches(matches);
        } catch (error) {
            console.error('Error loading matches:', error);
            this.showError('matches-list', 'Failed to load matches');
        }
    }

    renderMetrics(metrics) {
        const metricsGrid = document.getElementById('metrics-grid');
        
        const formatCurrency = (amount) => `$${amount.toLocaleString()}`;
        const formatPercentage = (rate) => `${rate}%`;
        
        const profitLoss = metrics.current_balance - metrics.starting_balance;
        const profitLossClass = profitLoss >= 0 ? 'positive' : 'negative';
        
        metricsGrid.innerHTML = `
            <div class="metric-card">
                <div class="metric-label">Win Rate</div>
                <div class="metric-value">${formatPercentage(metrics.win_rate)}</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Current Balance</div>
                <div class="metric-value">${formatCurrency(metrics.current_balance)}</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Starting Balance</div>
                <div class="metric-value">${formatCurrency(metrics.starting_balance)}</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Profit/Loss</div>
                <div class="metric-value ${profitLossClass}">${formatCurrency(profitLoss)}</div>
            </div>
        `;
    }

    renderMatches(matches) {
        const matchesList = document.getElementById('matches-list');
        
        if (matches.length === 0) {
            matchesList.innerHTML = '<div class="loading">No matches available</div>';
            return;
        }

        const matchesHtml = matches.map(match => `
            <div class="match-card">
                <div class="match-header">
                    <div class="match-teams">${match.team1} vs ${match.team2}</div>
                    <div class="match-odds">${match.odds}</div>
                </div>
                <div class="match-details">
                    <div class="match-datetime">${match.date} at ${match.time}</div>
                    <div class="match-status ${match.status}">${match.status}</div>
                </div>
            </div>
        `).join('');

        matchesList.innerHTML = matchesHtml;
    }

    showError(containerId, message) {
        const container = document.getElementById(containerId);
        container.innerHTML = `<div class="loading">Error: ${message}</div>`;
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Dashboard();
});