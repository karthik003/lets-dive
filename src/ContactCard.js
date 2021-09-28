import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CallIcon from '@material-ui/icons/Call';const useStyles = makeStyles({
    root: {
        marginTop:-40,
        marginBottom:10,
        width: 300,
        margin:3,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
      textAlign:"center"
    },
    status:{
        color:"grey",
        textAlign:"center"
    }
  });
function ContactCard(props) {
    const classes = useStyles();
    const data=props.data;

    return (
        <div>
        <Card className={classes.root}>
           <CardContent>
               <div  style={{justifyContent:"center",textAlign:"center"}}>
                   <img src={data.response.picture.data.url} alt ="prof_pic" style={{ width:data.response.picture.data.width+20,height:data.response.picture.data.height+20, borderRadius: "50%"}}/>
               </div>
                
               <Typography className={classes.pos} color="textSecondary">
               {data.response.name}
               </Typography>
               <Typography variant="body2" className={classes.status} component="p">
                   Offline
               </Typography>
           </CardContent>
           <CardActions style={{justifyContent:"center"}}>
                <Button size="small"  variant="contained">
                    <CallIcon fontSize="small" />&nbsp;Call
                </Button>
                <Button size="small"  variant="contained">
                    <AccountCircleIcon fontSize="small" />&nbsp;Profile
                </Button>
           </CardActions>
       </Card>
   </div>
    )
}

export default ContactCard
