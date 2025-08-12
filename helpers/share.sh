#!/bin/bash
# This script runs when you click the Share button!

gh codespace ports visibility 7676:public -c $CODESPACE_NAME 
printf "\n📣 Share your website preview by copying this URL: https://${CODESPACE_NAME}-7676.app.github.dev\n\n"
