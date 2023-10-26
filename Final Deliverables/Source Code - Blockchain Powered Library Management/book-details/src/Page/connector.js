import BookRegistryJSON from './BookRegistry.json'
import { ethers } from "ethers";
import Web3Modal from "web3modal";



export const BookRegistryAddress = "0xA166b3A9Ef5464e9e1C87FB1e8C7938d2c0bF09A";

export const BookRegistryABI = BookRegistryJSON.abi;


if (!window.ethereum) {
    alert('Meta Mask Not Found')
    window.open("https://metamask.io/download/")
} 


        // const signer = providers.getSigner();
        // const contract = fetchContract(signer);

        // return contract;

const web3modal = new Web3Modal();
const connection = await web3modal.connect();
const provider = new ethers.providers.Web3Provider(connection);
// export const provider = new ethers.providers.Web3Provider(window.ethereum);
// console.log(provider);
export const signer = provider.getSigner();


export const contract = new ethers.Contract(BookRegistryAddress, BookRegistryABI, signer);
// console.log(contract);