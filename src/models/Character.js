const { append } = require("express/lib/response");
const { DataTypes } = require("sequelize");
const { Character } = require("../db");

module.exports = (sequelize) => {
  return sequelize.define("character", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    history: {
      type: DataTypes.STRING,
    },
  });
};
/*○ Imagen.
○ Nombre.
○ Edad.
○ Peso.
○ Historia.
○ Películas o series asociadas.*/

// app.post("/character", (req, res) => {
//   const { name } = req.body;
//   const { image } = req.body;
// });
// app.get("/characters/:id", (req, res) => {
//   const { id } = req.params;
//   Character.find(id);
// });
// app.delete("/characters/:id", (req, res) => {
//   const { id } = req.params;
//   Character.delete(id);
// });
