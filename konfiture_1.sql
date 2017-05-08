-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 08 2017 г., 17:51
-- Версия сервера: 5.5.50
-- Версия PHP: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `konfiture`
--

-- --------------------------------------------------------

--
-- Структура таблицы `album`
--

CREATE TABLE IF NOT EXISTS `album` (
  `id_album` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `name_translit` varchar(255) NOT NULL,
  `preview` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `album`
--

INSERT INTO `album` (`id_album`, `name`, `name_translit`, `preview`) VALUES
(17, 'Конь в', 'Kon-v_17', 'preview.jpg'),
(18, 'Тестовое пиьсмо', 'Testovoe-pismo_18', 'preview.jpg'),
(19, 'Тестовое пиьсмо2', 'Testovoe-pismo2_19', 'preview.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `album_photo`
--

CREATE TABLE IF NOT EXISTS `album_photo` (
  `id_photo` int(11) NOT NULL,
  `id_album` int(11) NOT NULL,
  `photo_name` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `album_photo`
--

INSERT INTO `album_photo` (`id_photo`, `id_album`, `photo_name`) VALUES
(9, 19, 'photo-590edc3560f68.jpg'),
(10, 19, 'photo-590edc356ced3.jpg'),
(11, 19, 'photo-590edc356f9cc.jpg'),
(13, 19, 'photo-590edccbcc49d.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id_news` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `preview` varchar(255) NOT NULL,
  `link_rewrite` varchar(255) NOT NULL,
  `video_link` varchar(255) DEFAULT NULL,
  `second_text` text,
  `chess_block_text_1` text,
  `chess_block_photo_1` varchar(255) DEFAULT NULL,
  `chess_block_text_2` text,
  `chess_block_photo_2` varchar(255) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `type` enum('trends','news') NOT NULL,
  `end_text` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `news`
--

INSERT INTO `news` (`id_news`, `title`, `text`, `preview`, `link_rewrite`, `video_link`, `second_text`, `chess_block_text_1`, `chess_block_photo_1`, `chess_block_text_2`, `chess_block_photo_2`, `date`, `type`, `end_text`) VALUES
(4, 'Новость номер 2', 'chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 ', 'preview.jpg', 'Novost-nomer-2_4', 'https://www.youtube.com/watch?v=e7c_ZEwr59Eкккккк', 'chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 ', 'chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 ', 'chess_block_photo_1.jpg', 'chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 ', 'chess_block_photo_2.jpg', '2017-05-08 13:32:41', 'news', 'chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 chess_block_photo_1 ');

-- --------------------------------------------------------

--
-- Структура таблицы `news_photo`
--

CREATE TABLE IF NOT EXISTS `news_photo` (
  `id_photo` int(11) NOT NULL,
  `id_news` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `news_photo`
--

INSERT INTO `news_photo` (`id_photo`, `id_news`, `photo`) VALUES
(2, 4, 'photo-5910839119a66.jpg'),
(3, 4, 'photo-5910839125db9.jpg'),
(4, 4, 'photo-5910839127141.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `review`
--

CREATE TABLE IF NOT EXISTS `review` (
  `id_review` int(11) unsigned NOT NULL,
  `user_name` varchar(128) NOT NULL,
  `text` text NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `review`
--

INSERT INTO `review` (`id_review`, `user_name`, `text`, `photo`) VALUES
(57, 'Тестовое пиьсмо24', 'ыфвфывфыыфвфыв', 'Testovoe-pismo2-57.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `video`
--

CREATE TABLE IF NOT EXISTS `video` (
  `id_video` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `preview` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `video`
--

INSERT INTO `video` (`id_video`, `user_name`, `link`, `preview`) VALUES
(2, 'Конь Боджек valera', 'https://www.youtube.com/watch?v=1GVlDslpLBAaaa', 'Kon-Bodzhek-valera-2.jpg'),
(3, 'Конь Боджек2', 'https://www.youtube.com/watch?v=1GVlDslpLBA', 'Kon-Bodzhek2-3.jpg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id_album`);

--
-- Индексы таблицы `album_photo`
--
ALTER TABLE `album_photo`
  ADD PRIMARY KEY (`id_photo`);

--
-- Индексы таблицы `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id_news`);

--
-- Индексы таблицы `news_photo`
--
ALTER TABLE `news_photo`
  ADD PRIMARY KEY (`id_photo`);

--
-- Индексы таблицы `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id_review`);

--
-- Индексы таблицы `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id_video`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `album`
--
ALTER TABLE `album`
  MODIFY `id_album` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT для таблицы `album_photo`
--
ALTER TABLE `album_photo`
  MODIFY `id_photo` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT для таблицы `news`
--
ALTER TABLE `news`
  MODIFY `id_news` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `news_photo`
--
ALTER TABLE `news_photo`
  MODIFY `id_photo` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `review`
--
ALTER TABLE `review`
  MODIFY `id_review` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=58;
--
-- AUTO_INCREMENT для таблицы `video`
--
ALTER TABLE `video`
  MODIFY `id_video` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
