import NavigationBar from './components/NavigationBar';
import RegisterDeliveryRequest from './components/RegisterDeliveryRequest';
import React from 'react';

const App = () => {
  return (
      <div className="App">
        <NavigationBar/>
        <RegisterDeliveryRequest/>
      </div>
  );
};

export default App;