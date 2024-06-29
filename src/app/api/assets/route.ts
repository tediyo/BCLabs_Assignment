import { db } from '@/app/utils/db';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET() {

  const result = await db.asset.findMany()

  return NextResponse.json(result);
}
