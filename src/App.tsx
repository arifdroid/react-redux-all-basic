import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route , NavLink, Redirect} from 'react-router-dom';
import PokemonList from './view/PokemonList';
import Pokemon from './view/Pokemon';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <nav>
          <NavLink to={'/'} >Search</NavLink>
          
        </nav>
        <Switch>
          <Route path={'/'} exact component={PokemonList}></Route>
          <Route path={'/poke-list/:id'} component={Pokemon}></Route>
          <Redirect to={'/'}></Redirect>
        </Switch>
      
      
    </div>
  );
}

export default App;
