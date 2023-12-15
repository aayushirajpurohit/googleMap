#!/usr/bin/env bash

cd ..
gsed -i 's/"bkmortgage"/"BK Mortgage"/' package.json
appcenter codepush release-react -a BKCO-Mortgage/Place -d Production --plist-file ios/bkmortgage/Info.plist
gsed -i 's/"BK Mortgage"/"bkmortgage"/' package.json
