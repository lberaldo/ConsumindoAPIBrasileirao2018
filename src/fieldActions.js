export function changeValue(e){
        return {
            type: 'VALUE_CHANGED',
            payload: e.target.changeValue //pode ser qualquer coisa, dados etc, texto;
            // o dado que vem junto com a ação, 
        }
}