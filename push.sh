#!/bin/bash

hexo g

git add .
git commit -m "."
git push origin master
