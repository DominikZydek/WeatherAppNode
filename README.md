# WeatherAppNode
## Introduction
Hello, this is my first project that interacts with public APIs! It is a simple weather app, written in HTML, CSS and JS. The libraries used are: Node, EJS, Express and Axios.
## Deployment
I managed to deploy this app using render.com at https://weatherappnode-20ym.onrender.com Feel free to use!
## Configuration
The only thing you need to change beforehand is to enter two variables in `.env` file: `PORT` and `API_KEY` (which you can get from OpenWeather).

Please don't forget to use `npm i` command in order to download necessary packages!
Then, you enable the server via `node index.js` command and you can connect to it at `localhost:3000`
## How it works
Upon connecting to the server, you are greeted by a home screen which contains a form.

![Zrzut ekranu 2023-12-12 180719](https://github.com/DominikZydek/WeatherAppNode/assets/139676226/07af31c8-652a-430e-bc1d-c2beaf3868de)

Once you fill the form and click Get Weather button, my server sends several requests to OpenWeather API and if your key is valid you should see weather info on screen.

![Zrzut ekranu 2023-12-12 180857](https://github.com/DominikZydek/WeatherAppNode/assets/139676226/732d2a53-d3f9-4464-8c00-858c50e17722)

If something went wrong, you will see a 404 Not Found page. Please make sure your key is valid and properly pasted and the form information was correct!
## Conclusion
Thank you for checking my project out. If there are any issues, please let me know!
