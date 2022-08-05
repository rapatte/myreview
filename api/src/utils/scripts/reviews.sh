docker exec -it myreview psql -U myreviewUser myreview -c "insert into reviews (id, title, score, poster, synopsis, trailer, casting, genre, category) values ('5a3ed07d-95a9-47ac-a8eb-16bd86558a62', 'The Shawshank Redemption', 9.3, 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 'https://www.youtube.com/watch?v=6hB3S9bIaco', 'Tim Robbins, Morgan Freeman, Bob Gunton', 'Drama', 'movie');
insert into reviews (id, title, score, poster, synopsis, trailer, casting, genre, category) values ('8df730c1-5b14-404e-88b2-b632fac8882b', 'The Godfather', 9.2, 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.', 'https://www.youtube.com/watch?v=UaVTIH8mujA', 'Marlon Brando, Al Pacino, James Caan', 'Crime, Drama', 'movie');
insert into reviews (id, title, score, poster, synopsis, trailer, casting, genre, category) values ('1d5c7f08-3786-4fc4-895e-97ae64fe0a36', 'The Dark Knight', 9.0, 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg', 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 'https://www.youtube.com/watch?v=EXeTwQWrcwY', 'Christian Bale, Heath Ledger, Aaron Eckhart', 'Action, Crime, Drama', 'movie');
insert into reviews (id, title, score, poster, synopsis, trailer, casting, genre, category) values ('060313f1-006c-45b7-8e02-3a64cb0926ef', 'The Godfather Part II', 9.0, 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.', 'https://www.youtube.com/watch?v=9O1Iy9od7-A', 'Al Pacino, Robert De Niro, Robert Duvall', 'Crime, Drama', 'movie');
insert into reviews (id, title, score, poster, synopsis, trailer, casting, genre, category) values ('73622062-c599-4daa-9cb5-5ca49549f07a', '12 Angry Men', 9.0, 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg', 'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.', 'https://www.youtube.com/watch?v=_13J_9B5jEk', 'Henry Fonda, Lee J. Cobb, Martin Balsam', 'Crime, Drama', 'movie');
insert into reviews (id, title, score, poster, synopsis, trailer, casting, genre, category) values ('eb0b4e3e-ca5d-4cf1-971f-56d50679034f', 'Schindler''s List', 9.0, 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.', 'https://www.youtube.com/watch?v=gG22XNhtnoY', 'Liam Neeson, Ralph Fiennes, Ben Kingsley', 'Biography, Drama, History', 'movie');
insert into reviews (id, title, score, poster, synopsis, trailer, casting, genre, category) values ('e356cefd-b10b-46c4-bb4f-2b71101e39fd', 'The Lord of the Rings: The Return of the King', 9.0, 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', 'Gandalf and Aragorn lead the World of Men against Sauron''s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.', 'https://www.youtube.com/watch?v=r5X-hFf6Bwo', 'Elijah Wood, Viggo Mortensen, Ian McKellen', 'Action, Adventure, Drama', 'movie');
insert into reviews (id, title, score, poster, synopsis, trailer, casting, genre, category) values ('0dab95b8-a69f-48db-9fd3-a17a0d0df6b2', 'Pulp Fiction', 8.9, 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 'https://www.youtube.com/watch?v=s7EdQ4FqbhY', 'John Travolta, Uma Thurman, Samuel L. Jackson', 'Crime, Drama', 'movie');
insert into reviews (id, title, score, poster, synopsis, trailer, casting, genre, category) values ('aa12db61-7556-47a2-9288-c05ce33502e9', 'The Lord of the Rings: The Fellowship of the Ring', 8.8, 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg', 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.', 'https://www.youtube.com/watch?v=V75dMMIW2B4&t=1s', 'Elijah Wood, Ian McKellen, Orlando Bloom', 'Action, Adventure, Drama', 'movie');
insert into reviews (id, title, score, poster, synopsis, trailer, casting, genre, category) values ('16d8fc9e-6e28-40ab-b6c9-fff862acfad0', 'The Good, the Bad and the Ugly', 8.8, 'https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg', 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.', 'https://www.youtube.com/watch?v=WCN5JJY_wiA', 'Clint Eastwood, Eli Wallach, Lee Van Cleef', 'Adventure, Western', 'movie');"