import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import * as React from 'react';

const styles = (theme) => ({
    root: {
        borderRadius: 0,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
        textTransform: 'none',
        marginLeft: theme.spacing(4),
        paddingTop: theme.spacing(1.6),
        // boxShadow: 'none',
    },
    sizeSmall: {
        // padding: theme.spacing(1, 3),
        fontSize: theme.typography.pxToRem(12),
    },
    sizeLarge: {
        // padding: theme.spacing(2, 5),
        fontSize: theme.typography.fontSize,
    },
});

function Button(props) {
    return <MuiButton {...props} />;
}

export default withStyles(styles)(Button);
