#!/bin/bash

npm run build
cp -rf docs/.vuepress/dist ./
git add .
git commit -m "."
git push origin master
