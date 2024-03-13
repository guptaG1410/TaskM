import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { taskSchema } from "../../taskSchema";

export async function POST(request: NextRequest) {
  const prisma = new PrismaClient();
  try {
    const body = await request.json();
    console.log(body);

    const validation = taskSchema.safeParse(body);
    console.log(validation);

    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

    const newTask = await prisma.task.create({
      data: { title: body.title, description: body.description },
    });

    return NextResponse.json(newTask, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
