import type { Meta, StoryObj } from "@storybook/react";
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import Table from "./Table";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Credit Pulse/Functional Components/Table",
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
type Person = {
  name: string;
  title: string;
  department: string;
  email: string;
  role: string;
  image: string;
};

const people: Person[] = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("title", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("department", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("email", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("role", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];

export const Primary: Story = {
  args: {
    primary: true,
    tableTitle: "Table Title",
    data: people,
    status: "success",
    columns: columns as ColumnDef<unknown>[],
  },
};
