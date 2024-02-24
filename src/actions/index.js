import * as API from "../api"


export const fetchProjects = ()=>async(dispatch)=>{
    try {
        const {data} = await API.fetchProjects()
       
        dispatch({type:"FETCH_PROJECTS",payload: data})
    } catch (error) {
        console.log(error.message);
    }
}


export const fetchComponents = (pid)=>async(dispatch)=>{
    try{
        const {data} = await API.fetchComponents(pid);
        dispatch({type: "FETCH_COMPONENTS",payload: data})
    }
    catch(error){
        console.log(error.message)
    }
}


export const fetchActivities = (compId)=>async(dispatch)=>{
    try{
        const {data} = await API.fetchActivities(compId);
        dispatch({type: "FETCH_ACTIVITIES",payload: data})
    }
    catch(error){
        console.log(error.message)
    }
}



export const fetchSubActivities = (actId)=>async(dispatch)=>{
    try{
        const {data} = await API.fetchSubActivities(actId);
        dispatch({type: "FETCH_SUB_ACTIVITIES",payload: data})
    }
    catch(error){
        alert("ERROR::404 Network ERROR!!. check connectivity ")
        console.log(error.message)
    }
}



// ___________________________create_____________________





export const createProjects = (info)=>async(dispatch)=>{
    try {
        const {data} = await API.createProjects(info)
        alert("Project Created Successfully...")
        dispatch({type:'CREATE_PROJECT',payload: data})

    } catch (error) {
        alert("ERROR::404 System unable to project! ")
        console.log(error.message)
    }
}

export const createComponent = (projectId,info)=>async(dispatch)=>{
    try {
        const {data} = await API.createComponent(projectId,info)
        dispatch({type:'CREATE_COMPONENT',payload:data})

    } catch (error) {
        alert("ERROR::404 System unable to create component! ")
        console.log(error.message)
    }
}
export const createActivity = (componentId,info)=>async(dispatch)=>{
    try {
        const {data} = await API.createActivity(componentId,info)
        dispatch({type:"CREATE_ACTIVITY",payload:data})
    } catch (error) {
        alert("ERROR::404 System unable to create! ")
        console.log(error.message)
    }
}
export const createSubActivity = (activityId,info)=>async(dispatch)=>{
    try {
        const {data} = await API.createSubActivity(activityId,info)
        dispatch({type:"CREATE_SUBACTIVITY",payload:data})
    } catch (error) {
        alert("ERROR::404 System unable to create! ")
        console.log(error.message)
    }
}

// ___________________________update_____________________





export const updateProjects = (info)=>async(dispatch)=>{
    try {
        const {data} = await API.createProjects(info)
        dispatch({type:'UPDATE_PROJECT',payload: data})
        alert("Project Updated Successfully")
    } catch (error) {
        alert("ERROR::404 Project Not created ")
        console.log(error.message)
    }
}

export const updateComponent = (projectId,info)=>async(dispatch)=>{
    try {
        const {data} = await API.createComponent(projectId,info)
        dispatch({type:'UPDATE_COMPONENT',payload:data})
        alert("Updated Successfully...")

    } catch (error) {
        alert("ERROR::404 System unable to update! ")
        console.log(error.message)
    }
}

export const updateActivity = (componentId,activityId,info)=>async(dispatch)=>{
    try {
        const {data} = await API.updateActivity(componentId,activityId,info)
        dispatch({type:"UPDATE_ACTIVITY",payload:data})
        alert("Updated Successfully...")

    } catch (error) {
        console.log(error.message)
        alert("ERROR::404 System unable to update! ")
    }
}

export const updateSubActivity = (activityId,subactivityId,info)=>async(dispatch)=>{
    try {
        const {data} = await API.updateSubActivity(activityId,subactivityId,info)
        dispatch({type:"UPDATE_SUBACTIVITY",payload:data})
        alert("Updated Successfull...")
        dispatch({type:"UPDATE_SUB_ACTIVITY",payload:data})
    } catch (error) {
        alert("ERROR::404 System unable to update! ")
        console.log(error.message)
    }
}




