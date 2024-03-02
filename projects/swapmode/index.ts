const FACTORY_ADDRESS = '0xfb926356BAf861c93C3557D7327Dbe8734A71891';
const ROUTER_ADDRESS = '0xc1e624c810d297fd70ef53b0e08f44fabe468591';

const adapter = {
  adapter: {
      fetch: { factory: FACTORY_ADDRESS, router: ROUTER_ADDRESS },
      start: 3325219, // where n is the startingBlock like 1695458888
    }
};

export default adapter;