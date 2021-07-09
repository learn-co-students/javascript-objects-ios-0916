var playlist = {
  'Foo Fighters': 'Everlong',
  'Prince': 'Purple Rain'
}


var removeFromPlaylist = (obj, name) => {
  delete obj[name]
  return obj
}
var updatePlaylist = (obj, name, title) => {
  obj[name] = title
  return obj
}
