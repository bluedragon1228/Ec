# Technologies Used
Frontend: Angular, Angular Material
Backend: Spring Boot
Security: JWT (JSON Web Tokens)
Database: MySQL 

## Key Features

## Backend

**Security :** Implemented using JWT for secure authentication and authorization.

**Controllers :**
Admin, Cart, CartItem, Order, Payment, Product, Rating, Review, and User controllers for handling various API endpoints.

**Exception Handling:**
Custom exception handling for CartItem, Order, Product, and User-related operations.

**Models:**
Address, Cart, CartItem, Category, Order, OrderItem, Payment, Product, Rating, Review, Size, and User.

**Repositories:**
Interfaces for database operations on all models.

**Services:**
Implementation of business logic for all repository interfaces.

**Request DTOs:**
For AddItem, CreateProduct, Login, Rating, Review, API, Auth, and PaymentLink operations.

## Frontend

**Modular Architecture:**
Organized components and features for scalability and maintainability.

**Components:**

**Authentication:** Admin and User SignIn/SignUp

**Features:** Cart, Checkout, Home, Order, Order Details, Payment, Product

**Shared:** Address, CartItem, Footer, Navbar, OrderTracker, StarRating

**Routing:**
Implemented for seamless navigation between components and API endpoints.

**Product Data:**
JSON-formatted clothing data for men and women, including categories like dresses, gowns, kurtas, pants, sarees, etc.

**Advanced Functionalities:**
Pagination
Product search
Sorting (by size, price, etc.)
Filtering options

**User Management:**
Login and registration with validation rules
