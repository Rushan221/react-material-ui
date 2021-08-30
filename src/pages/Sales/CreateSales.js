import {
  Container,
  FormControl,
  makeStyles,
  TextField,
  Select,
  Typography,
  InputLabel,
  Button,
} from "@material-ui/core";
import { AddCircleOutlined } from "@material-ui/icons";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "220px",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export default function CreateSales() {
  const classes = useStyles();
  const storeItems = [
    {
      id: 1,
      name: "Poshak Satu",
      item_price: [
        {
          unit: "kg",
          quantity: 1,
          price: 300,
        },
        {
          unit: "gm",
          quantity: 500,
          price: 300,
        },
      ],
    },
    {
      id: 2,
      name: "Bhaleshwor Dalmoth",
      item_price: [
        {
          unit: "kg",
          quantity: 1,
          price: 400,
        },
        {
          unit: "gm",
          quantity: 500,
          price: 300,
        },
      ],
    },
    {
      id: 3,
      name: "Jesh Honey",
      item_price: [
        {
          unit: "ltr",
          quantity: 1,
          price: 300,
        },
        {
          unit: "ml",
          quantity: 500,
          price: 300,
        },
      ],
    },
  ];

  const [items, setItems] = useState(storeItems);
  const [itemPrices, setItemPrices] = useState([]);
  const [price, setPrice] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");

  const itemSelectHandler = (e) => {
    const itemId = e.target.value;
    setSelectedItem(itemId);
    items.find((item) => {
      if (itemId == item.id) {
        setItemPrices(item.item_price);
      }
    });
  };

  const unitSelectHandler = (e) => {
    const unit = e.target.value;
    setSelectedUnit(unit);
    itemPrices.find((itemPrice) => {
      if (unit == itemPrice.unit) {
        setPrice(itemPrice.price);
      }
    });
  };

  const addItemHandler = () => {
    console.log("dsdsd", selectedItem + selectedUnit);
  };

  return (
    <>
      <Container>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Create a new Sales
        </Typography>
        <form noValidate autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Item</InputLabel>
            <Select native={true} onChange={itemSelectHandler}>
              {items.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Units</InputLabel>
            <Select native={true} onChange={unitSelectHandler}>
              {itemPrices.map((itemPrice) => (
                <option value={itemPrice.unit} key={itemPrice.unit}>
                  {itemPrice.unit}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField label="Price" value={price} />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField label="Quantity" />
          </FormControl>
          <FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={addItemHandler}
            >
              <AddCircleOutlined className={classes.icon} />
              Add Item
            </Button>
          </FormControl>
        </form>
      </Container>
    </>
  );
}
