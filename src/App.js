import NavigationBar from './components/NavigationBar';
import MonitorList from './components/MonitorList'
import React from 'react';

const App = () => {
  return (
      <div className="App">
        <NavigationBar/>
        <MonitorList/>
      </div>
      //TODO: Find out how to organize App.js
  );
};

export default App;