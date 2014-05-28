angular-bp-sbadmin2
===================
How to configure/setup your own local development environment
1.) To install as http://www.<your own website name>.com
2.) Install Node.js and then:
$ git clone <your own Git Hub Repository> <Directory>
$ cd <Directory>
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt build
3.) Install Apache2 Server
4.) Create a virtual host at the Apache installation:
 - <VirtualHost *:80>
 -     ServerAdmin webmaster@localhost
 -     ServerName http://www.<your own website name>.com
 - DocumentRoot /path/to/<Your Directory>/build
 - <Directory /path/to/<Your Directory>/build>
 -     Options Indexes FollowSymLinks MultiViews
 -     AllowOverride none 
 -     Order allow,deny
 -     allow from all
 -         RewriteEngine on
 -         RewriteCond %{REQUEST_FILENAME} !-f
 -         RewriteCond %{REQUEST_FILENAME} !-d
 -         RewriteCond %{REQUEST_URI} !index
 -         RewriteRule (.*) index.html [L]
 - </Directory>
 - 
 - 
 -     ErrorLog ${APACHE_LOG_DIR}/www.<your own website name>.com.error.log
 - 
 -     # Possible values include: debug, info, notice, warn, error, crit,
 -     # alert, emerg.
 -     LogLevel warn
 - 
 -    CustomLog ${APACHE_LOG_DIR}/www.<your own website name>.com.access.log combined
 - </VirtualHost>
5.) Enable the Re-write Function of your own Apache 2 Server.
 $ sudo a2enmod rewrite
6.) Enable/Authenticate your http://www.<your own website name>.com
7.) Restart Apache 2 Server.