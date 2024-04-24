import React from 'react';
import '../../assets/css/dashboard.css'
import { FaArrowLeft } from "react-icons/fa";

export function Dashboard({ email, password }) {

    const handleGoBack = () => {
        window.location.href = '/'; // Redireciona para a página do formulário
    };

    return (
      <div className="dashboard">
        <button onClick={handleGoBack} className="backButton"> <FaArrowLeft className='icon' /> Go Back to Form</button>
        <div className="wrapper" style={{ backdropFilter: 'blur(8px)' }}>
            <h1>Seja bem-vindo seu email é: </h1>
            <p>Email: {email}</p>
            <p>Senha: {password}</p>
        </div>
        <h2>Essa é uma estilização basica o foco era a pagina funcionando</h2>
      </div>
    );
  }