let velocidade = prompt('Atenção! Digite aqui a sua velocidade km/h')
if (velocidade > 80){
    let multa = (velocidade-80)*5
    alert(`Atenção! A sua velocidade está acima de 80km/h. A sua multa é de R$ ${multa}`)
}else{
    alert('Muito bem! você está dentro do limite de velocidade.')
}