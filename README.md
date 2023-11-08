
# Book Management Backend - BrewApp

This project is an assignment given by brewapp in which I have created some APIs using node, express, and mongodb.



## Tech Stack

**Server:** Node, Express

**Backend:** MongoDB

**Tools:** Docker, Git




## Deployment - Using Docker

Clone the project
```sh
   git clone https://github.com/rishabhguptaxdev/brewapp-assignment
```

Change to directory
```sh
   cd brewapp-assignment
```

Rename .env.sample file to .env
```sh
   mv .env.sample .env
```

Build the image and run it

- It will create two containers

- One for MongoDB Database and other for Application

- Initially DB will connect to Application then Application will be started.

```sh
   docker-compose up --build
```


#### Create Book
```http
  POST /api/v1/createbook
```
#### Get All Books
```http
  GET /api/v1/getbooks
```
#### Get A Book By Id
```http
  GET /api/v1/book/:id
```
#### Update Book Details
```http
  PUT /api/v1/book/:id
```
#### Delete Book
```http
  DELETE /api/v1/book/:id
```

### 🔗 Test using Postman 
[Postman Collection](https://documenter.getpostman.com/view/15822838/2s9YXiY1L2)
