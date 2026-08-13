

import { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
   pageSize = 15;
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<News key="General" pageSize={this.pageSize} country="us" category="General" />} />
            <Route path='/Business' element={<News key="Business" pageSize={this.pageSize} country="us" category="Business" />} />
            <Route path='/Entertainment' element={<News key="Entertainment" pageSize={this.pageSize} country="us" category="Entertainment" />} />
            <Route path='/General' element={<News key="General" pageSize={this.pageSize} country="us" category="General" />} />
            <Route path='/Health' element={<News key="Health" pageSize={this.pageSize} country="us" category="Health" />} />
            <Route path='/Science' element={<News key="Science" pageSize={this.pageSize} country="us" category="Science" />} />
            <Route path='/Sports' element={<News key="Sports" pageSize={this.pageSize} country="us" category="Sports" />} />
            <Route path='/Technology' element={<News key=" Technology" pageSize={this.pageSize} country="us" category="Technology" />} />
          </Routes>
        </Router>
      </>
    );

  }
}
