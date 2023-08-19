"use client";
import React, { useCallback, useState } from "react";
import {
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Selection,
} from "@nextui-org/react";
import { columns, exclusions } from "../data";
import CreateExclusionModal from "../modal/CreateExclusion";
import DeleteExclusionModal from "../modal/DeleteExclusion";
import BottomContent from "./BottomContent";
import TopContent from "./TopContent";
import Actions from "./Actions";

const INITIAL_VISIBLE_COLUMNS = ["description", "actions"];

const ExclusionsTable: React.FC = () => {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });

  const hasSearchFilter = Boolean(filterValue);

  const [page, setPage] = useState(1);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const onOpenCreateModal = () => {
    setCreateModalOpen(true);
  };

  const onOpenDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const onCloseCreateModal = () => {
    setCreateModalOpen(false);
  };

  const onCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredExclusions = React.useMemo(() => {
    let filteredExclusions = [...exclusions];

    if (hasSearchFilter) {
      filteredExclusions = filteredExclusions.filter((exclusion) =>
        exclusion.description.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredExclusions;
  }, [filterValue, hasSearchFilter]);

  const pages = Math.ceil(filteredExclusions.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredExclusions.slice(start, end);
  }, [page, filteredExclusions, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: any, b: any) => {
      const first = a[sortDescriptor.column as keyof any] as number;
      const second = b[sortDescriptor.column as keyof any] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const renderCell = React.useCallback(
    (exclusion: any, columnKey: React.Key) => {
      const cellValue = (exclusion as any)[columnKey];

      switch (columnKey) {
        case "description":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
            </div>
          );
        case "actions":
          return <Actions onOpenDeleteModal={onOpenDeleteModal} />;
        default:
          return cellValue;
      }
    },
    []
  );

  const topContent = React.useMemo(() => {
    return (
      <TopContent
        filterValue={filterValue}
        onSearchChange={onSearchChange}
        onRowsPerPageChange={onRowsPerPageChange}
        exclusionsLength={exclusions.length}
        onOpenCreateModal={onOpenCreateModal}
        onClear={onClear}
      />
    );
  }, [filterValue, onSearchChange, onRowsPerPageChange, onClear]);

  const bottomContent = React.useMemo(() => {
    return (
      <BottomContent
        selectedKeys={selectedKeys}
        filteredExclusionsLength={filteredExclusions.length}
        page={page}
        pages={pages}
        onPageChange={setPage}
      />
    );
  }, [selectedKeys, page, pages, filteredExclusions.length]);

  return (
    <>
      <CreateExclusionModal
        isOpen={isCreateModalOpen}
        onClose={onCloseCreateModal}
      />

      <DeleteExclusionModal
        isOpen={isDeleteModalOpen}
        onClose={onCloseDeleteModal}
      />

      <Table
        aria-label="Example table with custom cells, pagination and sorting"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[576px]",
        }}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No Information"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey: any) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default ExclusionsTable;
