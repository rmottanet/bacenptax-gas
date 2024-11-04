/**
 * Fetches a list of currencies from an API.
 *
 * @returns {Array<Object>} An array of objects, where each object represents a currency and has the following properties:
 *   - `nomeFormatado`: Formatted name of the currency.
 *   - `tipoMoeda`: Type of currency.
 *   - `simbolo`: Currency symbol.
 *   Returns an empty array if an error occurs.
 *
 * @throws {Error} If an error occurs during function execution.
 */
function getCurrencyList() {

  try {

    const response = UrlFetchApp.fetch(currencyEndpoint);

    if (response.getResponseCode() !== 200) {
      throw new Error(`getCurrencyList error ${response.getResponseCode()}`);
    }
    
    const data = JSON.parse(response.getContentText());

    // Filter only relevant currency data
    const currencies = data.value.map(moeda => ({
      nomeFormatado: moeda.nomeFormatado,
      tipoMoeda: moeda.tipoMoeda,
      simbolo: moeda.simbolo
    }));

    return currencies;

  } catch (error) {
    Logger.log('getCurrencyList error:' + error.message)
    return [];
  }

}
