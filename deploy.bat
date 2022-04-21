
set -env

npm run build

cd dist

git init 
git add -A
git commit -m 'New deployment'
git push -f git@github.com:dawidekkk/seven-more-vue.git master:gh-pages

cd -