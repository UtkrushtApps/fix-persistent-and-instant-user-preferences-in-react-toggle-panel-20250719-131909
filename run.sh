#!/bin/bash
set -e

./install.sh

echo "Starting Preferences Panel app on http://localhost:3000 ..."
PORT=3000 npx serve -s .

echo "App stopped."