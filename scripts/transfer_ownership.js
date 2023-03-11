async function main() {
  const newOwnerOfTheProxyAdmin = "0x2616aF0Cfe61D143AcBb459A46d7ad160b5b72D0"; // this will be the address of the TimeLock, as we need it to be the owner of the Proxy Admin.

  console.log("Transferring ownership of ProxyAdmin..."); // The owner of the ProxyAdmin can upgrade our contracts
  await upgrades.admin.transferProxyAdminOwnership(newOwnerOfTheProxyAdmin);
  console.log(
    "Transferred ownership of ProxyAdmin to:",
    newOwnerOfTheProxyAdmin
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
