import React from 'react'
import "./topbar.css"
import {NotificationsNone} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className = "topLeft">
                <span className= "name"> Jane Doe</span>
                <span className= "manager"> Manager</span>
            </div>
            <img src = "https://img.texasmonthly.com/2021/11/walker-county-jane-doe-sherri-jarvis.jpg?auto=compress&crop=faces&fit=fit&fm=webp&h=0&ixlib=php-1.2.1&q=45&w=1850" art="" className="topAvatar"/>
        </div>
    </div>
  )
}
