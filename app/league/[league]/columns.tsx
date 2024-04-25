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
          Gameweek Score
        </Button>
      );
    },
  },

  {
    accessorKey: "event_transfer_cost",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Points Deducted
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
          Player Total
        </Button>
      );
    },
  },
];
