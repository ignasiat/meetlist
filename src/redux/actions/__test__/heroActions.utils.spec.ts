import 'md5';
import { getUrlParameters } from '../heroActions.utils';

// md5 is mock returning a string joining
// the arguments
jest.mock('md5');

describe('Given a heroActions utils file', () => {
  describe('Given a getUrlParameters function', () => {
    test('When is invoked should return an object with 3 properties', () => {
      process.env.REACT_APP_PRIVATE_KEY = 'fakePrivateKey';
      process.env.REACT_APP_PUBLIC_KEY = 'fakePublicKey';

      const result = getUrlParameters();

      expect(Object.keys(result).length).toBe(3);
      expect(result.hash.includes('fakePublicKey')).toBeTruthy();
    });
  });
});
