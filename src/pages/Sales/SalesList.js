import { Button } from "@material-ui/core";
import { AddOutlined } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";

export default function SalesList() {
  const history = useHistory();
  return (
    <>
      <Button
        contained
        onClick={() => {
          history.push("/create-sales");
        }}
      >
        <AddOutlined /> Add Sales
      </Button>
    </>
  );
}
