import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useCharacterSearch } from '../lib/useCharacterSearch';

export const SearchCharacter = () => {
    const { searchValue, setSearchValue } = useCharacterSearch();

    return (
        <TextField
            fullWidth
            variant="outlined"
            placeholder="Search characters by name..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            sx={{ mb: 3 }}
        />
    );
};
