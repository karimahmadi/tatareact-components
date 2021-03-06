module.exports = () =>
  `import { DeleteSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the {{ camelCase crudModulePrefix }}Delete state domain
 */

const select{{ properCase crudModulePrefix }}DeleteDomain = state => state.{{ camelCase crudModulePrefix }}Delete || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by {{ properCase crudModulePrefix }}Delete
 */

const makeSelect{{ properCase crudModulePrefix }}Delete = () =>
  DeleteSelector(select{{ properCase crudModulePrefix }}DeleteDomain, substate => substate);

export default makeSelect{{ properCase crudModulePrefix }}Delete;
export { select{{ properCase crudModulePrefix }}DeleteDomain };
`;
