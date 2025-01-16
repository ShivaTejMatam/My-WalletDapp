// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleWallet {
    address public owner;

    event Deposit(address indexed sender, uint amount);
    event Withdraw(address indexed receiver, uint amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner!");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Function to deposit Ether into the contract
    function deposit() public payable {
        require(msg.value > 0, "Must send some Ether");
        emit Deposit(msg.sender, msg.value);
    }

    // Function to withdraw Ether from the contract (only owner can withdraw)
    function withdraw(uint _amount) public onlyOwner {
        require(_amount <= address(this).balance, "Insufficient balance");
        payable(owner).transfer(_amount);
        emit Withdraw(owner, _amount);
    }

    // Function to get the balance of the contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
