import { db } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET() {

  const result = await db.swap.findMany()
  // Loading the demo data or seeder data
  return NextResponse.json(result);
}
