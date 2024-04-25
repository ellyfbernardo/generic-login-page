import {FaUser, FaLock} from 'react-icons/fa';
import {useState} from 'react';
import "./Login.css";

const Login = () => {

     const [userName, setUserName] = useState("");
     const [userPassword, setPassword] = useState("");

     const handleSubmit = (event) => {
          event.preventDefault();
          alert("Enviando os Dados: "+ userName )

     };

  return (
    <div className="container">
          <form onSubmit={handleSubmit}>
               <h1>Acesse o Sistema</h1>
               <div className='input-fields'>
                    <input type="email" placeholder="Digite seu e-mail" onChange={(e)=>setUserName(e.target.value)}/>
                    <FaUser className="icon"/>
               </div>
               <div className='input-fields'>
                    <input type="password" placeholder="Digite sua senha"
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <FaLock className="icon"/>
               </div>

               <div className='recall-forget'>
                    <label htmlFor="">
                         <input type="checkbox" />
                         Lembrar de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
               </div>

               <button>Entrar</button>

               <div className='signup-link'>
                    <p>Não tem uma conta? <a href="#">Registrar</a></p>
               </div>

          </form>
    </div>
  )
}

export default Login
