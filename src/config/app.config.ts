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
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Manager', 'Employee'],
  tenantName: 'Supermarket',
  applicationName: 'Online Grocery Store',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View products', 'Create orders', 'View orders', 'View supermarkets'],
  ownerAbilities: ['Manage users', 'Manage supermarkets', 'Manage products', 'Manage orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/d52b7d66-a77d-4fe2-9e9d-60957edac37a',
};
