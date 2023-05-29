НЕ ИСПРАВЛЕНО: 
----
/src/redux/ApiCurrencies
значение rates(из Results) принимает тип string | number,
----
![image](https://github.com/EditaPyrkh/currency-converter-and-rates/assets/113599547/d5da4a85-7084-4e8f-ac88-dbc19c22c933)
-----
но при конвертации в src/redux/Converter ловит ошибку Uncaught TypeError: Cannot convert undefined or null to object 
----
![image](https://github.com/EditaPyrkh/currency-converter-and-rates/assets/113599547/f6904877-c427-4ca3-bf2d-1747c92d68dc)



# React Project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
