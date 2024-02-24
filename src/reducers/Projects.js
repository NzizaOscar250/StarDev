export default function Projects(data=[],action) {
    switch (action.type) {
        case 'FETCH_PROJECTS':
            return action.payload;
       case 'CREATE_PROJECT':
         return [...data,action.payload];
        case 'CREATE_COMPONENT':
         
            return data.map(project =>
                project.id === action.payload.project_id
                  ? { ...project, components: [...project.components, action.payload] }
                  : project
              );
        case 'UPDATE_COMPONENT':
                return data.map(project =>
                  project.id === action.payload.project_id
                    ? {
                        ...project,
                        components: project.components.map(component =>
                          component.comp_id === action.payload.updatedComponent.comp_id ? action.payload.updatedComponent : component
                        )
                      }
                    : project
                );
        case 'DELETE_COMPONENT':
                    return data.map(project =>
                      project.id === action.payload.project_id
                        ? { ...project, components: project.components.filter(component => component.comp_id !== action.payload.comp_id) }
                        : project
                    );
                  
        case 'CREATE_ACTIVITY':
                return data.map(project => ({
                  ...project,
                  components: project.components.map(component => ({
                    ...component,
                    activities: component.comp_id === action.payload.component_id
                      ? [...component.activities, action.payload]
                      : component.activities
                  }))
                }));
            case 'DELETE_ACTIVITY':
                    return data.map(project => ({
                      ...project,
                      components: project.components.map(component => ({
                        ...component,
                        activities: component.comp_id === action.payload.comp_id
                          ? component.activities.filter(activity => activity.act_id !== action.payload.act_id)
                          : component.activities
                      }))
                    }));
             case 'UPDATE_ACTIVITY':
                        return data.map(project => ({
                          ...project,
                          components: project.components.map(component => ({
                            ...component,
                            activities: component.comp_id === action.payload.comp_id
                              ? component.activities.map(activity =>
                                  activity.act_id === action.payload.updatedActivity.act_id
                                    ? action.payload.updatedActivity
                                    : activity
                                )
                              : component.activities
                          }))
                        }));
                                       
                case 'CREATE_SUBACTIVITY':
                            return data.map(project => ({
                                ...project,
                                components: project.components.map(component => ({
                                ...component,
                                activities: component.activities.map(activity => ({
                                    ...activity,
                                    subactivities:
                                    activity.act_id === action.payload.activity_id
                                        ? [...activity.subactivities, action.payload]
                                        : activity.subactivities
                                }))
                                }))
                            }));
                  case 'UPDATE_SUB_ACTIVITY':
                              return data.map(project => ({
                                  ...project,
                                  components: project.components.map(component => ({
                                      ...component,
                                      activities: component.activities.map(activity => ({
                                          ...activity,
                                          subactivities: activity.subactivities.map(subactivity =>
                                              subactivity.sub_id === action.payload.sub_id
                                                  ? action.payload
                                                  : subactivity
                                          )
                                      }))
                                  }))
                              }));
                  case 'DELETE_SUB_ACTIVITY':
                                return data.map(project => ({
                                    ...project,
                                    components: project.components.map(component => ({
                                        ...component,
                                        activities: component.activities.map(activity => ({
                                            ...activity,
                                            subactivities: activity.subactivities.filter(subactivity =>
                                                subactivity.sub_id !== action.payload.sub_id
                                            )
                                        }))
                                    }))
                                }));
                            
                          

            default:
           return data;
    }
}