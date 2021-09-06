import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "./components/form";
import List from "./components/list";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/" exact component={List} />
            <Route path="/create" component={Form} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
