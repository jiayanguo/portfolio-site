#!/bin/bash
set -e

cd build

# modifiy index.html file and make it works in oci object storage.

sed -i .bak 's/"\/manifest\.json"/"\/n\/ax5ixupubw30\/b\/jguo\.site\/o\/manifest\.json"/g' index.html
sed -i .bak 's/"\/static\/js\//"\/n\/ax5ixupubw30\/b\/jguo\.site\/o\/static\/js\//g' index.html
sed -i .bak 's/"\/static\/css\//"\/n\/ax5ixupubw30\/b\/jguo\.site\/o\/static\/css\//g' index.html
sed -i .bak 's/"static\/js\/"/"n\/ax5ixupubw30\/b\/jguo\.site\/o\/static\/js\/"/g' index.html