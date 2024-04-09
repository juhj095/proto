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
-- Table `proto`.`ProductName`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proto`.`ProductName` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proto`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proto`.`Product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(45) NOT NULL,
  `strength` VARCHAR(45) NOT NULL,
  `size` VARCHAR(45) NOT NULL,
  `form` VARCHAR(45) NOT NULL,
  `wholesale` VARCHAR(45) NOT NULL,
  `ProductName_id` INT NOT NULL,
  PRIMARY KEY (`id`, `ProductName_id`),
  INDEX `fk_Product_ProductName1_idx` (`ProductName_id` ASC) VISIBLE,
  CONSTRAINT `fk_Product_ProductName1`
    FOREIGN KEY (`ProductName_id`)
    REFERENCES `proto`.`ProductName` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proto`.`State`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proto`.`State` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `definition` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proto`.`Doctor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proto`.`Doctor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proto`.`Customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proto`.`Customer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `code` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proto`.`ChangeLog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proto`.`ChangeLog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `time` DATETIME NULL,
  `changedBy` VARCHAR(45) NOT NULL,
  `change` INT NOT NULL,
  `quantity` INT NOT NULL,
  `recipeNumber` VARCHAR(45) NULL,
  `State_id` INT NOT NULL,
  `Doctor_id` INT NULL,
  `Customer_id` INT NULL,
  `Product_id` INT NOT NULL,
  PRIMARY KEY (`id`, `State_id`, `Product_id`),
  INDEX `fk_ChangeLog_State1_idx` (`State_id` ASC) VISIBLE,
  INDEX `fk_ChangeLog_Doctor1_idx` (`Doctor_id` ASC) VISIBLE,
  INDEX `fk_ChangeLog_Customer1_idx` (`Customer_id` ASC) VISIBLE,
  INDEX `fk_ChangeLog_Product1_idx` (`Product_id` ASC) VISIBLE,
  CONSTRAINT `fk_ChangeLog_State1`
    FOREIGN KEY (`State_id`)
    REFERENCES `proto`.`State` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ChangeLog_Doctor1`
    FOREIGN KEY (`Doctor_id`)
    REFERENCES `proto`.`Doctor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ChangeLog_Customer1`
    FOREIGN KEY (`Customer_id`)
    REFERENCES `proto`.`Customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ChangeLog_Product1`
    FOREIGN KEY (`Product_id`)
    REFERENCES `proto`.`Product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proto`.`Inventory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proto`.`Inventory` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL,
  `Product_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Product_id`),
  INDEX `fk_Inventory_Product1_idx` (`Product_id` ASC) VISIBLE,
  CONSTRAINT `fk_Inventory_Product1`
    FOREIGN KEY (`Product_id`)
    REFERENCES `proto`.`Product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `proto`.`ProductName`
-- -----------------------------------------------------
START TRANSACTION;
USE `proto`;
INSERT INTO `proto`.`ProductName` (`id`, `name`) VALUES (1, 'Morfiini');
INSERT INTO `proto`.`ProductName` (`id`, `name`) VALUES (2, 'Oksikodoni');
INSERT INTO `proto`.`ProductName` (`id`, `name`) VALUES (3, 'Fentanyyli');
INSERT INTO `proto`.`ProductName` (`id`, `name`) VALUES (4, 'Ketamiini');
INSERT INTO `proto`.`ProductName` (`id`, `name`) VALUES (5, 'Kodeiini');
INSERT INTO `proto`.`ProductName` (`id`, `name`) VALUES (6, 'Tramadoli');

COMMIT;


-- -----------------------------------------------------
-- Data for table `proto`.`Product`
-- -----------------------------------------------------
START TRANSACTION;
USE `proto`;
INSERT INTO `proto`.`Product` (`id`, `code`, `strength`, `size`, `form`, `wholesale`, `ProductName_id`) VALUES (1, '333', '10 mg', '28', 'Kapseli', 'Lääketukku', 1);
INSERT INTO `proto`.`Product` (`id`, `code`, `strength`, `size`, `form`, `wholesale`, `ProductName_id`) VALUES (2, '234', '200 mg', '100', 'Kapseli', 'Lääketukku', 1);
INSERT INTO `proto`.`Product` (`id`, `code`, `strength`, `size`, `form`, `wholesale`, `ProductName_id`) VALUES (3, '432', '500 mg', '120', 'Kapseli', 'Lääketukku', 2);
INSERT INTO `proto`.`Product` (`id`, `code`, `strength`, `size`, `form`, `wholesale`, `ProductName_id`) VALUES (4, '332', '250 mg', '1000', 'Tabletti', 'Lääketukku', 2);
INSERT INTO `proto`.`Product` (`id`, `code`, `strength`, `size`, `form`, `wholesale`, `ProductName_id`) VALUES (5, '112', '400 mg', '10', 'Jauhe', 'Lääketukku', 3);
INSERT INTO `proto`.`Product` (`id`, `code`, `strength`, `size`, `form`, `wholesale`, `ProductName_id`) VALUES (6, '345', '10 mg', '10', 'Kapseli', 'Oriola', 3);
INSERT INTO `proto`.`Product` (`id`, `code`, `strength`, `size`, `form`, `wholesale`, `ProductName_id`) VALUES (7, '456', '100 mg', '30', 'Jauhe', 'Tamro', 4);
INSERT INTO `proto`.`Product` (`id`, `code`, `strength`, `size`, `form`, `wholesale`, `ProductName_id`) VALUES (8, '678', '100 mg', '60', 'Kapseli', 'Oriola', 5);
INSERT INTO `proto`.`Product` (`id`, `code`, `strength`, `size`, `form`, `wholesale`, `ProductName_id`) VALUES (9, '670', '1 mg', '100', 'Kapseli', 'Tamro', 5);
INSERT INTO `proto`.`Product` (`id`, `code`, `strength`, `size`, `form`, `wholesale`, `ProductName_id`) VALUES (10, '947', '2 mg', '10', 'Jauhe', 'Lääketukku', 5);

