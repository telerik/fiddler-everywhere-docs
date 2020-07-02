#!/bin/bash
npm_modules_dir=$1;
npm_modules=$2;

echo 'Clear node modules'
rm -rf $npm_modules_dir/node_modules

echo 'Instaling modules'
npm install --prefix $npm_modules_dir $npm_modules --no-save;
