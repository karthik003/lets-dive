import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    root: {
        width: 300,
        margin:3
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
function Deets(props) {
    const classes = useStyles();
    const data=props.data;

    return (
        <div>
             <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Customer Details
                    </Typography>
                    <List>
                        <ListItem>
                          <ListItemText >
                            <Typography variant="subtitle1" align="left">
                              Email
                            </Typography>
                          </ListItemText>
                          <ListItemText
                            secondary={data.response.email}
                            style={{textAlign:"right"}}
                          />
                        </ListItem>
                        <Divider varient="inset" />
                        <ListItem>
                          <ListItemText >
                            <Typography variant="subtitle1" align="left">
                              First Name
                            </Typography>
                          </ListItemText>
                          <ListItemText
                            secondary={data.response.name.split(" ")[0]}
                            style={{textAlign:"right"}}
                            />
                        </ListItem>
                        <Divider varient="inset" />
                        <ListItem>
                          <ListItemText >
                            <Typography variant="subtitle1" align="left">
                              Last Name
                            </Typography>
                          </ListItemText>
                          <ListItemText
                            secondary={data.response.name.split(" ")[1]}
                            style={{textAlign:"right"}}

                            />
                        </ListItem>
                    </List>
                </CardContent>
                <CardActions style={{justifyContent:"center"}}>
                    <Button size="small" color="primary">View More Details</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Deets
