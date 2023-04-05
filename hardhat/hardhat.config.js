/*  require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};*/

require("@nomiclabs/hardhat-ethers");
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 20000000000,
    },
  },
};
