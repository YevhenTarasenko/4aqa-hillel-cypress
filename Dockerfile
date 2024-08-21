# Use the official Cypress Docker image
FROM cypress/included:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install dependencies if you have any
RUN npm install

# Run Cypress tests
CMD ["npx", "cypress", "run"]