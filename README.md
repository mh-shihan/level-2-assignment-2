# E-commerce REST API

This is a robust and scalable E-commerce REST API built with Express.js and TypeScript. It uses MongoDB with Mongoose for data persistence and Zod for validating incoming request data. The API provides a comprehensive set of endpoints for managing products and orders, including inventory control.

## ✨ Features

- **Product Management:**
  - Create, retrieve, update, and delete products.
  - Search for products based on a search term.
- **Order Management:**
  - Create new orders.
  - Retrieve all orders.
  - Fetch orders for a specific user by their email.
- **Inventory Control:**
  - Automatically updates product quantity and stock status when an order is placed.
  - Prevents orders for out-of-stock items.
- **Data Validation:**
  - Utilizes **Zod** to ensure the integrity of incoming data for all create and update operations.
- **Error Handling:**
  - Provides clear and informative error messages for various scenarios like not found items or insufficient inventory.

---

## 🛠️ Technologies Used

- **Backend:** Express.js
- **Programming Language:** TypeScript
- **Database:** MongoDB
- **ODM:** Mongoose
- **Validation:** Zod

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### **Installation & Setup**

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```

2.  **Set up environment variables:**

    Create a `.env` file in the root of your project and add the following variables. Replace the placeholder values with your actual configuration.

    ```
    PORT=5000
    DATABASE_URL=mongodb://localhost:27017
    ```

3.  **Run the application:**
    ```bash
    npm run start:dev
    ```

The server should now be running on the port you specified in your `.env` file on 5000 port(e.g., `http://localhost:5000`).

---
