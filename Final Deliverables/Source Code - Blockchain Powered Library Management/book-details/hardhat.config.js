require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      chainId: 5777,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        `0x60dcf403d3552af66c8bc75748b85659ca1f0b0ac4562ee3131eee7c56260288`,
      ],
    }

  },
  paths: {
    artifacts: "./src/artifacts",
  }
};