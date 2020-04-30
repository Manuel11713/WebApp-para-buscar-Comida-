import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import store from './Redux/store';

//Views
import Home from './Views/Home/Home.jsx';
import Receta from './Views/Receta/Receta.jsx';
import SignUp from './Views/SignUp/SignUp.jsx';
import Login from './Views/Login/Login.jsx';
import Ruta from './Views/RotasExtras/Ruta.jsx';
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
          <Route exact path="/signUp" component={SignUp}/>

          <Route exact path="/login" component={Login}/>

          <Route exact path="/ruta/:id" render={props=>{
            return(
              <Ruta id={props.match.params.id}/>
            );
          }} />


          <Route path='*' render={()=>{
            return(
              <div>Vuelve al inicio rufian</div>
            )
          }}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
