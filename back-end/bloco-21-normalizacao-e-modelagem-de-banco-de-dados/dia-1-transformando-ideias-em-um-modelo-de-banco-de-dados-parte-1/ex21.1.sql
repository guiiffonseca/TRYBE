-- Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:
-- Nome;
-- Espécie;
-- Sexo;
-- Idade;
-- Localização.
-- Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.

-- RELACIONAMENTO:

-- ANIMAL N - N CUIDADOR;

-- CUIDADOR N - 1 GERENTE;


CREATE DATABASE IF NOT EXISTS Zoo;

USE Zoo;

CREATE TABLE Animal (
  ANIMAL_ID INT PRIMARY KEY AUTO_INCREMENT,
  NOME VARCHAR(50) NOT NULL,
  ESPECIE VARCHAR(50) NOT NULL,
  IDADE INT, 
  SEXO VARCHAR(3),
  LOCALIZAÇÃO VARCHAR(50)
);

CREATE TABLE Gerente (
  GERENTE_ID INT PRIMARY KEY AUTO_INCREMENT,
  NOME VARCHAR(100) NOT NULL
);

CREATE TABLE Cuidador (
  CUIDADOR_ID INT PRIMARY KEY AUTO_INCREMENT,
  GERENTE_ID INT NOT NULL, 
  NOME VARCHAR(100) NOT NULL,
  FOREIGN KEY (GERENTE_ID) REFERENCES GERENTE (GERENTE_ID)
);

CREATE TABLE Animal_Cuidador (
  ANIMAL_ID INT, 
  CUIDADOR_ID INT, 
  CONSTRAINT PRIMARY KEY (ANIMAL_ID, CUIDADOR_ID),
  FOREIGN KEY (ANIMAL_ID) REFERENCES Animal (ANIMAL_ID),
  FOREIGN KEY (CUIDADOR_ID) REFERENCES Cuidador (CUIDADOR_ID)
);
