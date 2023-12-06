import React from 'react'; 

export default function header() {
    return (
<div>
<div className='header flex justify-content bg-light p-3'>
    <div className='flex justify-content-start pl-10 gap-5'>
        <div className='logo'>Logo</div>
        <div className='home'>Home</div>
    </div>
        <div className='flex justify-content-end pr-10  gap-5 flex-auto'>
            <div>Notification</div>
            <div>Logout</div>
        </div>
</div>
</div>
    )
}