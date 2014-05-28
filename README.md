angular-bp-sbadmin2
===================
Combines the goodness of ng-boilerplate with sbadmin v2 template

* [ng-boilerplate](https://github.com/ngbp/ngbp) - ng-boilerplate is An opinionated kickstarter for AngularJS projects.
* [Startup Bootstrap (sbadmin) v2 template](http://startbootstrap.com/sb-admin-v2) - sbadmin v2 is a clean, Bootstrap-based interface for templating.

How to configure/setup your own local development environment
* 1.) To install as http://www.mywebsite.com
* 2.) Install Node.js and then:
 - $ git clone git@github.com:galorelabs/angular-bp-sbadmin2.git
 - $ cd angular-bp-sbadmin2
 - $ sudo npm -g install grunt-cli karma bower
 - $ npm install
 - $ bower install
 - $ grunt build
* 3.) Install Apache2 Server
* 4.) Create a virtual host at the Apache installation:
```html
  <VirtualHost *:80>
      ServerAdmin webmaster@localhost
      ServerName http://www.mywebsite.com      
  DocumentRoot /path/to/angular-bp-sbadmin2/build
  <Directory /path/to/angular-bp-sbadmin2/build>
      Options Indexes FollowSymLinks MultiViews
      AllowOverride none
      Order allow,deny
           allow from all
           RewriteEngine on
           RewriteCond %{REQUEST_FILENAME} !-f
           RewriteCond %{REQUEST_FILENAME} !-d
           RewriteCond %{REQUEST_URI} !index
          RewriteRule (.*) index.html [L]          
  </Directory>
      ErrorLog ${APACHE_LOG_DIR}/www.mywebsite.com.error.log
      # Possible values include: debug, info, notice, warn, error, crit,
      # alert, emerg.
      LogLevel warn      
     CustomLog ${APACHE_LOG_DIR}/www.mywebsite.com.access.log combined     
 </VirtualHost>
 
* 5.) Enable the Re-write Function of your own Apache 2 Server.
 - $ sudo a2enmod rewrite
* 6.) Enable/Authenticate your http://www.mywebsite.com
* 7.) Restart Apache 2 Server.