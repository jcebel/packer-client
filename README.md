# packer-client
This is the Frontend Application of Packer.

## Setup (before first run)

Go to your project root folder via command line
```
cd path/to/workspace/packer-client
```

**Install node dependencies**

```
npm install
```

## Start the project

```bash
npm start
```

Access the website under <http://localhost:3000/>.

We also provide a deployment on Amazon Webservices. 
For more details please contact [alex](mailto:alexandros.tsakpinis@googlemail.com).

##Backend Connection

By default the client connects with the backend deployed on AWS.
If this is not possible for you, you may deploy the packer-backend at your machine. 
(For more details on local deployment see [packer-backend](https://github.com/jonny3576/packer-backend)).

You also need to adapt the source code in the  `HttpService` static method `apiURL`: 
If you set the if-clause to true it connects with the backend on <http://localhost:3000>.

If the client is not able to connect to the predefined AWS-machine please also contact [alex](mailto:alexandros.tsakpinis@googlemail.com).