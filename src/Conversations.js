import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RefreshIcon from '@material-ui/icons/Refresh';


function Conversations() {
    return (
        <div style={{marginLeft:"5%",position:"fixed",left:"0px",top:"0px",height:"100vh",backgroundColor:"white",float:"left",color:"black",width:"20%",border:"1px solid #BDBDBD"}}>
            <div style={{width:"100%",fontSize:"25px"}}>
                    <IconButton disableRipple size="medium">
                            <MenuIcon fontSize="medium" />
                    </IconButton>
                <b>Conversations &nbsp; &nbsp;&nbsp;&nbsp;</b>

                <IconButton disableRipple size="medium">
                            <RefreshIcon fontSize="medium" />
                </IconButton>
                </div>
            
            <br /><br />
            <div className="file-names">
            </div>
        </div>
    )
}

export default Conversations
