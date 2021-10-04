import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "../components/shared/Loader";
import NavigationBar from "../components/shared/NavBar";
import { routes } from "../constants";

interface Props {}

const Home = lazy(() => import("../views/home"));
const Login = lazy(() => import("../views/auth/signin"));
const Signup = lazy(() => import("../views/auth/signup"));
const Todos = lazy(() => import("../views/todos"));

const AppRouter = (props: Props) => {
  return (
    <Router>
      <NavigationBar />
      <Suspense fallback={<Loader />}>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Switch>
            <Route path={routes.LOGIN} component={Login} />
            <Route path={routes.SIGNUP} component={Signup} />
            <Route path={routes.TODOS} component={Todos} />
            <Route exact path={routes.HOME} component={Home} />
          </Switch>
        </main>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
