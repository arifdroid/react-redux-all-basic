import authAxios from "../authAxios";


export default class PokemonService{
    static async getPokemonList(){
        
        const response = await authAxios.get('/pokemon')

        return response.data;

    }

    static async getPokemonDataId(){

    }
}