import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'in.altercraft.operatordesk',
  appName: 'AlterCraft OperatorDesk',
  webDir: 'build',
  server: {
    androidScheme: 'https',
  },
};

export default config;
