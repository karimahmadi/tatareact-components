module.exports = () =>
  `import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the {{ camelCase name }} state domain
 */

const select{{ properCase name }}Domain = state => state.{{ camelCase name }} || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by {{ properCase name }}
 */

const makeSelect{{ properCase name }} = () =>
  createSelector(select{{ properCase name }}Domain, substate => substate);

export default makeSelect{{ properCase name }};
export { select{{ properCase name }}Domain };`;
