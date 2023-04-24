#!/bin/sh

cp ./package.json yarn.lock ./build/server
mv ./build/static/*.json ./build/static/*.js ./build/static/*.css ./build/server/
