import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Admin.css';

const Admin = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const ADMIN_PASSWORD = 'admin';

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

    const handleWebsiteNavigation = (websitePath) => {
        navigate(websitePath);
    };

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
                        <i className="fas fa-tachometer-alt"></i> Admin Dashboard
                    </h1>
                    <div className="admin-actions">
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="admin-logout-button">
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className="admin-main-content">
                <div className="admin-websites-grid">
                    <div 
                        className="admin-website-card"
                        onClick={() => handleWebsiteNavigation('/admin/ejoyr')}>
                        <div className="website-card-icon">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <h2>Ejoyr</h2>
                        <p>Manage products</p>
                    </div>
                    <div 
                        className="admin-website-card"
                        onClick={() => handleWebsiteNavigation('https://website2.com/admin')} >
                        <div className="website-card-icon">
                            <i className="fas fa-rocket"></i>
                        </div>
                        <h2>VerseEx</h2>
                        <p>Manage Missions & Celetial Objects</p>
                    </div>
                    <div 
                        className="admin-website-card"
                        onClick={() => handleWebsiteNavigation('/admin/excelformatter')} >
                        <div className="website-card-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h2>Excel Formatter</h2>
                        <p>View website statistics</p>
                    </div>
                </div>
            </main>
            
            <footer className="admin-footer">
                <p>© {new Date().getFullYear()} Admin Portal | All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Admin;