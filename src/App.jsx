import React from 'react'
import './App.css'
import Entry from "./components/Entry.jsx"
import Navbar from "./components/Navbar.jsx"
import data from "./data.js"

export default function App() {

  const entry = data.map(obj => {
    return (
      <Entry
        key={obj.id}
        {...obj}
      />
    )
  })


  return (
    <div className='container'>
      <Navbar />
      {entry}
    </div>
  )
}

