const INITIAL_STATE = {
    valor: 'opa'
};

//recebe o state atual, e dps o action com o parametro vindo do fieldactions
export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case 'VALUE_CHANGED': 
            return{
                //retorna o valor com um novo objeto de estado.
                valor: action.payload
            }
        default:
        return state
    }
}