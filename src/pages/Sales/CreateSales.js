import {
  FormControl,
  makeStyles,
  TextField,
  Select,
  Typography,
  InputLabel,
  Button,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
import { AddCircleOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import Swal from "sweetalert2";

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
  const [selectedItemName, setselectedItemName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const [quantity, setQuantity] = useState("");
  const [addedItems, setAddedItems] = useState([]);

  const itemSelectHandler = (e) => {
    const itemId = e.target.value;
    const itemName = e.target.selectedOptions[0].text;
    setselectedItemName(itemName);
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
    const totalForItem = price * quantity;
    let newSales = {};
    if (selectedItem && selectedUnit && quantity && price) {
      newSales = {
        item: selectedItem,
        item_name: selectedItemName,
        unit: selectedUnit,
        quantity: quantity,
        unit_price: price,
        total: totalForItem,
      };
      setAddedItems([...addedItems, newSales]);
    } else {
      Swal.fire({
        title: "Error!",
        text: "Enter all the fields!",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }

    setItemPrices([]);
    setPrice("");
    setQuantity("");
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Create Sales
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} sm={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-mutiple-name-label">Item</InputLabel>
            <Select native={true} onChange={itemSelectHandler}>
              {items.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-mutiple-name-label">Units</InputLabel>
            <Select native={true} onChange={unitSelectHandler}>
              {itemPrices.map((itemPrice) => (
                <option value={itemPrice.unit} key={itemPrice.unit}>
                  {itemPrice.unit}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <FormControl fullWidth>
            <TextField label="Price" value={price} />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <FormControl fullWidth>
            <TextField
              label="Quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
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
        </Grid>
        <Grid item xs={12} md={12} sm={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Unit Price</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {addedItems.map((addedItem, index) => (
                  <TableRow key={index}>
                    <TableCell>{addedItem.item_name}</TableCell>
                    <TableCell>{addedItem.quantity}</TableCell>
                    <TableCell>{addedItem.unit_price}</TableCell>
                    <TableCell>{addedItem.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}
