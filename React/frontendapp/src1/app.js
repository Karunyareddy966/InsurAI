body {
  font-family: 'Segoe UI', 'Arial', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

nav {
  background: linear-gradient(90deg, #4682B4 0%, #5a9fd4 100%);
  color: #fff;
  padding: 16px 32px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav h2 {
  margin: 0;
  font-size: 24px;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 16px;
  font-weight: 500;
  transition: all 0.3s;
  padding: 8px 16px;
  border-radius: 4px;
}

nav a:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-2px);
}

.plans-container {
  max-width: 1200px;
  margin: 30px auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  padding: 40px;
}

.plans-subtitle {
  text-align: center;
  color: #666;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}

.plans-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

.plan-card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.plan-card:hover {
  transform: translateY(-8px);
  border-color: #667eea;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

.plan-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.plan-card h3 {
  color: #333;
  margin: 1rem 0;
  font-size: 1.4rem;
}

.plan-price {
  margin: 1.5rem 0;
}

.price-amount {
  font-size: 2.5rem;
  font-weight: bold;
  color: #4caf50;
}

.price-period {
  color: #666;
  font-size: 1rem;
}

.plan-details {
  text-align: left;
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.plan-details p {
  color: #333;
  margin: 0.5rem 0;
}

.plan-description {
  color: #666 !important;
  font-size: 0.9rem;
}

.plan-features {
  text-align: left;
  margin: 1rem 0;
  padding: 1rem 0;
  border-top: 1px solid #e0e0e0;
}

.plan-features p {
  color: #4caf50;
  margin: 0.5rem 0;
  font-weight: 600;
}

.buy-now-btn {
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.buy-now-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.form-container {
  max-width: 500px;
  margin: 60px auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  padding: 40px;
}

input, select, textarea {
  display: block;
  width: 100%;
  margin: 14px 0;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  transition: border 0.3s;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #4682B4;
}

button {
  display: block;
  width: 100%;
  margin: 20px 0;
  padding: 14px;
  font-size: 16px;
  background: linear-gradient(90deg, #4682B4 0%, #5a9fd4 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

button:hover:enabled {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(70, 130, 180, 0.4);
}

.notification, .error-message, .success-message {
  padding: 12px;
  margin-top: 16px;
  border-radius: 8px;
  text-align: center;
}

.notification, .success-message {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.error-message {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.contact-info {
  margin-top: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
}

.contact-info p {
  margin: 10px 0;
  color: #333;
}

.auth-link {
  text-align: center;
  margin-top: 20px;
}

.auth-link a {
  color: #4682B4;
  font-weight: bold;
}

/* Dashboard Styles */
.dashboard-container {
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  margin: 24px 0;
}

.dashboard-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.appointment-item, .notification-item {
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
  background: #f8f9fa;
  border-left: 4px solid #4682B4;
}

.notification-item.unread {
  background: #fff3cd;
  border-left-color: #ffc107;
  font-weight: bold;
}

.notification-item.read {
  background: #e8f5e9;
  border-left-color: #4caf50;
  opacity: 0.8;
}

.notifications-list {
  max-height: 400px;
  overflow-y: auto;
}

.notification-item {
  cursor: pointer;
  transition: all 0.3s ease;
}

.notification-item:hover {
  transform: translateX(5px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}

.status-badge.pending {
  background: #fff3cd;
  color: #856404;
}

.status-badge.confirmed {
  background: #d1ecf1;
  color: #0c5460;
}

.status-badge.completed {
  background: #d4edda;
  color: #155724;
}

.status-badge.cancelled {
  background: #f8d7da;
  color: #721c24;
}

/* Voice Query Styles */
.voice-query-container {
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
}

.voice-input-section {
  background: white;
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  margin-bottom: 24px;
}

.voice-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px 40px;
  font-size: 18px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
}

.voice-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
}

.response-box {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-left: 4px solid #4682B4;
}

.query-history {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.history-item {
  padding: 16px;
  margin: 12px 0;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 3px solid #667eea;
}

/* Admin Dashboard Styles */
.admin-dashboard {
  max-width: 1400px;
  margin: 30px auto;
  padding: 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.admin-tabs {
  display: flex;
  gap: 12px;
  margin: 24px 0;
  border-bottom: 2px solid #e0e0e0;
}

.admin-tabs button {
  background: transparent;
  color: #666;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  width: auto;
  margin: 0;
}

.admin-tabs button.active {
  color: #4682B4;
  border-bottom-color: #4682B4;
  font-weight: bold;
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.admin-table th, .admin-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.admin-table th {
  background: #f8f9fa;
  font-weight: bold;
  color: #333;
}

.admin-table tr:hover {
  background: #f8f9fa;
}

.role-badge {
  background: #667eea;
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
}

.availability-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
}

.availability-badge.available {
  background: #d4edda;
  color: #155724;
}

.availability-badge.unavailable {
  background: #f8d7da;
  color: #721c24;
}

.toggle-btn {
  padding: 6px 16px;
  background: #4682B4;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: auto;
  margin: 0;
}

.status-select {
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ddd;
  width: auto;
  margin: 0;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.admin-plan-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
}

.quick-actions {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-top: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.action-buttons {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.action-btn {
  flex: 1;
  padding: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
  transition: transform 0.3s;
}

.action-btn:hover {
  transform: translateY(-4px);
}

footer {
  width: 100%;
  background: linear-gradient(90deg, #4682B4 0%, #5a9fd4 100%);
  color: #fff;
  text-align: center;
  padding: 20px 0;
  letter-spacing: 1px;
  font-size: 15px;
  margin-top: 50px;
}

h1, h2, h3 {
  color: #333;
  font-weight: bold;
}

.dashboard-container h2, .voice-query-container h2 {
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* New Dashboard Features */
.policy-summary, .claims-list, .documents-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.policy-item, .claim-item, .doc-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #4682B4;
}

.policy-status.active {
  background: #4caf50;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.policy-status.pending {
  background: #ff9800;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.claim-status.processing {
  background: #2196f3;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.claim-status.approved {
  background: #4caf50;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.calculator-widget {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.calc-input {
  padding: 10px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 0.9rem;
}

.calc-btn, .file-claim-btn, .upload-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.calc-btn:hover, .file-claim-btn:hover, .upload-btn:hover {
  transform: translateY(-2px);
}

.calc-result {
  background: #e8f5e9;
  padding: 12px;
  border-radius: 6px;
  text-align: center;
}

.doc-icon {
  font-size: 1.5rem;
}

.doc-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
}
