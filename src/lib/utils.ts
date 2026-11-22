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
  const toMatrix = <T>(items: T[], columns: number): T[][] => {
    const matrix: T[][] = [];
    let rowIndex = 0;
    for (let i = 0; i < items.length; ) {
        const rowSize = isOdd(rowIndex + 1) ? columns + offset : columns;
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
      const patch = Array(Math.max(0, columns - arr.length)).fill(fillValue);
      return [
        ...Array(paddingInline).fill(fillValue),
        ...arr.concat(patch),
        ...Array(paddingInline).fill(fillValue),
      ];
    });

  return [
    Array(outerGridCols).fill(fillValue),
    ...filled,
    Array(isOdd(filled.length + 1) ? outerGridCols + offset : outerGridCols).fill(fillValue),
  ];
}