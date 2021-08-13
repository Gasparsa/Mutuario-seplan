import React,{Component} from 'react';
import axios from 'axios';
import './userRegister.css'
const baseUrl = ""
const initialState = {
    user: {name:'', email:'',cpf:'',senha:''},
    list: []
}
export default class userRegister extends Component {
    state = {...initialState}

    clear() {
        this.setState({user :initialState.user})
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp=> {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list})
            })

    }
    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    renderForm(){
        return(
            <div className="form">
                <div className = 'row'>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type='text' className='form-control'
                                name="name"
                                value= {this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite seu nome"/>
                        </div>
                    </div>
                <div className = 'row'>    
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite seu e-mail" />
                        </div>
                    </div>
                </div>
                <div className = 'row'>    
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>CPF</label>
                            <input type="text" className="form-control"
                                name="cpf"
                                value={this.state.user.cpf}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite seu CPF" />
                        </div>
                    </div>
                </div>
                <div className = 'row'>    
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Senha</label>
                            <input type="text" className="form-control"
                                name="senha"
                                value={this.state.user.senha}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite sua senha" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Cadastrar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )

    }
    render(){
        return(
            <main>
                {this.renderForm()}
            </main>
        )
    }
}