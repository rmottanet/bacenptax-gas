function formatarData(data) {
  // Obtém os componentes da data
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();

  // Formata a data no formato dd/mm/yyyy
  return `${mes}/${dia}/${ano}`;
}
