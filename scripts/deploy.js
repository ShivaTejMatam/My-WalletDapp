import hardhat from "hardhat";
const { ethers } = hardhat;

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const SimpleWallet = await ethers.getContractFactory("SimpleWallet");
    const simpleWallet = await SimpleWallet.deploy();

    await simpleWallet.deployed();
    console.log("SimpleWallet deployed to:", simpleWallet.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
