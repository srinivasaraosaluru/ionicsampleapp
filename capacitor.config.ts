import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ContactsList',
  webDir: 'www',
  bundledWebRuntime: false
  // plugins: {
  //   Emarsys: {
  //     mobileEngageApplicationCode: 'EMSD5-99166',
  //     merchantId: '1F634D68EE4C9C7A',
  //     consoleLogLevels: ['info']
  //   }
  // }
};

export default config;
