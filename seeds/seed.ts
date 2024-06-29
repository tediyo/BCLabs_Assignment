import { db } from "@/app/utils/db";

async function seedAssets() {
  // Delete existing data from the asset table
  await db.asset.deleteMany({});

  const assets = [
    {
      name: 'BTC',
      hex: '#F7931A',
      logo: 'https://utfs.io/f/2013200a-3caa-475b-8819-ccbbe39215c7-23ip.png',
      fiat: 'USD',
      lastTrade: 63000.0,
      change24h: -2.21,
      change24hValue: -1426.18,
    },
    {
      name: 'ETH',
      hex: '#627EEA',
      logo: 'https://utfs.io/f/40d739f9-e2fa-4ba8-b285-b4776e042311-25qx.png',
      fiat: 'USD',
      lastTrade: 3408.9,
      change24h: -0.33,
      change24hValue: -11.2,
    },
    {
      name: 'DOGE',
      hex: '#C3A634',
      logo: 'https://utfs.io/f/a79359f6-8f54-4c31-a53d-5173deac2e5b-1l0fkn.png',
      fiat: 'USD',
      lastTrade: 0.15,
      change24h: +15.75,
      change24hValue: 0.02,
    },
    {
      name: 'ALGO',
      hex: '#000000',
      logo: 'https://utfs.io/f/950a0b6d-1ba2-4e0e-9643-a8d88f9f551e-1s8cz.png',
      fiat: 'USD',
      lastTrade: 0.15,
      change24h: +0.0,
      change24hValue: 0.0,
    },
    {
      name: 'DOT',
      hex: '#E6007A',
      logo: 'https://utfs.io/f/e206f9bd-e0b5-4c2e-841a-788ca64e97f0-24w9.png',
      fiat: 'USD',
      lastTrade: 5.64,
      change24h: +0.0,
      change24hValue: 0.0,
    },
    {
      name: 'UNI',
      hex: '#FFFFFF',
      logo: 'https://utfs.io/f/5458b995-0773-45f6-882a-a533c1e583b6-2hgw.png',
      fiat: 'USD',
      lastTrade: 9.79,
      change24h: +0.0,
      change24hValue: 0.0,
    },
    {
      name: 'COMP',
      hex: '#00D395',
      logo: 'https://utfs.io/f/96794ca0-df7a-4115-ac92-9b0c92d89636-1tkpb.png',
      fiat: 'USD',
      lastTrade: 45.67,
      change24h: -0.95,
      change24hValue: -0.44,
    },
  ];

  for (let asset of assets) {
    await db.asset.create({
      data: asset,
    });
  }

  console.log('Asset seed completed!');
}

async function seedCryptoCurrencies() {
  // Delete existing data from the swap table
  await db.swap.deleteMany({});

  const cryptocurrencies = [
    {
      name: 'BNB',
      usd: 500,
      rate: 150,
      logo: 'https://utfs.io/f/59f0827c-c1ec-4097-b755-00746bbaf1bb-23di.png',
    },
    {
      name: 'BTC',
      usd: 0.00,
      rate: 0,
      logo: 'https://utfs.io/f/2b9eb567-dfda-4784-a426-8e71f2b6d171-1k00ck.png',
    },
    {
      name: 'ETH',
      usd: 0,
      rate: 32.4039,
      logo: 'https://utfs.io/f/40d739f9-e2fa-4ba8-b285-b4776e042311-25qx.png',
    },
    {
      name: 'DOGE',
      usd: 0.15,
      rate: 500000,
      logo: 'https://utfs.io/f/a79359f6-8f54-4c31-a53d-5173deac2e5b-1l0fkn.png',
    },
    {
      name: 'ALGO',
      usd: 0.5,
      rate: 150000,
      logo: 'https://utfs.io/f/950a0b6d-1ba2-4e0e-9643-a8d88f9f551e-1s8cz.png',
    },
    {
      name: 'DOT',
      usd: 20,
      rate: 3750,
      logo: 'https://utfs.io/f/e206f9bd-e0b5-4c2e-841a-788ca64e97f0-24w9.png',
    },
    {
      name: 'UNI',
      usd: 10,
      rate: 7500,
      logo: 'https://utfs.io/f/5458b995-0773-45f6-882a-a533c1e583b6-2hgw.png',
    },
    {
      name: 'COMP',
      usd: 80,
      rate: 937.5,
      logo: 'https://utfs.io/f/96794ca0-df7a-4115-ac92-9b0c92d89636-1tkpb.png',
    },
  ];

  for (let currency of cryptocurrencies) {
    await db.swap.create({
      data: currency,
    });
  }

  console.log('CryptoCurrency seed completed!');
}

async function main() {
  try {
    await seedAssets();
    await seedCryptoCurrencies();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
}

main();
