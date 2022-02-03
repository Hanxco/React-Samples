import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import Map from './components/tasks/Map';

import ProjectState from './context/projects/projectState/ProjectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alert/alertState';
import AuthState from './context/auth/authState';
import tokenAuth from './config/authToken';
import PrivateRoot from './components/privateRoot/PrivateRoot';

// Get if exist a token available
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {
  //console.log(process.env.REACT_APP_BACKEND_URL);
  //https://coolors.co/eda531-467263-aab4c5-808632-4f772d
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/new-account" component={NewAccount} />
                <Route exact path="/map" component={Map} />
                <PrivateRoot exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );

}

export default App;
