##   Description

Build an Simple Group chat Application which displays:

- Specifying a user name

- Message sending

- Message receiving

- Letting user know if his message couldn't be sent (e.g., the API endpoint returns an error).

The messages should be sent and received in real-time (a few second delay is good). So it should be good enough to have a real-time conversation with a couple of people.

##   Storage

You don't need to implement any backend. For storing messages you should use the following API endpoint: http://167.172.108.61/?storage=%namespace%, where %namespace% should be replaced with your full name without spaces. For example, in my case, it would be http://167.172.108.61/?storage=kirill_maltsev

The storage namespace shouldn't be stored in git but included from a local config. You might use environmental variable or just a config.json, for example.

Here are the available methods:

- GET http://167.172.108.61/?storage=%namespace% to get all stored messages
- POST http://167.172.108.61/?storage=%namespace% to save a message in JSON format (the message schema is up to you). To trigger an error you could specify the invalid storage key (?storage=invalid/key).
- DELETE http://167.172.108.61/?storage=%namespace% to delete all messages



## How to Run the Application


```bash
npm install then npm start
```

or using Yarn

```bash
yarn install then yarn start
```

This will run the development server in your local host (http://localhost:3000)
