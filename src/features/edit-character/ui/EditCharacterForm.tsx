import React from 'react';
import { Box, TextField, Button, Grid, Paper, Typography, MenuItem } from '@mui/material';
import { Controller } from 'react-hook-form';
import type { Character } from '@entities/character/model/types';
import { useEditCharacterForm, type EditCharacterFormValues } from '../lib/useEditCharacterForm';

interface EditCharacterFormProps {
    character: Character;
    onClose: () => void;
}

const FORM_FIELDS: { name: keyof EditCharacterFormValues; label: string; type?: 'string' | 'number' | 'select'; options?: string[] }[] = [
    { name: 'name', label: 'Name' },
    { name: 'birth_year', label: 'Birth Year' },
    { name: 'gender', label: 'Gender', type: 'select', options: ['female', 'male', 'droid', 'other'] },
    { name: 'height', label: 'Height (cm)', type: 'number' },
    { name: 'mass', label: 'Mass (kg)', type: 'number' },
    { name: 'hair_color', label: 'Hair Color' },
    { name: 'eye_color', label: 'Eye Color' },
    { name: 'skin_color', label: 'Skin Color' },
];

export const EditCharacterForm: React.FC<EditCharacterFormProps> = ({ character, onClose }) => {
    const { form, onSubmit } = useEditCharacterForm(character, onClose);
    const { control, formState: { errors } } = form;

    return (
        <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom fontWeight="bold" color="primary.main">
                Edit Character
            </Typography>
            <Box component="form" onSubmit={onSubmit} sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    {FORM_FIELDS.map((field) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={field.name}>
                            <Controller
                                name={field.name}
                                control={control}
                                render={({ field: controllerField }) => (
                                    <TextField
                                        {...controllerField}
                                        fullWidth
                                        select={field.type === 'select'}
                                        label={field.label}
                                        type={field.type === 'number' ? 'number' : 'text'}
                                        error={!!errors[field.name]}
                                        helperText={errors[field.name]?.message}
                                    >
                                        {field.type === 'select' && field.options?.map(option => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                )}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                    <Button variant="outlined" color="inherit" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Save Changes
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};
