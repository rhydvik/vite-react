import {createBrowserRouter} from "react-router-dom";
import {IRoute} from "types";
import {HomeRoute, Page404Route} from "views";

// all routes can come here and we can use loader function to handle redirects if needed
// this is how: https://reactrouter.com/en/main/start/overview#redirects
const Routes = [
  HomeRoute,
  Page404Route
]

// TODO we should have a props check of what this function returns
const getRoutes = (Routes: IRoute[]) => {
  return Routes.map(({element: Component, layout: Layout, ...rest}: IRoute) => ({
    element: <Layout><Component /></Layout>,
    ...rest,
  }))
}

export const router = createBrowserRouter(getRoutes(Routes))
