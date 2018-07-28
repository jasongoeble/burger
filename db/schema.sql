/*
 Navicat MySQL Data Transfer

 Source Server         : homework
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost:3306
 Source Schema         : burgers_db

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : 65001

 Date: 28/07/2018 13:14:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for burgers
-- ----------------------------
DROP TABLE IF EXISTS `burgers`;
CREATE TABLE `burgers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `devoured` tinyint(1) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
