import axios from "axios";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 2;

  const FectData = () => {
    const url = "http://solidrockschool.com.ng/api/job/index";
    const config = { "content-type": "multipart/form-data" };
    axios
      .get(url, config)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  console.log("indexOfLastItem: " + indexOfLastItem);
  console.log("indexOfFirstItem: " + indexOfFirstItem);
  console.log("currentItems: " + currentItems);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(data);

  useEffect(() => {
    FectData();
  }, []);
  return (
    <div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <div>
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
          (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Pagination;
