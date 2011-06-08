<?php
set_time_limit(5400);
include('../library/simple_html_dom.php');

$html = file_get_html('http://www.inwear.com/');

foreach($html->find('#menu li a') as $a)
{	
	$link=$a->href;
	$parametros=explode('&',end(explode('?',$link)));
	$category=explode('=',$parametros[0]);
	$section=explode('=',$parametros[1]);	
	if($category[0]!='f_category')
	{			
		$children[]=array('child_section_url'=>$category[0],'child_section_name'=>$category[1],'child_section_id'=>$section[1],'parent_section_id'=>$parent_id);				
	}
	else
	{		
		$parent[]=array('parent_section_name'=>urldecode($category[1]),'parent_section_id'=>$section[1]);
		$parent_id=$section[1];
	}
}
$html->clear();
unset($html);

$color=array();
foreach($children as $ch)
{
	$json = json_decode(file_get_contents('http://www.inwear.com/v1/search.json?'.$ch['child_section_url'].'='.$ch['child_section_name'].'&page_size=180&secid='.$ch['child_section_id']));
	$json_productos=$json->response->docs;	
	foreach($json_productos as $prod)
	{								
		$tmp_name='COLOR';
		foreach($prod->$tmp_name as $c)
		{
			if(!isset($color[$c]))
			{
				$tmp_image='';
				foreach($prod->image_main_swatch as $image)
				{
					if(substr_count($image,$c)>0)
					{
						$tmp_image=$image;
						break;
					}	
				}
				$color[$c]=array('image'=>base64_encode(file_get_contents('http://static.inwear.com/static/img/catalog/INWEAR/swatch/'.$tmp_image)));
			}	
		}
	}
}
unset($json);
unset($json_productos);
$mysqli = new mysqli("localhost", "magento", "magento", "magento");

$mysqli->query("CREATE TABLE IF NOT EXISTS `scrap_colors` (
  `scrap_colors_id` varchar(50) NOT NULL,
  `scrap_colors_image` text NOT NULL,
  PRIMARY KEY (`scrap_colors_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8");


foreach($color as $k=>$v)
{
	$tmp=$mysqli->query("select * from scrap_colors where scrap_colors_id='".$k."'");
	if($tmp->num_rows==0)
	{
		$mysqli->query("insert into scrap_colors(scrap_colors_id,scrap_colors_image) values('".$k."','".$v['image']."')");
	}	
}

$result=$mysqli->query("select * from scrap_colors");
echo '<table>';
while($row=$result->fetch_object())
{
	echo '<tr><td>'.$row->scrap_colors_id.'</td><td><img src="data:image;base64,'.$row->scrap_colors_image.'" /></td></tr>';
}
echo '</table>';
















