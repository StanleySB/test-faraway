import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { Character, CharacterEditData } from '@entities/character/model/types';
import { extractIdFromUrl } from '@shared/lib/utils';
import { useCharacterStore } from '@shared/store/characterStore';

export const editCharacterSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    height: z.string().min(1, 'Height must be a positive number').refine(v => !isNaN(Number(v)) && Number(v) > 0, 'Invalid height'),
    mass: z.string().min(1, 'Mass must be a positive number').refine(v => !isNaN(Number(v)) && Number(v) > 0, 'Invalid mass'),
    hair_color: z.string().min(1, 'Hair color is required'),
    skin_color: z.string().min(1, 'Skin color is required'),
    eye_color: z.string().min(1, 'Eye color is required'),
    birth_year: z.string().min(1, 'Birth year is required'),
    gender: z.string().min(1, 'Gender is required'),
});

export type EditCharacterFormValues = z.infer<typeof editCharacterSchema>;

export const useEditCharacterForm = (character: Character, onClose: () => void) => {
    const id = extractIdFromUrl(character.url);
    const existingEdits = useCharacterStore(state => state.editedCharacters[id]);
    const saveCharacterEdit = useCharacterStore(state => state.saveCharacterEdit);

    const defaultValues: EditCharacterFormValues = useMemo(() => {
        const edits = existingEdits || {};
        return {
            name: edits.name ?? character.name,
            height: (edits.height ?? character.height).toString(),
            mass: (edits.mass ?? character.mass).toString(),
            hair_color: edits.hair_color ?? character.hair_color,
            skin_color: edits.skin_color ?? character.skin_color,
            eye_color: edits.eye_color ?? character.eye_color,
            birth_year: edits.birth_year ?? character.birth_year,
            gender: edits.gender ?? character.gender,
        };
    }, [existingEdits, character]);

    const form = useForm<EditCharacterFormValues>({
        resolver: zodResolver(editCharacterSchema),
        values: defaultValues,
    });

    const onSubmit = (data: EditCharacterFormValues) => {
        const saveData: CharacterEditData = {
            ...data,
        };
        saveCharacterEdit(id, saveData);
        onClose();
    };

    return {
        form,
        onSubmit: form.handleSubmit(onSubmit),
    };
};
