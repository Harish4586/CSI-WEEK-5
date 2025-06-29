User API:

1.POST /signup

Registers a new user.

Request Body: JSON with name, emailId, and password.

Response: Created user data or validation error.



2.POST /login

Logs in a user using plain text emailId and password.

Response: Logged-in user data or "User not found"/"Incorrect password" error.



3.POST /logout

Logs out the user.

Response: Simple text message "logout successfully".



4.GET /profile

Fetches all users from the database.

Response: Array of users (passwords excluded).



5.GET /profile/:id

Fetches a single user by their MongoDB _id.

Response: User object or "User not found" error.



6.PATCH /profile/:id

Partially updates a user's data.

Request Body: JSON with only the fields to update (e.g., name).

Response: Updated user data or validation error.



7.PUT /profile/:id

Fully replaces a user’s profile.

Request Body: JSON with all required fields (name, emailId, password).

Response: Replaced user data or validation error.



8.DELETE /profile/:id

Deletes a user by ID.

Response: "User deleted successfully" or "User not found" error.
