// scripts/deploy.js
const PROXY = "0xdfcad11bb8e65a1d16cf9d0aa4fe227fa16c3073";
async function main() {
    const CupV2 = await ethers.getContractFactory("CupV2");
    await upgrades.upgradeProxy(PROXY,CupV2);
    console.log("CupV2 upgraded:");
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });