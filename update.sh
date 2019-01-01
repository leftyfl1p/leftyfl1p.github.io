dpkg-scanpackages debs / > Packages
sed -i '' 's/Sileodepiction/SileoDepiction/g' Packages
bzip2 -fks Packages