import axios from "axios";
import AuthHelper from "../helper"

const API = axios.create({
    baseURL: "http://localhost:7000/api"
})

API.interceptors.request.use((req)=>{
    
    if(!AuthHelper.isAuthenticated()) return req;
    req.headers.Authorization = 'Bearer '+AuthHelper.isAuthenticated().token;
    return req;
})


export const signinApi = (data)=>API.post("/auth/signin",data)

export const createMenu = (data)=>API.post(`/menu/create/${AuthHelper.userInfo()}`,data)

export const updateMenu = (data,menuId)=>API.put(`/menu/update/${AuthHelper.userInfo()}/${menuId}`,data)

export const fetchMenu = ()=>API.get("/menu");

export const getMenu = (menuId)=>API.get(`/menu/${menuId}`)

export const deleteMenu = (menuId)=>API.delete(`/menu/${AuthHelper.userInfo()}/${menuId}`)






