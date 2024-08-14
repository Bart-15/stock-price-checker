# Real-Time Stock Price Checker

This is a simple web application that allows users to search for real-time stock prices by entering a stock symbol. The app fetches data from a stock price API and displays the current stock price. If the user enters an invalid or non-existent stock symbol, an appropriate error message is shown.

## Features

- **Search for Stock Prices:** Input a stock symbol (e.g., NFLX) to retrieve the current stock price in real-time.
- **Handle Errors:** The app displays an error message if the user searches for a non-existent or invalid stock symbol.
- **Real-Time Data:** Fetches real-time stock data using the Alpha Advantage API.

## Installation

1. Create a free account at [Polygon.io](https://polygon.io) and copy the api key.
1. Clone the repository `https://github.com/Bart-15/stock-price-checker.git`
1. `cd stock-price-checker`
1. Run `npm install`
1. Run `cp .env.local_template .env.local`
1. In _.env.local_:

- Add the Polygon api key as the value for `POLYGON_API_KEY`

## Running the App

Run `npm run dev`. The app will be found at [http://localhost:3000](http://localhost:3000)
