import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HoneycombGridOptions<T> {
  innerGridCols: number;
  paddingInline: number;
  // items: T[];
}

export function buildHoneycombGrid<T>({
  innerGridCols,
  paddingInline,
  // items
}: HoneycombGridOptions<T>) {
  const toMatrix = (items: T[], columns: number) => {
    const matrix = [];
    for (let i = 0; i < items.length; i += columns) {
      matrix.push(items.slice(i, i + columns));
    }
    return matrix;
  };

  const outerGridCols = innerGridCols + paddingInline * 2;
  console.log([
    Array(outerGridCols).fill(null),
    ...toMatrix(Array(innerGridCols*3).fill(1111), innerGridCols)
      .map((arr) => [
        ...Array(paddingInline).fill(null),
        ...arr,
        ...Array(paddingInline).fill(null),
      ]),
    Array(outerGridCols).fill(null),
  ]);
}