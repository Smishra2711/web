<?php
$db = mysqli_connect('sql222.main-hosting.eu', 'u408327831_admin', '12345@54321', 'u408327831_db1');

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Dashboard | W Mishra</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>

<body>

<div class="container">
  <h2>Orders</h2>
  <p></p>            
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Order Id</th>
        <th>Date</th>
        <th>Client</th>
		<th>Product</th>
        <th>Base Price</th>
        <th>Qty</th>
		<th>total</th>
      </tr>
    </thead>
	<?php 
	$query="SELECT * FROM orders";
	$res = mysqli_query($db,$query);
	while($row = mysqli_fetch_array($res))
	{?>
    <tbody>
      <tr>
        <td><?php echo $row['id'];?></td>
        <td><?php echo $row['date'];?></td>
        <td><?php $id=$row['id'];
			$c_query="SELECT name from client where id='$id'";
			$client=mysqli_query($db,$c_query);
			$c_row=mysqli_fetch_array($client);
			echo $c_row['name'];?>
		</td>
		<td><?php echo $row['id'];
			$p_query="SELECT p_name from products where id='$id'";
			$product=mysqli_query($db,$p_query);
			$p_row=mysqli_fetch_array($product);
			echo $p_row['p_name'];?>
		</td>
        <td><?php echo $row['qty'];?></td>
        <td><?php echo $row['id'];?></td>
      </tr>
	<?php }?>
    </tbody>
  </table>
</div>

</body>
</html>
