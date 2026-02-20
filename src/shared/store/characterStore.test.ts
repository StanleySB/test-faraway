import { useCharacterStore } from './characterStore';
import { describe, it, expect, beforeEach } from 'vitest';

describe('useCharacterStore', () => {
    beforeEach(() => {
        useCharacterStore.setState({ editedCharacters: {} });
    });

    it('should initialize with empty edited characters', () => {
        expect(useCharacterStore.getState().editedCharacters).toEqual({});
    });

    it('should save character edits and merge them over time', () => {
        const state = useCharacterStore.getState();

        state.saveCharacterEdit('1', { name: 'Luke Modified', gender: 'male' });
        expect(useCharacterStore.getState().editedCharacters['1']).toEqual({
            name: 'Luke Modified',
            gender: 'male',
        });

        useCharacterStore.getState().saveCharacterEdit('1', { height: '200' });
        expect(useCharacterStore.getState().editedCharacters['1']).toEqual({
            name: 'Luke Modified',
            gender: 'male',
            height: '200',
        });
    });

    it('should get edited character by id', () => {
        const state = useCharacterStore.getState();
        state.saveCharacterEdit('2', { eye_color: 'red' });

        const edited = useCharacterStore.getState().editedCharacters['2'];
        expect(edited).toEqual({ eye_color: 'red' });
    });

    it('should return undefined for unedited character', () => {
        const edited = useCharacterStore.getState().editedCharacters['99'];
        expect(edited).toBeUndefined();
    });
});
