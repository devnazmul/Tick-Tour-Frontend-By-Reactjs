import NotFound from "./Pages/NotFound/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthProvider";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Home from "./Pages/Home/Home";
import Destinations from "./Pages/Home/Components/Services/Destinations";
import AddDestination from "./Pages/Admin/AddDestination/AddDestination";
import PrivateRoute from './Private/PrivateRoute';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Contact from "./Pages/Home/Components/Contact/Contact";
import AllOrders from "./Pages/Admin/AllPurchase/AllOrders";
import Purchase from "./Pages/Purchase/Purchase";
import MyAllOrders from "./Pages/Users/MyOrders/MyAllOrders";
import PurchaseDone from "./Pages/PurchaseDone/PurchaseDone";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Header />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/destinations">
              <Destinations />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/done_purchase">
              <PurchaseDone />
            </PrivateRoute>
            <PrivateRoute exact path="/admin/add_destinations">
              <AddDestination />
            </PrivateRoute>
            <PrivateRoute exact path="/my_orders">
              <MyAllOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/all_orders">
              <AllOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/purchase/:_id">
              <Purchase />
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>


          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
