import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import './userSingIn'
import { Form, Container } from "./userSingIn";

import api from '../services/api.jsx';

class SignIn extends Component {
  state = {
    cpf: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { cpf, password } = this.state;
    if (!cpf || !password) {
      this.setState({ error: "Preencha cpf e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { cpf, password });
       
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="cpf"
            placeholder="cpf"
            onChange={e => this.setState({ cpf: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ cpf: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Criar conta</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);