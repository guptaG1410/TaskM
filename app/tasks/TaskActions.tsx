import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const TaskActions = () => {
  return (
    <div className="mb-5">
      <Button>
        <Link href="/tasks/new">New TASK</Link>
      </Button>
    </div>
  );
};

export default TaskActions;
