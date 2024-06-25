const { expect } = require('chai');
const formatDate = require('../../src/helpers/formatDate');

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2020-01-01T00:00:00Z');
    const formattedDate = formatDate(date);
    expect(formattedDate).to.equal('01/01/2020');
  });
});
