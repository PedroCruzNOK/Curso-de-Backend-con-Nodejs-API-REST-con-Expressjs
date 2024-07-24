const express = require('express');
const {faker} = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res)=>{
  const {size} = req.query;
  const limit = size || 10;
  const productos = [];
  for (let index = 0; index < limit; index++) {
    productos.push({
      nombre: faker.commerce.productName(),
      precio: parseInt(faker.commerce.price(), 10),
      imagen: faker.image.imageUrl(),
    })

  }
  res.json(productos);
});

//  parametros tipo params y se obtienen mediante req.params
router.get('/:id', (req, res)=>{
  const {id} = req.params;
  res.json({
    id,
    nombre:'pantalon 1',
    precio: 560
  })
})

module.exports = router;
