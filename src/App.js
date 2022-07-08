import { Route, Switch } from "react-router-dom";
import BookFeature from "./Book";

function App() {
  return (
    <>
      <Switch>
        <Route path="/products" component={BookFeature} />
      </Switch>
    </>
  );
}

export default App;
