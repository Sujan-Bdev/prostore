import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import 'dotenv/config';
import { PrismaClient } from '../lib/generated/prisma/client';

import dotenv from 'dotenv';
import ws from 'ws';
neonConfig.webSocketConstructor = ws;

// To work in edge environments (Cloudflare Workers, Vercel Edge, etc.), enable querying over fetch
// neonConfig.poolQueryViaFetch = true



dotenv.config();
const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return Number(product.price);
        },
      },
      rating: {
        compute(product) {
          return Number(product.rating);
        },
      },
    },
  },
});
export default prisma;
