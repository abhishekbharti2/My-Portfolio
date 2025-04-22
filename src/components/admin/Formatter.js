import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './formatter.css';

const Formatter = () => {
    const [logs, setLogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [refresh, setRefresh] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLogs = async () => {
            setIsLoading(true);
            setError('');
            try {
                const response = await fetch(process.env.REACT_APP_EXCEL_API);
                
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
    }, [refresh]);

    function handleRefresh(){
        if(refresh) setRefresh(false);
        else setRefresh(true);
    }

    return (
        <div className="admin-dashboard-container">
            <header className="admin-header">
                <div className="formatter-header-content">
                    <h1>
                        <i className="fas fa-clipboard-list"></i> Request Logs
                    </h1>
                    <div className="formatter-actions">
                        <button
                            onClick={handleRefresh}
                            className="formatter-refresh-button">
                            <i className="fas fa-sync-alt"></i> Refresh Data
                        </button>
                        <button
                            onClick={() => navigate('/admin')}
                            className="formatter-logout-button">
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className="formatter-main-content">
                {isLoading ? (
                    <div className="formatter-loading-container">
                        <div className="formatter-loading-spinner"></div>
                        <p>Loading logs...</p>
                    </div>
                ) : error ? (
                    <div className="formatter-error-container">
                        <div className="formatter-error-alert">
                            <i className="fas fa-exclamation-triangle"></i>
                            <div>
                                <h3>Error Loading Logs</h3>
                                <p>{error}</p>
                                <button 
                                    onClick={() => window.location.reload()} 
                                    className="formatter-retry-button">
                                    <i className="fas fa-redo"></i> Try Again
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="formatter-logs-container">
                        {logs.length > 0 ? (
                            <>
                                <div className="formatter-stats-bar">
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
                                
                                <div className="formatter-table-container">
                                    <table className="formatter-logs-table">
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
                            <div className="formatter-no-logs">
                                <i className="fas fa-inbox"></i>
                                <p>No logs available</p>
                            </div>
                        )}
                    </div>
                )}
            </main>
            
            <footer className="formatter-footer">
                <p>© {new Date().getFullYear()} Admin Dashboard | Secure Access Only</p>
            </footer>
        </div>
    );
};

export default Formatter;