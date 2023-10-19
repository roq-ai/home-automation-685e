import { HomeDeviceInterface } from 'interfaces/home-device';
import { GetQueryInterface } from 'interfaces';

export interface HomeInterface {
  id?: string;
  address: string;
  city: string;
  state: string;
  zip_code: number;
  country: string;
  created_at?: any;
  updated_at?: any;
  home_device?: HomeDeviceInterface[];

  _count?: {
    home_device?: number;
  };
}

export interface HomeGetQueryInterface extends GetQueryInterface {
  id?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}
