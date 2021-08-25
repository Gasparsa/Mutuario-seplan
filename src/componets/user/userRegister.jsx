import React,{Component} from 'react';

import './userRegister.js'
import { Link, withRouter } from "react-router-dom";

import { Form, Container } from "./userRegister.js";

import api from '../services/api.jsx';

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    cpf:"",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { name, email, password, cpf} = this.state;
    if (!name || !email ||!cpf ||!password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("user/", { name, email,cpf, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };
  

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
        
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ name: e.target.value })}
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


export default withRouter(SignUp);