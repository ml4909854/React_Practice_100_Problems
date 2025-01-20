import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
const Dashboard = () => {
  return (
    <div style={{display:"flex" , gap:"10px"}}>
        <p>I am a DashBoard Page</p>
        <Link to="setting">Settings</Link>
        <Link to="profile">Profiles</Link>
        <Outlet />
    </div>
  )
}

export default Dashboard