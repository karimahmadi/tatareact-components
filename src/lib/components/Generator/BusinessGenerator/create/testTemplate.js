module.exports = () =>
  `/**
 *
 * Tests for {{ properCase crudModulePrefix }}Create
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
{{#if wantMessages}}
import { IntlProvider } from 'react-intl';
{{/if}}
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { {{ properCase crudModulePrefix }}Create } from '../index';
{{#if wantMessages}}
import { DEFAULT_LOCALE } from '../../../i18n';
{{/if}}

describe('<{{ properCase crudModulePrefix }}Create />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
{{#if wantMessages}}
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <{{ properCase crudModulePrefix }}Create dispatch={dispatch} />
      </IntlProvider>,
    );
{{else}}
    render(<{{ properCase crudModulePrefix }}Create dispatch={dispatch} />);
{{/if}}
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
{{#if wantMessages}}
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <{{ properCase crudModulePrefix }}Create />
      </IntlProvider>,
    );
{{else}}
    const {
      container: { firstChild },
    } = render(<{{ properCase crudModulePrefix }}Create />);
{{/if}}
    expect(firstChild).toMatchSnapshot();
  });
});
`;
