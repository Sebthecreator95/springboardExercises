### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?


"""restful routing is a a way that most applications style their routes which is by using the same routes just with different methods
you submit /user with a get method and can view a user, then submit /user with a post method you can make a new user, or even submit it again with patch method and update a user, and also by using a delete method and deleting a use. In other words it depends on the method and not the route."""


- What is a resource?


"""A resoiurce is a instance or a piece of data that we get from the the database with our api and then our api responds to that request with that resource that can be rendered in different formats depending on where the request came from."""


- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?


"""the json api is built to interact from the server to and from the api's database in order to create, retrive, update and remove data therefore they are in a seperate file the client must send the request threw a button(ajax) and then that client request will go to the server and server to api get something or do something then return something back tothe client."""


- What does idempotent mean? Which HTTP verbs are idempotent?


"""Idempotent means an operation can be performed many times with the same data and the result will be the same as if it was done once. The http verbs that are idempotent are get, put, patch and delete but the ony safe and idempotent method is get. no matter how many times you submit it you will get the same result."""


- What is the difference between PUT and PATCH?


"""Patch is used to update part of a resource, not to update an entire resource like put is."""


- What is one way encryption?


"""It means something can only be encrypted and not decrypted in other words once a password is changed(encrypted) it can not be changed back into its original form."""


- What is the purpose of a `salt` when hashing a password?


"""A salt is a random string of characters that are generated and added to the password and then together they will be encrypted and saved to the database."""


- What is the purpose of the Bcrypt module?


"""bcrypt is used to generate salts, hash passwords and verify passwords with a salt. Makes it easy to save passwords to database by doing all the encryption for us."""


- What is the difference between authorization and authentication?


"""Authentication is the process of verifying who someone's identity. Making sure someone is whobthey say they are. Authorization is the process of giving permissions to a person based on their identity. If you have an account on a website you most likely will have access to routes and actions that someone without an account might not have."""