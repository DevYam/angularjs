@echo off
git status
git add .
echo Input Commit message : 
set /p msg=""
git commit -m "%msg%"
git push origin main