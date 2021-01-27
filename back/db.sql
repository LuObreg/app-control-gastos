USE money_balance;
CREATE TABLE users(
    ID int(8) NOT NULL,
    username VARCHAR(16) NOT NULL,
    balance DECIMAL(10,2)

);
ALTER TABLE users
    ADD PRIMARY KEY (id),
    MODIFY id INT(8) NOT NULL AUTO_INCREMENT;

CREATE TABLE transaction (
    id INT(8) NOT NULL,
    amount DECIMAL(10,2),
    category VARCHAR(16),
    date timestamp NOT NULL DEFAULT current_timestamp,
    in_out VARCHAR(3),
    user_id INT(8),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE transaction 
    ADD PRIMARY KEY (id),
    MODIFY id INT(8) NOT NULL AUTO_INCREMENT;
    
