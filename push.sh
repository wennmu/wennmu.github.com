#!/bin/bash

vuepress build decs

git add .
git commit -m "."
git push origin master
