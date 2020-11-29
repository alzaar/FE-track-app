import React from 'react'
import './map.css'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import CustomMarker from './CustomMarker'

class Map extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      cityCoord: [45.5017, -73.5673]
      // [24.8607, 67.0011]
    }
  }
  
  render() {
    return (
      <div>
        <MapContainer maxBounds={[[-90,-180],   [90,180]]} className='mapContainer' zoomControl={false} minZoom={2} center={this.state.cityCoord} zoom={12} style={{height: '100vh', width: '100.95%'}} >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/sibirov153/ckh2a5ai90ksl19prbt45f6tn/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
          />
          <ZoomControl position='topright'/>
          <CustomMarker position={this.state.cityCoord}/>
        </MapContainer>
      </div>
    )
  }
}

export default Map