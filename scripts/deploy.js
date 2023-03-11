const hre = require("hardhat");

async function main() {
  const ERC20 = await hre.ethers.getContractFactory("ERC20");
  console.log("Deploying ERC20...");
  const erc20 = await upgrades.deployProxy(
    ERC20,
    [
      "INEURON",
      "INA",
      "1",
      "0x6acB1971f4e2045D33cDeF693B8Bc10B76ED065d",
      1000000,
    ],
    { initializer: "initialization" }
  );
  console.log("erc20 proxy address :", erc20.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
