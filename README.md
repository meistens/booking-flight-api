# booking-flight-api without a real database 

Courtesy of Zuri.

No witty remarks this time, the number of errors seen killed off some sense of humour I got.

But the plus side of it all is the knowledge gotten.

Ah well...

But a quick documentation on how to go about inputting data.


- Initialize the server (type node index.js on your terminal).
- launch Postman or Insomnia.
- Navigate the application, visit https://localhost:3000/flights.
- Make a GET request to fetch pre-existing data in the server.
- Make a POST request to add data. Example below;

```
{
   title: "flight to Sahara"
   price: 20
}
```

The response would be *flight to Sahara booked*.
To see the added data, send a GET request to the same URL (this genius didn't think to make the the added data display under the message, which means you gotta make a GET request).

To fetch, update or delete specific data, use the generated id in the mock database to do that.
Also, date, time and id input not needed as that is added automatically.

P.s - This isn't a real database as data are stored in memory. This is practice how working with an MVC architecture feels.
This means with every server restart, data inputted will be lost (except the one already available in the file).
