export default function SubActivities(data = [], action) {
    switch (action.type) {
        case 'FETCH_SUB_ACTIVITIES':
            return action.payload;

        case 'UPDATE_SUBACTIVITY':
            return data.map(subactivity =>
                subactivity.sub_id === action.payload.sub_id 
                    ? action.payload // Update the subactivity with the new data
                    : subactivity // Keep other subactivities unchanged
            );

        default:
            return data;
    }
}
