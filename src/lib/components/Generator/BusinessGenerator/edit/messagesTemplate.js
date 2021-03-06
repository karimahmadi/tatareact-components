module.exports = () =>
`
/*
 * {{properCase crudModulePrefix}}Edit Messages
 *
 * This contains all the text for the {{properCase crudModulePrefix}}Edit container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.{{properCase crudModulePrefix}}Edit';

export default defineMessages({
  header: {
    id: \`\${scope}.header\`,
    defaultMessage: 'This is the {{properCase crudModulePrefix}}Edit container!',
  },
});
`
