CREATE TABLE IF NOT EXISTS mission (
    id VARCHAR(128) PRIMARY KEY,
    profile VARCHAR (128) NOT NULL,
    client VARCHAR (128) NOT NULL,
    address VARCHAR (128) NOT NULL,
    project VARCHAR (128) NOT NULL,
    duration VARCHAR (128) NOT NULL,
    description TEXT NOT NULL,
    stack VARCHAR (128),
    team_organisation VARCHAR (128),
    status BOOLEAN NOT NULL,
);

