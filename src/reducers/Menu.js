export default function(data=[],action){

    switch(action.type){
        case 'CREATE_MENU':
             return [...data,action.payload]
        case 'FETCH_MENU':
              return action.payload
        case 'DELETE_MENU':
             return action.payload
        case 'UPDATE_MENU':
             return action.payload          
        default:
            return data;
    }
}