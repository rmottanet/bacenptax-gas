/**
 * Retrieves the latest price quote for a given code.

 * @param {string} code The code of the asset to retrieve the price quote for.

 * @returns {Object|null} The latest price quote object, or `null` if an error occurs.
 * The price quote object has the following properties:
 *   - `dataHoraCotacao`: The timestamp of the quote.
 *   - `valor`: The price value.
 *   - // ... other properties as needed
 *
 * @throws {Error} If an error occurs during the HTTP request or JSON parsing.
 */
function getPriceQuoteNow(code) {

  const now = new Date();
  const dataFormatada = formatarData(now);

  const endpoint = buildPriceQuoteEndpoint(code, dataFormatada);

  try {
    
    const response = UrlFetchApp.fetch(endpoint);

    if (response.getResponseCode() !== 200) {
      throw new Error(`getPriceQuoteNow error: ${response.getResponseCode()}`);
    }

    const data = JSON.parse(response.getContentText());
    const priceQuotes = data.value;

    // Find the latest quote
    let latestQuote = null;
    priceQuotes.forEach(quote => {
      if (!latestQuote || quote.dataHoraCotacao > latestQuote.dataHoraCotacao) {
        latestQuote = quote;
      }
    });

    return latestQuote;

  } catch (error) {
    Logger.log('getPriceQuoteNow error:' + error.message)
    return null;
  }
  
}
