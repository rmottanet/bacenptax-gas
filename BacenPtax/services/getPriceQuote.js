/**
 * Fetches the exchange rates for a given currency on a specific date from an external API.
 *
 * @param {string} code - The currency code (e.g., "USD").
 * @param {string} date - The date of the exchange rate in dd/mm/yyyy format.
 * @returns {Array<Object>|null} An array of objects representing the exchange rates, where each object has the following properties:
 *  `dataHoraCotacao`: {string} The date and time of the quote.
 *  `cotacaoCompra`: {number} The buying rate.
 *  `cotacaoVenda`: {number} The selling rate.
 * Returns `null` if an error occurs.
 *
 * @throws {Error} A custom error with the message `getPriceQuote error: <status code>` if the HTTP request fails.
 */
function getPriceQuote(code, date) {

  const endpoint = buildPriceQuoteEndpoint(code, date);

  try {
    
    const response = UrlFetchApp.fetch(endpoint);

    if (response.getResponseCode() !== 200) {
      throw new Error(`getPriceQuote error: ${response.getResponseCode()}`);
    }

    const data = JSON.parse(response.getContentText());
    const priceQuote = data.value.map(cotacao => ({
      dataHoraCotacao: cotacao.dataHoraCotacao,
      cotacaoCompra: cotacao.cotacaoCompra,
      cotacaoVenda: cotacao.cotacaoVenda
    }));

    return priceQuote;
    
  } catch (error) {
    Logger.log('getPriceQuote error:' + error.message)
    return null;
  }
  
}
