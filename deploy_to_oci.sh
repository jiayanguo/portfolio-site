#!/bin/bash
set -e

cd build

# modifiy index.html file and make it works in oci object storage.

sed -i .bak 's/"\/manifest\.json"/"\/n\/ax5ixupubw30\/b\/jguo\.site\/o\/manifest\.json"/g' index.html
sed -i .bak 's/"\/icon\.JPG"/"\/n\/ax5ixupubw30\/b\/jguo\.site\/o\/icon\.JPG"/g' index.html
sed -i .bak 's/"\/static\/js\//"\/n\/ax5ixupubw30\/b\/jguo\.site\/o\/static\/js\//g' index.html
sed -i .bak 's/"\/static\/css\//"\/n\/ax5ixupubw30\/b\/jguo\.site\/o\/static\/css\//g' index.html
sed -i .bak 's/"static\/js\/"/"n\/ax5ixupubw30\/b\/jguo\.site\/o\/static\/js\/"/g' index.html

# please setup oci cli first : https://docs.oracle.com/en-us/iaas/Content/API/SDKDocs/cliinstall.htm
oci os object bulk-delete -ns ax5ixupubw30  -bn jguo.site  --prefix static --force
oci os object put -bn jguo.site --file ./manifest.json --content-type application/json --force
oci os object bulk-upload -bn jguo.site --src-dir ./ --content-type text/html --include *.html --overwrite
oci os object bulk-upload -bn jguo.site --src-dir ./ --content-type image/jpeg --include *.JPG --overwrite
oci os object bulk-upload -bn jguo.site --src-dir ./ --content-type text/javascript --include *.js --overwrite
# oci os object bulk-upload -bn jguo.site --src-dir ./ --content-type application/pdf --include *.pdf --overwrite  // not working, why?
oci os object put -bn jguo.site --content-type application/pdf --file Resume_CN.pdf --force
oci os object put -bn jguo.site --content-type application/pdf --file Resume_EN.pdf --force
oci os object bulk-upload -bn jguo.site --src-dir ./ --content-type text/css --include *.css --overwrite
oci os object bulk-upload -bn jguo.site --src-dir ./ --content-type text/plain --exclude *.js --exclude *.html --exclude *.JPG --exclude *.pdf --exclude *.css --exclude ./manifest.json --overwrite