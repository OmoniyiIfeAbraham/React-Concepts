import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const DataToTable = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    Swal.fire({
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif",
      imageHeight: 100,
      showConfirmButton: false,
      allowOutsideClick: false,
    });
    const url = "http://solidrockschool.com.ng/api/job/index";
    const config = { headers: { "content-type": "multipart/form-data" } };
    axios
      .get(url, config)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        Swal.close();
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>Category</th>
          <th>Employment Type</th>
          <th>Fees</th>
          <th>Level</th>    
          <th>Title</th>
        </tr>
        {data.map((i, index) => (
          <tr key={index}>
            <td>{i.category}</td>
            <td>{i.employment_type}</td>
            <td>{i.fees}</td>
            <td>{i.level}</td>
            <td>{i.title}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DataToTable;
