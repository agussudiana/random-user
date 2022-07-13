import { defaultQuery } from "contants/defaultQuery";
import { useDebouncedEffect } from "hooks/useDebounceEffect";
import { useQueryContext } from "hooks/useQueryContext";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const Filter = () => {
  const { query, setQuery } = useQueryContext();
  const [keyword, setKeyword] = useState("");

  const selectGender = (event: SelectChangeEvent<any>) => {
    setQuery((cur) => ({ ...cur, gender: event.target.value, page: 1 }));
  };

  const resetFilter = () => {
    setQuery(defaultQuery);
    setKeyword("");
  };

  useDebouncedEffect(
    () => {
      setQuery((cur) => ({ ...cur, keyword, page: 1 }));
    },
    1000,
    [keyword]
  );

  return (
    <Grid container spacing={2} alignItems="end" mb={1}>
      <Grid item xs={4}>
        <Typography>Search</Typography>
        <TextField
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          value={keyword}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <Typography>Gender</Typography>
          <Select
            value={query.gender}
            onChange={selectGender}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={resetFilter}
          sx={{ height: "55px" }}
          variant="outlined"
        >
          Reset Filter
        </Button>
      </Grid>
    </Grid>
  );
};
