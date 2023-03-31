# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer:
Calling on super in a Ruby class will invoke the method of the 'parent' class.  It not only dries up the code, but it also makes it easier to read.

Researched answer:
An instance of class inheritance, calling on super will allow the 'child' method of access all of the methods and variables of the 'parent' class.  

2. What is a gem?

Your answer:
A gem is a package manager that Ruby utilizes for functionality.
Researched answer:
A gem is a package library for Ruby applications. It provides functionality for Ruby and is easy to reuse and share code with other Ruby coders.

3. What is a relational database? Are there other kinds of databases?

Your answer:
A relational database stores data in tables that share keys.  Other databases are: NoSQL and Object oriented databases.
Researched answer:
A relational database stores data in tables that share keys.  Other databases are: NoSQL and Object oriented databases. The NoSQL databases use multiple data models, such as graphs and/or charts.  The Object oriented databases store data as objects.  These objects can change the data and/or behavior of the code.

4. What are primary keys? Why are they important?

Your answer:
A primary key identifies a row in a database table.  It is important because it can be used to not only access data in the table, but be linked to a different set of data in a different table.
Researched answer:
A primary key identifies a row in a database table.  It is important because it can be used to not only access data in the table, but be linked to a different set of data in a different table.  A foreign key can be created, linking two primary keys in a has_many:, belongs_to: relationship.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:
The HTTP verbs are: Delete - deletes data, Get - retrieves data, Post - sends data, and Put - updates data.  They correspond to CRUD with D - delete, R - read, U - update, and C - create. 
Researched answer:
HTTP verbs are the requests to the web server.  They are: Delete - removes data from database, Get - retrieves data from database, Post - sends data to database in order to create a new resource, Put - updates the current resource in database.  They can be thought of in relation to CRUD as: Create - Post, Read - Get, Update - Put, Delete - Delete.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:
RESTful routes provides a mapping between HTTP verbs, controller actions, and CRUD operations in an application.
2. Model validations:
Checks to make sure data is saved in the respective database.
3. Params:
URL parameters, also known as params or query strings, are a way to pass in additional information into a controller method to query the database or dynamically modify the view. 
4. ERB:
erb extension stands for embedded Ruby. Embedded Ruby or Templated Ruby is a file structure that allows us to code in HTML and drop Ruby code into the view file
5. API:
API (Application Programming Interface) is an application that transmits data in the form of JSON. JSON (JavaScript Object Notation) is a data structure modeled after JavaScript but supported by most programming languages. Data stored in a database is retrieved, created, updated, or deleted by controller methods. The controller methods can be accessed with the correct route. Coding this communication flow to an API via route to controller method is called creating an endpoint. The combination of the model and the controller is and API and can serve as the backend of an application.