require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/obyrliFIl_0e8Di9RIAM8cT_oilKSTva/",
      accounts: ["aed4aba38f7ae2033f46148aa4beb023782585845e049ffd99e8d2590ea28aae"]
    },
  },
};
