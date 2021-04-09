import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import OrderHistory from "./routes/OrderHistory";
import UserCheckout from "./routes/UserCheckout";
import { SneakerContextProvider } from "./context/SneakerContext";

function App() {
  return (
    <SneakerContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={UserCheckout} />
            <Route exact path="/history" component={OrderHistory} />
          </Switch>
        </Router>
      </div>
    </SneakerContextProvider>
  );
}

export default App;
