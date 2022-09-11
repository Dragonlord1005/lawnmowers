import { Table } from "@nextui-org/react";
import * as React from "react";

export default function Price() {
  return (
    <Table animated={false} bordered>
      <Table.Header>
        <Table.Column>Area</Table.Column>
        <Table.Column>Prcing</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Front Lawn</Table.Cell>
          <Table.Cell>$10</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Back Lawn and Front Lawn</Table.Cell>
          <Table.Cell>$13</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Back Lawn and Front Lawn and Trimming</Table.Cell>
          <Table.Cell>$15</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
