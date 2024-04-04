import dotenv from "dotenv";
import {
  Hex,
  createWalletClient,
  getContract,
  http,
  publicActions,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { arbitrumSepolia } from "viem/chains";
import gameJson from "../artifacts/Game.json";

dotenv.config();

const { abi, bin } = gameJson["contracts"]["contracts/Game.sol:Game"];

const account = privateKeyToAccount(process.env.PRIVATE_KEY as Hex);
const contractAddr = "0x909fdc7afea85b68f25ed3066f48f225abfd9a81";

// IIFE
(async () => {
  // walletClient (state changes), publicClient (read-only)
  const client = createWalletClient({
    chain: arbitrumSepolia,
    transport: http(process.env.API_URL),
    account,
  }).extend(publicActions);

  const contract = getContract({
    address: contractAddr,
    abi,
    client,
  });

  await contract.write.changeX([999n]);
})();
