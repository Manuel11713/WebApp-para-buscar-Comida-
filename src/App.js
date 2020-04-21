import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import store from './Redux/store';

//Views
import Home from './Views/Home/Home.jsx';

const App=()=> {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
