import React from 'react'
import ContactCard from './ContactCard'
import Deets from "./Deets"
function Profile(props) {
    const data=props.data;
    // console.log(data)
    return (
        <div style={{marginLeft:"5%",position:"fixed",right:"0px",top:"0px",height:"100vh",backgroundColor:"#1752AA",float:"left",color:"white",width:"20%",border:"1px solid #BDBDBD"}}>
        <br /><br />
        <div className="file-names">
            <ContactCard data={data}/>
            <Deets data={data}/>
        </div>
    </div>
    )
}

export default Profile
