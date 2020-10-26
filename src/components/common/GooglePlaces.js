


import React, { useState, useEffect } from 'react';
import { TextField, Box } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import GooglePlacesAutocomplete, { geocodeByPlaceId } from "react-google-places-autocomplete";
import { commonStyle, clearAddressStyle } from "styles";

export default ({ value = null, onChange = () => {}, label, maxLength, error }) => {
    const classes = commonStyle();
    const [val, setValue] = useState('');
    const [open, setOpen] = useState(false);
    useEffect(()=>setValue(value?value:''),[value])
    let placeRef={};
    const handleSelectAddress = async suggestion => {
        setOpen(false)
        const address = await geocodeByPlaceId(suggestion.place_id);
        const format = extractAddress(address[0],suggestion);
        setValue(format.address);
        onChange(format);
    }
    
    const onChangeText = (v) => {
        placeRef&&placeRef.changeValue(v);
        setValue(v);
        onChange(v);
        setOpen(true)
    }

    return (
        <div className={classes.inputFieldsV}>
            <GooglePlacesAutocomplete ref={ref=>placeRef=ref}
                apiKey={process.env.REACT_APP_GOOGLE_KEY}
                types={'regions'}
                renderInput={props => (
                    <TextField {...props} value={val} onChange={({target:{value}})=>onChangeText(value)} className={classes.inputFields} error={!!error} helperText={error} placeholder={''} label={label} variant="outlined" />
                )}
                renderSuggestions={(active, suggestions, onSelectSuggestion) => {
                    return (
                        <div className={classes.googlePlacesTV}>
                            {suggestions&&suggestions.length&&open?(
                            <div className={classes.googlePlacesSuggestionV}>
                                <div className={classes.addressCrossIconV}>
                                    <Clear style={clearAddressStyle} onClick={() => setOpen(false)} />
                                </div>
                                {suggestions.map((suggestion,i) => (
                                    <Box key={'google-places-address'+i} onClick={() => handleSelectAddress(suggestion)} fontFamily="Gotham" className={classes.googlePlacesSuggestionT}>{suggestion.description}</Box>
                                ))}
                            </div>):null}
                        </div>
                    )
                }}
            />

        </div>
    )
}
const extractAddress = (places, suggestion) => {
    let city, state, zip, route, country, latitude=places?.geometry?.location?.lat(),
    longitude=places?.geometry?.location?.lng(), name=suggestion?.structured_formatting?.main_text;
    const address = places.address_components
    address.forEach(component=> {
        if (component?.types.indexOf('locality') > -1)
            city = component.long_name;
        if (component?.types.indexOf('administrative_area_level_1') > -1) 
            state = component.long_name;
        if (component?.types.indexOf('postal_code') > -1)
            zip = component.long_name;
        if (component?.types.indexOf('street_number') > -1)
            route = component.long_name?component.long_name:'';
        if (component?.types.indexOf('route') > -1)
            route = route?route+', '+component.long_name?component.long_name:'' :route+component.long_name?component.long_name:'';
        if (component?.types.indexOf('neighborhood') > -1)
            route = route?route+', '+component.long_name?component.long_name:'' :route+component.long_name?component.long_name:'';
        if (component?.types.indexOf('sublocality') > -1)
            route = route?route+', '+component.long_name?component.long_name:'' :route+component.long_name?component.long_name:'';
        if (component?.types.indexOf('country') > -1)
            country = component.long_name;
    });
    return {name, route, city, state, country, zip, latitude, longitude, address:route?(name+' '+route):name}
}