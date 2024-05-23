import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

export type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="pt-10 z-10">
      <form
        className="relative flex flex-1 bg-white rounded-lg border border-gray-300 p-3"
        action="#"
        method="GET"
      >
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <MagnifyingGlassIcon
          className="pointer-events-none absolute inset-y-0 left-3 h-full w-6 text-creditpulse-green-500"
          aria-hidden="true"
        />
        <input
          id="search-field"
          className="block  border-transparent h-full w-full  py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:ring-transparent focus:border-white sm:text-sm"
          placeholder="Search..."
          type="search"
          name="search"
          value={value} // Controlled input
          onChange={onChange} // Handle change
        />
      </form>
    </div>
  );
}
