import { expect } from "chai";
import { waffle } from "ethereum-waffle";
chai.use(waffle.solidity);

describe("SimpleWallet Contract", function () {
  let simpleWallet;
  let deployer;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [deployer, addr1, addr2] = await ethers.getSigners();
    const SimpleWallet = await ethers.getContractFactory("SimpleWallet");
    simpleWallet = await SimpleWallet.deploy();
  });

  it("Should deploy the SimpleWallet contract", async function () {
    expect(await simpleWallet.address).to.not.equal(0);
  });

  it("Should allow deposits", async function () {
    const initialBalance = await ethers.provider.getBalance(simpleWallet.address);
    const depositAmount = ethers.utils.parseEther("1");

    // Listening for Deposit event
    await expect(simpleWallet.connect(addr1).deposit({ value: depositAmount }))
      .to.emit(simpleWallet, "Deposit")
      .withArgs(addr1.address, depositAmount);

    const finalBalance = await ethers.provider.getBalance(simpleWallet.address);
    expect(finalBalance.sub(initialBalance)).to.equal(depositAmount);
  });

  it("Should allow withdrawals by owner", async function () {
    const depositAmount = ethers.utils.parseEther("2");
    await simpleWallet.connect(addr1).deposit({ value: depositAmount });

    const initialBalance = await ethers.provider.getBalance(addr1.address);

    // Listen for Withdraw event
    await expect(simpleWallet.connect(deployer).withdraw(depositAmount))
      .to.emit(simpleWallet, "Withdraw")
      .withArgs(deployer.address, depositAmount);

    const finalBalance = await ethers.provider.getBalance(addr1.address);
    expect(finalBalance).to.be.gt(initialBalance); // Ensuring withdrawal occurred
  });

  it("Should fail to withdraw more than balance", async function () {
    const depositAmount = ethers.utils.parseEther("1");
    await simpleWallet.connect(addr1).deposit({ value: depositAmount });

    await expect(
      simpleWallet.connect(deployer).withdraw(depositAmount.add(1)) // Trying to withdraw more than balance
    ).to.be.revertedWith("Insufficient balance");
  });
});
