import { extractIdFromUrl } from './utils';
import { describe, it, expect } from 'vitest';

describe('utils', () => {
    describe('extractIdFromUrl', () => {
        it('should extract correct id from swapi url', () => {
            expect(extractIdFromUrl('https://swapi.py4e.com/api/people/1/')).toBe('1');
            expect(extractIdFromUrl('https://swapi.py4e.com/api/people/10/')).toBe('10');
            expect(extractIdFromUrl('https://swapi.py4e.com/api/people/999/')).toBe('999');
        });

        it('should throw error if no match', () => {
            expect(() => extractIdFromUrl('https://swapi.py4e.com/api/people/')).toThrow();
            expect(() => extractIdFromUrl('some-random-string')).toThrow();
        });
    });
});
