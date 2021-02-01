-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-02-2021 a las 22:46:04
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `money_balance`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transaction`
--

CREATE TABLE `transaction` (
  `id` int(8) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `category` varchar(16) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(8) NOT NULL,
  `in_out` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `transaction`
--

INSERT INTO `transaction` (`id`, `amount`, `category`, `date`, `user_id`, `in_out`) VALUES
(2, '150.00', 'food', '2021-01-27 00:17:52', 1, 'out'),
(4, '840.32', 'bills', '2021-01-27 00:22:19', 1, 'out'),
(5, '415.50', 'bills', '2021-01-27 00:25:22', 1, 'out'),
(9, '150.00', 'food', '2021-01-27 00:33:47', 1, 'out'),
(10, '350.00', 'cinema', '2021-01-27 00:42:00', 1, 'out'),
(17, '10.00', 'food', '2021-01-27 16:41:15', 1, 'out'),
(18, '415.50', 'bills', '2021-01-28 14:55:48', 1, 'out'),
(21, '40015.50', 'salary', '2021-01-29 03:45:12', 2, 'in'),
(22, '620.00', 'food', '2021-01-29 03:51:13', 2, 'out'),
(23, '19000.00', 'rent', '2021-01-29 03:52:01', 2, 'out'),
(25, '400.00', 'gift', '2021-01-31 14:24:18', 2, 'in'),
(26, '10000.00', 'rent', '2021-01-31 14:26:47', 1, 'out'),
(27, '30000.00', 'salary', '2021-01-31 14:38:19', 2, 'in'),
(28, '15000.00', 'rent', '2021-01-31 14:49:12', 2, 'out'),
(29, '15000.00', 'rent', '2021-01-31 14:50:37', 1, 'out'),
(30, '300.00', 'gift', '2021-01-31 23:40:38', 1, 'out'),
(31, '300.00', 'food', '2021-01-31 23:40:50', 1, 'out'),
(32, '400.00', 'gift', '2021-01-31 23:42:41', 1, 'out'),
(33, '400.00', 'food', '2021-01-31 23:43:31', 2, 'out'),
(34, '555.00', 'doctor', '2021-02-01 00:08:14', 2, 'out'),
(36, '200.00', 'food', '2021-02-01 00:20:53', 2, 'out'),
(58, '3000.00', 'gift', '2021-02-01 03:49:15', 1, 'out'),
(59, '40000.00', 'salary', '2021-02-01 21:41:23', 1, 'in'),
(60, '2000.00', 'gift', '2021-02-01 21:41:42', 1, 'in');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(8) NOT NULL,
  `username` varchar(16) NOT NULL,
  `balance` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `balance`) VALUES
(1, 'lucía', '242623.00'),
(2, 'pipo', '520199.00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
