require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.27",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/YOUR_API_KEY", // Replace with your Infura API key
      accounts: [""], // Replace with your MetaMask wallet private key
    },
  },
};
