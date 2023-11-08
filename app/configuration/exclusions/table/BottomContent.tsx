import {
  Button,
  Pagination,
  PaginationItem,
  PaginationCursor,
  Selection,
} from "@nextui-org/react";
import React from "react";

interface TableBottomContentProps {
  selectedKeys: Selection;
  filteredExclusionsLength: number;
  page: number;
  pages: number;
  onPageChange: (newPage: number) => void;
}

const TableBottomContent: React.FC<TableBottomContentProps> = ({
  selectedKeys,
  filteredExclusionsLength,
  page,
  pages,
  onPageChange,
}) => {
  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      onPageChange(page + 1);
    }
  }, [page, pages, onPageChange]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      onPageChange(page - 1);
    }
  }, [page, onPageChange]);

  return (
    <div className="py-2 px-2 flex justify-between items-center">
      <span className="w-[30%] text-small text-default-400">
        {selectedKeys === "all"
          ? "All items selected"
          : `${selectedKeys.size} of ${filteredExclusionsLength} selected`}
      </span>
      <Pagination
        isCompact
        showControls
        showShadow
        color="primary"
        page={page}
        total={pages}
        onChange={onPageChange}
      />
      <div className="hidden sm:flex w-[30%] justify-end gap-2">
        <Button
          isDisabled={pages === 1}
          size="sm"
          variant="flat"
          onPress={onPreviousPage}
          className="dark:hover:bg-zinc-700/90 hover:bg-zinc-300 transition-all"
        >
          Previous
        </Button>
        <Button
          isDisabled={pages === 1}
          size="sm"
          variant="flat"
          onPress={onNextPage}
          className="dark:hover:bg-zinc-700/90 hover:bg-zinc-300 transition-all"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TableBottomContent;
