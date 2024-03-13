import TaskStatus from "@/app/components/TaskStatus";
import { PrismaClient } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

const taskDetailPage = async ({ params }: { params: { id: string } }) => {
  const prisma = new PrismaClient();
  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!task) notFound();

  return (
    <div>
      <Heading>{task.title}</Heading>
      <Flex className="space-x-3" my="2">
        <TaskStatus status={task.status} />
        <Text>{task.createdAt.toDateString()}</Text>
      </Flex>
      <Card>
        <p>{task.description}</p>
      </Card>
    </div>
  );
};

export default taskDetailPage;
