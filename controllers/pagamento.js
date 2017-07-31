module.exports = function(app) {

  app.get('/pagamento',function(req,res){
    res.send('ok')
  })

  app.post('/pagamento', (req, res)=>{
    var pagamento = req.body
    res.send('OK')
  })
}
