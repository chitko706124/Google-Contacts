import React from "react";
import { Table } from "@mantine/core";
import Cookies from "js-cookie";
import { useGetContentQuery } from "../redux/api/contentApi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ContentTable = () => {
  const token = Cookies.get("token");
  const { data: content, isLoading } = useGetContentQuery(token);
  console.log(content?.contacts.data);
  const search = useSelector((state) => state.search.search);
  console.log(search);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className=" w-full">
      <Table striped withBorder>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {content?.contacts.data
            .filter((item) => {
              if (search === "") {
                return item;
              } else {
                return item.name.toLowerCase().includes(search);
              }
            })
            .map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default ContentTable;
