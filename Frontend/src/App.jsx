import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Create from './Pages/Create'
import Feed from './Pages/Feed'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<Create/>} />
        <Route path = '/feed' element = {<Feed/>} />
      </Routes>
    </div>
  )
}

export default App
