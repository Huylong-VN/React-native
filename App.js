import React from "react";
import {  View } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import Setting from './Components/Pages/Setting';
import Layout from './Components/Layout';
import PostDetail from "./Components/Pages/PostDetail";
import Update from "./Components/Pages/Update";
import { StackNavigator } from 'react-navigation';

export default function App() {
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
    return (
      <NativeRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <AppRoute path="/" exact layout={Layout} component={Home} />
            <AppRoute path="/setting" exact layout={Layout} component={Setting} />
            <AppRoute path="/detail" exact layout={Layout} component={PostDetail} />
            <AppRoute path="/update" exact layout={Layout} component={Update} />
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