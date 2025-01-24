# HealthBlog App - ALX Webstack Portfolio Project.

**HealthBlog App**
HealthBlog App is a modern blogging platform focused on health and wellness topics. It allows users to create, read, update, and delete health-related blog posts securely and efficiently.

## Table of Contents

- [Features](#features)
- [Author(s)](<#author(s)>)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
- [Usage](#usage)
- [Demo](#demo)

## Author(s)

- Emeka Innocent Oforkansi

## Features

- **User Authentication:** Secure sign-up and login using JSON Web Tokens (JWT).
- **Password Security:** Hashing and salting of passwords using bcrypt.
- **Create Blogs:** Users can create, edit, and delete their health-related blog posts.
- **Read Blogs:** View a collection of blogs posted by various users.
- **Search and Filter:** Quickly find posts based on specific topics or keywords.
- **Responsive Design:** Fully optimized for desktop and mobile devices.

## Technologies Used

- **Frontend:** React
- **Backend:** Express.js
- **Database:** MySQL
- **Authentication:** JSON Web Tokens (JWT) and bcrypt for password hashing.
- **Additional Tools:** Node.js, RESTful API, and Axios.

## Installation

Follow these steps to run the HealthBlog App locally:

## Prerequisites

- Node.js installed
- MySQL database setup
- Git installed

## Steps

1. Clone the repository:

- `git clone https://github.com/your-username/HealthBlog.git`
- `cd HealthBlog`

2. Set up the backend:

- Navigate to the backend directory:
- `cd backend`

3. Install dependencies:

- `npm install`

4. Create a .env file with the following variables:

- `DB_HOST=your_mysql_host`
- `DB_USER=your_mysql_user`
- `DB_PASSWORD=your_mysql_password`
- `DB_NAME=healthblog`
- `JWT_SECRET=your_jwt_secret`

5. Run the database migration script (if applicable).

- Start the server:
- `npm start`

6. Set up the frontend:

- Navigate to the frontend directory:
- `cd ../frontend`

7. Install dependencies:

- `npm install`

8. Start the React development server:

- `npm start`
- Open your browser and visit http://localhost:3000.

## Usage

- Sign up or log in to create an account.
- Browse existing health blogs.
- Create, edit, or delete your posts.
- Search for blogs using keywords.

## Demo

- **Live Demo:** HealthBlog App Demo (https://www.loom.com/share/4171139dc8cd461f877f123fbb370149?sid=7e69fc70-9e06-4c3b-808e-b89e54648e70)
