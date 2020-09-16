import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { commonStyle } from 'styles';

export default ({ breads=[], current='' }) => {
    const classes = commonStyle();
    const handleClick = (item)=>{
        props.history&&props.history.push(item.link);
    }
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {
                breads.map((item,index)=>(
                    <>
                    {index&&<Typography color="textPrimary">.</Typography>}
                    <Link color="inherit" onClick={handleClick}>
                        {item.text}
                    </Link>
                    </>
                ))
            }
            <Typography color="textPrimary">{current}</Typography>
      </Breadcrumbs>
    )
}