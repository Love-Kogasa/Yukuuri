module.exports = async ( text, option = 1 ) => {
  var dto = await (await fetch( "https://www.ltool.net/chinese-simplified-and-traditional-characters-pinyin-to-katakana-converter-in-simplified-chinese.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `contents=${text}&option=${ parseInt( option ) || 1}&optionext=zenkaku`
  })).text()
  var value = dto.match( /(\<div class\=(\'|\")finalresult(\'|\")\>)(.*?)(\<\/div\>)/ )[4].split( " " ).join( "" )
  return value.replace( /<span.*?>.*?<\/span>/g, "" )
}