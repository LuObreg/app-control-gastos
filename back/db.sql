USE money_balance;
CREATE TABLE users(
    ID int(8) NOT NULL,
    username VARCHAR(16) NOT NULL,
    balance DECIMAL(10,2) NOT NULL

);
ALTER TABLE users
    ADD PRIMARY KEY (id),
    MODIFY id INT(8) NOT NULL AUTO_INCREMENT;

CREATE TABLE transaction (
    id INT(8) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR(16) NOT NULL,
    date timestamp NOT NULL DEFAULT current_timestamp,
    in_out VARCHAR(3) NOT NULL,
    user_id INT(8) NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE transaction 
    ADD PRIMARY KEY (id) NOT NULL,
    MODIFY id INT(8) NOT NULL AUTO_INCREMENT;
    
