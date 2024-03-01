import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAuthorized() {
  const [auth, setAuth] = useState(null);
const nav = useNavigate()
  useEffect(() => {
     
    setAuth(localStorage.getItem("auth"))

  }, [nav]);

  if(!auth) return false
  
  return [auth];
}