#!/bin/bash
set -e

if ! command -v npm &> /dev/null; then
  echo "npm is not installed. Please install Node.js and npm before proceeding."
  exit 1
fi

npm install

if ! command -v npx &> /dev/null; then
  echo "npx is not available. Please update Node.js/npm to use npx."
  exit 1
fi

echo "Install complete. To start the app: ./run.sh"