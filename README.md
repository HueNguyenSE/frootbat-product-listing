# FROOTBAT PROJECT
Frootbat product listing is a simple product listing application built with React and Ruby on Rails. The application allows non-login users to view in stocks products in the client and login users can view, create, modify, and delete products in the backend.

## TECH STACK
- Frontend: ReactJS
- Backend: Ruby on Rails
- Database: PostgreSQL
- Version control: Git
## PROJECT SETUP AND INSTALLATION
*The installation requirements for the project*:

1. Node.js: You will need to have Node.js installed on your machine to run the client application. You can download and install Node.js from the official website: https://nodejs.org/en/.

2. Ruby on Rails: You will need to have Ruby on Rails installed on your machine to run the server application. You can download and install Ruby on Rails from the official website: https://guides.rubyonrails.org/v5.1/getting_started.html.

It is important to note that the installation process for Node.js and Ruby on Rails can vary depending on the operating system you are using. You should consult the official documentation for each tool to ensure that you are installing them correctly on your specific operating system.

Now, it's good to go ahead.

To run the frootbat-product-listing application, you will need to follow these steps:

1. Clone the repository by running the following command in your terminal:
    ```
    git clone https://github.com/HueNguyenSE/frootbat-product-listing.git
    ```
2. Install the dependencies for both the client and server applications. To do this, navigate to the project's root directory and run the following commands:
    ```
    cd client && npm install
    cd ../server && bundle install
    ```

3. Set up the database by running the following commands in the server directory
    ```
    rails db:create
    rails db:migrate
    rails db:seed
    ```
    These commands will create the database, run the necessary migrations, and seed the database with sample data.

4. Start the server by running the following command in the server directory:
    ```
    rails s
    ```

5. Start the client by running the following command in the client directory:
    ```
    npm run start
    ```
Type 'yes' to continue.

## FEATURES
**BACKEND**
- User can login on backend
- Once being logged in user can add, edit and remove products
- Users are able to search products by product name
- When users create a new product, they will enter:
    - Mandatory fields
        - Product Name
        - Image
        - Price
        - Availability
    - Optional fields
        - Description
        - Product Category
        - Brand
        - GTIN international code

**FRONTEND**
- Non-login users can view all products listed.
- The list of products show product name, images and price
- Out of stock products are not included in the list
## HOW TO USE THE APPLICATION

**BACKEND**
- Navigate to http://localhost:3000 in your browser to view the application.
- Use the following credentials to login
    email: leo@frootbat.com
    password: leo
- Or you can sign up using any email address
- Feel free to play around with searching, creating, updating, and deleting products.

**FRONTEND**
- By default, when running `npm run start`, the client will be run in the browser at http://localhost:3001
## SOME TECHNIQUES/ TOOLS USED
1. Loading data into the database

To load xml data into the database, I used gem `crack` to read the data. Alternative gem that many people suggest is `nokogiri` ; however, I found `crack` is easier to use.
I might write more details about using `crack` for seeding data from a file to database in a blog post.

2.


