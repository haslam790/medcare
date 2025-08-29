
import './App.css'
import { KonsuldWidget } from "my-k-widget"

function App() {
  return (
    <div className="medical-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <h1>🏥 MedCare Dashboard</h1>
          <div className="header-actions">
            <span className="user-info">Dr. Sarah Johnson</span>
            <span className="status-indicator online">Online</span>
          </div>
        </div>
      </header>

      {/* Main Content Area - Two Column Layout */}
      <div className="dashboard-content">
        {/* Left Column - Main Dashboard Content */}
        <div className="left-column">
          {/* Patient Overview Section */}
          <section className="content-section">
            <h2>Patient Overview</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">24</div>
                <div className="stat-label">Today's Appointments</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">156</div>
                <div className="stat-label">Active Patients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">8</div>
                <div className="stat-label">Pending Reports</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">92%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
            </div>
          </section>

          {/* Recent Patients */}
          <section className="content-section">
            <h2>Recent Patients</h2>
            <div className="patient-list">
              <div className="patient-item">
                <div className="patient-avatar">👤</div>
                <div className="patient-info">
                  <h4>Michael Chen</h4>
                  <p>Cardiology • 2:30 PM</p>
                </div>
                <span className="appointment-status confirmed">Confirmed</span>
              </div>
              <div className="patient-item">
                <div className="patient-avatar">👤</div>
                <div className="patient-info">
                  <h4>Emily Rodriguez</h4>
                  <p>General Checkup • 3:15 PM</p>
                </div>
                <span className="appointment-status confirmed">Confirmed</span>
              </div>
              <div className="patient-item">
                <div className="patient-avatar">👤</div>
                <div className="patient-info">
                  <h4>David Thompson</h4>
                  <p>Follow-up • 4:00 PM</p>
                </div>
                <span className="appointment-status pending">Pending</span>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="content-section">
            <h2>Quick Actions</h2>
            <div className="action-buttons">
              <button className="action-btn primary">📋 New Patient</button>
              <button className="action-btn secondary">📊 View Reports</button>
              <button className="action-btn secondary">📅 Schedule</button>
              <button className="action-btn secondary">💊 Prescriptions</button>
            </div>
          </section>
        </div>

        {/* Right Column - Dedicated Widget Area */}
        <div className="right-column">
          <div className="widget-section">
            <div className="widget-header">
              <h2>💬 Konsuld AI Assistant</h2>
              <p>Your intelligent medical companion for instant insights and support</p>
            </div>
            <div className="widget-container">
              <KonsuldWidget 
                 
              />
            </div>
            <div className="widget-footer">
              <span className="ai-status">🤖 AI Powered • Available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
