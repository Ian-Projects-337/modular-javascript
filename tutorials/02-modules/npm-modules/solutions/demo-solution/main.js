/**** NPM MODULES: SOLUTION ****/

/*
    Up until now, you have used code you wrote yourself or code built natively 
    into Node.js. However, the true power of modern development comes from tapping 
    into npm (Node Package Manager)—the largest open-source ecosystem of pre-written 
    code packages in the world.

    The Toolkit Breakdown: For your terminal applications, combining three specific 
    npm modules lets you build professional-grade text interfaces instantly:
        - yargs: For scraping arguments typed directly into the terminal launch command
            https://npmjs.com/package/yargs
        - chalk: For basic colorization (e.g., green success text, red warning flags)
            https://npmjs.com/package/chalk
        - gradient-string: For transforming standard text into beautiful, multi-color 
        neon fades across the terminal screen
            https://npmjs.com/package/gradient-string

    The Terminal Installation: Because npm modules do not live on your computer natively, 
    you must explicitly download them into your project folder. Running npm install 
    package-name in your terminal talks to the internet registry, downloads the source 
    code, and drops it into a local folder named node_modules/.

    Be sure to run 'npm init -y' in the same directory as your main file to create your 
    local package.json file, then run 'npm install yargs chalk gradient-string' to 
    install the 3 dependencies. 

    NOTE: If you want to use ES modules, make sure the type in package.json is set to "module". 
    If you want to stick with CommonJS modules, you'll need to install Chalk 4 separately
    with the command 'npm install chalk@4.1.2' because Chalk 5 supports only ES modules.

    If working in a git repository, be sure the .gitignore file at the root is 
    configured to omit node_modules and package-lock.json at all directory levels
    (see the .gitignore file in this repository as an example).
*/

// NPM IMPORTS: Downloaded packages are imported directly by name string
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
import gradient from "gradient-string";

// STEP 1: Use gradient-string to print a glowing, multi-color splash header
const gameTitle = gradient("purple", "cyan")("\n=== WELCOME TO ARCADE REALMS ===");
console.log(gameTitle);

// STEP 2: Use yargs to grab user arguments from the launch command
// e.g., running: node main.js --hero=Merlin
const argv = yargs(hideBin(process.argv)).argv; // hideBin is a shorthand for process.argv.slice(2)
const chosenHeroName = argv.hero || "Unknown Adventurer";

// STEP 3: Combine them with Chalk to print contextual user alerts
console.log(`\nActive Player Identity: ${chalk.bold.yellow(chosenHeroName)}`);

// STEP 4: Display a confirmation message
console.log(chalk.green("\n✔ All terminal engine matrix pipelines are stable and online!\n"));
