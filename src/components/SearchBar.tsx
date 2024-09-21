import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import { Search } from "lucide-react";
import { form } from "framer-motion/client";
import { SxProps } from "@mui/material";
interface SearchBarProps {
  onSearch: (query: string) => void;
}
// This is the search function to handle search, takes string.

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        placeholder="Search Movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-l-md py-1.5 px-5 focus:outline-none focus:border-blue-500 text-black rounded-r-md"
      />
      <button className="ml-3 px-6 py-1.5 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        Submit
      </button>
    </form>
  );
};
export default SearchBar;
