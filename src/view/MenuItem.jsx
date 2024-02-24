const MenuItem = ({ person, handleClick }) => {
  return (
    <li key={person.email} className="flex justify-between gap-x-6 py-2  my-1 border-2 px-2 rounded border-indigo-300" onClick={handleClick}>
    <div className="flex min-w-0 gap-x-4">
      <img className="h-20  w-20 flex-none  bg-gray-50 rounded-md" src={person.imageUrl} alt="" />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">25,000frw</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-xs leading-6 text-gray-900">Quantity: </p>
 
        <p className="mt-1 text-xs leading-5 text-gray-500">
        <input type="number" placeholder="Enter Quantity" className="border  outline-none  p-1 rounded w-20 shadow" value={1}/>
          {/* Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time> */}
        </p>
      
        {/* <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs leading-5 text-gray-500">Online</p>
        </div> */}
      
    </div>
  </li>
  );
};




export default MenuItem;
