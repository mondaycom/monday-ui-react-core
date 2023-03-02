#!/usr/bin/env node

const execa = require("execa");

function getVersionPreid() {
  const branchName = process.env.BRANCH_NAME;
  console.log("# getVersionPreid = branchName", branchName);

  // Find the last occurrence of the '/' character
  const index = branchName.lastIndexOf("/");

  // If the character was found, return the substring after it
  if (index !== -1) {
    return branchName.substring(index + 1);
  }

  // If the character was not found, return the original string
  return branchName;
}

function pushBumpedVersion() {
  console.log("### pushBumpedVersion");
  const preid = getVersionPreid();
  const { stdout } = execa.sync("npm", ["version", "prerelease", `--preid=${preid}`]);
  const versionId = stdout.toString().trim();
  console.log("### pushBumpedVersion versionId=", versionId);

  // Notify new prerelease version was created
  console.log(`New prerelease version was created: ${versionId}`);
  return versionId;
}

process.stdout.write(pushBumpedVersion());
