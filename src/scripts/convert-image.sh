#!/bin/bash

FROM=$1
TO=$(echo -n "$1" | sed -E 's#(\..+)$#.webp#')

echo $PWD
set -x -e
convert "$FROM" "$TO"
rm "$FROM"