-- MySQL Script generated by MySQL Workbench
-- Mon Jul  2 08:47:48 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema devmedia
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema devmedia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `devmedia` DEFAULT CHARACTER SET utf8 ;
USE `devmedia` ;

-- -----------------------------------------------------
-- Table `devmedia`.`pacote`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `devmedia`.`pacote` (
  `idpacote` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `valor` DECIMAL(10,2) NULL,
  `dataInicio` DATE NULL,
  `dataFim` DATE NULL,
  `descricao` TEXT NULL,
  `urlimagem` VARCHAR(45) NULL,
  `telefone` VARCHAR(45) NULL,
  `site` VARCHAR(45) NULL,
  PRIMARY KEY (`idpacote`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;