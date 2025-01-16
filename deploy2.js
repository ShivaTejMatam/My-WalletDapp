const { ethers } = require("ethers");

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(
        "https://sepolia.infura.io/v3/YOUR_API_KEY"
    );

    const blockNumber = await provider.getBlockNumber();
    console.log("Current block number on Sepolia:", blockNumber);
}

main().catch((error) => {
    console.error("Error connecting to Sepolia:", error);
});
