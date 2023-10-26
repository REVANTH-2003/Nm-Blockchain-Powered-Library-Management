
const main = async () => {
  const BookRegistry = await hre.ethers.getContractFactory("BookRegistry");
  const bookRegistry = await BookRegistry.deploy();

  await bookRegistry.deployed();

  console.log( "Transaction deployed to:" ,bookRegistry.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();