import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import auth, { db } from "../Config/API/firebaseConfig";
import '../global.css';

export default function SignIn() {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const navigate = useNavigate();

    const signIn = async (event) => {
        event.preventDefault();
        try {
            const usuario = await createUserWithEmailAndPassword(auth, email, password);
            const uid = usuario.user.uid;
            await setDoc(doc(db, "usuarios", uid), {
                nomeCompleto,
                email,
                senha: password
            });
            navigate('/');
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Email já cadastrado");
            } else {
                alert(error.message);
            }
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
            <form onSubmit={signIn}>
                <h2>Cadastro</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            value={nomeCompleto}
                            onChange={(e) => setNomeCompleto(e.target.value)}
                            style={{ width: '250px', padding: '10px', marginBottom: '10px' }}
                        />
                    </li>
                    <li>
                        <input
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '250px', padding: '10px', marginBottom: '10px' }}
                        />
                    </li>
                    <li>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '250px', padding: '10px', marginBottom: '10px' }}
                        />
                    </li>
                    <li>
                        <button type="submit" onClick={() => navigate('/')} style={{ padding: '10px 20px', marginRight: '5px' }}>
                            Cadastrar
                        </button>
                    </li>
                </ul>
            </form>
        </div>
    );
}