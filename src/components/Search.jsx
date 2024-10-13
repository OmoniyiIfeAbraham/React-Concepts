import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = () => {
    const url = "http://solidrockschool.com.ng/api/job/index";
    const config = { "content-type": "multipart/form-data" };
    axios
      .get(url, config)
      .then((response) => {
        setData(response.data.data);
        setFilteredData(response.data.data); // Initialize with all data
      })
      .catch((error) => alert(error));
  };

  const handleSearch = (event) => {
    setQuery(event.target.value);

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          value={query}
        />
      </form>
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => <li key={index}>{item.title}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default Search;
