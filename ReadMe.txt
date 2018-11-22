####################### NGINX CONFIG ########################
	server {
		listen 89 default_server;
	
		root D:/ThinkHR/thinkhrwidget/dist;
        index index.html;
		server_name www.thinkHR.widget;
		
		location /dist {
			alias D:/ThinkHR/thinkhrwidget/dist;
			index index.html;	
		}
	}