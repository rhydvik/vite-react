import { IRoute } from "types";
import {BasicLayout} from "layouts/BasicLayout";
import {Home} from "views/home/Home";

export const HomeRoute: IRoute = {
  path: "/",
  element: Home,
  loader: () => null, //console.log('Async Loader function'),
  layout: BasicLayout
}
