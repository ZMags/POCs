<?php 
$mysqli = new mysqli("localhost", "magento", "magento", "magento");
$result=$mysqli->query("select * from scrap_colors");
echo '<table>';
echo '<tr><td>Name in Magento</td><td>Image</td></tr>';
if($result->num_rows>0)
{
	while($list=$result->fetch_object())
	{
		
		echo '<tr><td>'.$list->scrap_colors_id.'</td><td><img src="data:image;base64,'.$list->scrap_colors_image.'" /></td></tr>';		 
		file_put_contents('images'.DIRECTORY_SEPARATOR.'colors'.DIRECTORY_SEPARATOR.$list->scrap_colors_id.'.jpg',base64_decode($list->scrap_colors_image),FILE_APPEND);
	}
}
else
{
	echo '<tr><td colspan="2"></td></tr>';
}
echo '</table>';
?>