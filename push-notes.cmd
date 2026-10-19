@echo off
rem Keep this file ASCII-only: cmd.exe mis-parses UTF-8 Cyrillic.
rem Commits notes.js and pushes it to GitHub. Run it after the page has saved
rem notes.js on disk (button "Save to notes.js" in the notes block).
chcp 65001 >nul
cd /d "%~dp0"

where git >nul 2>nul
if errorlevel 1 (
  echo Git was not found. Install it from https://git-scm.com and run this file again.
  echo.
  pause
  exit /b 1
)

git add notes.js
if errorlevel 1 (
  echo Could not stage notes.js - see the message above.
  echo.
  pause
  exit /b 1
)

git diff --cached --quiet -- notes.js
if not errorlevel 1 (
  echo notes.js has no changes - nothing to commit.
  echo.
  pause
  exit /b 0
)

git commit -m "notes: update personal notes"
if errorlevel 1 (
  echo Commit failed - see the message above.
  echo.
  pause
  exit /b 1
)

git push
if errorlevel 1 (
  echo.
  echo Push failed. Most likely the repository has new commits from the daily data update.
  echo Run "git pull --rebase" and then start this file again.
  echo.
  pause
  exit /b 1
)

echo.
echo Done. Notes are on GitHub. Pages will pick them up in a minute.
echo.
pause
exit /b 0
