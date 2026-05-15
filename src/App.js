import './App.css';
import { useState } from 'react';

function Cadastro() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipo, setTipo] = useState("");
  
  function handleCadastro() {
    if (email === '' || password === '' || user === '') {
      setMensagem("Preencha todos os campos");
      setTipo("erro");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setMensagem("Email inválido");
      setTipo("erro");
      return;
    }

  setMensagem("Cadastro realizado com sucesso");
  setTipo("sucesso");

  }

  return (
    <div className='container'>
      <h2 style={{ color: "white" }}>Cadastro</h2>

      <input
        type="text"
        placeholder="Digite seu Nome"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        type="email"
        placeholder="Digite seu Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Digite sua Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleCadastro}>Cadastrar</button>

      {mensagem && <p className={tipo}>{mensagem}</p>}
    </div>

  );
}

export default Cadastro;