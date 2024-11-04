# bacenptax-gas

## ctrl+s :v:

**BacenPtax** é uma biblioteca JavaScript para o Google Apps Script para obter cotações de moedas do Banco Central do Brasil (Bacen) através do sistema PTAX. Essa biblioteca facilita a integração de seus projetos com os dados de câmbio mais atualizados, permitindo que você construa soluções personalizadas para suas necessidades.


## Funcionalidades:

* **Obtenção de cotações:** Recupera as cotações de diversas moedas em uma data específica.
* **Formatação de datas:** Formata datas para atender aos requisitos da API do Bacen.
* **Construção de endpoints:** Gera automaticamente os endpoints para as requisições HTTP.
* **Facilidade de uso:** Interface simples e intuitiva para interagir com a API do Bacen.


## Como usar:

Para utilizar o **BacenPtax** em seu script do Google Apps Script, siga os seguintes passos:

1. Abra o script do Google Apps Script onde deseja utilizar a biblioteca.
2. Acesse **Biblioteca > Adicionar bibliotecas**.
3. Cole a ID do projeto:

```plaintext
1mu3XX24jnB9iIr5Zwfse4BGwPYxn0YQR_ChnrvuXu6BaHdqW_RnUych6
```


**Exemplo:**

```javascript
function getDollarQuote() {

  var code = 'usd';
  var quote = BacenPtax.getPriceQuote(code, '10/22/2024');

  Logger.log(quote);
  
}
```

---

Agradeço por considerar **BacenPtax** para as suas necessidades. Se você tiver alguma dúvida ou precisar de mais assistência, não hesite em entrar em contato.

<br />
<br />
<div align="center">
  <a href="https://bitbucket.org/rmottalabs/"><img alt="Static Badge" src="https://img.shields.io/badge/-Bitbucket?style=social&logo=bitbucket&logoSize=auto&label=Bitbucket&link=https%3A%2F%2Fbitbucket.org%2Frmottalabs%2Fworkspace%2Foverview%2F"></a>
  <a href="https://gitlab.com/rmottanet"><img alt="Static Badge" src="https://img.shields.io/badge/-Gitlab?style=social&logo=gitlab&logoSize=auto&label=Gitlab&link=https%3A%2F%2Fgitlab.com%2Frmottanet"></a>
  <a href="https://github.com/rmottanet"><img alt="Static Badge" src="https://img.shields.io/badge/-Github?style=social&logo=github&logoSize=auto&label=Github&link=https%3A%2F%2Fgithub.com%2Frmottanet"></a>
  <a href="https://hub.docker.com/"><img alt="Static Badge" src="https://img.shields.io/badge/-DockerHub?style=social&logo=docker&logoSize=auto&label=DockerHub&link=https%3A%2F%2Fhub.docker.com%2Fu%2Frmottanet"></a>
</div>
