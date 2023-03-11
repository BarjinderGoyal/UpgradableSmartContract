const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");
let ERC20;
let erc20;

describe("ERC20 Proxy", async function () {
  //test case
  it("total supply and user balance", async function () {
    [owner, otherAccount] = await ethers.getSigners();
    ERC20 = await ethers.getContractFactory("ERC20");
    erc20 = await upgrades.deployProxy(
      ERC20,
      ["INEURON", "INA", "1", owner.address, 1000000],
      { initializer: "initialization" }
    );
    expect((await erc20.getBalanceOf(owner.address)).toString()).to.equal(
      "1000000"
    );
    expect((await erc20.getTotalSupply()).toString()).to.equal("1000000");
  });
});
