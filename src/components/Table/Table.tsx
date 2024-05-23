import React, { useState } from "react";
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import Pagination from "../Pagination/Pagination";
import { SearchBar } from "../SearchBar/SearchBar";

export type Option = {
  name: string;
  icon: JSX.Element;
  onClick: (rowData: any) => void;
};

export type TableProps<T> = {
  primary?: boolean;
  tableTitle?: string;
  subTitle?: string;
  page?: number;
  data?: T[];
  columns?: ColumnDef<T>[];
  options?: Option[];
  status?: "loading" | "error" | "success" | "uninitialized";
  // Callback function to pass the selected row to parents
  onRowClick?: (rowData: T) => void;
};

export default function Table<T>({
  primary = true,
  tableTitle = "Table Title",
  data,
  subTitle = " A list of all the users in your account including their name, title,email and role.",
  columns,
  options = [],
  status = "uninitialized",
  onRowClick,
}: TableProps<T>) {
  const columnHelper = createColumnHelper<T>();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10, // Change this to your desired default page size
  });

  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = React.useMemo(() => {
    if (!searchQuery) return data ?? [];
    return (data ?? []).filter((row: any) =>
      columns?.some((column: any) => {
        const cellValue = column.accessorFn ? column.accessorFn(row) : null;
        return cellValue
          ? cellValue
              .toString()
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          : false;
      })
    );
  }, [data, searchQuery, columns]);

  const table = useReactTable({
    //data: data ?? [],
    data: filteredData ?? [],
    columns: columns ?? [],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  });

  const handlePageChange = (pageNumber: number) => {
    setPagination((prevState) => ({
      ...prevState,
      pageIndex: pageNumber - 1, // Adjust because `Pagination` component pages are 1-indexed
    }));
  };

  return (
    <div className="px-4 pb-10 sm:px-6 lg:px-8 w-full overflow-scroll">
      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search state on input change
      />
      <div className="mt-8 flow-root shadow border rounded-lg">
        <div className="-mx-4 -my-2  sm:-mx-6 lg:-mx-8 ">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                {/* New title row */}
                <tr>
                  <th
                    colSpan={
                      table.getHeaderGroups()[0].headers.length + options.length
                    }
                    className="py-3.5 pl-4 pr-3 text-left text-lg text-gray-900 bg-white rounded-lg m-0 p-0" // Added m-0 and p-0 to remove margins and padding
                  >
                    <span className="flex flex-row justify-between">
                      <span className="">{tableTitle}</span>
                      <span className="text-sm text-gray-300 font-regular mt-1">
                        Results: {data?.length}
                      </span>
                    </span>
                  </th>
                </tr>
                {/* End of new title row */}
                {table.getHeaderGroups().map((headerGroup, index) => (
                  <tr key={index}>
                    {headerGroup.headers.map((header, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm  text-gray-600  border-t border-gray-300"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                    {/* Options column */}
                    {options.length ? (
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm  text-gray-600  border-t border-gray-300"
                      >
                        Options
                      </th>
                    ) : null}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {status === "uninitialized" && (
                  <tr>
                    <td
                      colSpan={table.getHeaderGroups()[0].headers.length}
                    ></td>
                  </tr>
                )}
                {status === "loading" && (
                  <tr>
                    <td
                      colSpan={
                        table.getHeaderGroups()[0].headers.length +
                        options.length
                      }
                    >
                      <LoadingAnimation />
                    </td>
                  </tr>
                )}
                {status === "error" && (
                  <tr>
                    <td colSpan={table.getHeaderGroups()[0].headers.length}>
                      <div className="w-full justify-center text-center m-5">
                        <h3 className="mt-2 text-xl font-semibold text-secondary-text">
                          No Search Results Found
                        </h3>
                        <p className="mt-1 text-sm text-tertiary-text">
                          Please retry with new search paramters.
                        </p>
                        <p className="mt-1 text-sm text-tertiary-text">
                          If you believe this is an application issue, please
                          refresh your browser and try again.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
                {table.getRowModel().rows.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={(e) => {
                      // Prevent row click when clicking on options
                      e.stopPropagation();
                      if (onRowClick) {
                        // Use on Row Click callback to pass the selected row to the parent
                        onRowClick(row.original);
                      }
                    }}
                  >
                    {row.getVisibleCells().map((cell, index) => (
                      <td
                        key={index}
                        className="whitespace-nowrap py-4 px-3 text-sm text-gray-500 "
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                    {options.length > 0 && (
                      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                        {options.map((option, index) => (
                          <span
                            key={index}
                            onClick={() => option.onClick(row.original)}
                            className="cursor-pointer mx-1 color-blue-900 hover:text-creditpulse-green-500 hover:cursor-pointer "
                            style={{
                              minHeight: "20px",
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                          >
                            {option.icon}
                          </span>
                        ))}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Pagination */}
      {data && data.length > 0 && (
        <Pagination
          currentPage={pagination.pageIndex + 1}
          totalItems={data.length}
          itemsPerPage={pagination.pageSize}
          onPageChange={handlePageChange}
          onItemsPerPageChange={(newPageSize) =>
            setPagination((prevState) => ({
              ...prevState,
              pageSize: newPageSize,
            }))
          }
          primary={primary}
        />
      )}
    </div>
  );
}
