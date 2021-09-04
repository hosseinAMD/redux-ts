import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "./components/form";
import List from "./components/list";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/create" component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
