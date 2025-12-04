@echo off
echo Starting MySQL Server...
net start MYSQL80
if %errorlevel% equ 0 (
    echo MySQL Server started successfully!
) else (
    echo Failed to start MySQL. Please run this as Administrator.
    echo Right-click this file and select "Run as administrator"
)
pause
