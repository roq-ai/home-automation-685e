import { HomeDeviceInterface } from 'interfaces/home-device';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  name: string;
  description?: string;
  cost: number;
  duration: number;
  created_at?: any;
  updated_at?: any;
  home_device?: HomeDeviceInterface[];

  _count?: {
    home_device?: number;
  };
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
