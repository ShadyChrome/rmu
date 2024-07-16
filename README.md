# RMU Character Creator

## Overview
RMU Character Creator is a prototype designed to provide a simple character creation process for the Rolemaster Unified.

## Features
- **Step-by-Step Character Creation**: Guides users through the RMU character creation process.

## Technologies Used
- **Frontend**: React, Node.js
- **Backend**: Spring Boot, Maven
- **Database**: H2 (in-memory database)

## Prerequisites
- **Node.js**: Ensure Node.js 20 or higher is installed for running the frontend. (https://nodejs.org/en/download/package-manager)
- **Java**: JDK 22 or higher is required to run the Spring Boot backend. (https://www.oracle.com/de/java/technologies/downloads/)
- **Maven**: Ensure Maven is installed for building the backend. (https://maven.apache.org/download.cgi)

## Running Application
After cloning repository to your local and at the root: 

1. **Navigate to the Backend Directory**:
    ```bash
    cd ./backend
    ```

2. **Run command to start spring boot server**:
    ```bash
    mvn spring-boot:run
    ```

   The backend should now be running on `http://localhost:8080`.


3. **At root level navigate to the Frontend Directory**:
    ```bash
    cd ./frontend
    ```

4. **Install Dependencies**:
    ```bash
    npm install
    ```

5. **Run the Frontend**:
    ```bash
    npm run dev
    ```

   The frontend url should be posted on the console.

