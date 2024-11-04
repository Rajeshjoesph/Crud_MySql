const express = require("express");
const db = require("../config/connection");

const post = async (req, res) => {
  try {
    const { productName, desce, stock, mrp } = req.body;
    console.log(req.body);
    const CreateProduct =
      "INSERT INTO prouct(productName,desce,stock,mrp)VALUES (?,?,?,?)";
    db.query(
      CreateProduct,
      [productName, desce, stock, mrp],
      (error, result) => {
        if (error) throw error;
        res.status(200).send({
          data: result,
          message: "Product created successfully!",
        });
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

const allData = async (req, res) => {
  try {
    // const { productName, desce } = req.body;
    // console.log(productName);
    const viewProduct = "SELECT * FROM prouct";
    db.query(viewProduct, (error, result) => {
      if (error) throw error;
      res.send({
        data: result,
        message: "All Data !",
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

const Update = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const { productName, desce, stock, mrp } = req.body;

    const Updateproduct =
      "UPDATE prouct SET productName = ? ,desce = ? ,stock = ? ,mrp = ?  WHERE id = ? ";
    db.query(
      Updateproduct,
      [productName, desce, stock, mrp, id],
      (error, result) => {
        if (error) throw error;
        res.status(200).send({
          data: result,
          message: "Product created successfully!",
        });
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

const Delete = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProducct = "DELETE FROM prouct WHERE id = ?";
    db.query(deleteProducct, [id], (error, result) => {
      if (error) throw error;
      res.status(200).send({
        data: result,
        message: "Successfull data deleted",
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  post,
  Update,
  allData,
  Delete,
};
