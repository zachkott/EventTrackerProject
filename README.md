# EventTrackerProject

## Overview
For our week 12 project we were tasked with creating an 'Event Tracker' that keeps track of information over time. For this project I decided to create a Music tracker that keeps track of artists/bands. Initially I wanted to include multiple tables that track upcoming events, songs, albums etc.. However, for the first installment we were encouraged to limit our scope, so these features will be added in the following installments. Since this is a build upon project, the first step was building the database and creating the backend using RESTful Services. The backend code is comprised of basic CRUD functionality that allows a user to search  by an Id, add an artist, update an artist, and delete an artist.


## Schema
<p align="center"><img src="media/musictrackerdb.png" width="350"></p>


## Postman Routing
| HTTP Verb | URI                  | Request Body | Response Body    | Functionality                                              |
| GET       | '/api/bands'      |              |  List of artists  | Return a list of all artists                                      |
| GET       | '/api/bands/34'    |              |  Single artist    | Return an artist by Id                                            |
| POST      | 'api/bands'       |  JSON          |  Add an artist    | Add an artist to the database                                     |
| PUT       | '/api/bands/44'    |  JSON           |  Update an artist | Update an artist by Id                                            |
| DELETE    | '/api/bands/44'    |              |  Delete an artist | Delete an artist by Id                                            |

* Sample JSON for creating artist
```
{
    "name": "Generic Band",
    "genre": "Electro elevator",
    "yearsActive": 29,
    "albums": 7,
    "mostPlayed": "Best Song. Ever",
    "origin": "Greensboro, North Catolina",
    "members": 1,
    "label": "Trippin' Records",
    "leadArtist": "Dennis Quade",
    "songs": 36
}
```

* Find all
```
GET http://localhost:8082/api/bands
```
* Find by Id
```
GET http://localhost:8082/api/bands/{artistId}
```
* Create artist
```
POST http://localhost:8082/api/bands
```
* Update artist
```
PUT http://localhost:8082/api/bands/{artistId}
```
* Delete artist
```
DELETE http://localhost:8082/api/bands{artistId}
```

### Technologiges Used
* AWS- EC2
* Bootstrap
* Git
* GitHub
* Gradle
* Java
* MySQL Workbench
* Postman
* SpringToolSuite4
* Spring Data JPA
* Spring Boot
* Spring MVC
* Terminal -zsh
