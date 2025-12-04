@echo off
echo ========================================
echo   Starting InsurAI Backend Server
echo ========================================
echo.
echo Navigating to backend directory...
cd insurai-app-backend
echo.
echo Starting Spring Boot application...
echo Backend will run on: http://localhost:8080
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.
mvn spring-boot:run
