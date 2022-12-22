export const formatMoney = Intl.NumberFormat('pt-pt', {
  style: 'currency',
  currency: 'EUR',
});

export const formatDate = Intl.DateTimeFormat('pt-pt', {
  dateStyle: 'long',
  timeStyle: 'medium',
});
