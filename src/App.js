import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Router>
        <div class="section">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />     		
          </Switch>
        </div>
      		<Footer />
      </Router>
  </div>
  );
}

export default App