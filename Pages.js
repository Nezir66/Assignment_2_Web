const welcomePage = `<html>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<head><title>Assignment 2</title></head>
<body>
<div class="w3-card-4">
<div class="w3-panel w3-yellow w3-topbar w3-bottombar w3-border-amber">
<h1 class="w3-text-black" style="text-shadow:1px 1px 0 #444">Welcome to Assignment 2</h1>
</div>
<div class="w3-panel w3-border-top w3-border-bottom">
<form action="/Assignment/enterPlayer1.html" method="POST">
<h2 class="w3-text-black" style="text-shadow:1px 1px 0 #444">Edit Player 1</h2>
<div><button class="w3-button w3-yellow w3-border" type="submit">Add Player 1</button></div>
</form>
<form action="/Assignment/deleteP1" method="POST">
<div><button class="w3-button w3-black w3-border" type="submit">delete Player 1</button></div>
</form>
<form action="/Assignment/enterPlayer2.html" method="POST">
<h2 class="w3-text-black" style="text-shadow:1px 1px 0 #444">Edit Player 2</h2>
<div><button class="w3-button w3-yellow w3-border" type="submit">Add Player 2</button></div>
</form>
<form action="/Assignment/deleteP2" method="POST">
<div><button class="w3-button w3-black w3-border" type="submit">delete Player 2</button></div>
</form>
<form action="/Assignment/enterPlayer3.html" method="POST">
<h2 class="w3-text-black" style="text-shadow:1px 1px 0 #444">Edit Player 3</h2>
<div><button class="w3-button w3-yellow w3-border" type="submit">Add Player 3</button></div>
</form>
<form action="/Assignment/deleteP3" method="POST">
<div><button class="w3-button w3-black w3-border" type="submit">delete Player 3</button></div>
</form>
</div>
</div>
<div class="w3-card-4">
<form action="/Assignment/allPlayers.html" method="POST">
<div class="w3-panel w3-yellow w3-topbar w3-bottombar w3-border-amber">
<h2 class="w3-text-black" style="text-shadow:1px 1px 0 #444">See all the players</h2>
</div>
<div><button class="w3-button w3-black w3-border" type="submit">all Players</button></div>
</form>
</div>
</body>
</html>`;
const defaultPage = `<html>
<head><title>Assignment 2</title></head>
<body>
<h1>This Page is not available!</h1>
<h2>Take me <a href="/Assignment.html">home</a>.</h2>
</body>
</html>`;
const enterPlayer1 = `<html>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<head><title>Assignment 2</title></head>
<body>
<div class="w3-panel">
<form action="/Assignment/enterPlayers/Player1" method="POST">
<div class="w3-card-4">
  <div class="w3-container w3-yellow">
    <h2>Player 1</h2>
  </div>
<div class="w3-container">
  <form class="w3-container">
    <p>      
    <label class="w3-text-black"><b>Name</b></label>
    <input class="w3-input w3-border w3-light-grey" type="text" name="enterPlayer1" autofocus></p>   
    <p>
    <button class="w3-btn w3-yellow" class="w3-text-black">Add</button></p>
  </form>
</div>
</form>
</div>
</body>
</html>`;
const enterPlayer2 = `<html>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<head><title>Assignment 2</title></head>
<body>
<div class="w3-panel">
<form action="/Assignment/enterPlayers/Player2" method="POST">
<div class="w3-card-4">
  <div class="w3-container w3-yellow">
    <h2>Player 2</h2>
  </div>
  <div class="w3-container">
  <form class="w3-container">
    <p>      
    <label class="w3-text-black"><b>Name</b></label>
    <input class="w3-input w3-border w3-light-grey" type="text" name="enterPlayer2" autofocus></p>   
    <p>
    <button class="w3-btn w3-yellow" class="w3-text-black">Add</button></p>
  </form>
  </div>
</div>
</form>
</div>
</body>
</html>`;
const enterPlayer3 = `<html>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<head><title>Assignment 2</title></head>
<body>
<div class="w3-panel">
<form action="/Assignment/enterPlayers/Player3" method="POST">
<div class="w3-card-4">
  <div class="w3-container w3-yellow">
    <h2>Player 3</h2>
  </div>
  <div class="w3-container">
  <form class="w3-container">
    <p>      
    <label class="w3-text-black"><b>Name</b></label>
    <input class="w3-input w3-border w3-light-grey" type="text" name="enterPlayer3" autofocus></p>   
    <p>
    <button class="w3-btn w3-yellow" class="w3-text-black">Add</button></p>
  </form>
  </div>
</div>
</form>
</div>
</body>
</html>`;
module.exports = { welcomePage, defaultPage , enterPlayer1 , enterPlayer2 , enterPlayer3 };