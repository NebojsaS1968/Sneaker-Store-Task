# Sneaker-Store-Task

Online shop for purchasing sneakers.

## Table of contents

- [Description](#description)
- [Example](#example)
- [Technologies](#technologies)
- [Setup](#setup)

## Description

- App consists of 3 pages: home, history, and checkout
- On home page it displays/renders sneakers that are inside PostgreSQL db on the back-end
- User can choose to add to cart any of the mentioned sneakers. Upon doing that, below the icon for a shopping cart in the navbar, it will display the number of added items in the cart (server restricts purchasing one pair more than once).
- On checkout page user will be given a list of his orders, and a final price that is calculated. He needs to enter some basic validation, and confirm the purchase, or go back and leave the items in the cart as they are.
- Upon confirming the purchase, items in the cart are deleted and number of items that are presented by the number resets to 0.

## Example

Home page:

```
./client/public/images/home/homePage.png
./client/public/images/home/addToCart.png
```

Checkout page:

```
./client/public/images/checkout/finalPrice.png
./client/public/images/checkout/checkout.png
```

History page:

```
./client/public/images/history/history.png
```

## Technologies

### Server-side

- Node.js (Express)
- morgan
- PostgreSQL db
- pg (module for working with Postgres within Node)
- cors
- nodemon

### Client-side

- React
- Context API (for state managment)
- hooks (useState, useEffect, useHistory, useContext)
- axios (for fetching data from the server)
- react-router-dom (for routing)

## Setup

To run the development server (nodemon):

```
$npm run dev
```

To run the client side React app:

```
$npm start
```
