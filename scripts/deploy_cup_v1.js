// scripts/deploy.js
async function main() {
    const Cup = await ethers.getContractFactory("Cup");
    console.log("Deploying Cup...");
    const cup = await upgrades.deployProxy(Cup, [12], { initializer: 'initialize' });
    console.log("Box deployed to:", cup.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });