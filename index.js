const app = require ('./config/custom-express')()

app.listen(3000,function(){
  console.log('Śervidor de pé em hhtp://localhost:3000')
  console.log('Para derrubar o servidor: ctrl+c')
})
