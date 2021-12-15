import React, { useContext} from 'react';
import {Card,CardContent,CardHeader,Typography,Grid,Divider} from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../Snackbar/InfoCard';
const Main = () => {
    const classes = useStyles();

    const { balance } = useContext(ExpenseTrackerContext);
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
                <Typography variant="subtitle1" style={{lineHeight: '1.5rem', marginTop: '20px'}}>
                    {/* InfoCard */}
                   <InfoCard />
                </Typography>
                <Divider  className={classes.divider} />
                {/* form */}
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* list */}
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Main
