-- InsurAI Database Setup Script
-- Run this in MySQL Workbench or MySQL command line

-- Create database
CREATE DATABASE IF NOT EXISTS insurance_app;

-- Use the database
USE insurance_app;

-- Show confirmation
SELECT 'Database insurance_app created successfully!' AS Status;

-- Show tables (will be empty initially, Spring Boot will create them)
SHOW TABLES;

-- Instructions for next steps
SELECT '
========================================
  Database Setup Complete!
========================================

Next Steps:
1. Update application.properties with your MySQL credentials
2. Run the backend: start-backend.bat
3. Tables will be auto-created by Spring Boot
4. Optionally load sample data: mysql -u root -p insurance_app < sample-data.sql

========================================
' AS Instructions;
