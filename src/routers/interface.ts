import React from "react";

export type IRouter = {
  loader?: any;
  path: string;
  permissionCode?: string | "ALLOW";
  component?: React.FC<any>;
  isPrivate?: boolean;
  exact?: boolean;
  name?: string;
  masterLayout?: boolean;
  routes?: Array<IRouter>;
  external?: boolean;
};
