import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CharacterEditData } from '@entities/character/model/types';

interface CharacterStoreState {
    editedCharacters: Record<string, CharacterEditData>;
    saveCharacterEdit: (id: string, data: CharacterEditData) => void;
}

export const useCharacterStore = create<CharacterStoreState>()(
    persist(
        (set) => ({
            editedCharacters: {},
            saveCharacterEdit: (id, data) =>
                set((state) => ({
                    editedCharacters: {
                        ...state.editedCharacters,
                        [id]: {
                            ...state.editedCharacters[id],
                            ...data,
                        },
                    },
                })),
        }),
        {
            name: 'star-wars-character-storage',
        }
    )
);
