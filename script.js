function loadTextFile ( sourceURL ) {
    return new Promise( ( resolve, reject ) => {
            var transport = new XMLHttpRequest ()
            transport.onreadystatechange = function () {
              var mess = transport.responseText
              if ( transport.readyState === 4 ) {
                if ( transport.status === 200 ) resolve ( mess )
                else reject ( mess )
              }
            }
            transport.open ( "GET", sourceURL )
            transport.send ()
        })
}

function getFile ( event, fileURL ) {

    loadTextFile ( fileURL ).then ( message => {
              counter = 0
              document.getElementById ( "demo" ).innerHTML = message
            }).catch ( event => {
              counter = 0
              document.getElementById ( "demo" ).innerHTML =
                                                 'ERROR: ' + message
          })
}
