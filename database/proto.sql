-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema proto
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema proto
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `proto` DEFAULT CHARACTER SET utf8 ;
USE `proto` ;

-- -----------------------------------------------------
-- Table `proto`.`Tuote`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proto`.`Tuote` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tunnus` VARCHAR(45) NOT NULL,
  `nimi` VARCHAR(45) NOT NULL,
  `vahvuus` VARCHAR(45) NOT NULL,
  `pakkauskoko` VARCHAR(45) NOT NULL,
  `muoto` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proto`.`Tila`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proto`.`Tila` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `selite` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proto`.`Muutosloki`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proto`.`Muutosloki` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Tila_id` INT NOT NULL,
  `aika` DATETIME NULL,
  `tekija` VARCHAR(45) NOT NULL,
  `muutos` INT NOT NULL,
  `saldo` INT NOT NULL,
  PRIMARY KEY (`id`, `Tila_id`),
  INDEX `fk_Muutosloki_Tila1_idx` (`Tila_id` ASC) VISIBLE,
  CONSTRAINT `fk_Muutosloki_Tila1`
    FOREIGN KEY (`Tila_id`)
    REFERENCES `proto`.`Tila` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proto`.`Asiakas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proto`.`Asiakas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nimi` VARCHAR(45) NOT NULL,
  `tunnus` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proto`.`Laakari`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proto`.`Laakari` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tunnus` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proto`.`Toimitus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proto`.`Toimitus` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Tuote_id` INT NOT NULL,
  `Muutosloki_id` INT NOT NULL,
  `Asiakas_id` INT NOT NULL,
  `Laakari_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Tuote_id`, `Muutosloki_id`, `Asiakas_id`, `Laakari_id`),
  INDEX `fk_Toimitus_Tuote_idx` (`Tuote_id` ASC) VISIBLE,
  INDEX `fk_Toimitus_Muutosloki1_idx` (`Muutosloki_id` ASC) VISIBLE,
  INDEX `fk_Toimitus_Asiakas1_idx` (`Asiakas_id` ASC) VISIBLE,
  INDEX `fk_Toimitus_Laakari1_idx` (`Laakari_id` ASC) VISIBLE,
  CONSTRAINT `fk_Toimitus_Tuote`
    FOREIGN KEY (`Tuote_id`)
    REFERENCES `proto`.`Tuote` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Toimitus_Muutosloki1`
    FOREIGN KEY (`Muutosloki_id`)
    REFERENCES `proto`.`Muutosloki` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Toimitus_Asiakas1`
    FOREIGN KEY (`Asiakas_id`)
    REFERENCES `proto`.`Asiakas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Toimitus_Laakari1`
    FOREIGN KEY (`Laakari_id`)
    REFERENCES `proto`.`Laakari` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proto`.`Inventaario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proto`.`Inventaario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Tuote_id` INT NOT NULL,
  `maara` INT NOT NULL,
  PRIMARY KEY (`id`, `Tuote_id`),
  INDEX `fk_Inventaario_Tuote1_idx` (`Tuote_id` ASC) VISIBLE,
  CONSTRAINT `fk_Inventaario_Tuote1`
    FOREIGN KEY (`Tuote_id`)
    REFERENCES `proto`.`Tuote` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `proto`.`Tuote`
-- -----------------------------------------------------
START TRANSACTION;
USE `proto`;
INSERT INTO `proto`.`Tuote` (`id`, `tunnus`, `nimi`, `vahvuus`, `pakkauskoko`, `muoto`) VALUES (DEFAULT, '123', 'Lääke1', '10 mg', '28', 'Kapseli');
INSERT INTO `proto`.`Tuote` (`id`, `tunnus`, `nimi`, `vahvuus`, `pakkauskoko`, `muoto`) VALUES (DEFAULT, '234', 'Lääke2', '200 mg', '100', 'Kapseli');

COMMIT;


-- -----------------------------------------------------
-- Data for table `proto`.`Tila`
-- -----------------------------------------------------
START TRANSACTION;
USE `proto`;
INSERT INTO `proto`.`Tila` (`id`, `selite`) VALUES (DEFAULT, 'Toimitettu');
INSERT INTO `proto`.`Tila` (`id`, `selite`) VALUES (DEFAULT, 'Peruutettu');
INSERT INTO `proto`.`Tila` (`id`, `selite`) VALUES (DEFAULT, 'Inventoitu');
INSERT INTO `proto`.`Tila` (`id`, `selite`) VALUES (DEFAULT, 'Saapunut');
INSERT INTO `proto`.`Tila` (`id`, `selite`) VALUES (DEFAULT, 'Hävitetty');

COMMIT;


-- -----------------------------------------------------
-- Data for table `proto`.`Muutosloki`
-- -----------------------------------------------------
START TRANSACTION;
USE `proto`;
INSERT INTO `proto`.`Muutosloki` (`id`, `Tila_id`, `aika`, `tekija`, `muutos`, `saldo`) VALUES (DEFAULT, 1, NULL, 'EK', -1, 34);
INSERT INTO `proto`.`Muutosloki` (`id`, `Tila_id`, `aika`, `tekija`, `muutos`, `saldo`) VALUES (DEFAULT, 2, NULL, 'TS', 0, 70);

COMMIT;


-- -----------------------------------------------------
-- Data for table `proto`.`Asiakas`
-- -----------------------------------------------------
START TRANSACTION;
USE `proto`;
INSERT INTO `proto`.`Asiakas` (`id`, `nimi`, `tunnus`) VALUES (DEFAULT, 'Matti Meikäläinen', '455674');
INSERT INTO `proto`.`Asiakas` (`id`, `nimi`, `tunnus`) VALUES (DEFAULT, 'Maija Meikäläinen', '345763');

COMMIT;


-- -----------------------------------------------------
-- Data for table `proto`.`Laakari`
-- -----------------------------------------------------
START TRANSACTION;
USE `proto`;
INSERT INTO `proto`.`Laakari` (`id`, `tunnus`) VALUES (DEFAULT, '123456');
INSERT INTO `proto`.`Laakari` (`id`, `tunnus`) VALUES (DEFAULT, '234567');

COMMIT;


-- -----------------------------------------------------
-- Data for table `proto`.`Toimitus`
-- -----------------------------------------------------
START TRANSACTION;
USE `proto`;
INSERT INTO `proto`.`Toimitus` (`id`, `Tuote_id`, `Muutosloki_id`, `Asiakas_id`, `Laakari_id`) VALUES (DEFAULT, 1, 1, 1, 1);
INSERT INTO `proto`.`Toimitus` (`id`, `Tuote_id`, `Muutosloki_id`, `Asiakas_id`, `Laakari_id`) VALUES (DEFAULT, 2, 2, 2, 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `proto`.`Inventaario`
-- -----------------------------------------------------
START TRANSACTION;
USE `proto`;
INSERT INTO `proto`.`Inventaario` (`id`, `Tuote_id`, `maara`) VALUES (DEFAULT, 1, 34);
INSERT INTO `proto`.`Inventaario` (`id`, `Tuote_id`, `maara`) VALUES (DEFAULT, 2, 70);

COMMIT;

