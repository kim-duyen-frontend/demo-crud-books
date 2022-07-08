import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

const BookFeature = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={match.url} component={ListPage} />
        <Route path={`${match.url}/:productId`} component={DetailPage} />
      </Switch>
    </>
  );
};

export default BookFeature;
