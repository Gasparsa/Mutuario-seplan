import React,{Component} from 'react';

import './userRegister.js'
import { Link } from "react-router-dom";

import { Form, Container } from "./userRegister.js";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    cpf:"",
    error: ""
  };

  handleSignUp = e => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
        
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="cpf"
            placeholder="CPF"
            onChange={e => this.setState({ cpf: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar </button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default SignUp;