
<?php
include_once __DIR__ . '/../models/post.php';
header('Content-Type: application/json');

if ($_REQUEST['action'] === 'INDEX') {
  echo json_encode("indexPage");
}

 ?>
