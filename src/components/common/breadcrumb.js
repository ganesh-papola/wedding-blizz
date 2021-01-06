import React from 'react';
import { Box, Breadcrumbs } from '@material-ui/core';
import { commonStyle } from 'styles';
import { history } from "../../App"
export default ({ breads = [], current='' }) => {
    const classes = commonStyle();
    const handleClick = (item, index) => {
        if (item.path && history)
            history && history.push(item.path);
    }
    if (!breads || !breads.length)
        return null
    return (
        <div className={classes.breadCrumbMain}>
            {
                breads.map((item, index) => (
                    <div key={index+'-breadcrumb'} className={classes.breadcrumbV}>
                        <Box fontFamily='GothamBook' className={classes.breadCrumbT} onClick={() => handleClick(item, index)}>
                            {item.title}
                        </Box>
                        <div className={classes.smallDot} />
                    </div>
                ))
            }
            <Box fontFamily='GothamBook' className={classes.breadCrumbLT}>{current ? current : ''}</Box>
        </div>
    )
}