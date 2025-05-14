CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service TEXT NOT NULL,
    time TIMESTAMP NOT NULL
);
-- Admins for login
CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL
    
);

-- Availability for each service
CREATE TABLE availability (
    id SERIAL PRIMARY KEY,
    service TEXT NOT NULL,
    time TIMESTAMP UNIQUE NOT NULL
);
