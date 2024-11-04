# bacenptax-gas

## ctrl+s :v:

**BacenPtax** is a JavaScript library for Google Apps Script to obtain currency quotes from the Central Bank of Brazil (Bacen) via the PTAX system. This library makes it easy to integrate your projects with the most up-to-date exchange rate data, allowing you to build customized solutions for your needs.


## Features:

* **Quotation retrieval:** Retrieves the quotations of various currencies on a specific date.
* **Date formatting:** Formats dates to meet the requirements of the Bacen API.
* **Endpoint construction:** Automatically generates endpoints for HTTP requests.
* **Ease of use:** Simple and intuitive interface for interacting with the Bacen API.


## How to use:

To use **BacenPtax** in your Google Apps Script, follow these steps:

1. Open the Google Apps Script script where you want to use the library.
2. Go to **Library > Add libraries**.
3. Paste the project ID:

```plaintext
1mu3XX24jnB9iIr5Zwfse4BGwPYxn0YQR_ChnrvuXu6BaHdqW_RnUych6
```

**Exemple:**

```javascript
function getDollarQuote() {

  var code = 'usd';
  var quote = BacenPtax.getPriceQuote(code, '10/22/2024');

  Logger.log(quote);
  
}
```

---

Thank you for considering the **BacenPtax** for your needs. If you have any questions or need further assistance, please don't hesitate to reach out.

<br />
<br />
<div align="center">
  <a href="https://bitbucket.org/rmottalabs/"><img alt="Static Badge" src="https://img.shields.io/badge/-Bitbucket?style=social&logo=bitbucket&logoSize=auto&label=Bitbucket&link=https%3A%2F%2Fbitbucket.org%2Frmottalabs%2Fworkspace%2Foverview%2F"></a>
  <a href="https://gitlab.com/rmottanet"><img alt="Static Badge" src="https://img.shields.io/badge/-Gitlab?style=social&logo=gitlab&logoSize=auto&label=Gitlab&link=https%3A%2F%2Fgitlab.com%2Frmottanet"></a>
  <a href="https://github.com/rmottanet"><img alt="Static Badge" src="https://img.shields.io/badge/-Github?style=social&logo=github&logoSize=auto&label=Github&link=https%3A%2F%2Fgithub.com%2Frmottanet"></a>
  <a href="https://hub.docker.com/"><img alt="Static Badge" src="https://img.shields.io/badge/-DockerHub?style=social&logo=docker&logoSize=auto&label=DockerHub&link=https%3A%2F%2Fhub.docker.com%2Fu%2Frmottanet"></a>
</div>
