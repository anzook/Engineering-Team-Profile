
//takes in array of team members and builds an html formatted output
//output is styled using bootstrap and uses CDN links to stand lone without repo stylesheets

function pageGen(array) {
    let cards = '';
    //calls a common function on each card to build their output and concatonates it to the html string
    array.forEach(element => {
    cards += element.buildCard()   
    });
    let date = getDate();

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Eng Team Roster Generator</title>
    
        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <!-- Font awesome styles -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    </head>
    
    <body>
        
        <div class="container">
            <!-- Header -->
            <nav class="navbar navbar-light bg-primary ">
            <span class="text-white mb-0 h3"><i class="fas fa-users"></i>  Engineering Team Roster</span>
          </nav>
                <div class="row">
                  <div class="col align-self-center text-center">
                  <hr> 
                    Team created: ${date}
                 <hr> 
                  </div>
                </div>
                      <div class="row">
                        ${cards}
                      </div>
    
            <!-- Footer  -->
        <footer class="footer">
            <div class="text-center">
            <hr> 
                <span>
                    Engineering Team Profile, <i class="fas fa-users"></i> ANZ 2020
                </span>
            </div>
        </footer>
        </div>
    
        
    
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="assets/js/script.js"></script>
    </body>
    
    </html>
    `;    
}


function getDate() {
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //0 indexed
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
return (mm + '/' + dd + '/' + yyyy);
}


module.exports = {
    pageGen : pageGen
};