export default function (feedback={message:null,status:0},action) {

    switch (action.type) {
        case 'FEEDBACK':
            
            return {message:action?.payload.message,status:action?.payload.status}
    
        default:
            return feedback
    }
    
}