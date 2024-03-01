import {jwtDecode} from "jwt-decode"
const AuthHelper = {
    Logout(){
       if(this.isAuthenticated()){
            localStorage.removeItem('auth')
            localStorage.clear()
            window.location.href ="/signin"
       }
    },
    isAuthenticated(){
            if(typeof window == 'undefined' || sessionStorage.getItem('auth') == 'undefined') return false

    
      return JSON.parse(localStorage.getItem('auth'))
    },
    userInfo(){
        if(!this.isAuthenticated()) return false;
        const userId = jwtDecode(this.isAuthenticated().token)._id;

        return userId
    },
    isAdmin(){
         const auth = this.isAuthenticated()
         
       if(auth){
           if(auth.user.roles == 'admin') return true
           return false
       }

       return false
    },
  user(){
        if(!this.isAuthenticated()) return false;
        return this.isAuthenticated().user;
    }
}

export default AuthHelper;