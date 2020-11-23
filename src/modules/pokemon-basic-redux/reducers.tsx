 import { combineReducers } from 'redux';
import PokemonListReducers from './reducers-basic/pokemonReducers_basic';
import PokemonReducersThis_basic from './reducers-basic/pokemonReducersThis_basic';
 const rootReducers = combineReducers({
    PokemonList: PokemonListReducers,
    ThisPokemon: PokemonReducersThis_basic 
 });

 export default rootReducers;