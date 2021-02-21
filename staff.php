<?php
  // Staff class with constructor function
  class Staff {
    public $id;
    public $name;
    public $title;
    public $email;
    public $avatar;
    public $team;

    public function __construct($id, $name, $title, $email, $avatar, $team) {
      $this->id = $id;
      $this->name = $name;
      $this->title = $title;
      $this->email = $email;
      $this->avatar = $avatar;
      $this->team = $team;
    }
  }

  // Array of Staff objects
  $staff = array(
    new Staff(1, "Mia Hodgens", "Creative Director", "mia@email.com", "images/mia.jpeg", "Design"),
    new Staff(2, "Sonny Acosta", "Chief Financial Officer", "sonny@email.com", "images/sonny.jpeg", "Finance"),
    new Staff(3, "Rosa Waterman", "Head of Engineering", "rosa@email.com", "images/rosa.jpeg", "Software"),
    new Staff(4, "Raph Clement", "Senior Developer", "raph@email.com", "images/raph.jpeg", "Software"),
    new Staff(5, "Jacob Perez", "Junior Developer", "jacob@email.com", "images/jacob.jpeg", "Software"),
    new Staff(6, "Bonnie Hawkins", "UX Designer", "bonnie@email.com", "images/bonnie.jpeg", "Design"),
    new Staff(7, "Will Skinner", "Graphic Designer", "william@email.com", "images/will.jpeg", "Design"),
    new Staff(8, "Kima Ayton", "Technical Writer", "kima@email.com", "images/kima.jpeg", "Software")
  );

  // Return all staff as JSON object
  echo json_encode($staff);


?>