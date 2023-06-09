-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2023 at 04:35 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdboutique`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `categorie` varchar(30) NOT NULL,
  `nomArticle` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `prix` double NOT NULL,
  `quantite` int(11) NOT NULL,
  `image` varchar(300) NOT NULL,
  `dateCreation` datetime NOT NULL DEFAULT current_timestamp(),
  `livrer` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `categorie`, `nomArticle`, `description`, `prix`, `quantite`, `image`, `dateCreation`, `livrer`) VALUES
(1, 'Arts créatifs et éducation', 'Chemise', '- Chemise diffèrent couleurs et taolles ', 15.25, 100, 'serveur/pochettes/38a0fd501ec137d3faa4337cc5c2473cc857f509.png', '2023-01-22 09:32:25', '1'),
(3, 'Arts créatifs et éducation', 'Crayola® ', '– Marqueurs lavables Super pointes, paq./25:', 22.25, 10, 'serveur/pochettes/61e6d90a51cb10cda5bf570d2f75b412e22e5824.png', '2023-01-22 09:32:25', '1'),
(4, 'Arts créatifs et éducation', 'Ecouteurs', '- Kit de prise de notes créative\r\n', 25.14, 100, 'serveur/pochettes/96e7ba6511dbb666ef2cf9403bf4567df8d0ebf4.png', '2023-01-22 09:32:25', NULL),
(5, 'Arts créatifs et éducation', 'Avery ', '- Feuilles aimantées imprimables, 8½ po x 11 po\r\n', 12.35, 15, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/1ef8d0d20f77ce9803da79ef4ae1d5873e583dd5_square46771_1_db298d9e-be22-477e-9fdb-dff6999db80b_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(6, 'Fournitures de bureau', 'Staples \r\n', '- Enveloppes en poly à chargement sur le dessus, 9,25 po x 13 po', 16.35, 48, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/eda5238eb9c9c61fec70fdc69446a67f88953672_square638070_1_d8d4ddf2-c971-4ed8-b071-84869583919b_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(7, 'Fournitures de bureau', 'Staples ', '- Pot à crayons en filet - Noir\r\n', 25.36, 15, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/cf1a643a59eb003ffebd5e9ed7d6fa80ee6eb92c_square827857_1_8d4edaa1-706b-414f-b2fc-42f910a41a8c_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(8, 'Fournitures de bureau', 'Staples ', '– Super classeur en maille métallique, noir\r\n', 12.45, 13, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/e603a8f26ae0105b726e4958ee85819e735da284_square440033_1_321f9fb8-e6c2-4938-983a-53a842256b14_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(9, 'Fournitures de bureau', 'Staples ', '– Surligneurs traditionnels à pointe biseautée, couleurs variées, paquet de 12\r\n', 12.25, 10, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/b1c7ec7724f2fcc238563765cb0308d7df19fd99_square932600_1_cb8d0e8c-41da-4a44-b12d-3c37afee1c1c_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(10, 'Fournitures de bureau', 'BIC \r\n', '- Stylo à bille rétractable ReVolution Clic Stic à pointe moyenne (1 mm) - Bleu - Paquet de 10', 10.99, 15, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/43c4eef2bd78a564b5081c1990319f02abeb2d6e_square3002387_1_fc3abeb7-a3b6-454c-a198-23a194934ae3_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(11, 'Ordinateurs portatifs', 'ASUS \r\n', '- Portable X515JA-SB39-CB FHD 15,6 po - Intel Core i3- 1005G1 - 512 Go SSD - 8 Go de RAM - Win11 Édition Familial', 1000.36, 10, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/ec5172c856ff884a166775c290663c9cbb6bf0a3_square3002234_1_fr_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(12, 'Ordinateurs portatifs', 'HP \r\n', '- Ordinateur portable 15-ef3017ca écran de 15,6 po, AMD Ryzen 5 5625U, 16 Go de RAM, SSD de 1 To, Windows 11 Famille', 999.25, 5, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/2713f1d34bfe0983a1f919cb17ae432236419ea4_square3029124_1_84b881a6-eeae-49b0-8351-38ac84b32aa9_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(13, 'Ordinateurs portatifs', 'Lenovo ', '- Ordinateur portable FHD ThinkPad E14 Gen 3 14\" - AMD Ryzen 7 5700U - 256 Go SSD - 8 Go RAM - Windows 10 Pro 64 -Anglais\r\n', 666.39, 15, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/c33813f5117ab085a7a72b78eac3230d63e3b3e4_square3036101_1_23058f95-9275-41c4-8f88-5f3beeadf0d7_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(14, 'Ordinateurs portatifs', 'Samsung \r\n', '- Galaxy Book Ion 15,6 po QLED HD intégrale, Core i5, 8 Go, 512 Go, Aura argent', 825.75, 2, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/8813dd4b47a983b538858660a0d1cea9f565411a_square2981093_1_1897e336-5973-4436-9443-a3fa56b5f3dc_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(15, 'Ordinateurs portatifs', 'Huawei MateBook D 15 Ordinateur portable 15,6\"\r\n', '- i5-1135G7 - 8 Go LPDDR4x RAM - 512 Go SSD - Wi-Fi 6 - Argent mystique', 555, 2, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/0a20eb5eb411f51c3c785647e93f77da5bb6277b_square3030242_1_519e0b0e-908f-4ee4-a88a-7213bca2cc16_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(16, 'Mobilier', 'Emerge \r\n', '– Fauteuil de jeu Vartan en cuir reconstitué, bleu', 389.99, 5, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/eaa6ce9c0ea640ad6c9370c30b1d84df065c6e88_square2883936_1_3e958b4a-94d8-4287-a87e-b462229958c1_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(17, 'Mobilier', 'Monarch Specialties\r\n', ' - Bureau d’ordinateur orienté vers la gauche ou vers la droite, 80 po long., taupe (I 7255)', 325.25, 10, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/e9004f935f56cdb0813e826d03036ca5765eb7b2_square2797124_1_b11b62fb-ae83-4651-9e0d-e49cc32ab9e0_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(18, 'Mobilier', 'ShoppingAll \r\n', '- Bureau pour ordinateur portable - Gris', 229.99, 3, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/796542a009a6acb6c85cd20034684f1a099e291b_square3039817_1_6e4a027e-5b65-46fd-b969-94f91e4a2d1a_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(19, 'Mobilier', 'Hirsh \r\n', '- Classeur mobile vertical à 2 tiroirs, format lettre, noir', 225.99, 10, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/a7410fa8ae8736c0f6fb723d67d8725553fe110b_square740842_1_75cdf954-919b-4007-9151-10eec6d4abc3_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(20, 'Mobilier', 'Eglo \r\n', '- Cognoli Lampe de Bureau DEL avec Interrupteur Tactile, Fini Blanc Et Chrome, Inclus Horloge Digital (20 po)', 89.99, 5, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/b8279bd1ee2b7a8d6909eb111b68de88b7709b09_square3004939_1_4d99818a-a41b-4e5b-91bd-13462123a9c7_1000x1000.jpg\r\n', '2023-01-22 09:32:25', NULL),
(71, 'ch', 'Chemise', 'choo', 120, 12, 'serveur/pochettes/54bad1ab5d0c8b53f6663fdb53b79485b3196641.png', '2023-03-18 10:41:23', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `connexion`
--

CREATE TABLE `connexion` (
  `id` int(11) NOT NULL,
  `passWord` varchar(40) NOT NULL,
  `role` enum('A','M','E') DEFAULT 'M',
  `statut` enum('A','I') DEFAULT 'A',
  `email` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `connexion`
--

INSERT INTO `connexion` (`id`, `passWord`, `role`, `statut`, `email`) VALUES
(1, 'admin', 'A', 'A', 'admin@edoburo.com'),
(3, 'Aaaaaa-2', 'M', 'A', 'badreAbdel@mm.com'),
(5, '222', 'E', 'A', 'riad@edoburo.com'),
(87, 'Lina0207*', 'M', 'I', 'Bouhal_lina@edoburo.ca'),
(88, 'Ammmmm-2', 'M', 'I', 'Bouhal_lina5@edoburo.ca'),
(94, 'Aaaaaa-2', 'M', 'A', 'ahmed@edoBuro.com'),
(95, 'Aaaaaa-2', 'M', 'A', 'ahmed2@edoBuro.com'),
(96, 'Aaaaaa-2', 'M', 'A', 'ahmed3@edoBuro.com');

-- --------------------------------------------------------

--
-- Table structure for table `membres`
--

CREATE TABLE `membres` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL,
  `sexe` enum('H','F','A') DEFAULT NULL,
  `dateNaissance` varchar(30) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `membres`
--

INSERT INTO `membres` (`id`, `nom`, `prenom`, `email`, `sexe`, `dateNaissance`, `image`) VALUES
(1, 'Rafi', 'Monir', 'admin@edoburo.com', 'H', '12/07/2000', 'serveur/pochettes/user1-128x128.jpg'),
(3, 'Badre', 'Abdelkarim', 'badreAbdel@mm.com', 'H', '1988-01-05', 'serveur/pochettes/b3a607cbe724c38aadc7c5665ea957dffce23029.jpg'),
(5, 'Bouhal', 'GHiad', 'riad@edoburo.com', 'H', '1988-05-12', 'serveur/pochettes/user2-160x160.jpg'),
(87, 'Bouhal', 'Lina', 'Bouhal_lina@edoburo.ca', 'F', '2008-02-07', 'serveur/pochettes/user5-128x128.jpg'),
(88, 'Rafi', 'Sara', 'Rafi_Sara5@edoburo.ca', 'F', '1988-05-06', 'serveur/pochettes/user4-128x128.jpg'),
(94, 'Ahmed', 'Ahmed', 'ahmed@edoBuro.com', 'H', '1988-12-12', 'serveur/pochettes/c7e6e69e1cd7612e7a3d29028a436c12c4888ea1.png'),
(95, 'Ahmed', 'Ahlam', 'ahmed2@edoBuro.com', 'F', '1988-01-02', 'serveur/pochettes/19e14182699369e5dc78276d4db9c67a7bbfe2c6.png'),
(96, 'Ahmed', 'Ahmed', 'ahmed3@edoBuro.com', 'H', '1988-12-02', 'serveur/pochettes/logo.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `panier`
--

CREATE TABLE `panier` (
  `id` int(11) NOT NULL,
  `idMembre` int(11) DEFAULT NULL,
  `idProduit` int(11) DEFAULT NULL,
  `quantite` int(11) NOT NULL,
  `dateAjout` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `connexion`
--
ALTER TABLE `connexion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `membres`
--
ALTER TABLE `membres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `panier`
--
ALTER TABLE `panier`
  ADD KEY `FK_membre` (`idMembre`),
  ADD KEY `FK_article` (`idProduit`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `membres`
--
ALTER TABLE `membres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `panier`
--
ALTER TABLE `panier`
  ADD CONSTRAINT `FK_article` FOREIGN KEY (`idProduit`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_membre` FOREIGN KEY (`idMembre`) REFERENCES `membres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
