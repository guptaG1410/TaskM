import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client"

const taskSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(5),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);

    const validation = taskSchema.safeParse(body);
    console.log(validation);

    if (!validation.success)
      return NextResponse.json(validation.error.errors, { status: 400 });

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
