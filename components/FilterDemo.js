import React, { useEffect, useState } from "react";
import axios from "axios";
import { Query, useQuery } from "react-query";

const FilterDemo = () => {
  const [recordValue, setRecordValue] = useState();
  const fetchDetails = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/users");
  };
  const { isLoading, data, isError } = useQuery("pro", fetchDetails);
  console.log(data);
  if (isLoading) {
    return <h1>Loading!!!!!!!</h1>;
  }
  if (isError) {
    return <h1>Error......</h1>;
  }

  return (
    <div style={{ margin: "auto" }}>
      <input
        style={{ border: "1px solid red" }}
        type="text"
        placeholder="name"
        onChange={(e) => setRecordValue(e.target.value)}
      />
      {data?.data
        .filter((ele) => ele?.name?.toLowerCase().includes(recordValue))
        .map((ele) => {
          return <div key={ele.id}>{ele.name}</div>;
        })}
    </div>
  );
};

export default FilterDemo;
