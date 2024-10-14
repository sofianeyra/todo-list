import React, { Component } from 'react';
import CrearPost from './containers/crearPost';
import PostLista from './containers/PostLista';
import Icon from './notes.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container" style={{marginTop: '30px'}}>
        <div className="row">
          <div className="col-md-6">
            <h2 className="title"><img width="48" src={Icon}/> Notas</h2>
            <CrearPost />
          </div>
          <div className="col-md-6">
            <PostLista />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
