import { execSync } from "child_process";

async function gitAdd() {
    execSync("git add .");
}

async function gitCommit(message: string) {
    execSync(`git commit -m "${message}"`);
}

async function gitPush() {
    execSync("git push");
}

await gitAdd();
await gitCommit("Auto-commit");
await gitPush();
