module.exports = function(str) {
  if(!str && str !== '') throw new TypeError('Expect str to be a string')
  var reName = /[\w+ ]+/
  var reEmail = /\<[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\>/
  var reWebsite = /\([-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?\)/

  var name = reName.test(str) ? reName.exec(str)[0].trim() : undefined
  var email = reEmail.test(str) ? reEmail.exec(str)[0].replace(/[\<\>]/g, '') : undefined
  var website = reWebsite.test(str) ? reWebsite.exec(str)[0].replace(/[\(\)]/g, '') : undefined
  return {
    name,
    email,
    website
  }
}