@echo off
rem Keep this file ASCII-only: cmd.exe mis-parses UTF-8 Cyrillic.
rem Code page 65001 is set so that Node's Russian output renders correctly.
chcp 65001 >nul
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install it from https://nodejs.org and run this file again.
  echo.
  pause
  exit /b 1
)

node fetch-data.mjs
set EXITCODE=%ERRORLEVEL%

echo.
if not "%EXITCODE%"=="0" (
  echo Update failed. The previous data.js is still in place.
) else (
  echo Done. Open index.html in your browser.
)
echo.
pause
exit /b %EXITCODE%