COMMIT;


-- -----------------------------------------------------
-- Data for table `proto`.`State`
-- -----------------------------------------------------
START TRANSACTION;
USE `proto`;
INSERT INTO `proto`.`State` (`id`, `definition`) VALUES (1, 'Toimitettu');
INSERT INTO `proto`.`State` (`id`, `definition`) VALUES (2, 'Peruutettu');
INSERT INTO `proto`.`State` (`id`, `definition`) VALUES (3, 'Inventoitu');
INSERT INTO `proto`.`State` (`id`, `definition`) VALUES (4, 'Saapunut');
INSERT INTO `proto`.`State` (`id`, `definition`) VALUES (5, 'Hävitetty');

COMMIT;


-- -----------------------------------------------------
-- Data for table `proto`.`Doctor`
-- -----------------------------------------------------
START TRANSACTION;
USE `proto`;
INSERT INTO `proto`.`Doctor` (`id`, `code`) VALUES (1, '123 456');
INSERT INTO `proto`.`Doctor` (`id`, `code`) VALUES (2, '234 567');
INSERT INTO `proto`.`Doctor` (`id`, `code`) VALUES (3, '234 433');
INSERT INTO `proto`.`Doctor` (`id`, `code`) VALUES (4, '323 554');
INSERT INTO `proto`.`Doctor` (`id`, `code`) VALUES (5, '443 323');

COMMIT;


-- -----------------------------------------------------
-- Data for table `proto`.`Customer`
-- -----------------------------------------------------
START TRANSACTION;
USE `proto`;
INSERT INTO `proto`.`Customer` (`id`, `name`, `code`) VALUES (1, 'Matti Meikäläinen', '455674');
INSERT INTO `proto`.`Customer` (`id`, `name`, `code`) VALUES (2, 'Maija Meikäläinen', '345763');
INSERT INTO `proto`.`Customer` (`id`, `name`, `code`) VALUES (3, 'Anni Sirviö', '324321');
INSERT INTO `proto`.`Customer` (`id`, `name`, `code`) VALUES (4, 'Niina Ahola', '432212');
INSERT INTO `proto`.`Customer` (`id`, `name`, `code`) VALUES (5, 'Heikki Tuomonen', '554423');

COMMIT;


-- -----------------------------------------------------
-- Data for table `proto`.`ChangeLog`
-- -----------------------------------------------------
START TRANSACTION;
USE `proto`;
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'EK', -1, 34, '43234323', 5, 1, 1, 1);
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'TS', 0, 70, '32334323', 2, 3, 3, 2);
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'PT', -2, 68, '22345434', 1, 4, 4, 5);
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'AH', -1, 87, '11226544', 5, 2, 2, 3);
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'KK', 2, 66, '23478654', 4, NULL, NULL, 4);
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'KK', 0, 34, '23432123', 2, 3, 5, 6);
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'EK', 5, 39, '11335544', 4, NULL, NULL, 7);
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'EK', 0, 70, '76564344', 2, 1, 4, 5);
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'KK', -5, 65, '34543212', 1, 3, 4, 9);
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'KK', 7, 72, '87564433', 4, NULL, NULL, 4);
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'PT', 5, 72, '43454300', 4, NULL, NULL, 3);
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'PT', 0, 72, '43553211', 2, 1, 5, 3);
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'EK', 0, 72, '34221222', 2, 3, 4, 8);
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'TS', 7, 79, '43234433', 4, NULL, NULL, 7);
INSERT INTO `proto`.`ChangeLog` (`id`, `time`, `changedBy`, `change`, `quantity`, `recipeNumber`, `State_id`, `Doctor_id`, `Customer_id`, `Product_id`) VALUES (DEFAULT, NULL, 'TS', -6, 32, '77665432', 1, 3, 4, 5);

COMMIT;


-- -----------------------------------------------------
-- Data for table `proto`.`Inventory`
-- -----------------------------------------------------
START TRANSACTION;
USE `proto`;
INSERT INTO `proto`.`Inventory` (`id`, `quantity`, `Product_id`) VALUES (1, 34, 1);
INSERT INTO `proto`.`Inventory` (`id`, `quantity`, `Product_id`) VALUES (2, 70, 2);
INSERT INTO `proto`.`Inventory` (`id`, `quantity`, `Product_id`) VALUES (3, 55, 3);
INSERT INTO `proto`.`Inventory` (`id`, `quantity`, `Product_id`) VALUES (4, 68, 4);
INSERT INTO `proto`.`Inventory` (`id`, `quantity`, `Product_id`) VALUES (5, 15, 5);
INSERT INTO `proto`.`Inventory` (`id`, `quantity`, `Product_id`) VALUES (6, 568, 6);
INSERT INTO `proto`.`Inventory` (`id`, `quantity`, `Product_id`) VALUES (7, 6, 7);
INSERT INTO `proto`.`Inventory` (`id`, `quantity`, `Product_id`) VALUES (8, 53, 8);
INSERT INTO `proto`.`Inventory` (`id`, `quantity`, `Product_id`) VALUES (9, 34, 9);
INSERT INTO `proto`.`Inventory` (`id`, `quantity`, `Product_id`) VALUES (10, 74, 10);

COMMIT;

