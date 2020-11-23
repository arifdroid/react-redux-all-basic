 import { combineReducers } from 'redux';
import PokemonListReducers from './reducers-basic/pokemonReducers_basic';
 const rootReducers = combineReducers({
    PokemonList: PokemonListReducers
 });

 export default rootReducers;