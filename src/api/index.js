import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost/server/"
})


export const fetchProjects = ()=>API.get("/project");
export const fetchComponents = (projectId)=>API.get(`components/${projectId}`);
export const fetchActivities = (componentID)=>API.get(`/activities/${componentID}`);
export const fetchSubActivities = (activityId)=>API.get(`/subactivities/${activityId}`);

// create
export const createProjects = (data)=>API.post("/project",data);
export const createComponent = (projectId,data)=>API.post(`/components/${projectId}`,data);
export const createActivity = (componentId,data)=>API.post(`/activities/${componentId}`,data);
export const createSubActivity = (activityId,data)=>API.post(`/subactivities/${activityId}`,data);


// update
export const updateProjects = (data)=>API.put("/project",data);

export const updateComponent = (projectId,data)=>API.put(`/components/${projectId}`,data);

export const updateActivity = (componentId,activityId,data)=>API.put(`/activities/${componentId}/${activityId}`,data);

export const updateSubActivity = (activityId,subactivityId,data)=>API.put(`/subactivities/${activityId}/${subactivityId}`,data);




// edit


// update




