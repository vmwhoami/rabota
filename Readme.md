## Rabot.md automated cv application

#### Home page

- Chart example
- Animation example


## For Windows Install vcxsrv
1. Select "Multiple windows"
2. Set "Display number" to **-1** (automatic)
3. Check "Start no client"
4. Click "Next"
--> **NOW YOU'LL SEE THE ACCESS CONTROL OPTION** <--
5. Check "Disable access control" (most important!)
6. Click "Next"
7. Save configuration if desired
8. Click "Finish"
A week with working 4 hours a day sometimes less some times more.


## WSL 2 Configuration

Run these commands in your WSL terminal:

```
# Set display to use Windows X Server
export DISPLAY=$(grep nameserver /etc/resolv.conf | awk '{print $2}'):0

# Allow Docker to access X Server
xhost +local:docker
```

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure Node.js is running on your local machine

- Create an .env file

```bash
 touch .env
```

- Create an EMAIL variable with your rabota.md email login

```bash
EMAIL=yourEmail
```

- Create a PASSWORD variable with your rabota.md password

```bash
PASSWORD=yourPassword
```

### Setup

```bash
$ git clone https://github.com/vmwhoami/rabota
$ cd rabota
```

Install modules:

```
npm install
```

Run the App:

```
npm start
```

## Available Scripts

In the project directory, you can run:

```
npm run build
```
### `npm start`

Runs the app

### `npm run watch`

Compiles typeScript files to js

## Author

**Vitalie Melnic**

- Github: [@vmwhoami](https://github.com/vmwhoami/)
- Twitter: [@vmwhoami](https://twitter.com/vmwhoami)
- Linkedin: [vitalie-melnic](https://www.linkedin.com/in/vitalie-melnic/)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/vmwhoami/rabota/issues).

## Show your support

Give a ⭐️ if you like this project!
