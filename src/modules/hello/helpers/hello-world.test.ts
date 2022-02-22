import 'jest';
import { getHelloWorldMessage } from './hello-world';

describe('hello world', () => {
  beforeEach(() => {});
  describe('getHelloWorldMessage', () => {
    it('returns a hello world message', () => {
      expect(getHelloWorldMessage()).toEqual('Hello, world!');
    });
  });
});
