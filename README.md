# backend-node-js

## https://saltiest-server.herokuapp.com

this is where you will make calls to along with the following endpoints:

## /register

- `POST /register` - needs username and password, both strings, returns id and token

```
id: 1 //auto generated
username: //string, unique, required
password: //string, required
```

## /login

- `POST /login` - needs username and password, both strings, returns id and token

## /users

- `GET /users` - get a list of users, **requires user's token**

## /comments

- `GET /comments` - returns all the comments, **requires user's token**
- `GET /comments/:id` - returns specific comment by its id, **requires user's token**
- `POST /comments` - create new comment, **requires user's token**, returns comment id
- `DELETE /comments:id` - delete specific comment, requires user's token

body needs:

```
    username: //string, required
    comment_toxicity: //number, required
    comment: //string, required
    users_id: //need to pass in user id
```
