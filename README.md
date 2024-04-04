# Viem Practice

In this repository you'll find 4 scripts we built in the [alchemy university](https://www.alchemy.com/university) discord. To use them, you'll need to compile them using [solc](https://docs.soliditylang.org/en/latest/installing-solidity.html) (I like using [solc-select](https://github.com/crytic/solc-select)). Once you have solc installed, run:

```
solc --optimize --combined-json abi,bin contracts/Game.sol > artifacts/Game.json
```

To compile the game and output the artifacts. Next, you'll want to run the scripts. You can do so by installing the dependencies `npm i` and then using `ts-node` for the scripts:

```
npx ts-node src/1-balance.ts
```
