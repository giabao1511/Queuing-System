export type IDashboardCard = {
  icon: any;
  content: string;
  data: number;
  trend: boolean;
  rate: string;
};

export type IChildrenSidebar = {
  label: React.ReactNode;
  key: number;
  route: string;
};
