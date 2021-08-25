import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props)
    this.titulo = ""
    this.texto = ""

  }

  handleMundancaTitulo(event){
    event.stopPropagation()
    this.titulo = event.target.value
  }

  handleMundancaTexto(event){
    event.stopPropagation()
    this.texto = event.target.value
  }

  criarNota(event){
    event.stopPropagation()
    event.preventDefault() //evitar o carregamento da página através do evento onsubmit
    this.props.criarNota(this.titulo, this.texto) //atraves do props consegue acessar uma propriedade que foi passada no app.js
  }

  render() {
    return (
      <form className="form-cadastro "
        onSubmit = {this.criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange = {this.handleMundancaTitulo.bind(this)} //pegando função fora do render
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange = {this.handleMundancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
