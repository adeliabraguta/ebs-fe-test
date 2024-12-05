# Product Catalog Application

## Overview

The **Product Catalog Application** is a React.js application built with TypeScript and Styled-Components that allows
users to browse
products, add items to a shopping cart, filter items by category,sort items by price adn search items by title. The
application fetches product data from the [Fake Store API](https://fakestoreapi.com/) and provides a seamless
shopping experience.

## Deployment

The application is deployed on Netlify and can be accessed at:

[https://adeliabraguta.github.io/ebs-fe-test/](https://adeliabraguta.github.io/ebs-fe-test/)

## Table of Contents

- [Deployment](#deployment)
- [Features](#features)
   - [Core Features](#core-features)
   - [Technical Implementation](#technical-implementation)
   - [Styling](#styling)
   - [Testing](#testing)
   - [Version Control](#version-control)
- [Bonus Features](#bonus-features)
- [Installation](#installation)
- [Usage](#usage)
   - [Home Page](#home-page)
   - [Shopping Cart Page](#shopping-cart-page)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Contact](#contact)

## Features

### Core Features

- **Home Page**: Displays a list of products with their images, their names, costs, and category.
- **Shopping Cart Page**: Displays products in the shopping cart along with a feature to add and remove quantities.
- **Filter and Sort**: A filter allows to filter products by category while the sort options enable users to sort products according to price from low to high or vise versa.
- **Add to Cart**: Users can add products to the shopping cart directly from the home page.
- **Remove from Cart**: It is possible to delete particular products from the shopping cart.
- **Total Price Calculation**: Calculate the total price as the sum of quantity of products in the cart.
- **Clear Cart**: Adds a button which will empty the entire shopping cart.

### Technical Implementation

- **API Integration**: Fetches product data from the [Fake Store API](https://fakestoreapi.com/) using the Fetch API.
- **State Management**: Utilizes React's `useState` for local state and the Context API for global state management of the shopping cart.
- **Reusable Components**: Implements reusable components like `Button`, `Loader` etc. with all with well-defined TypeScript types.
- **Routing**: Uses React Router (`react-router-dom`) for client-side routing between the Home, Product Page and Shopping Cart pages.
- **Layout**: Features a consistent layout with a header (including navigation), footer, and main content area.
- **TypeScript**: All components and utilities are strictly typed using TypeScript for better maintainability and error checking.

### Styling

- **User-Friendly Interface**: Styled with CSS for a clean and intuitive user experience. Styled-Components was used.
- **Responsive Design**: Implements responsive design principles to ensure usability on mobile devices.

### Testing

- **Unit Tests**: Includes basic unit tests for React components using Vitest and React Testing Library.

### Version Control

- **Git**: Managed with Git, featuring clear and meaningful commit messages following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Bonus Features

- **Error Handling**: Implements error handling for API requests and user interactions, displaying user-friendly error messages.
- **Loading State**: Adds loading indicator to enhance user experience during data fetching.
- **Accessibility**: Ensures the application follows web accessibility best practices by using semantic HTML elements.
- **Additional Features**:
   - **Product Details Page**: Allows users to view detailed information about a product in a modal separated page.
   - **Search Functionality**: Enables users to search for products by title.
   - **Discount Application**: Enables users to introduce a PromoCode to get a discount.
   - **Popup with discount**: A mascot popup appears after a certain amount of tine and gives a 15% discount with
     promocode "PasS"
- **Documentation**: Provides this comprehensive README with setup instructions and insights into the development approach.
- **Creativity**: Incorporates custom styling and animations for an engaging user experience.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/product-catalog-app.git
   cd product-catalog-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

## Usage

### Home Page

- **Browse Products**: Scroll through the list of products displayed as cards.
- **Filter by Category**: Use the dropdown menu to filter products by category.
- **Sort by Price**: Click on the "Sort by price" button to sort products in ascending or descending order.
- **Search Products**: Enter keywords in the search bar to find specific products by title.
- **View Product Details**: Click on a product title to redirect on the specific page with detailed information.
- **Add to Cart**: Click the "Cart" button on a product card to add it to your shopping cart.

### Shopping Cart Page

- **View Cart Items**: See all products you've added to your cart.
- **Adjust Quantity**: Use the "+" and "−" buttons to increase or decrease the quantity of each item.
- **Remove Items**: Click the "X" button to remove a specific product from the cart.
- **Clear Cart**: Click the "Clear Cart" button to remove all items.
- **Total Price**: View the total price of all items at the bottom of the cart with discount if it is applied.

## Testing

To run the unit tests:

```bash
npm run test
```

## Project Structure

```
product-catalog-app/
│
├── src/
│   ├── components/
│   │   ├── cartPage/
│   │   │   ├── __tests__/
│   │   │   │   └── CartPage.test.tsx
│   │   │   ├── CartPage.styled.tsx
│   │   │   └── CartPage.tsx
│   │   ├── ProductComponent/
│   │   │   ├── ProductComponentCart.styled.tsx
│   │   │   ├── ProductComponentCart.tsx
│   │   │   └── CartPage.tsx
│   │   ├── footer/
│   │   │   ├── Footer.styled.ts
│   │   │   └── Footer.tsx
│   │   ├── header/
│   │   │   ├── Header.styled.tsx
│   │   │   └── Header.tsx
│   │   ├── homePage/
│   │   │   ├── pagination/
│   │   │   │   ├── PaginationComponent.tsx
│   │   │   │   └── PaginationComponent.styled.tsx
│   │   │   ├── Popup.styled.tsx
│   │   │   └── Popup.tsx
│   │   ├── mainContent/
│   │   │   ├── MainContent.styled.tsx
│   │   │   └── MainContent.tsx
│   │   ├── productPage/
│   │   │   ├── ProductPage.styled.tsx
│   │   │   └── ProductPage.tsx
│   │   ├── UI/
│   │   │   ├── continueShoppingButton/
│   │   │   │   ├── continueShoppingButton.styled.tsx
│   │   │   │   └── continueShoppingButton.tsx
│   │   │   ├── loader/
│   │   │   │   ├── Loader.styled.tsx
│   │   │   │   └── Loader.tsx
│   │   │   └── paginationButton/
│   │   │       ├── PaginationButton.styled.tsx
│   │   │       └── PaginationButton.tsx
│   │   └── ...
│   ├── features/
│   │   ├── filtering/
│   │   │   ├── filterPopup/
│   │   │   │   ├── FilterPopup.styled.tsx
│   │   │   │   └── FilterPopup.tsx
│   │   │   ├── FilterComponent.styled.tsx
│   │   │   └── FilterComponent.tsx
│   │   ├── searching/
│   │   │   ├── SearchComponent.styled.tsx
│   │   │   └── SearchComponent.tsx
│   │   └── sorting/
│   │       ├── SortComponent.styled.tsx
│   │       └── SortComponent.tsx
│   ├── context/
│   │   └── GlobalContext.tsx
│   ├── hooks/
│   │   ├── useFetchCategories.ts
│   │   ├── useFetchProduct.ts
│   │   └── useFetchProducts.ts
│   ├── types/
│   │   └── productTypes.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── scrollToTop.tsx
├── __tests__/
│   └── ProductCard.test.tsx
├── public/
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── jest.config.js
└── README.md
```

## Contact

- **Author**: Braguta Adelia
- **Email**: [adeliabraguta@gmail.com](mailto:adeliabraguta@gmail.com)
- **Linkedin**: [Braguta Adelia](https://www.linkedin.com/in/adelia-bragu%C8%9Ba-251a2422b/)

---

Feel free to reach out for any questions or suggestions!
