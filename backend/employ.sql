-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 18, 2023 at 07:41 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employ`
--

-- --------------------------------------------------------

--
-- Table structure for table `contectus`
--

DROP TABLE IF EXISTS `contectus`;
CREATE TABLE IF NOT EXISTS `contectus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `subject` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employeeregistration`
--

DROP TABLE IF EXISTS `employeeregistration`;
CREATE TABLE IF NOT EXISTS `employeeregistration` (
  `id` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `LastName` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Email` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Password` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Number` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Technology` varchar(200) NOT NULL,
  `Position` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Address` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Salary` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `BankAccountNumber` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `PFNumber` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `JoiningDate` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `CIFNumber` varchar(200) NOT NULL,
  `Photo` varchar(200) NOT NULL,
  `admin` varchar(200) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employeeregistration`
--

INSERT INTO `employeeregistration` (`id`, `FirstName`, `LastName`, `Email`, `Password`, `Number`, `Technology`, `Position`, `Address`, `Salary`, `BankAccountNumber`, `PFNumber`, `JoiningDate`, `CIFNumber`, `Photo`, `admin`, `created_at`) VALUES
(3, 'Admin', 'Admin', 'admin@admin.com', '123456', '7458961023', '', 'admin', '', '', '', '', '', '', 'user_profiles/Admin.jpg', '1', '2023-04-14 07:09:49'),
(5, 'Subhash', 'Dantani', 'subhash@gmail.com', '123456', '9641002357', 'Python', 'sr', 'kalol', '150010', '741258', '987456321', '2023-04-14', 'ABC7458', 'user_profiles/Employee.jpg', '0', '0000-00-00 00:00:00'),
(6, 'Ravi', 'Mehta', 'ravi@gamil.com', '123456', '7410235689', 'Android', 'sr', 'AMBD', '160000', '987456', '745698', '2023-04-14', 'BAD789654', 'user_profiles/Employee1.jpg', '0', '0000-00-00 00:00:00'),
(7, 'Radha', 'Jain', 'radha@gmail.com', '123456', '6985201347', 'Python', 'jr', 'Rajkot', '120000', '9812398765', '654123', '2023-04-14', 'XYZ698547', 'user_profiles/Employee2.jpg', '0', '0000-00-00 00:00:00'),
(8, 'Jay', 'Rathod', 'jay@gmail.com', '123456', '8965231470', 'React JS', 'sr', 'AHMBD', '160000', '85200169874', '478521', '2023-04-14', 'PQR745698', 'user_profiles/Employee4.jpg', '0', '0000-00-00 00:00:00'),
(9, 'Vijay', 'Jani', 'vajay@gmail.com', '123456', '6478951203', 'React JS', 'jr', 'Lakhnav', '89000', '68597410023', '4862753951', '2023-04-14', 'MRN753951', 'user_profiles/Employee5.jpg', '0', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
CREATE TABLE IF NOT EXISTS `task` (
  `id` int NOT NULL AUTO_INCREMENT,
  `TaskName` varchar(20) NOT NULL,
  `Technology` varchar(500) NOT NULL,
  `Description` varchar(20) NOT NULL,
  `FromEmployee` varchar(20) NOT NULL,
  `ToEmployee` varchar(20) NOT NULL,
  `status` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'To do',
  `FromEmployeeName` varchar(500) NOT NULL,
  `ToEmployeeName` text,
  `EndDate` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    date DATE NOT NULL,
    check_in TIME DEFAULT NULL,
    check_out TIME DEFAULT NULL,
    status ENUM('Present', 'Absent', 'Late', 'Leave') NOT NULL DEFAULT 'Absent',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employeeregistration(id) ON DELETE CASCADE
);

