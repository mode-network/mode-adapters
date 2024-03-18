const LENDING_POOL_PROXY_ADDRESS = '0x04c3F4C9B12b1041b2fD2e481452E7c861Fe1FF8';
const LENDING_POOL_IMPLEMENTATION_ADDRESS = '0x28a6F674370425007Dc7d574297daE11b72f9e45';

const A_TOKEN_ADDRESSES: string[] = [
    '0xa509cbE0aCb9EB39c01Ef6A23073927a1F339Ba2', //amUSDC
    '0x554Da9A2052f9a63d1f562FA49Aa150FdaB32120', //amUSDT
    '0x4080Ec9B7159FE74e5E4f25304a8aa8293815f16', //amETH
];

const VARIABLE_DEBT_TOKEN_ADDRESSES: string[] = [
    '0xb84ec47ce839CA1CE21EA343B6f487983225f52C', //variableDebtmUSDC
    '0xb1bb70096E315213af4f992D8580271E71cEe620', //variableDebtmUSDT
    '0x014ff401E25ebDF12Faa6725F69b18535CceC51e', //variableDebtmWETH
];

const adapter = {
  adapter: {
      fetch: {
        lending_pool_proxy: LENDING_POOL_PROXY_ADDRESS, lending_pool_implementation: LENDING_POOL_IMPLEMENTATION_ADDRESS,
        a_tokens: A_TOKEN_ADDRESSES, v_tokens: VARIABLE_DEBT_TOKEN_ADDRESSES
    },
      start:  4762402, // where n is the startingBlock like 1695458888
    }
};

export default adapter;
