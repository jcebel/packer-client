import NavigationBar from './components/NavigationBar';
import CarouselHome from './components/CarouselHome';
import React, {Component} from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';


/*const App = () => {
  return (
      <div className="App">
        <NavigationBar/>
      </div>
  );
};*/

class App extends Component {
  render() {
    return ( 
      <div className="App">  
        <NavigationBar/>
          
        </div>
       
      );
   };
};


  


export default App;