export type IDevice = {
  id?: any;
  deviceID: string;
  type: string;
  name: string;
  username: string;
  IPAddress: string;
  password: string;
  service: [];
};

export type IService = {
  id?: any;
  serviceID: string;
  name: string;
  description: string;
  min: number;
  max: number;
  prefix: string;
  surfix: string;
  isReset: boolean;
};
