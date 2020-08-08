# count-endtime
A discord bot that can handle times using the moment library.

## Dependencies
As of now, all dependencies are listed in the package.json. Noteworthy are:
* discord.js
* moment-timezone
* better-sqlite3
* antlr4ts
* yargs
* gulp
* winston

## How to build
Although the antlr build is usually included in the repository, you first want to update the antlr build by executing antlr4ts, e.g. with npm:
```
npm run antlr4ts
```
Afterwards you can use the gulp script to build the Typescript into Javascript again with npm:
```
npm run gulp install
```

Remark, the default gulp script does not build you an sqlite3 database, which you require to save and load moments. Possible gulp tasks are: `install, default, build, sqlite`. `default` and `build` are synonymous, `install` will execute `build` and `sqlite` in parallel.

## How to set up
To set up, you need to rename the file `json/config-template.json` into `json/config.json`. You also require a bot token from discord. You can find instruction to get these [here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token).

## How to contribute
You are very welcome to contribute to this project. Currently I work alone on it. Feel free to fork the project, add issues which you want to tackle and submit pull requests. We don't have strict code styles yet.

## License
MIT License

Copyright (c) 2020 Ira Fesefeldt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
