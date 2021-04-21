import React from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
//   import history from "./history";
import Home from '../views/Home';
import NewsPage from './../views/NewsPage/index';
import Auth from './../views/Auth';
import NotFoundPage from "../views/NotFoundPage";


export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/auth" component={Auth} />

        <Route path="/not-found" component={NotFoundPage} />

        <Redirect to="/not-found" /> 
      </Switch>
    </>
  )
};