import axios from "axios";
import QS from 'qs';
import moment from 'moment';

const authAxios = axios.create({
    baseURL : 'https://pokeapi.co/api/v2',
    paramsSerializer: function(params){
        console.log('\n\n===\n')
        console.log('params passed')
        console.log('\n===\n\n')

         return QS.stringify(params,{
             arrayFormat:'brackets',
             filter:(prefix, value)=>{
                if (
                    moment.isMoment(value) ||
                    value instanceof Date
                  ) {
                    return value.toISOString();
                  }
          
                  return value;
             }
         })
    }
})

export default authAxios;