//@ts-nocheck
import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import { useGetRatesQuery } from "../redux/ApiCurrencies";
import { useAppSelector } from "../redux/hooks";
import { selectBaseCurrency } from "../redux/baseCurrencySlice";
import { Loader } from "./Loader";

export const Rates = () => {
  const baseCurrency = useAppSelector(selectBaseCurrency);
  const { data, isFetching } = useGetRatesQuery(baseCurrency);
  const rates = data && Object.entries(data.data);
  return (
    <>
      {isFetching && <Loader />}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 260 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell align="right">Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rates?.map((rate) => {
              if (rate[0] !== baseCurrency) {
                return (
                  <TableRow
                    key={rate[0]}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {rate[0]}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      {rate[1]}
                    </TableCell>
                  </TableRow>
                );
              }

              return null;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
