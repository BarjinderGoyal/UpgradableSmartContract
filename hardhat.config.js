/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

// const { alchemyAPIkeyGoerli } = require("./secrets.json");
const { deployerWalletPrivateKey } = require("./secrets.json");
const { etherscanAPIkey } = require("./secrets.json");

module.exports = {
  solidity: "0.8.6",
  settings: {
    optimizer: {
      runs: 200,
      enabled: true,
    },
  },

  networks: {
    hardhat: {
      chianId: 1337,
    },
    goerli: {
      accounts: [deployerWalletPrivateKey],
      url: " https://eth-goerli.g.alchemy.com/v2/w85nDusceZXuZe-TvuKPHKFR1iKP5P8L",
    },
  },
  etherscan: {
    apiKey: etherscanAPIkey,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
