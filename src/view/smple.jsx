const [contextMenuVisible, setContextMenuVisible] = useState(false);
const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
const [noCounter, setNoCounter] = useState(1); // Counter for "No" column
const [activityCounter, setActivityCounter] = useState(1); // Counter for activity numbering
const [subActivityCounters, setSubActivityCounters] = useState({}); // Counter for subactivity numbering

function handleContextMenu(event) {
    event.preventDefault();

    // Store the position of the right-click
    setContextMenuPosition({ x: event.clientX, y: event.clientY });

    // Show the context menu
    setContextMenuVisible(true);
}

function hideContextMenu() {
    // Hide the context menu
    setContextMenuVisible(false);
}

function handleAddComponent() {
    console.log('Add Component clicked');
    hideContextMenu();
    setNoCounter(prevCounter => prevCounter + 1); // Increment the counter for "No" column
    handleShowComponent()
}

function handleAddActivity() {
    console.log('Add Activity clicked');
    hideContextMenu();
    const newActivityCounter = activityCounter + 1;
    setActivityCounter(newActivityCounter); // Increment the activity counter
    setSubActivityCounters(prevCounters => ({ ...prevCounters, [newActivityCounter]: 1 })); // Initialize subactivity counter for this activity
    handleShowActivity()
}

function handleAddSubactivity(activityId) {
    console.log(`Add Subactivity for activity ${activityId} clicked`);
    
    hideContextMenu();
    const subActivityCounter = subActivityCounters[activityId] + 1;
    handleShowSubActivity()
    setSubActivityCounters(prevCounters => ({ ...prevCounters, [activityId]: subActivityCounter })); // Increment the subactivity counter for this activity

}




















{contextMenuVisible && (
                <div
                    className='px-2 rounded'
                    style={{
                        position: 'fixed',
                        top: contextMenuPosition.y,
                        left: contextMenuPosition.x,
                        backgroundColor: 'white',
                        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
                        padding: '5px'
                    }}
                >
                    <div onClick={handleAddComponent}>
                        <a href='#' className='text-secondary fw-light py-1 d-block'>Add Component</a>
                    </div>
                    <div onClick={handleAddActivity}>
                        <a href='#' className='text-secondary fw-light py-1 d-block'>Add New Activity</a>
                    </div>
                    <div onClick={() => handleAddSubactivity(activityCounter)}>
                        <a href='#' className='text-secondary fw-light py-1 d-block'>Add Subactivity</a>
                    </div>
                    <div>
                        <a href='#' className='text-secondary fw-light py-1 d-block'>Export Excel</a>
                    </div>
                    <div>
                        <a href='#' className='text-secondary fw-light py-1 d-block'>Export PDF</a>
                    </div>
                    <div>
                        <a href='#' className='fw-light py-1 d-block text-danger'>Delete</a>
                    </div>
                </div>
            )}