import React from "react";
import { render, cleanup } from "@testing-library/react";
import TableCell from "../../TableCell/TableCell";
import Table from "../Table";
import TableBody from "../../TableBody/TableBody";
import TableRow from "../../TableRow/TableRow";
import TableHeaderCell, { ITableHeaderCellProps } from "../../TableHeaderCell/TableHeaderCell";
import TableHeader from "../../TableHeader/TableHeader";

interface TableNode {
  role: string;
  children: TableNode[];
}

function traverse(element: Element, acc: TableNode[] = []): TableNode[] {
  for (const child of Array.from(element.children)) {
    const role = child.getAttribute("role");

    if (role) {
      const result: TableNode = { role, children: [] };
      acc.push(result);
      traverse(child, result.children);
    } else {
      traverse(child, acc);
    }
  }
  return acc;
}

describe("Table", () => {
  const tableBoilerplate = {
    columns: [{ id: "column-id", title: "Title", width: 20 }],
    dataState: { isLoading: false, isError: false, hasMoreResults: false },
    errorState: <div />,
    emptyState: <h1>Empty State</h1>
  };

  afterEach(cleanup);

  describe("<TableCell />", () => {
    it("Should render string as a <Text /> component", () => {
      const { getByRole } = render(<TableCell>String</TableCell>);
      const cell = getByRole("cell");
      const textElement = cell.children[0];

      expect(textElement.classList).toContain("typography");
      expect(textElement.textContent).toBe("String");
    });

    it("Should render HTML element as a child", () => {
      const { getByRole } = render(
        <TableCell>
          <div>Content</div>
        </TableCell>
      );
      const cell = getByRole("cell");

      expect(cell.innerHTML).toBe(`<div>Content</div>`);
    });
  });

  describe("Empty state", () => {
    it("Should render empty state in case <TableBody /> is empty", () => {
      const { getByRole } = render(
        <Table {...tableBoilerplate}>
          <TableBody></TableBody>
        </Table>
      );

      const tableBodyElement = getByRole("rowgroup");
      expect(tableBodyElement.textContent).toBe("Empty State");
    });

    it("Should render table rows instead of empty state", () => {
      const { getByRole } = render(
        <Table {...tableBoilerplate}>
          <TableBody>
            <TableRow>
              <TableCell>Table Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const tableBodyElement = getByRole("rowgroup");
      expect(tableBodyElement.textContent).toBe("Table Cell");
    });
  });

  describe("a11y", () => {
    it("Should have accessible DOM structure (roles hierarchy)", () => {
      const { baseElement } = render(
        <Table {...tableBoilerplate}>
          <TableHeader>
            <TableHeaderCell title="Title" sortState="asc" />
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Table Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(traverse(baseElement)).toMatchObject([
        {
          role: "table",
          children: [
            { role: "rowgroup", children: [{ role: "columnheader" }] },
            { role: "rowgroup", children: [{ role: "row", children: [{ role: "cell" }] }] }
          ]
        }
      ]);
    });

    describe.each([
      ["asc", "ascending"],
      ["desc", "descending"],
      ["none", null]
    ])("Sort", (sortState: ITableHeaderCellProps["sortState"], ariaSort) => {
      it(`Should apply aria-sort to header element (${sortState}, ${ariaSort})`, () => {
        const { getByRole } = render(<TableHeaderCell title="Title" sortState={sortState} />);
        expect(getByRole("columnheader").getAttribute("aria-sort")).toBe(ariaSort);
      });
    });
  });
});
