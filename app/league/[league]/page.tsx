"use client"

import React from "react";
import { PlayerDetails, columns } from "./columns";
import LeagueDataTable from "./data-table";
const fetchLeague = async ( params: { league: string } ) => {
    const data = {
        fpl_id : params.league
       }

       const response = await fetch("http://127.0.0.1:8000/api/get_league/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const leagueData = await response.json();
      return leagueData.standings;    
}

const page = async({ params }: { params: { league: string } }) => {
    const leagueData : PlayerDetails[] = await fetchLeague(params);
    console.log(leagueData)
  return <div>
    <LeagueDataTable columns={columns} data={leagueData} />
  </div>;
};

export default page;
