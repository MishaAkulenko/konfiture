
ALTER TABLE `album` CHANGE `name` `name` VARCHAR(255) NOT NULL;


ALTER TABLE `album_photo` CHANGE `name` `photo_name` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;


ALTER TABLE `news` CHANGE `linl_rewrite` `link_rewrite` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;

ALTER TABLE `news` ADD `video_link` VARCHAR(255) NULL DEFAULT NULL AFTER `link_rewrite`, ADD `second_text` TEXT NULL AFTER `video_link`, ADD `chess_block_text_1` TEXT NULL AFTER `second_text`, ADD `chess_block_photo_1` VARCHAR(255) NULL AFTER `chess_block_text_1`, ADD `chess_block_text_2` TEXT NULL AFTER `chess_block_photo_1`, ADD `chess_block_photo_2` INT NULL AFTER `chess_block_text_2`;



