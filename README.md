# 🎬 TMDb-React-Native 🍿

React-Native app based on the TMDb API

In this application you will find on the main view the different types of Genre for Movies.  When you select a Genre you will see the list of movies under this category, with the possibility to see more details about an specific movie and the template for creating a new movie, without persistance on server.

These are the screens you will find when running the app on an iOS Device.

Genres                     |  Movies
:-------------------------:|:-------------------------:
![main](https://github.com/syllerim/TMDb-React-Native/blob/master/src/resources/all_genres.png) | ![detail](https://github.com/syllerim/TMDb-React-Native/blob/master/src/resources/all_movies.png)

Movie Details              |  Add Movie
:-------------------------:|:-------------------------:
![main](https://github.com/syllerim/TMDb-React-Native/blob/master/src/resources/movie_detail.png) | ![detail](https://github.com/syllerim/TMDb-React-Native/blob/master/src/resources/add_movie.png)

## Main Development Topics ✨

- React-Native
- iOS
- Android
- Redux

## Installation Notes 📝

- [Install React-Native](https://facebook.github.io/react-native/docs/getting-started)
- On the structure of the project create a .ENV file with the following structure.  Register on [TMDb](https://developers.themoviedb.org/3/getting-started/introduction) to obtain a developer key.
```
TMDB_API_KEY=xxxxxxxxxxxxxxx
```
- Navigate to the path of the project on terminal and run

```
npm install
npm start
```

- On another tab in your terminal run the command you need depending on the platform you want to use.

``` 
 react-native run-ios
🤖 react-native run-android

```
