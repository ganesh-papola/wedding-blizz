import React, {useState} from 'react';
import { InputLabel, FormControl, Select, MenuItem, Button } from '@material-ui/core';
import { vendorStyle } from 'styles';
import { strings } from 'constant';
import { useSelector } from 'react-redux';
import { Loader } from 'components'
const { vendors, common } = strings;

const dummy = [
    { label : 'Category1', value : 1 },
    { label : 'Category2', value : 2 },
    { label : 'Category3', value : 3 }
]
export default props => {
    const classes = vendorStyle();
    const { loader = false, catLoader = false, cntrLoader = false, ctLoader = false, category = dummy, country = dummy, city = dummy }
        = useSelector(({ vendor }) => vendor);
    const forms = [
        { title: vendors.SelectCategory, loader: catLoader, data: category, key : 'category' },
        { title: vendors.SelectCountry, loader: cntrLoader, data: country, key : 'country' },
        { title: vendors.SelectCity, loader: ctLoader, data: city, key : 'city' }
    ]
    const [state, setState] = useState({
        category:'', country:'', city:''
    })
    
    const onSeacrh = () =>{

    }

    return (
        <div>
            {
                forms.map((item,i) => (
                    <div className={classes.formControlV} key={item.title} key={i+'-drop-forms'}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id={item.title+"label"}>{item.title}</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id={item.title}
                                value={state[item.key]}
                                onChange={({target:{value}}) => setState({...state, [item.key] : value })}
                                label={item.title}>
                                {item.data.map((it,ind)=><MenuItem value={it.value} key={ind+'-vendors-drops'}>{it.label}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </div>
                ))
            }
            <div className={classes.buttonV}>
                <Button onClick={onSeacrh} variant="contained" size="large" color='primary' >
                        {loader ? <Loader size={15} /> : common.Search}
                </Button>
            </div>
        </div>
    )
}