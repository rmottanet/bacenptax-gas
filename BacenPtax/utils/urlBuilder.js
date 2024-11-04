const urlBase = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata'

// Endpoints
const currencyEndpoint = urlBase + '/Moedas'

function buildPriceQuoteEndpoint(code, dataCotacao) {
  const endpointTemplate = `${urlBase}/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@dataCotacao=%27{{dataCotacao}}%27&@moeda=%27{{code}}%27&format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

  var formatedCode = code.toUpperCase();

  const endpoint = endpointTemplate
    .replace('{{code}}', formatedCode)
    .replace('{{dataCotacao}}', dataCotacao);

  return endpoint;
}