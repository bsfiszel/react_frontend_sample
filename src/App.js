import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Summaries from "./component/Summaries.js";
import Author from './component/Author';
import PostFull from './component/PostFull';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = "/">
            <Summaries> </Summaries>
          </Route>
          <Route path = "/author/:authorId">
            <Author> </Author>
          </Route>
          <Route path = "/post/:postId">
            <PostFull> </PostFull>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
