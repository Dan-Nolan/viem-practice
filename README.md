# Viem Practice

In this repository you'll find 4 scripts we built in the [alchemy university](https://www.alchemy.com/university) discord.

## Compile Solidity

You'll need to compile them using [solc](https://docs.soliditylang.org/en/latest/installing-solidity.html) (I like using [solc-select](https://github.com/crytic/solc-select)). Once you have solc installed, run:

```
solc --optimize --combined-json abi,bin contracts/Game.sol > artifacts/Game.json
```

## Setup .env

Create a top-level `.env` file, you can use the `.sample.env` and rename it to `.env`, filling in both the `API_URL` and the `PRIVATE_KEY`. The private key you can use any random 32 byte value. In a node file, or terminal thats as simple as logging out:

```
require('crypto').randomBytes(32).toString('hex');
```

For your `API_URL` you'll want to go to [the alchemy dashboard](https://dashboard.alchemy.com/) and grab an API_URL from one of your apps. In these scripts we've set them up to target Arbitrum Sepolia so you'll want to setup an arbitrum sepolia app unless you want to change the target chain. Be sure to put the full API URL in here.

## Run Scripts

Next, you'll want to run the scripts. You can do so by installing the dependencies `npm i` and then using `ts-node` for the scripts:

```
npx ts-node src/1-balance.ts
```
