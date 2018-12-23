
# MeanStackDockerAwsApp


Welcome to the MeanStackDockerAwsApp wiki!

# Infra creation
1) clone the latest code
2) update below file with required values

    ```MeanStackDockerAwsApp/infra/group_vars/all```

   sample entries:

 ```region: ap-south-1
 instance_type: t2.nano
 keypair: nitish-ec2 # pem file name
 ami: ami-0d773a3b7bb2bb1c1  # Ubuntu 18.04 LTS
 project_name: meanapp
 env: staging
 app_code_user: "ubuntu" # remote user
 hoststring: "ansible_ssh_user=ubuntu ansible_ssh_private_key_file=../../aws-private.pem"
 hostpath: "{{playbook_dir}}/hosts"
 app_code: "/tmp/MeanStackDockerAwsApp/app"
 git_cmd: "git clone https://github.com/nitishvu/MeanStackDockerAwsApp.git"
 ```

3) Add aws credtials to below file

  ```
  cat ~/.aws/credentials

  [default]
  aws_access_key_id =
  aws_secret_access_key =
```

4) Create ec2 instance and deploy mean app docker

   a) cd MeanStackDockerAwsApp/infra

   b)ansible-playbook  site.yml
  

# API Documentation


1)  Get all messages


    Example Request:

     curl --location --request GET "vunitish.tk/msgs"


   sample out put:

```
[
    {
        "_id": "5c1f531e4872c63b37e8024e",
        "name": "2nd",
        "content": "second",
        "createdAt": "2018-12-23T09:19:26.641Z",
        "updatedAt": "2018-12-23T09:19:26.641Z",
        "__v": 0
    },
    {
        "_id": "5c1f660acaf63949dfa080b7",
        "name": "3rd",
        "content": "jksdhfkjds kjsh kjsh f kshfk skshf kshfkjshfksh fkshfks kjsfkjsdh skfh ks",
        "createdAt": "2018-12-23T10:40:10.833Z",
        "updatedAt": "2018-12-23T10:40:10.833Z",
        "__v": 0
    },
    {
        "_id": "5c1f6f90c1a48d51c0e44af3",
        "name": "mytestamessage",
        "content": "My test message 1",
        "createdAt": "2018-12-23T11:20:48.815Z",
        "updatedAt": "2018-12-23T11:20:48.815Z",
        "__v": 0
    }
]
```

2) Add message


    Headers:
    Content-Type	application/json

Bodyraw (application/json)

    {
	"name" : "mytestamessage",
	"content": "My test message 1"
     }

sample request:

```
curl --location --request POST "http://vunitish.tk/msgs" \
  --header "Content-Type: application/json" \
  --data "{
	\"name\" : \"mytestamessage\",
	\"content\": \"My test message 1\"
}
```



  sample out put:

    {
    "message": "Message saved to database"
    }

3) Find a message

     Headers:

        Content-Type	application/json

sample request:

    curl --location --request GET "localhost/msgs/5c1f404b4cf7d53859609889" \
     --header "Content-Type: application/json"

sample output:


```
{
    "_id": "5c1f404b4cf7d53859609889",
    "name": "1st",
    "content": "first",
    "createdAt": "2018-12-23T07:59:07.850Z",
    "updatedAt": "2018-12-23T07:59:07.850Z",
    "__v": 0
}
```

4) Update message:

    Headers:

       Content-Type	application/json

Bodyraw (application/json)

```
{
	"name":"1st",
	"content":"1st updated"
}
```

  sample request:



```
curl --location --request PUT "localhost/msgs/5c1f404b4cf7d53859609889" \
  --header "Content-Type: application/json" \
  --data "{
	\"name\":\"1st\",
	\"content\":\"1st updated\"
}"
```



sample output:

```
{
    "_id": "5c1f404b4cf7d53859609889",
    "name": "1st",
    "content": "1st updated",
    "createdAt": "2018-12-23T07:59:07.850Z",
    "updatedAt": "2018-12-23T11:45:35.998Z",
    "__v": 0
}

```


5) delete message


sample request:

       curl --location --request DELETE "localhost/msgs/5c1f404b4cf7d53859609889" \
       --data ""

sample output:

```
{
    "message": "Msg deleted successfully!"
}

```





