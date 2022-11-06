export type ISideBar = {
  tabItems: {
    label: React.ReactNode;
    key: number;
    route: string;
  }[];
  childrenComponent?: any;
  setChildrenComponent?: any;
};
