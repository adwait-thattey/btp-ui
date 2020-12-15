import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import config from "../../config/config";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MarketCard(props) {
  const classes = useStyles();
  const device = props.device
  const deviceInfoPageLink = () => {
    if (device.owner === config.orgMSP) {
      return "/devices/owned/" + device.id
    }
    else {
      return "/devices/shared/" + device.id
    }
  }
  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
              className={classes.media}
              image={device.coverImage}
              title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {device.id}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {device.owner}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {device.description}
              <br /><br/>

              {/*<a href={deviceInfoPageLink()}>View Details</a>*/}
              <Button variant="outlined" color="secondary" onClick={()=>{window.location = deviceInfoPageLink()}}>
                View Details
              </Button>
            </Typography>
          </CardContent>
        </CardActionArea>
        {/*<CardActions>
          <Button size="small" color="primary">
            <a href="/devices">Owned Devices</a>
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>*/}
      </Card>
  );
}
