export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "username",
    header: "닉네임",
  },
  {
    accessorKey: "amount",
    header: "금액",
  },
];

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={[
          {
            id: "728ed52f",
            amount: 10000,
            rank: "1",
            username: "m@example.com",
          },
          {
            id: "728ed52f",
            amount: 30000,
            rank: "2",
            username: "m@example.com",
          },
          {
            id: "728ed52f",
            amount: 20000,
            rank: "3",
            username: "m@example.com",
          },
          {
            id: "728ed52f",
            amount: 15000,
            rank: "4",
            username: "m@example.com",
          },
          {
            id: "728ed52f",
            amount: 10400,
            rank: "5",
            username: "m@example.com",
          },
        ]}
      />
      <Link to="/">
        <Button
          variant="ghost"
          size="default"
          className="my-5 w-full flex items-center justify-center bg-[#593EEC] text-white"
        >
          새로운 미션 도전하기
        </Button>
      </Link>
    </div>
  );
}
