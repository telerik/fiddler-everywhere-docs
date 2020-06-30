#!/bin/bash
copy_files() {
  destination=$1
  echo "Start copying to $1"

  if [ -z "$2" ] || [ "$2" = "false" ]; then
    files_to_exclude="`cat ./exclude_files.txt`"
    dirs_to_exclude="`cat ./exclude_dirs.txt`"
    robocopy . "$destination" //XD $dirs_to_exclude //XF $files_to_exclude //E
  else
    rsync -avz --exclude-from=exclude.txt $(pwd)/ "$destination" 
  fi

  #shopt -s extglob
  #cp -rf $(ls !(.git|.vscode|_site|.asset-cache|.contentignore|.gitignore|docs-watcher/node_modules)) $destination

  echo "Copying finished."
}

update_gitignore() {
  echo "Adding build related files to .gitignore..."
  merged_file_name="./.merged_tmp"
  dest_gitignore="$1/.gitignore"

  cat $dest_gitignore ./.contentignore > $merged_file_name
  sort -u $merged_file_name > $dest_gitignore
  rm $merged_file_name

  echo "Finished."
}

if [ -z "$1" ]
  then 
  echo $1
  echo "Required parameter is missing!"
  echo "Destination folder path is not passed."
  echo "Example usage: 'sh copy_local.sh \"d:\work\docs\"'"
  exit 1
fi

copy_files $1 $2
update_gitignore $1
