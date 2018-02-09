/*
 * BankDetails Messages
 *
 * This contains all the text for the BankDetails component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  account_header: {
    id: 'app.containers.BankDetails.account_header',
    defaultMessage: 'Banco: {bank}',
  },
  account: {
    id: 'app.containers.BankDetails.account',
    defaultMessage: 'Conta: ',
  },
  agency: {
    id: 'app.containers.BankDetails.agency',
    defaultMessage: 'Agencia: ',
  },
  cpf: {
    id: 'app.containers.BankDetails.cpf',
    defaultMessage: 'CPF: ',
  },
});
