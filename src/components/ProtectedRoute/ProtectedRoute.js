import React from 'react';
import { Route, Link } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {

  return (
    <Route>
      {
        () => props.isLogin ? <Component {...props} /> : <Link to="/signin" />
      }
    </Route>
  )
}
export default ProtectedRoute;
