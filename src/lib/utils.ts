import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HoneycombGridOptions<T, P> {
  innerGridCols: number;
  paddingInline: number;
  items: T[];
  fillValue?: P;
  offset?: number;
}

export function buildHoneycombGrid<T, P = null>({
  innerGridCols,
  paddingInline,
  items,
  offset = -1,
  fillValue = null as P,
}: HoneycombGridOptions<T, P>): (T | P)[][] {
  const isOdd = (value: number) => value % 2 !== 0;
  const toMatrix = (items: T[], columns: number): T[][] => {
    const matrix: T[][] = [];
    let rowIndex = 0;
    for (let i = 0; i < items.length; ) {
        const rowSize = Math.max(1, isOdd(rowIndex + 1) ? columns + offset : columns);
        matrix.push(items.slice(i, i + rowSize));
        i += rowSize; // Advance by the actual number of items sliced
        rowIndex++;
      }

    return matrix;
  };

  const outerGridCols = innerGridCols + paddingInline * 2;

  const filled = toMatrix(items, innerGridCols)
    .map((arr, i) => {
      const outerIndex = i + 1;
      const columns = isOdd(outerIndex) ? innerGridCols + offset : innerGridCols;
      const missingCells = Math.max(0, columns - arr.length);
      const patch = Array.from({ length: missingCells }, () => fillValue);
      return [
        ...Array.from({ length: paddingInline }, () => fillValue),
        ...arr,
        ...patch,
        ...Array.from({ length: paddingInline }, () => fillValue),
      ];
    });

  return [
    Array.from({ length: outerGridCols }, () => fillValue),
    ...filled,
    Array.from({ length: isOdd(filled.length + 1) ? outerGridCols + offset : outerGridCols }, () => fillValue),
  ];
}