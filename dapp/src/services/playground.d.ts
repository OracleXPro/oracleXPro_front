import { CustomChainConfig } from "@web3auth/base";
import React, { ReactNode } from "react";
import { IWalletProvider } from "./walletProvider";
export interface IPlaygroundContext {
    walletProvider: IWalletProvider | null;
    isLoading: boolean;
    address: string;
    balance: string;
    chainList: {
        [key: string]: CustomChainConfig;
    };
    chainListOptionSelected: string;
    chainId: string;
    playgroundConsole: string;
    connectedChain: CustomChainConfig;
    getUserInfo: () => Promise<any>;
    getAddress: () => Promise<string>;
    getBalance: () => Promise<string>;
    getSignature: (message: string) => Promise<string>;
    sendTransaction: (amount: string, destination: string) => Promise<string>;
    getPrivateKey: () => Promise<string>;
    getChainId: () => Promise<string>;
    deployContract: (abi: any, bytecode: string, initValue: string) => Promise<any>;
    readContract: (contractAddress: string, contractABI: any) => Promise<string>;
    writeContract: (contractAddress: string, contractABI: any, updatedValue: string) => Promise<string>;
    getIdToken: () => Promise<string>;
    verifyServerSide: (idToken: string) => Promise<any>;
    switchChain: (customChainConfig: CustomChainConfig) => Promise<void>;
    updateConnectedChain: (network: string | CustomChainConfig) => void;
}
export declare const PlaygroundContext: React.Context<IPlaygroundContext>;
interface IPlaygroundProps {
    children?: ReactNode;
}
export declare function usePlayground(): IPlaygroundContext;
export declare const Playground: ({ children }: IPlaygroundProps) => React.JSX.Element;
export {};
