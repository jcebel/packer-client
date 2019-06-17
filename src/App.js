import NavigationBar from './components/NavigationBar';
import BiddingOverview from './components/BiddingOverview';
import React from 'react';

const App = () => {
  return (
      <div className="App">
        <NavigationBar/>
        <BiddingOverview/>
      </div>
  );
};

export default App;