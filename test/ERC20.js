const { expect } = require("chai");
let ERC20;
let erc20;

describe("ERC20", async function () {
  it("Call initialise function", async () => {
    ERC20 = await ethers.getContractFactory("ERC20");
    erc20 = await ERC20.deploy();
    await erc20.deployed();
    const [owner, otherAccount] = await ethers.getSigners();
    await erc20.initialization("INEURON", "INA", "1", owner.address, 1000000);
    expect((await erc20.getBalanceOf(owner.address)).toString()).to.equal(
      "1000000"
    );
    expect((await erc20.getTotalSupply()).toString()).to.equal("1000000");
  });
});
