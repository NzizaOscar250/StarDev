export default function(auth={authData:null},actions){

    switch(actions.type){
        case 'AUTH':
            console.log(actions.payload)
        localStorage.setItem('auth',JSON.stringify(actions.payload))
             
        return {authData:actions?.payload};
        case 'USER_INFO':
            return {authData:actions?.payload}
        case 'UPDATE_USER_INFO':
            if(localStorage.getItem('auth')){
                let auth = JSON.parse(localStorage.getItem('auth'))
               
                auth.user = {username:actions.payload.username,email:actions.payload.email}
                localStorage.setItem('auth', JSON.stringify(auth))
                window.location.reload()
                return {authData:actions?.payload}
              }
            return auth;
        default:
            return auth;
    }
}