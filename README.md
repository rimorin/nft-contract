# NFT Smart Contract

## Setup Instructions

1. npm init -y
2. npm install --save-dev hardhat
3. npm install @openzeppelin/contracts
4. npx hardhat (Select “create an empty hardhat.config.js”)
5. npm install dotenv --save
6. npm install --save-dev @nomiclabs/hardhat-ethers ethers@^5.0.0
7. npx hardhat compile
8. npx hardhat --network rinkeby run scripts/deploy.js (Make sure there is enough ETH in your wallet for gas fees)


