import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
