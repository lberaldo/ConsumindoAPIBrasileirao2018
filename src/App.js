import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeValue} from './fieldActions'
import { Table } from 'reactstrap';  

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {table: ''};
  }
 

  componentWillMount(){
    const cb = require('campeonato-brasileiro-api'); 
    cb.tabela('a').then(tabela => {
        this.setState({
          table: tabela
        })
        console.log(this.state.table)
    }, function(err){
        console.log(err);
    });
  };
  
  _atualizarState = (e) =>{
    const cb = require('campeonato-brasileiro-api'); 
    cb.tabela(e.target.value).then(tabela => {
        this.setState({
          table: tabela
        })
        console.log(this.state.table)
    }, function(err){
        console.log(err);
    });
  };
 
  render() {
    const valores = this.state.table;
    return (
      <div>
        <label>Serie</label>
        <select onChange={this._atualizarState}>
          <option id="1" value="a" >A</option>
          <option id="2" value="b" >B</option>    
          <option id="3" value="c" >C</option>        
       </select>
        {valores ?
        <Table>
          <tr>
              <th>Time</th>
              <th>Pontos</th>
              <th>Jogos</th>
              <th>Vitorias</th>
              <th>Derrotas</th>
          </tr>
              {
              valores.map(val =>
              <tbody>
                <tr>
                <td>{val.nome}</td>
                <td>{val.pontos}</td>
                <td>{val.jogos}</td>
                <td>{val.vitorias}</td>
                <td>{val.derrotas}</td>                 
                </tr>
              </tbody>
              )
              }
            
          </Table>
        : null
        }
      </div>
    )
  }
}

function mapStateToProps (state){
  return{
    valor: state.field.value
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( {changeValue}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


