import React from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import Login from './Components/Pages/Login';
import { Home } from './Components/Pages/Home';
import { Layout } from "./Components/Layout";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
  ></Route>
);
export default function App() {
  return (
      <NativeRouter>
        <Switch>
          <Route path='/' exact component={Login} />
          <AppRoute path="/home" exact layout={Layout} component={Home} />
        </Switch>
      </NativeRouter>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });