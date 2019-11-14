# Token Sale Problem

## Problem Statement

Supposedly there's a token sale that sells token X for token Y. For ease of discussion, let's call token X (token for sale), SALE token and token Y (base currency) ETH.

This simple CLI app is to allow us to quickly determine the amount of SALE token a given amount of ETH would fetch. ETHSALE rate is the rate of amount of SALE that 1 ETH can get and is provided as an input with the app.

A token sale may also want to accept another cryptocurrency other than ETH, such as BTC and DOGE. As the price of SALE is fixed at ETH, and BTCUSD price fluctuates according to market, BTCSALE has to be computed based on market rate of BTCUSD and ETHUSD.

## Implementation

 This library provides implementation of classes `computesale` which can be used to calculate tokens of provided order.

## Setup

### Method 1: Using Docker

Using `Docker` to run this project:
- Docker Version: 18.06.1-ce
- Docker Compose Version: 1.23.0-rc1


1. Place inputs in `inputs` directory.

    NOTE: A sample input file `input01.txt` has been placed in `inputs` directory for reference.

2. Run docker container

   ```
   $ make set-up
   $ make dirty-up
   ```

   or

   ```
   $ docker-compose up --build
   ```

3. Enter into the docker container:

   ```
   $ make bash
   ```

   or

   ```
   $ docker-compose run token-sale sh
   ```

4. Run CLI command to calculate tax:

   ```
   $ node dist/index.js < inputs/input01.txt
   ```

### Method 2: Manually

We are assuming that you have node and npm installed in your system. For this project we have used `Node- v8.9.4`.

1. Install all required dependencies

   ```
   $ npm install
   ```
2. Run tests

   ```
   $ npm run test
   ```

   or

   ```
   $ make test
   ```

3. Place inputs in `inputs` directory.

    NOTE: A sample input file `input01.txt` has been placed in `inputs` directory for reference.

4. Run command:

   ```
   $ node dist/index.js < inputs/input01.txt
   ```