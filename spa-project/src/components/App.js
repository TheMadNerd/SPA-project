import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <header>
          {<Header />}
        </header>
        <main>
          <div className='Menu'>
            {<Navigation />}
          </div>

          <div className='Page'>
            {<Page />}
          </div>
        </main>
        <div className='Footer'>
          {<Footer />}
        </div>
      </div>
      </BrowserRouter>
      
    );
  }
  }
  

export default App;
