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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee', 'Accountant'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read employee information',
    'Read vacation information',
  ],
  ownerAbilities: [
    'Manage company information',
    'Manage employee records',
    'Manage vacation requests',
    'Manage payroll information',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/a05f5a3d-4ec4-47c9-9593-b4cd9a33d76b',
};
