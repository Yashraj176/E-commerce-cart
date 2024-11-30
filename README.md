# E-commerce Shopping Cart Application

An e-commerce shopping cart application built with **ReactJS** and styled using **TailwindCSS**. This application allows users to browse products, add items to a shopping cart, adjust quantities, remove items, and view a cart summary with optional discounts.

---

## Features

### 1. Product Listing Page
- Displays products in a grid layout.
- Each product card includes:
  - Product image.
  - Product name.
  - Product price (formatted for currency).
  - An "Add to Cart" button.

### 2. Add to Cart Functionality
- Clicking the "Add to Cart" button:
  - Adds the product to the shopping cart.
  - Updates the cart counter displayed in the navbar.
  - Provides visual feedback (e.g., animation or notification).

### 3. Cart Page
- Lists all added products with details such as:
  - Product image, name, and price.
  - Quantity selector (up/down buttons or input field).
  - "Remove Item" button to delete products from the cart.
  
- **Cart Summary Section**:
  - **Subtotal**: Displays the total price based on item quantities.
  - **Discounts** (Optional):
    - Fixed amount (e.g., `$10 off`).
    - Percentage-based (e.g., `10% off`).
  - **Final Price**: Subtotal adjusted with discounts.

- **Checkout button** (optional): Simulates a checkout process.

### 4. Responsive Design
- Fully responsive design using TailwindCSS, ensuring optimal viewing on devices of all sizes.

### 5. Client-side Routing
- Smooth navigation between pages using `react-router-dom`.

---

## Technologies Used
- **Frontend Framework**: ReactJS
- **Styling**: TailwindCSS
- **Routing**: React Router
- **Mock Data**: Local JSON file

---

## Installation and Setup

Follow these steps to set up and run the project on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ecommerce-shopping-cart.git
cd ecommerce-shopping-cart

## 2. Install dependencies
npm install

## 3. Start the development server
npm start

## Project Structure
ecommerce-shopping-cart/
├── src/
│   ├── components/        # Reusable components (e.g., Navbar)
│   │   └── Navbar.js
│   ├── pages/             # Pages for routing (Home, Cart)
│   │   ├── Home.js
│   │   └── Cart.js
│   ├── data/              # Mock product data
│   │   └── products.json
│   ├── styles/            # TailwindCSS styles
│   │   └── tailwind.css
│   ├── App.js             # Main application file
│   └── index.js           # React entry point
├── public/                # Static files
├── tailwind.config.js     # TailwindCSS configuration
├── README.md              # Project documentation
└── package.json           # Project dependencies

## Usage Instructions
1. Home Page
2. Browse the product listing page.
### Click the "Add to Cart" button to add products to your shopping cart.
## Cart Page
1. Access the cart page from the navigation bar.
2. View the added products with details.
3. Adjust quantities using the up/down buttons.
4. Remove items using the "Remove Item" button.
5. Review the subtotal, discounts (if any), and final price.

