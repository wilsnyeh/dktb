# Data models
Nation state park application (Don't kick the Bucket)

# TABLES
## Parks
*Amenities(restrooms)
*parking
*Articles(reviews ...etc)
*Activities
*Articles(reviews ...etc)
*Alerts(closures, safety, conditions)

## Users
*bucket list(foriegnKey to park with park.name)
*Login/authentication
*history(boolean for visited)

## Park
| Name | Type | Unique | Optional |
|-|-|-|-|
| name | string | no | no |
| city | string | no | no |
| state | reference to State entity | no | no |
| image | string | no | yes |
| address | string | no | yes |
| weatherInfo | string | no | yes |
| description | string | no | yes |

The `park` entity contains the data about a park.

## User
| Name | Type | Unique | Optional |
|-|-|-|-|
| id | string | yes | no |
| name | string | no | no |
| username | string | yes | no |
| email | string | yes | no |
| bucketList | string | yes | no | Foreign key |
| history | string | yes | no | Foreign key |

The `User` entity contains information about the user.


## Bucket List
| Name | Type | Unique | Optional |
|-|-|-|-|
| park | string | no | no |
| user | string | no | no |

The `Bucket List` entity contains a user specific list of parks that the user has designated.


## History
| Name | Type | Unique | Optional |
|-|-|-|-|
| park | string | no | no |
| user | string | no | no |

The `History` entity contains a list of parks that the user has told the site that they have visited before.
