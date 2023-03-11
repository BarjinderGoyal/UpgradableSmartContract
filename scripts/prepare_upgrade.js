// scripts/prepare_upgrade.js
async function main() {
  const proxyAddress = "0x5f69a9907BE14C618aeCb77C024AAbD6E1d6092b"; // This is the proxy address NOT the admin of the proxy.

  const ERC20V2 = await ethers.getContractFactory("ERC20V2");
  console.log("Preparing upgrade...");
  const erc20V2Address = await upgrades.prepareUpgrade(proxyAddress, ERC20V2);
  console.log("ERC20 at:", erc20V2Address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
