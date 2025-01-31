var express = require( "express" )
var {execSync} = require( "child_process" )
var tojp = require( "./zh2jp" )
var app = express()
var bin = "~/aquestalkpi/AquesTalkPi"
app.use( "/static", express.static( "static" ))
app.get( "/", ( req, res ) => {
  res.location( "/static/" )
  res.status( 302 ).end()
})
app.get( "/yukuuri.wav", async ( req, res ) => {
  var args = (() => {
    var retobj = {}
    for( let args of req.url.split( "?" )[1].split( "&" ) ){
      arg = args.split( "=" )
      retobj[ decodeURIComponent( arg[0] ) ] = arg[1]
    }
    return retobj
  })()
  var audiolist = [ "f1", "f2", ]
  res.header( "content-type", "audio/wav" )
  res.send( execSync( [bin, "\"" + (args["zh"] ? await tojp( args[ "t" ], parseInt( args["zh"] ) ) : args[ "t" ]) + "\"", "-v", audiolist.includes(args["v"])? args["v"] : "f1"].join( " " )) )
})
app.listen( 3000, () => {
  console.log( "http://localhost:3000/yukuuri.wav?t=helloWorld" )
})