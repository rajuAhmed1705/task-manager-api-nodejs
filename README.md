# task-manager-api-nodejs

## API URL

Use this link to test this app [https://raju-task-manager.herokuapp.com/](https://raju-task-manager.herokuapp.com/).

## create
```bash
create user: type = post BaseUrl/users
create task: type = post BaseUrl/task
```

## auth
```bash
user login: type = post BaseUrl/users/login
user logout: type = post BaseUrl/users/logout
user logout all: type = post BaseUrl/users/logoutAll
user upload avatar: type = post BaseUrl/users/me/avatar
```
## read
```bash
user profile: type = get BaseUrl/users/me
read user tasks: type = get BaseUrl/tasks
    sort----> //GET /tasks?completed=true
              //GET /tasks?limit=10&skip=10
              //GET /tasks?sortBy=createdAt:desc
read single task: type = get BaseUrl/tasks/:id
get user avatar: type = get BaseUrl/users/me/avatar
```
## update
```bash
update user: type = patch BaseUrl/users/me
update task: type = patch BaseUrl/tasks/:id
```
## delete
```bash
delete user: type = delete BaseUrl/user/me
delete task: type = delete BaseUrl/tasks/:id
delete avatar: type = delete BaseUrl/user/me/avatar
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
