import { execSync } from "child_process";
import readline from "readline";

async function gitAdd() {
    execSync("git add .");
}

async function gitCommit(message: string) {
    execSync(`git commit -m "${message}"`);
}

async function gitPush() {
    execSync("git push");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Commit-Message: ", async (message) => {
    await gitAdd();
    await gitCommit(message);
    await gitPush();
    rl.close();
});
