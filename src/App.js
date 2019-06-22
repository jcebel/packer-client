import NavigationBar from './components/NavigationBar';
import BiddingProcessView from './views/BiddingProcessView';
import React from 'react';

const App = () => {
  return (
      <div className="App">
        <NavigationBar/>
        <BiddingProcessView/>
      </div>
  );
};

export default App;