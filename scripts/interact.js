import hardhat from "hardhat";
const { ethers } = hardhat;

async function main() {
  // Address of the deployed contract (replace this with your deployed contract address)
  const contractAddress = " ";

  // Get the contract factory
  const SimpleWallet = await ethers.getContractFactory("SimpleWallet");

  // Attach to the deployed contract
  const wallet = await SimpleWallet.attach(contractAddress);

  console.log("Connected to contract at:", wallet.address);

  // Interacting with the contract
  // Call functions, e.g., getBalance() if your contract has this
  console.log("Fetching balance...");
  const balance = await ethers.provider.getBalance(wallet.address);
  console.log(`Contract Balance: ${ethers.utils.formatEther(balance)} ETH`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
