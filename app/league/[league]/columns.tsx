"use client"
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

export type PlayerDetails = {
  player_name: string;
  player_entry_name: string;
  player_event_total: number;
  event_transfer_cost: number;
  player_total: number;
};
import {
    CaretSortIcon
}
from "@radix-ui/react-icons"

export const columns: ColumnDef<PlayerDetails>[] = [
  {
    accessorKey: "player_name",
    header: "Player Name",
  },
  {
    accessorKey: "player_entry_name",
    header: "Team Name",
  },
  {
    accessorKey: "player_event_total",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Gameweek Score <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "event_transfers_cost",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Points Deducted <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "player_total",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Player Total <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
