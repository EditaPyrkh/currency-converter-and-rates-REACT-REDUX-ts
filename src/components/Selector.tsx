import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { selectBaseCurrency, setBaseCurrency } from "../redux/baseCurrencySlice";
import { useGetRatesQuery } from "../redux/ApiCurrencies";
import { useAppSelector } from "../redux/hooks";
import { Loader } from "./Loader";


export const Selector: React.FC = () => {
  
  const baseCurrency = useAppSelector(selectBaseCurrency);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState(baseCurrency);
  const { data, isFetching } = useGetRatesQuery(baseCurrency);
  const rates = data && Object.entries(data.data);
  const currenciesNames = data && Object.keys(data.data);

  const handleSelectChange = (event: SelectChangeEvent) => {
      setSelectedValue(event.target.value);
      dispatch(setBaseCurrency(event.target.value));
    };

    
  return (
    <>
      {isFetching && <Loader />}
      <FormControl>
        <Select
          value={selectedValue}
          onChange={handleSelectChange}
          inputProps={{ "aria-label": "Without label" }}
        >
          {currenciesNames?.map((rates) => (
            <MenuItem
              value={rates}
              key={rates}
            >
              {rates}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )  

};
