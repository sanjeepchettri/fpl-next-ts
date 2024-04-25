
import React from 'react'
import { ColumnDef } from '@tanstack/react-table'

export type PlayerDetails = {
    player_name : string
    player_entry_name : string
    player_event_total : number
    event_transfer_cost : number
    player_total : number
}

export const columns : ColumnDef<PlayerDetails>[] = [
    {
        accessorKey : "player_name",
        header: "Player Name"
    },
    {
        accessorKey : "player_entry_name",
        header : "Team Name"
    },
    {
        accessorKey : "player_event_total",
        header: "Gameweek Score"
    },
    {
        accessorKey: "event_transfer_cost",
        header: "Transfer Cost"
    },
    {
        accessorKey: "player_total",
        header: "Total Score"
    }
]