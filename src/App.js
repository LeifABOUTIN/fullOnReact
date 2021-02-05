import { 
  Switch,
  Route, 
  useLocation,
} from "react-router-dom";
import { AnimatePresence  } from 'framer-motion';
import './App.css';

import Homepage from './component/homepage';
import School from './component/school';
import Jobs from './component/jobs';
import Passions from './component/passions';
import Nav from './component/navigation/';
import Page404 from "./component/page404";
import Redux from './component/redux';
import { useDispatch } from 'react-redux';
import { clicks } from './actions';

function App() {

  const action = useDispatch();
  document.querySelector('*').addEventListener('click', event => {
    action(clicks(event))
  })
  const location = useLocation();
  return (
      <div className="App">
        
        <Nav />
        <AnimatePresence>
          <Switch location={location}>
            <Route path="/" exact component={Homepage}/>
            <Route path="/school" component={School}/>
            <Route path="/jobs" component={Jobs}/>
            <Route path="/passions" component={Passions}/>
            <Route path="/redux" component={Redux}/>
            <Route>
              <Page404 path="*"/>
            </Route>
          </Switch>
        </AnimatePresence>

      
      </div>
  );
}

export default App;
