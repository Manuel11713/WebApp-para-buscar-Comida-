import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import store from './Redux/store';

//Views
import Home from './Views/Home/Home.jsx';
import Receta from './Views/Receta/Receta.jsx';
const App=()=> {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/receta/:id" render={props=>{
            return(
              <Receta id={props.match.params.id}/>
            );
          }} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
