/**** NPM MODULES: PRACTICE SOLUTION ****/

/*
    Practice installing and importing community-driven open-source 
    software to inject visual aesthetics and configuration parameters.
*/

/** EXERCISE: RECONSTRUCTING THE GOLD GRADIENT REWARD **/

import chalk from "chalk";
import gradient from "gradient-string";

/*
    Use 'gradient-string' to style a victory banner string.
    1. Create a variable named 'goldGradient' by passing the colors "yellow" and "orange" into the gradient tool.
    2. Apply that gradient to the string: "★ VICTORY! YOU FOUND THE ANCIENT GOLD REWARD ★"
    3. Log the stylized message to the console.
*/
const goldGradient = gradient("yellow", "orange");
const victoryBanner = goldGradient("★ VICTORY! YOU FOUND THE ANCIENT GOLD REWARD ★");

console.log(victoryBanner);
