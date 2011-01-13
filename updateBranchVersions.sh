#!/bin/bash

# Usage to update branch from a release 2.6.2 version to 2.6.3-SNAPSHOT version 		
# In root folder of branch code: ./updateBranchVersion.sh 2.6.2 2.6.3

# Note: In MacOs change seed -i to seed -i .bak to work properly

function showUsage 
{
  echo -e "\nThis script is used to update branch from a release version to next SNAPSHOT version. Should be used in branch after creating a new release (tag)." 
  echo -e "\nUsage:"
  echo -e "\t`basename $0 $1` {actual_version} {next_version}"
  echo -e "\nExample to update file versions from 2.6.2 to 2.6.3-SNAPSHOT:"
  echo -e "\t`basename $0 $1` 2.6.2 2.6.3"
  echo -e "\n"
}

if [ "$1" = "-h" ] 
then
	showUsage
	exit
fi

if [ $# -ne 2 ]
then
  showUsage
  exit
fi

version="$1"
new_version="$2"

# Update version in sphinx doc files
sed -i "s/${version}/${new_version}-SNAPSHOT/g" docs/eng/users/source/conf.py 
sed -i "s/${version}/${new_version}-SNAPSHOT/g" docs/eng/developer/source/conf.py

# Update installer
sed -i "s/\<property name=\"version\" value=\"${version}\" \/\>/\<property name=\"version\" value=\"${new_version}\" \/\>/g" installer/build.xml
sed -i "s/\<property name=\"subVersion\" value=\"0\" \/\>/\<property name=\"subVersion\" value=\"SNAPSHOT\" \/\>/g" installer/build.xml

# Update version pom files
find . -name pom.xml -exec sed -i "s/${version}/${new_version}-SNAPSHOT/g" {} \;