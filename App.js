import React from "react";
import {  View } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import Login from './Components/Pages/Login';

export default function App() {
    return (
      <NativeRouter>
          <Switch>
            <Route exact path="/" component={Login} />
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