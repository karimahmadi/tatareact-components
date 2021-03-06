module.exports = () =>
  `import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the {{ camelCase crudModulePrefix }}Create state domain
 */

const select{{ properCase crudModulePrefix }}CreateDomain = state => state.{{ camelCase crudModulePrefix }}Create || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by {{ properCase crudModulePrefix }}Create
 */

const makeSelect{{ properCase crudModulePrefix }}Create = () =>
  createSelector(select{{ properCase crudModulePrefix }}CreateDomain, substate => substate);

export default makeSelect{{ properCase crudModulePrefix }}Create;
export { select{{ properCase crudModulePrefix }}CreateDomain };`;
