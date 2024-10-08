import { StyleSheet, Text, View, Image } from 'react-native';

// const movie = {"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","Rated":"PG-13","Released":"15 Jul 2011","Runtime":"130 min","Genre":"Adventure, Family, Fantasy","Director":"David Yates","Writer":"Steve Kloves, J.K. Rowling","Actors":"Daniel Radcliffe, Emma Watson, Rupert Grint","Plot":"Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","Language":"English, Latin","Country":"United Kingdom, United States","Awards":"Nominated for 3 Oscars. 48 wins & 95 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"85/100"}],"Metascore":"85","imdbRating":"8.1","imdbVotes":"957,211","imdbID":"tt1201607","Type":"movie","DVD":"N/A","BoxOffice":"$381,447,587","Production":"N/A","Website":"N/A","Response":"True"}

export default function MovieScreen({ route }) {
  const params = route.params
  const movie = params.movie

  return(
    <View style={styles.movie}>
      <Image 
        source={{uri: movie.Poster}}
        style={{width: 200, height: 300}} 
      />
      <Text style={styles.margin}>Title: {movie.Title}</Text>
      <Text style={styles.margin}>Year: {movie.Year}</Text>
      <Text style={styles.margin}>Type: {movie.Type}</Text>
      <Text style={styles.margin}>Time: {movie.Runtime}</Text>
      <Text style={styles.margin}>Genre: {movie.Genre}</Text>
      <Text style={styles.margin}>Plot: {movie.Plot}</Text>
      {movie.Ratings.map(source => (
        <Text style={styles.margin} key={source.Source}>{source.Source}: {source.Value}</Text>
      )
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  movie: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  margin: {
    marginTop: 10,
  },
});
