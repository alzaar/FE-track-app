import MarkerClickHandler from './MarkerClickHandler'
import { Marker } from 'react-leaflet'
import React from 'react'

function CustomMarker(props) {
  return (
    <div>
    <Marker position={props.position} >
      <MarkerClickHandler/>
    </Marker>
    </div>
  )
}

export default CustomMarker