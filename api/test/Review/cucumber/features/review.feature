Feature: CRUD REVIEW

    @ReviewPosting
    Scenario: A user wants to post a review
        Given A user post a review with details as shown in the table
            | id       | 8df730c1-5b14-404e-88b2-b632fac8882b                                                                                                                  |
            | title    | The Godfather                                                                                                                                         |
            | score    | 9.2                                                                                                                                                   |
            | poster   | url.poster                                                                                                                                            |
            | synopsis | The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son. |
            | trailer  | https://www.youtube.com/watch?v=UaVTIH8mujA                                                                                                           |
            | casting  | Marlon Brando, Al Pacino, James Caan                                                                                                                  |
            | genre    | Crime, Drama                                                                                                                                          |
            | category | movie                                                                                                                                                 |
        When The user posts the review
        Then The review is created as shown in the table
            | id       | 8df730c1-5b14-404e-88b2-b632fac8882b                                                                                                                  |
            | title    | The Godfather                                                                                                                                         |
            | score    | 9.2                                                                                                                                                   |
            | poster   | url.poster                                                                                                                                            |
            | synopsis | The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son. |
            | trailer  | https://www.youtube.com/watch?v=UaVTIH8mujA                                                                                                           |
            | casting  | Marlon Brando, Al Pacino, James Caan                                                                                                                  |
            | genre    | Crime, Drama                                                                                                                                          |
            | category | movie                                                                                                                                                 |

    @ReviewListing
    Scenario: The user wants to list all current reviews
        Given An employer wants to list existing reviews as followed
            | id                                   | title           | score | poster     | synopsis                                                                                                                                                                                      | trailer                                     | casting                                     | genre                | category |
            | 8df730c1-5b14-404e-88b2-b632fac8882b | The Godfather   | 9.2   | url.poster | The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.                                         | https://www.youtube.com/watch?v=UaVTIH8mujA | Marlon Brando, Al Pacino, James Caan        | Crime, Drama         | movie    |
            | 8df730c1-5b14-404e-88b2-b632fac8882b | The Dark Knight | 9     | url.poster | When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. | https://www.youtube.com/watch?v=EXeTwQWrcwY | Christian Bale, Heath Ledger, Aaron Eckhart | Action, Crime, Drama | movie    |
        When The employer list all reviews
        Then All reviews appear in the list as followed:
            | id                                   | title           | score | poster     | synopsis                                                                                                                                                                                      | trailer                                     | casting                                     | genre                | category |
            | 8df730c1-5b14-404e-88b2-b632fac8882b | The Godfather   | 9.2   | url.poster | The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.                                         | https://www.youtube.com/watch?v=UaVTIH8mujA | Marlon Brando, Al Pacino, James Caan        | Crime, Drama         | movie    |
            | 8df730c1-5b14-404e-88b2-b632fac8882b | The Dark Knight | 9     | url.poster | When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. | https://www.youtube.com/watch?v=EXeTwQWrcwY | Christian Bale, Heath Ledger, Aaron Eckhart | Action, Crime, Drama | movie    |

    @ReviewUpdating
    Scenario: A client wants to update a posted review
        Given An existing review with details as followed
            | id       | 8df730c1-5b14-404e-88b2-b632fac8882b                                                                                                                  |
            | title    | The Godfather                                                                                                                                         |
            | score    | 9.2                                                                                                                                                   |
            | poster   | url.poster                                                                                                                                            |
            | synopsis | The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son. |
            | trailer  | https://www.youtube.com/watch?v=UaVTIH8mujA                                                                                                           |
            | casting  | Marlon Brando, Al Pacino, James Caan                                                                                                                  |
            | genre    | Crime, Drama                                                                                                                                          |
            | category | movie                                                                                                                                                 |
        When The user updates a few attributes of the review as shown
            | score | 7 |
        Then The review is modified as followed
            | id       | 8df730c1-5b14-404e-88b2-b632fac8882b                                                                                                                  |
            | title    | The Godfather                                                                                                                                         |
            | score    | 7                                                                                                                                                     |
            | poster   | url.poster                                                                                                                                            |
            | synopsis | The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son. |
            | trailer  | https://www.youtube.com/watch?v=UaVTIH8mujA                                                                                                           |
            | casting  | Marlon Brando, Al Pacino, James Caan                                                                                                                  |
            | genre    | Crime, Drama                                                                                                                                          |
            | category | movie                                                                                                                                                 |

    @ReviewDeleting
    Scenario: The user wants to delete a review
        Given an existing review with details as followed
            | id       | 8df730c1-5b14-404e-88b2-b632fac8882b                                                                                                                  |
            | title    | The Godfather                                                                                                                                         |
            | score    | 9.2                                                                                                                                                   |
            | poster   | url.poster                                                                                                                                            |
            | synopsis | The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son. |
            | trailer  | https://www.youtube.com/watch?v=UaVTIH8mujA                                                                                                           |
            | casting  | Marlon Brando, Al Pacino, James Caan                                                                                                                  |
            | genre    | Crime, Drama                                                                                                                                          |
            | category | movie                                                                                                                                                 |

        When The user delete the review with n°<id>
            | id | 8df730c1-5b14-404e-88b2-b632fac8882b |
        Then A message <message> is shown
            | message | Review n°8df730c1-5b14-404e-88b2-b632fac8882b supprimée. |


# @MissionSearching
# Scenario: The employer wants to search missions according to some keywords
#     Given An Employer who wants to search a mission and there are existing missions as followed
#         | id                                   | profile                    | client | title    | description                          |
#         | 6ba7b810-9dad-11d1-80b4-00c04fd430c1 | Developpeur Java           | Paris  | Wemanity | dev web Java                         |
#         | 6ba7b810-9dad-11d1-80b4-00c04fd430c2 | Developpeur Nodejs         | Paris  | Wemanity | dev web Javascript docker kubernetes |
#         | 6ba7b810-9dad-11d1-80b4-00c04fd430c3 | Developpeur Reactjs        | Paris  | Wemanity | dev web Javascript typescript docker |
#         | 6ba7b810-9dad-11d1-80b4-00c04fd430c4 | Developpeur Python Angular | Paris  | Wemanity | dev web python                       |
#     When The employer search missions with keywords
#         | keywords           |
#         | Java, node, docker |
#     Then Missions list appear as followed:
#         | id                                   | profile             | client | title    | description                          |
#         | 6ba7b810-9dad-11d1-80b4-00c04fd430c2 | Developpeur Nodejs  | Paris  | Wemanity | dev web Javascript docker kubernetes |
#         | 6ba7b810-9dad-11d1-80b4-00c04fd430c3 | Developpeur Reactjs | Paris  | Wemanity | dev web Javascript typescript docker |
#         | 6ba7b810-9dad-11d1-80b4-00c04fd430c1 | Developpeur Java    | Paris  | Wemanity | dev web Java                         |
