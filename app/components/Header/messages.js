/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  upcoming: {
    id: `${scope}.upcoming`,
    defaultMessage: 'Upcoming Compaigns',
  },
  live: {
    id: `${scope}.live`,
    defaultMessage: 'Live Compaigns',
  },
  past: {
    id: `${scope}.past`,
    defaultMessage: 'Past Compaigns',
  },
});
