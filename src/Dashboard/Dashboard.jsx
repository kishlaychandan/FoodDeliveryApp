import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import AuthContext from '../AuthContext'
function Dashboard() {
    const {logout} = useContext(AuthContext);
  return (

    <>
        <div>Welcome to Dashboard</div>
        <button onClick={logout}>logout</button>
    </>
  )
}

export default Dashboard