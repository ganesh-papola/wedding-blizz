


import React, { useState } from 'react';
import { TextField, Box } from '@material-ui/core';
import GooglePlacesAutocomplete, { geocodeByPlaceId } from "react-google-places-autocomplete";

// import { TextField } from "components";
import { commonStyle } from "styles";

export default ({ value = null, onChange = () => { }, label, maxLength, error, secure = false, ...tprops }) => {
    const classes = commonStyle();
    const anchorRef = React.useRef(null);
    // const [open, setOpen] = useState(false);
    const [val, setValue] = useState(value?value:'');
    const handleSelectAddress = async suggestion => {
        const address = await geocodeByPlaceId(suggestion.place_id);
        console.log("description description ", suggestion, address)
        // setValue(v);
        // onChange(v)
    }
    const onChangeText = (v) => {
        setValue(v);
        onChange(v)
    }
      
    return (
        <div className={classes.inputFieldsV}>
            <GooglePlacesAutocomplete
                apiKey={process.env.REACT_APP_GOOGLE_KEY}
                renderInput={props => (
                    <TextField {...props} className={classes.inputFields} placeholder={''} label={label} variant="outlined" />
                )}
                renderSuggestions={(active, suggestions, onSelectSuggestion)=>{
                    return (
                        <div className={classes.googlePlacesTV}>
                            <div className={classes.googlePlacesSuggestionV}>
                                {suggestions.map(suggestion => (
                                    <Box onClick={()=>handleSelectAddress(suggestion)} fontFamily="Gotham" className={classes.googlePlacesSuggestionT}>{suggestion.description}</Box>
                                ))}
                            </div>
                        </div>
                    )
                }}
            />
            
        </div>
    )
}