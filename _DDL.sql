/*
drop table person;
drop table country;
*/


drop extension if exists citext;

CREATE EXTENSION IF NOT EXISTS citext;

create table country
(
	country_id serial primary key,
	country_name text unique not null,
	population int not null
);


create table person
(
	person_id serial primary key,
	username text unique not null,
	about_me citext not null default '',
	favorite_number int not null,
	birth_country_id int not null,
	constraint fk_person__country foreign key(birth_country_id) references country(country_id)
);




insert into country(country_name, population) values('PHL', 9);
insert into country(country_name, population) values('CHN', 2);


insert into person(username, favorite_number, birth_country_id) values
('Linus', 69, 1),
('Michael', 76, 1),
('Bill', 55, 2);



