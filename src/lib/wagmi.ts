import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'DeepBook',
  projectId: 'YOUR_PROJECT_ID', // Get this from https://cloud.walletconnect.com
  chains: [mainnet, polygon, optimism, arbitrum, base, zora],
  ssr: true,
}); 