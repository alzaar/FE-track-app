import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  showDetails: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
  }
}))

export default function CustomModal(props) {
  const classes = useStyles('dark')
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button size="small" color="primary" onClick={handleOpen}>
        {props.buttonText}
      </Button>
      <Modal
        open={open || props.showDetails ? true : false}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={props.showDetails ? classes.showDetails : classes.paper}>
          {props.children}
        </div>
      </Modal>
    </div>
  )
}

CustomModal.propTypes = {
  children: PropTypes.object.isRequired,
  buttonText: PropTypes.string
}

CustomModal.defaultProps = {
  children: (<p>Add text here</p>),
  buttonText: 'Submit Form'
}