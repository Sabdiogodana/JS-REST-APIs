// let fetch =require("node-fetch")
const url = 'https://jsonplaceholder.typicode.5500/products';
fetch(url)
  .then(function() {
  
  })
  .catch(function() {
   
  });
  const productsList=document.getElementById("products")  
  productsList.fetch('/products',{
       method:'GET',
       headers:{
        "Content-type":"application/json"
       }
  }
  )
  const ul = document.getElementById('products');


