
# Simple Wallet DApp

This project is a decentralized application (DApp) that provides wallet functionality, including deposit, withdrawal, and balance tracking, implemented using Hardhat, Solidity, and the Sepolia testnet for smart contract deployment. The frontend is built with React for a seamless user experience.

## Features

- **Deposit Funds:** Users can deposit ETH into the wallet.
- **Withdraw Funds:** Users can withdraw ETH from the wallet.
- **Balance Check:** View the current balance of the wallet.
- **Smart Contract Integration:** Interacts with the wallet's smart contract on the Sepolia testnet.

## Tech Stack

### Backend:
- **Hardhat:** For developing, testing, and deploying the smart contract.
- **Solidity:** Smart contract programming language.

### Frontend:
- **React:** For building the user interface.
- **ethers.js:** For blockchain interaction from the frontend.

## Getting Started

### Prerequisites

1. **Node.js and npm**: Install from [Node.js Official Website](https://nodejs.org/).
2. **MetaMask Wallet:** Install the MetaMask browser extension and connect to the Sepolia testnet.
3. **Hardhat:** Install globally or locally in the project folder:
   ```bash
   npm install --save-dev hardhat
   ```

### Installation

 Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     SEPOLIA_RPC_URL=<Your_Sepolia_RPC_URL>
     PRIVATE_KEY=<Your_Wallet_Private_Key>
     ```

### Deployment

1. Compile the smart contract:
   ```bash
   npx hardhat compile
   ```

2. Deploy the smart contract to the Sepolia testnet:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

3. Note the deployed contract address from the terminal output.

### Run the Frontend

1. Update the contract address in the frontend's configuration file (e.g., `src/config.js`).
2. Start the development server:
   ```bash
   npm start
   ```
3. Open the app in your browser at `http://localhost:3000`.

## Testing

- Run smart contract tests:
  ```bash
  npx hardhat test
  ```
- Run frontend tests (if available):
  ```bash
  npm test
  ```

## Usage

1. Connect your MetaMask wallet to the Sepolia testnet.
2. Interact with the wallet DApp to deposit, withdraw, and check balances.

## Project Structure

```plaintext
simple-wallet-dapp/
├── contracts/            # Solidity smart contracts
├── scripts/              # Deployment scripts
├── test/                 # Test files for the smart contract
├── frontend/             # React frontend source code
├── hardhat.config.cjs     # Hardhat configuration file
├── package.json          # Backend dependencies
└── README.md             # Project documentation
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Acknowledgments

- [Hardhat Documentation](https://hardhat.org/docs/)
- [React Documentation](https://reactjs.org/docs/)
- [ethers.js Documentation](https://docs.ethers.org/)

---

Started Web3 🚀
