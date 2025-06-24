import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('userToken');
    return token ? children : <Navigate to="/login" />;
};

const Dashboard = () => (
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-4 text-gray-600">Welcome to your dashboard!</p>
        </div>
    </div>
);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;