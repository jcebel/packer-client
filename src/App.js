import {NavigationBar} from './components/NavigationBar';
import {RoutesListView} from './views/RoutesListView';
import React from 'react';

const App = () => {
  return (
      <div className="App">
        <NavigationBar/>
        <RoutesListView/>
      </div>
  );
};

export default App;