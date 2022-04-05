#!/bin/sh

cp ./package.json yarn.lock ./build/server
mv ./build/static/manifest.json ./build/server/manifest.json
