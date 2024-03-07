async function main() {
  const [owner] = await ethers.getSigners();

  Thor = await ethers.getContractFactory("Thor");
  thor = await Thor.deploy();

  Spidy = await ethers.getContractFactory("Spidy");
  spidy = await Spidy.deploy();

  PopUp = await ethers.getContractFactory("PopUp");
  popUp = await PopUp.deploy();

  console.log("ThorAddress=", `'${thor.address}'`);
  console.log("SpidyAddrss=", `'${spidy.address}'`);
  console.log("popUpAddress=", `'${popUp.address}'`);
}

/*
  npx hardhat run --network localhost scripts/deployToken.js
  */

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
