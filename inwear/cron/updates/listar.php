<?php
$mysqli = new mysqli("localhost", "alex", "Zmagspass", "alex");

echo 'CATEGORIAS<br>';
echo '<table>';
$result1=$mysqli->query("select * from scrap_categories");
while($row1=$result1->fetch_object())
{	
	echo '<tr><td>'.$row1->scrap_categories_name.'</td>
	<td>'.$row1->scrap_categories_sku.'</td>
	<td>'.$row1->scrap_categories_id.'</td></tr>';	
}
echo '<table>';

echo 'SUBCATEGORIAS<br>';
$result2=$mysqli->query("select * from scrap_subcategories");
echo '<table>';

while($row2=$result2->fetch_object())
{
	echo '<tr><td>'.$row2->scrap_subcategories_name.'</td>
	<td>'.$row2->scrap_subcategories_sku.'</td>
	<td>'.$row2->scrap_subcategories_id.'</td></tr>';	
}
echo '</table>';

echo 'PRODUCTOS<br>';
$result3=$mysqli->query("select * from scrap_products ");
$i=0;
echo '<table border="1">';
while($row3=$result3->fetch_object())
{	
	$i++;
	echo '<tr><td>'.$row3->scrap_products_id.'</td><td>'.$row3->scrap_products_name.'</td>
	<td>'.$row3->scrap_products_sku.'</td>
	<td>'.$row3->scrap_products_size.'</td>
	<td>'.$row3->scrap_products_color.'</td>
	<td>'.$row3->scrap_subcategories_id.'</td>
	</tr>';
}
echo '</table>';