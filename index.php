<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sandpit</title>
  <link rel="icon" type="image/png" href="images/favicon.png">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  
  <link href="https://fonts.googleapis.com/css2?family=Cardo&family=Open+Sans&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <section class="staff-section">
    
    <header class="staff-header">
      <div class="container">
        <h3 class="header-el">Who We Are</h3>
        <p class="header-el">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi incidunt praesentium sapiente culpa.</p>
        <ul class="teams">
            <li class="teams-all header-el" data-team="All">&#183; All</li>
            <li class="team-filter header-el" data-team="Software">&#183; Software</li>
            <li class="team-filter header-el" data-team="Design">&#183; Design</li>
            <li class="team-filter header-el" data-team="Finance">&#183; Finance</li>
        </ul>
      </div>
      <div></div>
    </header>

    <div class="staff-profiles">
      
    </div>
  
  </section>

  <footer class="page-footer">
    <p class="footer-el">&copy;SM 2021</p>
    <a class="footer-el" href="http://www.strtmack.com">strtmack.com</a>
    <p class="footer-el">Thanks for visiting!</p>
  </footer>
 
  <img class="scroll" src="images/scroll.png" alt="scroll-wheel">
  <canvas id="canvas3d"></canvas>

  <canvas class="canvas"></canvas>

  <script src="./canvas.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/animejs@3.0.1/lib/anime.min.js"></script>
  <script src="./app.js"></script>
  <script>
                    // Global namespace (backwards-compatibility)
                    var SPE = {};
                </script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
                <script src="https://cdn.spline.design/lib/anime.min.js"></script>
                <script src="https://cdn.spline.design/lib/spline.runtime.min.js"></script>
                <script src="three/assets.js"></script>
                <script src="three/scene.js"></script>
                <script src="three/main.js"></script>
</body>
</html>