/*
 * MonthlyPurchases Messages
 *
 * This contains all the text for the MonthlyPurchases component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  purchase: {
    id: 'app.containers.BankDetails.purchase',
    defaultMessage: 'Valor: {value}. Pago por: {name}',
  },
  comments: {
    id: 'app.containers.MonthlyPurchases.comments',
    defaultMessage: 'Detalhes: ',
  },
  purchase_date: {
    id: 'app.containers.MonthlyPurchases.purchase_date',
    defaultMessage: 'Data da compra: ',
  },
});
