


import React, { useState } from 'react';
import { Typography, Box } from '@material-ui/core';
import PlacesAutocomplete from "react-places-autocomplete";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "components";
import { commonStyle } from "styles";

export default ({ value = null, onChange = () => { }, label, maxLength, error, secure = false, ...tprops }) => {
    const classes = commonStyle();
    const [val, setValue] = useState(value?value:'');
    const onSelect = v => {
        setValue(v);
        onChange(v)
    }

    return (
        <div className={classes.inputFieldsV}>
            <PlacesAutocomplete
                value={val}
                onChange={setValue}
                onSelect={onSelect}
                shouldFetchSuggestions={val > 2}>
                { ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <Autocomplete
                        id="google-places-auto-complete"
                        freeSolo
                        options={suggestions}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (<TextField {...params} value={value} label={label}/>)} />
                    )}
            </PlacesAutocomplete>
        </div>
    )
}