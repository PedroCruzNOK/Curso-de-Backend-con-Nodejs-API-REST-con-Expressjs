const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('Hola servidor corriendo');
});

routerApi(app);

// //parametros tipo query, estos pueden ser opcionales y se obtienen con la req.query
// app.get('/users', (req, res)=>{
//   const {limit, offset} = req.query;
//     if(limit && offset){
//       res.json({
//         limit:limit,
//         offset:offset
//       })
//     }else{
//       res.send('se debe de enviar un valor tipo query');
//     }
// })

// app.get('/categoria/:categoriaId/producto/:productoId', (req, res)=>{
//   const {categoriaId, productoId} = req.params;
//   res.json({
//     categoriaId: categoriaId,
//     productoId : productoId
//   })
// })

app.listen(port, ()=>{
  console.log('mi port ', port);
});
