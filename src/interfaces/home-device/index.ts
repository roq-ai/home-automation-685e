import { HomeInterface } from 'interfaces/home';
import { DeviceInterface } from 'interfaces/device';
import { ServiceInterface } from 'interfaces/service';
import { GetQueryInterface } from 'interfaces';

export interface HomeDeviceInterface {
  id?: string;
  home_id: string;
  device_id: string;
  installation_date?: any;
  warranty_expiry?: any;
  service_id: string;
  created_at?: any;
  updated_at?: any;

  home?: HomeInterface;
  device?: DeviceInterface;
  service?: ServiceInterface;
  _count?: {};
}

export interface HomeDeviceGetQueryInterface extends GetQueryInterface {
  id?: string;
  home_id?: string;
  device_id?: string;
  service_id?: string;
}
