module.exports = () =>
  `// import { select{{ properCase crudModulePrefix }}CreateDomain } from '../selectors';

describe('select{{ properCase crudModulePrefix }}CreateDomain', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(false);
  });
});`;
