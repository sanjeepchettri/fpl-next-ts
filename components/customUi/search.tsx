"use client";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from 'next/navigation'
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Search = () => {
  interface InputChangeEvent extends ChangeEvent<HTMLInputElement> {}

  const [leagueCode, setLeagueCode] = useState<String>("");
  const router = useRouter();

  const handleChange = (e: InputChangeEvent) => {
    e.preventDefault();
    setLeagueCode(e.target.value);
    console.log(leagueCode)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push(`/league/${leagueCode}` );
      console.log(leagueCode)
  }


  return (
      <form onSubmit={handleSubmit} className="flex flex-row p-3 gap-3 justify-center items-center w-2/4">
        <Input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs bg-white text-black"
          onChange={handleChange}
        />
        <Button type="submit" >Search</Button>
      </form>
  );
};

export default Search;
