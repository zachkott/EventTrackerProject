-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema musictrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `musictrackerdb` ;

-- -----------------------------------------------------
-- Schema musictrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `musictrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `musictrackerdb` ;

-- -----------------------------------------------------
-- Table `band`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `band` ;

CREATE TABLE IF NOT EXISTS `band` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  `years_active` INT NOT NULL,
  `albums` INT NULL,
  `singles` INT NOT NULL,
  `most_played` VARCHAR(45) NULL,
  `origin` VARCHAR(45) NOT NULL,
  `members` INT NOT NULL,
  `label` VARCHAR(45) NULL,
  `lead_artist` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS musicuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'musicuser'@'localhost' IDENTIFIED BY 'musicuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'musicuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `band`
-- -----------------------------------------------------
START TRANSACTION;
USE `musictrackerdb`;
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (1, 'Bring Me The Horizon', 'Metal, Rock', 18, 8, 31, 'Can You Feel My Heart', 'Sheffield, England', 5, 'RCA Records', 'Oliver Sykes');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (2, 'Asking Alexandria', 'Metal, Hard Rock', 16, 7, 38, 'Not The American Average', 'North Yorkshire, England', 5, 'Sumerian Records', 'Danny Worsnop');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (3, 'Parkway Drive', 'Metalcore', 19, 6, 15, 'Prey', 'New South Wales, Australia', 5, 'Resist', 'Winston McCall');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (4, 'August Burns Red', 'Metalcore', 19, 9, 21, 'White Washed', 'Lancaster, Pennsylvania', 5, 'Fearless Records', 'Jake Luhrs');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (5, 'A Day To Remember', 'Rock, Alternative', 19, 7, 21, 'If It Means A Lot To You', 'Ocala, Florida', 4, 'Fueled By Ramen', 'Jeremy Mckinnon');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (6, 'Memphis Mayfire', 'Metalcore, Hard Rock', 16, 7, 28, 'The Sinner', 'Denton, Texas', 4, 'Rise Records', 'Matty Mullins');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (7, 'I Prevail', 'Metalcore, Pop Punk', 9, 3, 18, 'Scars', 'Southfield, Michigan', 5, 'Fearless Records', 'Brian Burkheiser');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (8, 'We Came As Romans', 'Metalcore', 17, 6, 29, 'Glad You Came', 'Troy, Michigan', 5, 'SharpTone Records', 'Dave Stephens');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (9, 'A Skylit Drive', 'Metalcore', 12, 5, 2, 'Love The Way You Lie', 'Lodi, California', 5, 'Fearless Records', 'Jordan Blake');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (10, 'Our Last Night', 'Rock', 18, 7, 6, 'Sunrise', 'Hollis, New Hampshire', 3, 'Epitaph', 'Trevor Wentworth');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (11, 'Blink 182', 'Pop Punk', 30, 8, 24, 'All The Small Things', 'Poway, California', 3, 'Columbia Records', 'Mark Hoppus');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (12, 'Iration', 'Reggae', 18, 9, 6, 'Time Bomb', 'Santa Barbara, California', 7, 'Three Prong Records', 'Micah Pueschel');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (13, 'Led Zepplin', 'Hard Rock', 12, 8, 16, 'Stairway To Heaven', 'London, England', 4, 'Atlantic Records', 'Robert Plant');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (14, 'MGMT', 'Indie Rock', 18, 4, 17, 'Kids', 'Middletown, Connecticut', 2, 'Columbia Records', 'Andrew VanWyngarden');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (15, 'Greta Van Fleet', 'Hard Rock', 10, 2, 8, 'Highway Tune', 'Frankenmuth, Michigan', 4, 'Lava Records', 'Josh Kiszka');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (16, 'Metallica', 'Heavy Metal', 41, 10, 43, 'Enter Sandman', 'Los Angeles, California', 4, 'Warner Bros.', 'Lars Ulrich');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (17, 'Cream', 'Psychedelic Rock', 4, 4, 10, 'Sunshine Of Your Love', 'London, England', 3, 'Reprise Records', 'Eric Clapton');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (18, 'Aerosmith', 'Hard Rock', 52, 15, 72, 'Dream On', 'Boston, Massachusetts', 5, 'Columbia Records', 'Steven Tyler');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (19, 'Pink Floyd', 'Progressive Rock', 33, 15, 27, 'Another Brick In The Wall, Pt. 2', 'London, England', 5, 'Columbia Records', 'Roger Waters');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (20, 'INXS', 'New Wave', 35, 12, 70, 'Need You Tonight', 'Sydney, Australia', 9, 'Atlantic Records', 'Michael Hutchence');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (21, 'Cherub', 'Electro Indie', 12, 3, 9, 'Doses & Mimosas', 'Nashville, Tennesse', 2, 'Columbia Records', 'Jordan Kelley');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (22, 'Eagles', 'Rock', 26, 7, 30, 'Hotel California', 'Los Angeles, California', 4, 'Asylum Records', 'Don Henley');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (23, 'Los Lonely Boys', 'Rock', 24, 8, 7, 'Heaven', 'San Angelo, Texas', 3, 'Epic Records', 'Henry Garza');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (24, 'The Used', 'Emo, Alternative', 21, 8, 20, 'The Taste Of Ink', 'Orem, Utah', 4, 'Reprise Records', 'Bert McCracken');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (25, 'Knuckle Puck', 'Pop Punk, Emo', 12, 3, 3, 'Untitled', 'Chicago, Illinois', 5, 'Rise Records', 'Joe Taylor');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (26, 'Rise Against', 'Punk Rock', 23, 9, 20, 'Savior', 'Chicago, Illinois', 4, 'Interscope Records', 'Tim McIlrath');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (27, 'Seven Lions', 'Melodic Dubstep', 12, 13, 30, 'Strangers', 'Santa Barbara, California', 1, 'Ophelia Records', 'Jeff Montalvo');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (28, 'Illenium', 'Dubstep', 14, 4, 36, 'Takeaway', 'Chicago, Illinois', 1, '12Tone Records', 'Nicholas Miller');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (29, 'Kaskade', 'House', 27, 10, 54, 'Sweet Memories', 'Chicago, Illinois', 1, 'Monstercat', 'Ryan Raddon');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (30, 'Adventure Club', 'Dubstep', 11, 2, 29, 'Crash 2.0', 'Quebec, Canada', 2, 'UKF ', 'Leighton James');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (31, 'Excision', 'Dubstep', 16, 3, 30, 'Feel Something', 'Kelowna, Canada', 1, 'Excision Music', 'Jeff Abel');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (32, 'Virtual Riot', 'EDM', 12, 2, 36, 'Energy Drink', 'Marl, Germany', 1, 'OWSLA', 'Christian Brunn');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (33, 'Crystal Skies', 'Electronic', 5, 1, 23, 'Foolish Of Me', 'Denver, Colorado', 2, 'Ophelia Records', 'Aaron Dawson');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (34, 'MF Doom', 'Hip hop', 18, 6, 14, 'Doomsday', 'London, England', 1, 'Elektra Records', 'Dumile Thompson');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (35, 'ODESZA', 'Indietronica', 10, 4, 13, 'Say My Name', 'Bellingham, Washington', 2, 'Ninja Tune', 'Harrison Mills');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (36, 'Porter Robinson', 'Electro House', 17, 2, 25, 'Shelter', 'Chapel Hill, North. Carolina', 1, 'OWSLA', 'Porter Robinson');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (37, 'Grateful Dead', 'Rock', 30, 13, 27, 'Friend Of The Devil', 'Palo Alto, California', 5, 'Warner Bros.', 'Jerry Garcia');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (38, 'JOYRYDE', 'Bass House', 19, 1, 20, 'Agen Wida', 'England, UK', 1, 'OWSLA', 'Jon Ford');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (39, 'Dabin', 'EDM', 5, 3, 12, 'First Time', 'Ontario, Canada', 1, 'Kanniballen', 'Dabin Lee');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (40, 'Yellow Claw', 'Trap', 12, 4, 43, 'DJ Turn It Up', 'Amsterdam, Netherlands', 2, 'Barong Family', 'Nils Rondhuis');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (41, 'The Black Keys', 'Indie Rock', 21, 11, 22, 'Lonely Boy', 'Akron, Ohio', 2, 'V2 Records', 'Dan Auerbach');
INSERT INTO `band` (`id`, `name`, `genre`, `years_active`, `albums`, `singles`, `most_played`, `origin`, `members`, `label`, `lead_artist`) VALUES (42, 'Audien', 'Progressive House', 13, 1, 36, 'Something Better', 'New London, Connecticut', 1, 'Spinnin\' Records', 'Nathaniel Rathbun');

COMMIT;

