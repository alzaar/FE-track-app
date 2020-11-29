import React, {useState} from 'react';
import Map from './components/Map'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import IssueForm from './components/IssueForm'

function App() {
  const [showCard, setShowCard] = useState(true)
  const [showForm, setShowForm] = useState(false)
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: showCard ? '30% auto' : '15% auto',
      gridTemplateRows: '6% 20% auto 74%'
    }}>

      <div style={{
          zIndex: 1,
          gridColumn: '1/-1',
          gridRow: '0/0',
        }}>
        <Navbar showForm={showForm} handleFormDisplay={() => setShowForm(!showForm)}/>
      </div>
      
      <div style={{
        zIndex: 1,
        gridColumn: '0/0',
        gridRow: '0/-1'
      }}>
        <Sidebar showDetailCard={showCard} onClick={() => setShowCard(!showCard)}/>
      </div>

      <div style={{
        gridRowStart: 0,
        gridRowEnd: 0,
        gridColumnStart: 2,
        zIndex: 0
      }}>
        <Map/>
      </div>
      {
        showForm &&
        <IssueForm handleFormDisplay={() => setShowForm(!showForm)}/>
      }
    </div>
  );
}

export default App;
{/* <div>
        <div style={{
          gridColumnStart: 0,
          gridColumnEnd: 0,
          gridRowStart: 1,
          gridRowEnd: 1
        }}>
          side
          {/* <Sidebar/> */}
        {/*</div>
        <div style={{
          gridColumnStart: 2,
          // gridColumnEnd: 1,
          backgroundColor: 'red',
          gridRowStart: 2,
          gridRowEnd: 2
        }}>
          bye
          {/* <Map/> */}
        {/*</div>
      </div> */}