CREATE DATABASE IF NOT EXISTS CoronaMap_DB;
USE CoronaMap_DB;

CREATE TABLE IF NOT EXISTS infected_people(id INT(7) NOT NULL AUTO_INCREMENT,person_num INT(7) UNSIGNED NOT NULL,region VARCHAR(50) NOT NULL,region_id INT(7) NOT NULL,visited_date INT(8) NOT NULL,place VARCHAR(200) NOT NULL,address VARCHAR(200) NOT NULL,latitude VARCHAR(20) NOT NULL,longitude VARCHAR(20) NOT NULL, transportation enum('도보', '자차', '대중교통', '미공개') NOT NULL default '미공개', PRIMARY KEY(id));