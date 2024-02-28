const FACTORY_ADDRESS = '0x......';
const ROUTER_ADDRESS = '0x......';

const adapter = {
  adapter: {
      fetch: { factory: FACTORY_ADDRESS, router: ROUTER_ADDRESS },
      start: 0000000000, // where n is the startingBlock like 1695458888
    }
};

export default adapter;