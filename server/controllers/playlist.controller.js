const Playlist = require(`../models/playlist.model`)

exports.getPlaylistsByTermController = async (req, res) => {
 
  const term = req.query.term
  
  Playlist.find({ playlist_name: { $regex: term, $options: "i" } }).exec((err, playlists) => {
    if (err) {
      return res.code(500).send({ err: "Something went wrong, please try again." })
    } else return res.code(200).send({ resultCount: playlists.length, results: playlists})
  })
}

exports.createPlaylistController = async (req, res) => {

  const user_email = req.profile.email
  
  Playlist.find({ user_email: user_email }).exec((err, playlists) => {
    if (err) {
      return res.code(500).send({ err: err })
    } else if (playlists.length === 0) {

      const playlist_name = "New playlist 1"

      const newPlaylist = new Playlist({
        user_email, playlist_name
      })
      
      newPlaylist.save((err, playlist) => {
        if (err) {
         return res.code(500).send({ error: "Something went wrong, please try again." })
        } else {
         return res.code(200)
        }
      })
      
    } else {

      const arrLength = playlists.length
      
      const playlist_name = `New playlist ${arrLength + 1}`

      const newPlaylist = new Playlist({
        user_email, playlist_name
      })
      
      newPlaylist.save((err, playlist) => {
        if (err) {
          return res.code(500).send({ error: "Something went wrong, please try again." })
        } else {
          return res.code(200).send({ message: "Playlist has been created successfully." })
        }
      })
    }
  })
}

exports.getPlaylistsController = async (req, res) => {

  const user_email = req.profile.email
  
  Playlist.find({ user_email: user_email }).exec((err, playlists) => {
    if (err) {
      return res.code(500).send({ err: "Something went wrong, please try again." })
    } else return res.code(200).send({ playlists: playlists})
  })
}

exports.renamePlaylistController = async (req, res) => {

  console.log('rename playlist request', req.body)
  
  const playlistID = req.body.playlistID
  const newPlaylistName = req.body.newPlaylistName
  
  Playlist.findOneAndUpdate(
          { _id: playlistID },
          { playlist_name: newPlaylistName},
          (err, playlist) => {
              if (err || !playlist) {
                  return res.code(500).send({ error: "Update playlist error - please try again" })
              } else {
                  return res.code(200).send({
                      message: "Playlist name has been changed successfully."
                  });
              }
          }
      ); 
}

exports.deletePlaylistController = async (req, res) => {

  console.log('rename playlist request', req.body)
  
  const playlistID = req.body.playlistID
  console.log('playlist id', playlistID)
  
  Playlist.findOneAndDelete(
          { _id: playlistID },
          (err, playlist) => {
              if (err || !playlist) {
                  return res.code(500).send({ error: "Something went wrong - please try again." })
              } else {
                  return res.code(200).send({
                      message: "Playlist has been deleted successfully."
                  });
              }
          }
      ); 
}

exports.getPlaylistController = async (req, res) => {

  const playlistID = req.query.id
  
  Playlist.findOne({ _id: playlistID }).exec((err, playlist) => {
    if (err) {
      return res.code(500).send({ err: "Something went wrong, please try again." })
    } else return res.code(200).send({ playlist: playlist})
  })
}

exports.addToPlaylistController = async (req, res) => {
  
  const { id, song } = req.body

  Playlist.findOne(
          { _id: id },
          (err, playlist) => {
              if (err || !playlist) {
                  return res.code(500).send({ error: "Playlist not found - please try again." })
              } else {
                  if (playlist.songs.findIndex(playlistSong => playlistSong.previewUrl === song.previewUrl) !== -1)
                    return res.code(202).send({ message: "Song is already added to this playlist." });
                  else
                    Playlist.findOneAndUpdate({ _id: playlist._id },
                      { $push: { songs: song } },
                      { new: true }).exec((err, playlist) => {
                        if (err) {
                          return res.code(500).send({err: "Something went wrong, please try again."})
                        } else return res.code(200).send({ message: "Song has been added successfully."})
                    })
              } 
          }
      ); 
}

exports.removeFromPlaylistController = async (req, res) => {
  
  const { id, song } = req.body

  Playlist.findOne(
          { _id: id },
          (err, playlist) => {
              if (err || !playlist) {
                  return res.code(500).send({ error: "Playlist not found - please try again." })
              } else {

                if (playlist.songs.findIndex(playlistSong => playlistSong.previewUrl === song.previewUrl) !== -1)
                    Playlist.findOneAndUpdate({ _id: playlist._id },
                    { $pull: { songs: song } },
                    { new: true }).exec((err, playlist) => {
                      if (err) {
                        return res.code(500).send({err: "Something went wrong, please try again."})
                      } else return res.code(200).send({ message: "Song has been removed successfully from playlist."})
                    })
                else
                  Playlist.findOneAndUpdate({ _id: playlist._id },
                    { $push: { songs: song } },
                    { new: true }).exec((err, playlist) => {
                      if (err) {
                        return res.code(500).send({err: "Something went wrong, please try again."})
                      } else return res.code(202).send({
                          message: "This song is not added to this playlist."
                        }); 
                    })
              } 
          }
      ); 
}