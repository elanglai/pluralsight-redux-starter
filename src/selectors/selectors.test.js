import expect from 'expect';
import {authorsFormattedForDropdown} from "./selectors";

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data or use in a dropdown', () => {
      const authors = [
        {id: 2, firstName: 'Eric', lastName: 'Langlais'},
        {id: 3, firstName: 'John', lastName: 'Doe'}
      ];

      const expected = [
        {value: 2, text: 'Eric Langlais'},
        {value: 3, text: 'John Doe'}
      ];

      let result = authorsFormattedForDropdown(authors);

      expect(result).toEqual(expected);

    });
  });
});
