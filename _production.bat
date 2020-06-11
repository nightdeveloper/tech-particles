rmdir /s /q docs
rmdir /s /q .cache
rmdir /s /q public\page-data
rmdir /s /q public\static
del /q public\index.html
call gatsby build --prefix-paths