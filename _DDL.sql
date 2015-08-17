/*
drop table person;
drop table country;
*/

create table country
(
	country_id serial primary key,
	country_name text unique
);


create table person
(
	person_id serial primary key,
	username text unique,
	favorite_number int,
	birth_country_id int,
	constraint fk_person__country foreign key(birth_country_id) references country(country_id)
);




insert into country(country_name) values('PHL');
insert into country(country_name) values('CHN');


insert into person(username, favorite_number, birth_country_id) values
('Linus', 69, 1),
('Michael', 76, 1),
('Bill', 55, 2);



