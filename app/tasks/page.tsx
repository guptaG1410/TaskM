import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { PrismaClient } from "@prisma/client";
import TaskStatus from "../components/TaskStatus";
import delay from "delay";
import TaskActions from "./TaskActions";

const TasksPage = async () => {
  const prisma = new PrismaClient();
  const tasks = await prisma.task.findMany();
  await delay(2000);

  return (
    <div>
      <TaskActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Task</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tasks.map((task: any) => (
            <Table.Row key={task.id}>
              <Table.Cell>
                <Link href={`/tasks/${task.id}`}>
                {task.title}
                </Link>
                <div className="block md:hidden">
                  <TaskStatus status={task.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <TaskStatus status={task.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {task.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default TasksPage;
