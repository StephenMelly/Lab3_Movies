import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
//importing header from components
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
//use bootstrap library 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
//import controlls for routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  // required for class ,setup wraps returne method.
  render() {
    // retruns components from components.js
    return (
      <Router>
        <div className="App">

          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Header} exact />
            <Route path='/read' component={Footer} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
