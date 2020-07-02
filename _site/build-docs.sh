#!/bin/bash

config_file="_config.yml"	
if [ ! -z "$1" ]	
  then 	
    config_file+=",$1"
fi

echo "Using configuration from: $config_file"	

debug_params=""
if [ ! -z "$2" ]
  then 
    debug_params=$2
    echo "Debug mode: $debug_params"
fi

rm -rf _site/ .sass-cache .jekyll-cache .asset-cache
docker pull progressdocs/docs-seed:2.2
docker build -t progressdocs/docs-seed:2.2 .
docker run --rm --env CONFIG_FILE=$config_file --env JEKYLL_COMMAND=build --env JEKYLL_EXTRA=$debug_params \
 --env LANG=C.UTF-8 \
 --env LANGUAGE=C.UTF-8 \
 --env LC_ALL=C.UTF-8 \
 -t -v "/$(pwd):/app_root" -t progressdocs/docs-seed:2.2
