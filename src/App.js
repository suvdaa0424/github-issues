import "./styles.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IssueList from "./pages/IssueList";
import IssueDetail from "./pages/IssueDetail";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Switch>
            <Route exact path="/">
              <IssueList />
            </Route>
            <Route path="/issues/:issueId">
              <IssueDetail />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
