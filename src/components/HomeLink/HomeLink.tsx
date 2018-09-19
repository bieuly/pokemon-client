import * as React from 'react';
import { Link } from 'react-router-dom';
import './HomeLinkStyles.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme: any) => ({
    button: {
        margin: theme.spacing.unit
    },
    input: {
        display: 'none'
    }
})

const HomeLink = (props: any) => {
    const { classes } = props;
    return (
        <div>
            <Link to="/">
                <Button variant="contained" color="primary" className={classes.button}>Home</Button>
            </Link>
        </div>
    );
}

export default withStyles(styles)(HomeLink);