const express = require('express');
const router = express.Router();


let users = [
  {
    firstName: "John",
    lastName: "wick",
    email: "johnwick@gmail.com",
    DOB: "22-01-1990",
  },
  {
    firstName: "John",
    lastName: "smith",
    email: "johnsmith@gmail.com",
    DOB: "21-07-1983",
  },
  {
    firstName: "Joyal",
    lastName: "white",
    email: "joyalwhite@gmail.com",
    DOB: "21-03-1989",
  },
];

// GET request: Retrieve all users
router.get("/", (request, response) => {
  response.send(users)
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (request, response) => {
  const { params: { email } } = request;
  const user = users.find((item) => item.email === email);

  if (!user) {
    response.status(404).send("User not found");
  }

  response.send(user);
});


// POST request: Create a new user
router.post("/", (request, response) => {
  // Copy the code here
  response.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (request, response) => {
  // Copy the code here
  response.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (request, response) => {
  // Copy the code here
  response.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports = router;
