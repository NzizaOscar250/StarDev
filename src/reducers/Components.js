export default function Components(data=[],action) {
    switch (action.type) {
        
       case 'CREATE_COMPONENTd':
           
           return [...data,action.payload]
        case 'FETCH_COMPONENTS':
            return action.payload        
    
       default:
           return data;
    }
}