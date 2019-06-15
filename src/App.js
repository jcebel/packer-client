import NavigationBar from './components/NavigationBar';
import GoogleMaps from './components/GoogleMaps';
import React from 'react';

const App = () => {
  return (
      <div className="App">
        <NavigationBar/>
        <GoogleMaps/>

      </div>
  );
};

export default App;