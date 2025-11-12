import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import { Landing } from './pages/Landing';
import ReadCrewmates from './pages/ReadCrewmates';
import CreateCrewmate from './pages/CreateCrewmate';
import EditCrewmate from './pages/EditCrewmate';
import { Link } from 'react-router-dom'
import peeking from './assets/peeking.png'


const App = () => {
  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "/gallery",
      element: <ReadCrewmates />
    },
    {
      path: "/gallery/edit/:id",
      element: <EditCrewmate />
    },
    {
      path: "/new",
      element: <CreateCrewmate />
    }
  ]);

  return (

    <div className="App">

      <div className="sidenav">
        <a href="/" style={{ color: "white", margin: "20px" }}>Home</a>
        <a href="/new" style={{ color: "white", margin: "20px" }}>Create a Crewmate!</a>
        <a href="/gallery" style={{ color: "white", margin: "20px" }}>Crewmate Gallery</a>
        <img
          src={peeking}
          className="single-crewmate"
          height="150px"
          width="auto"
          style={{ position: "absolute", bottom: "10px" }}
        />
      </div>

      {element}

    </div>

  )
}

export default App