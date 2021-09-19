import React, { useEffect } from "react";
import styles from "./Dashboard.module.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncGetDaily, selectDaily } from "../covidSlice";

import SwitchCountry from "../SwitchCountry/SwitchCountry";
import Chart from "../Chart/Chart";
import PieChart from "../PieChart/PieChart";
import Cards from "../Cards/Cards";

const useStyles = makeStyles((theme) => ({
  title: {
    // 倍率　１００％
    flexGrow: 1,
  },
  // 上側の85を開ける
  content: {
    marginTop: 85,
  },
}));

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const dispach = useDispatch();
  const daily = useSelector(selectDaily);

  // 初期値
  useEffect(() => {
    dispach(fetchAsyncGetDaily("japan"));
  }, [dispach]);

  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid 19 Live Dashboard
          </Typography>
          <div>
            <Typography variant="body1">
              {new Date(daily[daily.length - 1].Date).toDateString()}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>

      <Container className={classes.content}>
        <div className={styles.container}>
          <SwitchCountry />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>

          <Grid item xs={12} md={7}>
            <Chart />
          </Grid>

          <Grid item xs={12} md={5}>
            <PieChart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
