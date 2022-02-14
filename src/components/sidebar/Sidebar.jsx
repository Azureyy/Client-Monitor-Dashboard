import "./sidebar.css"
import {AutoAwesomeMosaicRounded} from '@mui/icons-material'
import {AccountBoxRounded} from '@mui/icons-material';
import {InsertChartRounded} from '@mui/icons-material';
import {CreditCardRounded} from '@mui/icons-material';
import {SettingsRounded} from '@mui/icons-material';

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className = "container">
                <div className = "sidebarWrapper">
                    <div className = "sidebarMenu">
            
                        <u1 className = "sidebarList">
                        <img src = "https://img.texasmonthly.com/2021/11/walker-county-jane-doe-sherri-jarvis.jpg?auto=compress&crop=faces&fit=fit&fm=webp&h=0&ixlib=php-1.2.1&q=45&w=1850" className="profile"/>
                            <li className = "sidebarListItem">
                                <AutoAwesomeMosaicRounded sx = {{color: "white" }}/>
                                <span className="iconName">Dashboard</span>
                            </li>
                            <li className = "sidebarListItem active">
                                <AccountBoxRounded sx = {{color: "white" }}/>
                                <span className="iconName">Clients</span>
                            </li>
                            <li className = "sidebarListItem">
                                <CreditCardRounded sx = {{color: "white" }}/>
                                <span className="iconName">Sales</span>
                            </li>
                            <li className = "sidebarListItem">
                                <InsertChartRounded sx = {{color: "white" }}/>
                                <span className="iconName">Analytics</span>
                            </li>
                            <li className = "sidebarListItem">
                                <SettingsRounded sx = {{color: "white" }}/>
                                <span className="iconName">Settings</span>
                            </li>
                        </u1>
                        
                    </div>
                    
                </div>  
                
            </div>
        </div>
    )
}