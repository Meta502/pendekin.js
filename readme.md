## Pendekin.js - by Adrian Ardizza
### A Node.js implementation of the Metrics UI Software Engineering Path Assignment

---

#### About This App
This application was made as the author's entry assignment for the Metrics UI Software Engineering mentoring path.

This CLI app is written in Javascript (with ES6 syntax) It uses the Prisma database engine to interface with a pre-included SQLite file for link storage. 

To run this app you will need:
* Node.js (atleast v10.x) [Download Link](https://nodejs.org/en/)
* NPM (pre-included with the Node.js package) or Yarn if that's your taste :P
* SQLite3 (Optional install if you're interested in viewing the contents of the pre-included database.)

#### How to Install and Run
1. Clone this repo
2. Open the cloned repo's root directory
3. Execute `npm install` to install all the required Node modules.
4. Run the app by executing `npm start`

#### Available Commands
1. **/shorten?url=FULL_URL&short_path=SHORT_PATH** - Shortens the requested URL.
2. **/redirect?url=SHORTENED_URL** - Returns the full page URL of the requested short URL (analogous to an http redirect in an HTTP app).
3. **/delete?url=SHORTENED_URL** - Deletes the requested shortened URL from the database.
4. **/count?url=SHORTENED_URL** - Returns the amount of times that the requested link has been used.
5. **/exit** - Exits the program.

For more technical info, the program comes with basic documentation in the source code.