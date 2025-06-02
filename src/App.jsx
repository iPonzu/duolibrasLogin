import { useState, useEffect } from 'react'
import  auth  from '../src/Config/API/firebaseConfig.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './global.css'

export default function App() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
    const navigate = useNavigate()

    useEffect(() =>{
      document.body.classList.remove("light-mode", "dark-mode")
      document.body.classList.add(`${theme}-mode`)
      localStorage.setItem('theme', theme)
    }, [theme])
    
    const toggleTheme = () => {
      setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    const login = async (event) => {
      event.preventDefault()
      try {
        const usuario = await signInWithEmailAndPassword (auth, email, password)
        console.log(usuario)
        navigate('/') // ROUTING TO HOMEPAGE (const navigate = useNavigate() necessary)
        alert("Bem vindo(a) de volta!")
      } catch (error) {
        alert("Credenciais incorretas: " + error.message)
      }
    }
    return(
      
        <div className="main-container">
          <button
            type= "button"
            onClick={toggleTheme}
            className="theme-toggle"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <form onSubmit={login}>
            <h3>Acesse com suas credenciais</h3>
            <input 
              type="emai"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '250px', padding: '10px', marginBottom: '10px' }}
            />
          </form>
          <form onSubmit={login}>
            <input 
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '250px', padding: '10px', marginBottom: '10px' }}
            />
          </form>
            <button type="submit" onClick={() => navigate('/recuperarsenha')} style={{ padding: '10px 20px', marginRight: '5px' }}>Recuperar senha</button>
            <button type="submit" onClick={() => navigate('/')} style={{ padding: '10px 20px', marginRight: '5px' }}>Entrar</button>
            <button type="submit" onClick={() => navigate('/cadastro')} style={{ padding: '10px 20px' }}>Cadastre-se</button>
        </div>
    )
}