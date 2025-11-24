import React from 'react';
import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './ID25/Home';
import Button from './ID25/Components/Button';
import Footer from './ID25/Footer';
import { HashRouter, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Home />
        <div className="floating-button">
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSd0OlL9ioqLxzwa6XW8mOXy-rNHWxzg4iJGjSsdq1YKwLnn-Q/viewform"
          target="_blank" rel="noopener noreferrer">
            <Button buttonType="button-floating" textStyle="h5-reduced-height">Register Now</Button>
          </Link>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
