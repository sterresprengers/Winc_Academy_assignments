
POST / DELETE RATING

Get guest_session_id:
https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id 
guest_session_id: 20a3bd3d5d5ece75427d50fcff4654e1 // expires_at: "2021-11-12 15:17:01 UTC

POST
https://developers.themoviedb.org/3/movies/rate-movie
apiUrl: https://api.themoviedb.org/3/movie/tt0043274/rating?api_key=935481d921f1d2a06dd8dbfaf4028309&guest_session_id=20a3bd3d5d5ece75427d50fcff4654e1
movie_id: tt0043274
Body request: 
{
  "value": 9.0
}

DELETE
https://developers.themoviedb.org/3/movies/delete-movie-rating 
apiUrl: https://api.themoviedb.org/3/movie/tt0043274/rating?api_key=935481d921f1d2a06dd8dbfaf4028309&guest_session_id=20a3bd3d5d5ece75427d50fcff4654e1
movie_id: tt0043274

*/