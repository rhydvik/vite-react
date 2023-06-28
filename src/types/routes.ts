export interface IRoute {
  path: string;
  element: any;
  loader: () => void;
  layout: any;
  children?: IRoute[];
}
