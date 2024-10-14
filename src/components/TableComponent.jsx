import React from "react";
import ButtonComponent from "./ButtonComponent";

const TableComponent = ({ Columns, Data }) => {
  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#f4f4f4" }}>
          <tr>
            {Columns.map((col) => (
              <th
                key={col.Key}
                style={{
                  padding: 8,
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "#ccc",
                  textAlign: "left",
                }}
              >
                {col.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Data.map((item) => (
            <tr>
              {Columns.map((col, index) => (
                <td
                  key={index}
                  style={{
                    padding: 8,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#ccc",
                    textAlign: "left",
                  }}
                >
                  {item[col.Key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <ButtonComponent
        title={"Button Component"}
        action={() => alert("This is a reusable button")}
        style={{ backgroundColor: "blue", color: "white" }}
      />
    </div>
  );
};

export default TableComponent;
