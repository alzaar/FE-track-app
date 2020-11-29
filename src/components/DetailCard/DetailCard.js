import React, { useState } from 'react'
import './detailcard.css'
import Button from '../Button'

export default function DetailCard(props) {
  const [imageIndex, setImageIndex] = useState(0)
  const images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/200',
    'https://picsum.photos/300/300'
  ]
  return (
    <div>
      <div className='title'>
        <div style={{fontSize: 12, marginBottom: 5, marginLeft: 1}}>Title Card</div>
        <div style={{
          color: 'white',
          fontSize: '0.8em',
          fontWeight: 300,
        }}>
          <span style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 76, marginBottom: 3}}>
            <img src="https://www.countryflags.io/be/flat/64.png" style={{width: 20, height: 20, marginLeft: 1}}></img>
            <div style={{position: 'relative', top: 1}}>country</div>
          </span>
        </div>
        <div style={{
          fontSize: 12,
          marginLeft: 1,
          color: '#969596'
        }}>
          <span style={{borderRight: '1px solid #5A5A5A', paddingRight: 5}}>City</span>
          <span style={{borderRight: '1px solid #5A5A5A', paddingLeft: 5, paddingRight: 5}}>Date</span>
          <span style={{borderRight: '1px solid #5A5A5A', paddingLeft: 5, paddingRight: 5}}>User</span>
        </div>
      </div>
      
      <div>
        <img src={images[imageIndex]} className='image'></img>
        {imageIndex !== images.length - 1 && <div style={{marginBottom: imageIndex !== 0 ? -20 : -22}} onClick={() => setImageIndex(imageIndex + 1)}><i className='arrow right' ></i></div>}
        {imageIndex !== 0 && <div style={{marginBottom: -21}}><i onClick={() => setImageIndex(imageIndex - 1)} className='arrow left' ></i></div>}
      </div>

      <div style={{backgroundColor: '#EEEEEF', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: 70}}>
          <span style={{borderRight: '1px solid #5A5A5A', flexGrow: 2, paddingRight: 50, color: 'black', display: 'flex', flexDirection: 'column'}}>Priority<span>symbol</span></span>
          <span style={{borderRight: '1px solid #5A5A5A', paddingLeft: 5, paddingRight: 80, flexGrow: 2, color: 'black'}}>Status</span>
          <span style={{borderRight: '1px solid #5A5A5A', paddingLeft: 5, paddingRight: 50, flexGrow: 2, color: 'black'}}>User</span>
      </div>

      <div style={{backgroundColor: '#3077AE', textAlign: 'center', fontSize: 20, color: 'white'}}>
        Description
      </div>

      <div style={{backgroundColor: 'white', fontSize: 12, color: 'black', wordWrap: 'break-word', padding: 20}}>
      LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
      </div>

      <div style={{backgroundColor: '#C8C7C7', textAlign: 'left', fontSize: 10, color: 'white', padding: 5}}>
        Address - <span>Marker Symbol</span> - Phone Symbol: Number
      </div>

      <div style={{backgroundColor: 'white', fontSize: 9, color: 'black', wordWrap: 'break-word', padding: 8}}>
      LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
      </div>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white', paddingBottom: 10 }}>
        <Button style={{width: 100, height: 22, color: 'white', borderRadius: 5, backgroundColor: '#67C272', textAlign: 'center'}} onClick={props.cancel}>Cancel</Button>
        <Button style={{width: 100, height: 22, borderRadius: 5, color: 'white', backgroundColor: '#67C272', textAlign: 'center'}}>Edit</Button>
      </div>
    </div>
  )
}