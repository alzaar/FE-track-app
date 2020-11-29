import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImagesAccordion from './ImagesAccordion';

const useStyles = makeStyles({
  root: {
    width: 'auto',
  },
  media: {
    height: 200,
  },
})


export default function DetailCard(props) {
  const classes = useStyles()
  const images = props.data.photoUrl
  const [image, setImage] = React.useState(images[0])
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image} // data.photoUrl
          title={props.data.title}
        />
        <CardContent>
        <Typography gutterBottom variant='h5'>
          {props.data.title}
        </Typography>
        <Typography gutterBottom variant='body1'>
          {props.data.description}
        </Typography>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography gutterBottom variant='body1'>
            {props.data.address}
          </Typography>
          <Typography gutterBottom variant='body1'>
            {props.data.phoneNumber === 'NA' ? 'No contact info' : props.data.phoneNumber}
          </Typography>
        </div>
        <div style={{width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'space-between'}}>
          <Typography gutterBottom variant='body1'  style={{background: '#342A21', color: 'white', borderRadius: 5, width: 75}}>
            <span> 
              {props.data.status.toUpperCase()}
            </span>
          </Typography>
          <Typography gutterBottom variant='body1'  style={{background: 'red', color: 'white', borderRadius: 5, width: 90}}>
          <span> 
            {props.data.priority.toUpperCase()}
            <i className="fas fa-exclamation-triangle" style={{paddingLeft: 5}}></i>
          </span>
          </Typography> 
        </div>
        <ImagesAccordion imageLinks={images} style={{margin: 5}}/>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={props.close}>
          Done
        </Button>
      </CardActions>
    </Card>
  );
}


DetailCard.defaultProps = {
  textVariants: {
    title: 'h5',
    description: 'p',
    phoneNumber: 'p',
    address: 'p',
    status: 'p',
    priority: 'p'
  }
}