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
  const { firstName, lastName, email, DOB } = request.query;

  if (!firstName) {
    response.status(400).send("First name is required!");
  }
  if (!lastName) {
    response.status(400).send("Last name is required!");
  }
  if (!email) {
    response.status(400).send("email is required!");
  }
  if (!DOB) {
    response.status(400).send("DOB is required!");
  }

  // @ts-ignore
  users.push({ firstName, lastName, email, DOB });

  response.status(200).send(`The user ${firstName} ${lastName} has been added successfully!`)//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (request, response) => {
  const { email } = request.params;
  const { firstName: updatedFirstName, lastName: updateLastName, email: updatedEmail, DOB: updatedDOB } = request.query;

  const userIndex = users.findIndex((user) => user.email === email);
  if (userIndex === -1) {
    response.status(404).send("User not found");
  }

  if (!updatedFirstName && !updateLastName && !updatedEmail && !updatedDOB) {
    response.status(400).send("No updates provided");
  }

  const user = users.splice(userIndex, 1)[0];
  const updatedUser = {
    firstName: updatedFirstName ?? user.firstName,
    lastName: updateLastName ?? user.lastName,
    DOB: updatedDOB ?? user.DOB,
    email: updatedEmail ?? user.email,
  };

  // @ts-ignore
  users.push(updatedUser);

  response.status(200).send(`User with email: ${email} updated successfully!`)

});


// DELETE request: Delete a user by email ID
router.delete("/:email", (request, response) => {
  const { email } = request.params;

  const userIndex = users.findIndex((user) => user.email === email);

  if (userIndex === -1) {
    response.status(404).send("User not found");
  }

  users.splice(userIndex, 1);

  response.status(200).send(`User with email: ${email} deleted successfully!`)//This line is to be replaced with actual return value
});

module.exports = router;
