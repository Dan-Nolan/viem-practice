import dotenv from "dotenv";
import { Hex, createPublicClient, formatEther, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { arbitrumSepolia } from "viem/chains";

dotenv.config();

const account = privateKeyToAccount(process.env.PRIVATE_KEY as Hex);

// IIFE
(async () => {
  // walletClient (state changes), publicClient (read-only)
  const client = createPublicClient({
    chain: arbitrumSepolia,
    transport: http(process.env.API_URL),
  });

  const balance = await client.getBalance(account);

  // parseEther -> from human to computer
  // formatEther -> from computer to human
  console.log(formatEther(balance));
})();
