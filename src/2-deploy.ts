import dotenv from "dotenv";
import { Hex, createWalletClient, http, publicActions } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { arbitrumSepolia } from "viem/chains";
import gameJson from "../artifacts/Game.json";

dotenv.config();

const { abi, bin } = gameJson["contracts"]["contracts/Game.sol:Game"];

const account = privateKeyToAccount(process.env.PRIVATE_KEY as Hex);

// IIFE
(async () => {
  // walletClient (state changes), publicClient (read-only)
  const client = createWalletClient({
    chain: arbitrumSepolia,
    transport: http(process.env.API_URL),
    account,
  }).extend(publicActions);

  const hash = await client.deployContract({
    abi, // <-- constructor args
    bytecode: `0x${bin}`,
  });

  const { contractAddress } = await client.getTransactionReceipt({ hash });

  if (contractAddress) {
    const x = await client.readContract({
      abi,
      address: contractAddress,
      functionName: "x",
    });
  }
})();
