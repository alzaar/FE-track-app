import { useMapEvents } from 'react-leaflet'

function MarkerClickHandler() {
  const map = useMapEvents({
    click: () => {
      // map.locate()
      console.log(123)
    },
    // locationfound: (location) => {
    //   console.log('location found:', location)
    // },
  })
  return null
}

export default MarkerClickHandler