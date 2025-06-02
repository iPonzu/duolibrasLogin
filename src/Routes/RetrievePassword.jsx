import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import '../global.css';

export default function RetrievePassword() {
    const [email, setEmail] = useState('');
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const navigate = useNavigate();

    const retrievePassword = async (event) => {
        event.preventDefault();
        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            alert("Email de recuperação enviado com sucesso!");
            navigate('/');
        } catch (error) {
            alert(`Erro ao recuperar senha: ${error.message}`);
        }
    };
     const toggleTheme = () => {
      setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }
    return (
        <div className="main-container">
            <button
            type= "button"
            onClick={toggleTheme}
            className="theme-toggle"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
            <form onSubmit={retrievePassword}>
                <h2>Recupere sua senha</h2>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '250px', padding: '10px', marginBottom: '10px' }}
                />
                <button type="submit" onClick={() => navigate('/')} style={{ padding: '10px 20px', marginRight: '5px' }}>Recuperar senha</button>
            </form>
        </div>
    );
}