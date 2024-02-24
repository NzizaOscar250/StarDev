export default function Activities(data=[],action) {
    switch (action.type) {
       case 'FETCH_ACTIVITIES':
         
           return action.payload;
    
       default:
           return data;
    }
}