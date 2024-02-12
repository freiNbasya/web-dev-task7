const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());


/*Instruction:
Headers:
      - To set header: "set-header/?headerName=CustomHeader&headerValue=CustomValue" (GET)
      - To get header: "get-header/CustomHeader" (GET)
Cookies:
      - To set cookie: "set-cookie/?cookieName=myCookie&cookieValue=cookieValue" (GET)
      - To get cookie: "get-cookie/myCookie" (GET)
This commands also work in django variation, note that django runs on 8000 port
*/

app.get('/set-header', (req, res) => {
  const { headerName, headerValue } = req.query;    
  res.set({
    "Content-Type": "text/plain",
    [headerName]: headerValue});
  res.send('Header set successfully');
});

app.get('/get-header/:headerName', (req, res) => {
    const { headerName } = req.params;
    const headerValue = req.get(headerName) || 'Header not set';
    res.send(`Header ${headerName} has value: ${headerValue}`);
});

app.get('/set-cookie', (req, res) => {
    const { cookieName, cookieValue } = req.query;    
    res.cookie(cookieName, cookieValue, { httpOnly: true, maxAge: 900000 });
    res.send('Cookie set successfully');
  });

  app.get('/get-cookie/:cookieName', (req, res) => {
    const { cookieName } = req.params;
    const cookieValue = JSON.stringify(req.cookies[cookieName]);
    res.send(`Cookie ${cookieName} has value: ${cookieValue}`);
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
