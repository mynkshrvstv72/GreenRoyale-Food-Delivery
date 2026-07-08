import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import PopularFoods from "../components/PopularFoods/PopularFoods";
import Search from "../components/Search/Search";

function Home() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <>
      <Navbar />

      <Hero />

      <Search
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <PopularFoods
        search={search}
        category={category}
      />
    </>
  );
}

export default Home;