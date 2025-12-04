-- Sample data for InsurAI application

-- Insert sample users
INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@insurai.com', 'admin123', 'ADMIN'),
('John Doe', 'john@example.com', 'password123', 'USER'),
('Jane Smith', 'jane@example.com', 'password123', 'USER'),
('Bob Wilson', 'bob@example.com', 'password123', 'USER');

-- Insert sample insurance plans
INSERT INTO plans (type, name, coverage, premium, description) VALUES
('Health', 'Basic Health Plan', '500000', '5000', 'Covers hospitalization, surgeries, and medical treatments'),
('Health', 'Premium Health Plan', '1000000', '12000', 'Comprehensive health coverage with cashless facility'),
('Car', 'Third Party Car Insurance', '100000', '3000', 'Covers third-party liability as per law'),
('Car', 'Comprehensive Car Insurance', '500000', '8000', 'Full coverage including own damage and theft'),
('Life', 'Term Life Insurance', '5000000', '8000', 'Pure life cover for financial security'),
('Life', 'Whole Life Insurance', '2000000', '15000', 'Life cover with savings component'),
('Travel', 'Domestic Travel Insurance', '100000', '500', 'Coverage for domestic trips'),
('Travel', 'International Travel Insurance', '500000', '2000', 'Comprehensive international travel coverage'),
('Property', 'Home Insurance', '2000000', '6000', 'Protection for your home and belongings'),
('Shop', 'Shop Insurance', '1000000', '10000', 'Coverage for shop and business assets');

-- Insert sample agents
INSERT INTO agents (name, email, specialization, available) VALUES
('Rajesh Kumar', 'rajesh@insurai.com', 'Health Insurance', true),
('Priya Sharma', 'priya@insurai.com', 'Car Insurance', true),
('Amit Patel', 'amit@insurai.com', 'Life Insurance', true),
('Sneha Reddy', 'sneha@insurai.com', 'Travel Insurance', false),
('Vikram Singh', 'vikram@insurai.com', 'Property Insurance', true);

-- Insert sample appointments
INSERT INTO appointments (name, email, plan_type, date, time, reason, user_id, agent_id, status) VALUES
('John Doe', 'john@example.com', 'Health', '2025-12-01', '10:00', 'Need health insurance for family', 2, 1, 'Confirmed'),
('Jane Smith', 'jane@example.com', 'Car', '2025-12-02', '14:00', 'New car insurance required', 3, 2, 'Pending'),
('Bob Wilson', 'bob@example.com', 'Life', '2025-12-03', '11:00', 'Term life insurance inquiry', 4, 3, 'Confirmed');

-- Insert sample notifications
INSERT INTO notifications (user_id, message, type, is_read, created_at) VALUES
(2, 'Your appointment for Health on 2025-12-01 has been booked successfully.', 'APPOINTMENT', false, NOW()),
(2, 'Your appointment status has been updated to: Confirmed', 'APPOINTMENT', false, NOW()),
(3, 'Your appointment for Car on 2025-12-02 has been booked successfully.', 'APPOINTMENT', true, NOW()),
(4, 'Your appointment for Life on 2025-12-03 has been booked successfully.', 'APPOINTMENT', false, NOW());

-- Insert sample voice queries
INSERT INTO voice_queries (user_id, query_text, response, created_at) VALUES
(2, 'What is covered in health insurance?', 'Our health insurance plans cover hospitalization, surgeries, and medical treatments. Premium starts from ₹5,000/year.', NOW()),
(3, 'How do I file a claim?', 'To file a claim, please contact our support team or visit the nearest branch with required documents.', NOW()),
(4, 'Tell me about life insurance', 'Life insurance ensures financial security for your family. Premium starts from ₹8,000/year.', NOW());

-- Insert sample contact enquiries
INSERT INTO contact_enquiries (name, email, phone, message, resolved, created_at) VALUES
('Rahul Verma', 'rahul@example.com', '+91-9876543210', 'I want to know more about health insurance plans for senior citizens.', false, NOW()),
('Anita Desai', 'anita@example.com', '+91-9876543211', 'What is the claim settlement ratio for your company?', false, NOW()),
('Suresh Nair', 'suresh@example.com', '+91-9876543212', 'I need assistance with my car insurance renewal.', true, NOW()),
('Meera Iyer', 'meera@example.com', '+91-9876543213', 'Can you provide details about travel insurance for Europe?', false, NOW()),
('Karthik Reddy', 'karthik@example.com', '+91-9876543214', 'I want to increase my life insurance coverage.', true, NOW());
