function count(){
  const num = window.document.getElementById('num') 
  const res = window.document.getElementById('res')
  

if (num.value.length == ''){
  window.alert ('[ERROR] Enter a valid number')
}else{
  let n = Number(num.value)
  res.innerHTML = `The multiplication table for ${n} is as follows: <br><br>`
  for(let c = 1; c<= 10; c++){
    let multiplication = c*n
    res.innerHTML += `${n} x ${c} = ${multiplication}<br>`
  }
}
  
//Botao Reset 
reset.addEventListener('click', function(){
  window.document.getElementById('num').value= ''
  window.document.getElementById('res').textContent ='' 
}) 

}
