module.exports = () =>
  `// import { select{{ properCase name }}Domain } from '../selectors';

describe('select{{ properCase name }}Domain', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(false);
  });
});
`;
