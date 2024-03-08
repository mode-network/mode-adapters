const POOL_ADDRESS = "0x4af97f73343b226C5a5872dCd2d1c4944BDb3E77";
const MASTER_MANTIS_ADDRESS = "0x8997E7669dA8451E356472cf3ef33DfBc9D7b448";

const LP_TOKEN_ADDRESSES: string[] = [
  "0x967f594f73930A02817DAF3112CCC7F2C611dEF8", //LP-USDC
  "0x12d41b6DF938C739F00c392575e3FD9292d98215", //LP-USDT
  "0x153E43F5545A094c19c4dD290555Ba04279c9cB9", //LP-DAI
];

const adapter = {
  adapter: {
    fetch: {
      pool: POOL_ADDRESS,
      lpTokens: LP_TOKEN_ADDRESSES,
      master: MASTER_MANTIS_ADDRESS,
    },
    start: 4735044, // where n is the startingBlock like 1695458888
  },
};

export default adapter;
