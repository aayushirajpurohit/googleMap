#!/bin/bash
cd android && ./gradlew assembleRelease -x bundleReleaseJsAndAssets && cd ..