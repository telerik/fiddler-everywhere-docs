#!/bin/bash

dir=".tmp"
if [ ! -z "$1" ]
  then 
    echo "Copying to $1"
    dir=$1
fi

echo "Start copying..."

cp -r $dir/* "./"

echo "Copying finished."
