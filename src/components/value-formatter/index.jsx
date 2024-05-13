export default function ValueFormatter({ value }) {
  const value_formatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  return value_formatted;
}
