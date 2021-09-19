import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, FormControl } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchAsyncGetDaily } from "../covidSlice";

const useStyles = makeStyles((theme) => ({
  fromControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320,
  },
}));

const countries = [
  "japan",
  "china",
  "us",
  "france",
  "italy",
  "spain",
  "united-kingdom",
  "germany",
  "russia",
  "brazil",
  "taiwan",
  "thailand",
  "new-zealand",
  "sweden",
  "india",
];

const SwitchCountry: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <FormControl className={classes.fromControl}>
      <NativeSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(fetchAsyncGetDaily(e.target.value))
        }
      >
        {/* globalの数値を表すもの */}
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCountry;
