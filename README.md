# Introduction:

The project consists of 4 pages: product page, individual product page, cart page and checkout page.

The header consists of the logo and a link to the shopping cart page. This link displays the number of products in the shopping cart.

The main page is a main list of 6 products, a list of categories in the sidebar, and a search field.

The product page presents data about the selected product.

The cart page presents a list of added products.

The page for placing an order consists of a form for entering the buyer's data and a list of products for which the order is placed.

# Installation instructions

To run locally, you need to install dependencies; to do this, use the command:

### `npm i` or `npm install`

To run the application on the hosting server, you need to create a project using the command:

### `npm run build`

Then upload the build folder to the hosting.

# Using the application

There are two links in the header, this is the logo and a link to the cart page. By clicking on the logo you will be redirected to the main page. Clicking on the cart link will take you to the cart page.

The home page has pagination that divides the entire product listing into 6 items on each pagination page. The list of categories on the sidebar is made in the form of buttons with a single choice; when you click on each category, the list of products will change depending on the selected category. Search field (made on the client side). The search is carried out by product name.

The product page provides data about the selected product with the ability to add the product to the cart by clicking the “Add” button, after which a message on the right next to the button will notify you of the successful addition. You can add a product an unlimited number of times by clicking the same button again.

On the cart page there is a list of added products with the ability to change the number of products, it is at least 1, to remove a product from the cart there is a special “Remove from cart” button. The total amount of goods in the cart and the checkout button are also displayed; When clicked, you will be redirected to the checkout page. If there are no items in your cart, you will receive a notification on the cart page informing you that it is empty.

The customer data entry form on the order page is represented by three fields and a form submit button. The fields are checked for completeness, the email field is checked for correct mail, and the phone number field is checked for correct input format. After submitting the form, a message about the order is displayed in the console, and a message about the order is also sent to the manager by email. The list of goods is the list for which the order is placed.

# API

Link: https://fakestoreapi.com/products

The project only used a get request.

The web application processes possible errors during interaction with the API (for example, if the server is unavailable). The text of the error is displayed as a message.

# Application testing

Testing the application is done using the command:

### `npm run test`