

import  { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router ,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
   return (
  <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<News pageSize={15} country="us" category="science"/>} />
        <Route path='Business' element={<News pageSize={15} country="us" category="Business"/>} />
        <Route path='Entertainment' element={<News pageSize={15} country="us" category="Entertainment"/>} />
        <Route path='General' element={<News pageSize={15} country="us" category="General"/>} />
        <Route path='Health' element={<News pageSize={15} country="us" category="Health"/>} />
        <Route path='Science' element={<News pageSize={15} country="us" category="Science"/>} />
        <Route path='Sports' element={<News pageSize={15} country="us" category="Sports"/>} />
        <Route path='Technology' element={<News pageSize={15} country="us" category="Technology"/>} />
      </Routes>
    </Router>
  </>
);

  }
}
