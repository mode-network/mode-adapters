const FACTORY_ADDRESS = '0x9BCE21489a7A85ed475c9e9D0Dc94b4E6A1aEbF3';
const TOKEN_ADDRESS = '0x2416092f143378750bb29b79eD961ab195CcEea5';
// documentation for Renzo Manager Contract is 
const MANAGER_ADDRESS = '0x0x74a09653A083691711cF8215a6ab074BB4e99ef5';


const adapter = {
  adapter: {
      fetch: { factory: FACTORY_ADDRESS, token: TOKEN_ADDRESS, manager: MANAGER_ADDRESS,  },
      start: 4749150, // where n is the startingBlock like 1695458888
    }
};

export default adapter;
