interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Home Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Home Owner', 'Family Member', 'Property Manager', 'Service Provider'],
  tenantName: 'Company',
  applicationName: 'Home Automation System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read device information',
    'Read service information',
  ],
  ownerAbilities: [
    'Manage home information',
    'Manage devices in the home',
    'View service details',
    "Manage home devices' service information",
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/e7fc8de5-48f0-4900-8a86-51260d803b44',
};
