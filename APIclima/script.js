try{
async function buscarclima(){

    let climabruto = await fetch ('https://api.open-meteo.com/v1/forecast?latitude=-28.4667,-28.4447,-28.3743,-28.4825,-28.6214&longitude=-49.0069,-48.9578,-48.8828,-48.7808,-49.0253&hourly=temperature_2m')


}
buscarclima ()
}catch (erro){
    console.log(`requisição falhou por este motivo: ${erro}`)
}