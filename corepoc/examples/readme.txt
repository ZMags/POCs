------------------

POC Framework Setup

==================

1. Create a new directory for the project in the deploy folder.

2. Copy config.sample.js from examples folder and paste into new project deploy folder. Rename to config.js

3. Fill out variable names in config.js such as addtoCart URL, HTML wanted for fancybox pop up, post data strings, etc (see config.sample.js for more details).

4. Put any extra resources in projects deploy folder.


Understanding the folder structure ( Dev Server) :
/poc
	/deploy
		/ClientName
			config.js
			any additional assets ( .jpg, .js, css)

	/corepoc // contains our main js files that get called from clients config.js
	/resources
		poc.js
	/poc-logger
		logger.php
		CLIENTNAME_PSpocLog.txt


Creating a new POC 

Before you start: 
You will need
A copy of config.js
Any assets you need ( js, css, imgs)
Place config.js and assets in /poc/deploy/YOURPROJECT
