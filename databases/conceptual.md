### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?
PostgreSQL is a free and open-source relational database management system which helps you create, drop and and connect to databases you create.

- What is the difference between SQL and PostgreSQL?
Sql is the standard for interacting with databases and PostgreSQL is an extension of SQL that provides support to different functions of SQL like foreign keys, subqueries, triggers, and different user-defined types and functions.

- In `psql`, how do you connect to a database?
you connect to a database in psql
by running the psql command and then \c "database_name"

- What is the difference between `HAVING` and `WHERE`?
having groups records together based on a condition
and where will extract records with a  spedified condition.

- What is the difference between an `INNER` and `OUTER` join?
inner join is the joining of two tables on a specified point and outer join is the complete joining of two tables whether they do or do not meet on any point.


- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?
 A left outer join takes the table in the FROM clause and all rows are returned. In a right outer join we return all rows from the table specified in the join clause.

- What is an ORM? What do they do?
Object-Relational Mapping is a technique that helps you retrieve data using a object-oriented programming language.

- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`?
  server side requests request data to an api from the server and sends it back to the client while ajax is a client side request from the client to the server and then to the api and back to the client with some information returned

- What is CSRF? What is the purpose of the CSRF token?
Cross-site request forgery is where someone can steal information or gain account access from a user while submitting a form. Thats why we must set up a csrf token in order to protect the user and validate the form that is being submitted.

- What is the purpose of `form.hidden_tag()`?
The purpose of form.hidden_tag() is to validate the form by passing in the csrf token.