async function main() {
    const Rimorin = await ethers.getContractFactory("Rimorin")
  
    // Start deployment, returning a promise that resolves to a contract object
    const myRi = await Rimorin.deploy()
    await myRi.deployed()
    console.log("Contract deployed to address:", myRi.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  