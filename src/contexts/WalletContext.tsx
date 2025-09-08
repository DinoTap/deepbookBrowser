import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ethers } from 'ethers';

interface WalletData {
  address: string;
  privateKey: string;
  mnemonic?: string;
}

interface WalletContextType {
  wallet: WalletData | null;
  isConnected: boolean;
  connectWallet: (walletData: WalletData) => void;
  disconnectWallet: () => void;
  getWalletInstance: () => ethers.Wallet | null;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [wallet, setWallet] = useState<WalletData | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  // Load wallet from localStorage on mount
  useEffect(() => {
    const savedWallet = localStorage.getItem('deepbook_wallet');
    if (savedWallet) {
      try {
        const walletData = JSON.parse(savedWallet);
        setWallet(walletData);
        setIsConnected(true);
      } catch (error) {
        console.error('Error loading wallet from localStorage:', error);
        localStorage.removeItem('deepbook_wallet');
      }
    }
  }, []);

  const connectWallet = (walletData: WalletData) => {
    setWallet(walletData);
    setIsConnected(true);
    localStorage.setItem('deepbook_wallet', JSON.stringify(walletData));
  };

  const disconnectWallet = () => {
    setWallet(null);
    setIsConnected(false);
    localStorage.removeItem('deepbook_wallet');
  };

  const getWalletInstance = (): ethers.Wallet | null => {
    if (!wallet) return null;
    
    try {
      return new ethers.Wallet(wallet.privateKey);
    } catch (error) {
      console.error('Error creating wallet instance:', error);
      return null;
    }
  };

  const value: WalletContextType = {
    wallet,
    isConnected,
    connectWallet,
    disconnectWallet,
    getWalletInstance,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};
