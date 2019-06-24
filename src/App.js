import NavigationBar from './components/NavigationBar';
import RegisterDeliveryRequest from './components/RegisterDeliveryRequest';
import RegisterDeliveryRequestConf from './components/RegisterDeliveryRequestConf';
import React from 'react';

const App = () => {
  return (
      <div className="App">
        <NavigationBar/>
        <RegisterDeliveryRequestConf/>
      </div>
  );
};

export default App;