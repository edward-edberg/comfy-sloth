import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  SingleProduct,
  Products,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route
            exact
            path="/products/:id"
            children={<SingleProduct />}
          ></Route>
          <PrivateRoute exact path="/checkout">
            <Checkout />
          </PrivateRoute>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Sidebar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<SingleProduct />} />
//         <Route
//           path="/checkout"
//           element={
//             <PrivateRoute>
//               <Checkout />
//             </PrivateRoute>
//           }
//         />
//         <Route path="*" element={<Error />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

export default App;
