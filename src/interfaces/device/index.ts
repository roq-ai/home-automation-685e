import { HomeDeviceInterface } from 'interfaces/home-device';
import { GetQueryInterface } from 'interfaces';

export interface DeviceInterface {
  id?: string;
  name: string;
  model: string;
  manufacturer: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  home_device?: HomeDeviceInterface[];

  _count?: {
    home_device?: number;
  };
}

export interface DeviceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  model?: string;
  manufacturer?: string;
  status?: string;
}
