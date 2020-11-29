import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomModal from './CustomModal'
import DetailCard from './DetailCard'

const useStyles = makeStyles({
  root: {
    width: '20vw',
    margin: 5
  },
  media: {
    height: 100,
  },
})


export default function MediaCard(props) {
  const classes = useStyles();
  const data = props.data
  const [show, setShow] = React.useState(false)
  const handleClose = () => {
    setShow(false)
  }
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => setShow(true)}>
        <CardMedia
          className={classes.media}
          image={data.photoUrl[0]} // data.photoUrl
          title={data.title}
        />
      </CardActionArea>
      <CardActions style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography gutterBottom variant="body1" component="h2">
          {data.title}
        </Typography>
        <div>
        <i className="fas fa-exclamation-triangle" style={{color: 'red', marginRight: 5, fontSize: 10}}></i>
        <i class="far fa-play-circle" style={{color: 'red', marginRight: 5, fontSize: 12}}></i>
        <Button size="small" color="primary" onClick={() => setShow(true)}>
          View Details
        </Button>
        </div>
        {props.canView &&
          <Button size="small" color="primary">
            Learn More
          </Button>
        }
        {show && 
          <CustomModal showDetails={show} buttonText='' children={(<DetailCard key={props.data.id} 
            data={props.data}
            close={handleClose}/>)}/>
        }
      </CardActions>
    </Card>
  );
}
