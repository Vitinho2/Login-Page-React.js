import React, { useState } from 'react';
import { Form } from './Components/Form/Form.jsx';
import { Dashboard } from '../src/Components/dashboard/Dashboard';
import './assets/css/index.css';

export function App() {
  const [formData, setFormData] = useState(null);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = (data) => {
    setFormData(data);
    setCurrentPage('dashboard');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return (
          <div className="mainLogin">
            <div className="left">
              <Form onLogin={handleLogin} />
            </div>
            <div className="right">
              <div className="blurry-rectangle">
                <p className="aboutRight">
                  Very good <br /> works are <br /> waiting for <br /> you Login <br /> Now!!!
                </p>
                <div className="cubo"></div>
                <div className="woman-tablet"></div>
              </div>
            </div>
          </div>
        );
      case 'dashboard':
        return (
          <Dashboard email={formData.email} password={formData.password} />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}


