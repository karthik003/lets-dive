import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import './Sidenav.css'
function Sidenav() {
    return (
        <div style={{position:"fixed",top:"0px",height:"100vh",backgroundColor:"#1752AA",float:"left",color:"white",width:"5%",border:"1px solid #BDBDBD"}}>
           <br />
           <IconButton color="inherit" disableRipple  >
            <div className="icon">
                <TrackChangesIcon fontSize="large" className="iconsp"/>
            </div><br />
            </IconButton>

            <IconButton color="inherit" disableRipple  >
            <div className="icon">
                <EmailIcon fontSize="large"  />
            </div><br />
            </IconButton>

            <IconButton color="inherit" disableRipple  >
                <div className="icon">
                    <PeopleAltIcon fontSize="large"  />
                </div><br />
            </IconButton>

            <IconButton color="inherit" disableRipple  >
                <div className="icon">
                    <TrendingUpIcon fontSize="large"  />
                </div>
            </IconButton>

            <IconButton color="inherit" disableRipple  >
                <div className="user-icon">
                    <AccountCircleIcon fontSize="large"  />
                </div>
            </IconButton>
        </div>
    )
}

export default Sidenav
