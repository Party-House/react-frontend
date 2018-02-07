/*
 * DebtsPanel Messages
 *
 * This contains all the text for the DebtsPanel component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  debtValue: {
    id: 'app.components.DebtsPanel.debt',
    defaultMessage: `Valor Devido: {debt}`,
  },
  paid: {
    id: 'app.components.DebtsPanel.paid',
    defaultMessage: 'Pago:',
  },
  received: {
    id: 'app.components.DebtsPanel.received',
    defaultMessage: 'Recebido:',
  },
  transfered: {
    id: 'app.components.DebtsPanel.transfered',
    defaultMessage: 'Transferido:',
  },

});
