import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import skill from './components/skill';
import educations from './components/educations';
import profielio from './components/profielio';


function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home}/>
        <Switch>
          <Route path="./skills" component={skill}/>
          <Route path="./education" component={educations}/>
          <Route path="./portfolio" component={profielio}/>
          <Route path="./about" component={About}/>
          <Route path="./skills" component={skill}/>
        </Switch>

      </>
    </Router>
  );
}

export default App;
