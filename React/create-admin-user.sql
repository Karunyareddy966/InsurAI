-- Create Admin User for InsurAI Application
-- This script creates an admin user for accessing the admin dashboard

USE insurance_db;

-- Insert admin user (password: admin123)
-- Note: In production, passwords should be properly hashed
INSERT INTO users (name, email, password, phone, role, created_at) 
VALUES (
    'Admin User', 
    'admin@insurai.com', 
    'admin123', 
    '+91-9999999999', 
    'ADMIN', 
    NOW()
) ON DUPLICATE KEY UPDATE 
    name = 'Admin User',
    role = 'ADMIN';

-- Verify admin user was created
SELECT id, name, email, role FROM users WHERE role = 'ADMIN';

COMMIT;
