import React from 'react';
import { InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import { vendorStyle } from 'styles';
import { strings } from 'constant';
import DropBoxs from './dropboxs';
const { vendors } = strings;

export default props => {
    const classes = vendorStyle();

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={age}
                    // onChange={handleChange}
                    label="Age">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}