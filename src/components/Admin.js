import React, { useState, useEffect } from 'react';
import '../stylesheets/AdminLogs.css';

const ADMIN_PASSWORD = "Bharti%7843";

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setError('');
        } else { 
            setError('Invalid password'); 
            setPassword('');
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            const fetchLogs = async () => {
                setIsLoading(true);
                setError('');
                try {
                    const response = await fetch(`https://excel-backend-6wmf.onrender.com/logs`);
                    
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    
                    const data = await response.json();
                    setLogs(data); 
                } catch (err) {
                    console.error('Fetch error:', err);
                    setError(`Failed to fetch logs: ${err.message}`);
                } finally {
                    setIsLoading(false);
                }
            };
            
            fetchLogs();
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return (
            <div className="admin-login-container">
                <div className="admin-login-card">
                    <div className="admin-login-header">
                        <h2>Admin Dashboard</h2>
                        <div className="admin-logo">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                    </div>
                    
                    {error && (
                        <div className="admin-error-message">
                            <i className="fas fa-exclamation-circle"></i>
                            <span>{error}</span>
                        </div>
                    )}
                    
                    <form onSubmit={handleLogin} className="admin-login-form">
                        <div className="form-group">
                            <i className="fas fa-lock input-icon"></i>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="admin-form-input"
                                placeholder="Enter admin password" 
                                autoComplete="current-password"
                                autoFocus
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className={`admin-login-button ${password ? 'enabled' : 'disabled'}`}
                            disabled={!password}
                        >
                            <i className="fas fa-sign-in-alt"></i> Login
                        </button>
                    </form>
                    
                    <div className="admin-login-footer">
                        <p>Restricted Access Only</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-dashboard-container">
            <header className="admin-header">
                <div className="admin-header-content">
                    <h1>
                        <i className="fas fa-clipboard-list"></i> Request Logs
                    </h1>
                    <div className="admin-actions">
                        <button
                            onClick={() => window.location.reload()}
                            className="admin-refresh-button">
                            <i className="fas fa-sync-alt"></i> Refresh Data
                        </button>
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="admin-logout-button">
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className="admin-main-content">
                {isLoading ? (
                    <div className="admin-loading-container">
                        <div className="admin-loading-spinner"></div>
                        <p>Loading logs...</p>
                    </div>
                ) : error ? (
                    <div className="admin-error-container">
                        <div className="admin-error-alert">
                            <i className="fas fa-exclamation-triangle"></i>
                            <div>
                                <h3>Error Loading Logs</h3>
                                <p>{error}</p>
                                <button 
                                    onClick={() => window.location.reload()} 
                                    className="admin-retry-button">
                                    <i className="fas fa-redo"></i> Try Again
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="admin-logs-container">
                        {logs.length > 0 ? (
                            <>
                                <div className="admin-stats-bar">
                                    <div className="stat-card">
                                        <i className="fas fa-database"></i>
                                        <div>
                                            <span>Total Logs</span>
                                            <strong>{logs.length}</strong>
                                        </div>
                                    </div>
                                    <div className="stat-card">
                                        <i className="fas fa-clock"></i>
                                        <div>
                                            <span>Last Updated</span>
                                            <strong>{new Date().toLocaleTimeString()}</strong>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="admin-table-container">
                                    <table className="admin-logs-table">
                                        <thead>
                                            <tr>
                                                <th><i className="fas fa-id-card"></i> System ID</th>
                                                <th><i className="fas fa-network-wired"></i> IP Address</th>
                                                <th><i className="fas fa-clock"></i> Timestamp</th>
                                                <th><i className="fas fa-exchange-alt"></i> Requests</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {logs.map((log, index) => (
                                                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                                    <td className="id-cell">
                                                        <span className="truncate">{log.uniqueId}</span>
                                                    </td>
                                                    <td>{log.ip}</td>
                                                    <td>{new Date(log.timestamp).toLocaleString()}</td>
                                                    <td className="request-count">
                                                        <span className="count-badge">{log.requestCount || 1}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        ) : (
                            <div className="admin-no-logs">
                                <i className="fas fa-inbox"></i>
                                <p>No logs available</p>
                            </div>
                        )}
                    </div>
                )}
            </main>
            
            <footer className="admin-footer">
                <p>© {new Date().getFullYear()} Admin Dashboard | Secure Access Only</p>
            </footer>
        </div>
    );
};

export default Logs;