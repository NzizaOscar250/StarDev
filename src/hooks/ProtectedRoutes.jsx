import AuthHelper from "../helper"
import {Navigate} from "react-router-dom"
function ProtectedRoutes({children}) {
  
  if(!AuthHelper.isAuthenticated() && !AuthHelper.isAdmin()) return <Navigate to="/auth"/>
  if(AuthHelper.isAuthenticated() && !AuthHelper.isAdmin()) return <Navigate to="/staff"/>


    return children;

}

export default ProtectedRoutes