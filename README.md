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

Access the website on <http://localhost:8000/>.

##Backend Connection

By default the client connects with the backend deployed locally on <localhost:3000>.
(For more details on local deployment of the backend see [packer-backend](https://github.com/jonny3576/packer-backend)).

If this is not possible for you, you may deploy against the backend provided on AWS. 
For this you need to adapt the source code in the  `HttpService` static method `apiURL`: 
If you set the if-clause to false it connects with the backend on AWS.

If the client is not able to connect to the predefined AWS-machine please contact [alex](mailto:alexandros.tsakpinis@googlemail.com).