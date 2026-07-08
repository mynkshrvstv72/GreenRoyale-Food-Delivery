import "./Search.css";

function Search({
  search,
  setSearch,
  category,
  setCategory,
}) {

  const categories = [
    "All",
    "Main Course",
    "Pizza",
    "Burger",
    "Dessert",
    "Drinks",
    "Snacks",
    "South Indian",
    "North Indian",
    "Italian"
  ];

  return (

    <section className="search-section">

      <input
        type="text"
        placeholder="🔍 Search Food..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="category-buttons">

        {
          categories.map((item)=>(

            <button

              key={item}

              className={
                category===item
                ? "active"
                : ""
              }

              onClick={()=>setCategory(item)}

            >

              {item}

            </button>

          ))
        }

      </div>

    </section>

  )

}

export default Search;