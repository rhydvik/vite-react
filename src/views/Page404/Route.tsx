import { IRoute } from "types";
import {BasicLayout} from "layouts/BasicLayout";
import Page404 from "./Page404";

export const Page404Route: IRoute = {
  path: "*",
  element: Page404,
  loader: () => null, //console.log('Async Loader function'),
  layout: BasicLayout
}
