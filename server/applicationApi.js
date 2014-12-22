//Server

Meteor.methods({
	invokeAPI: function(keyword) {
	
		//PLAY STORE API
	
		var apiKey = 'af6d0df9df2904e8da45b2d2ea2c0f3b';		//individual API key									
		var appCategory = 'apps';								//for now we only use the category "apps", but there are the following categories for SEARCH API: "apps", "books", "movies" or "music"

		var urlSearch = 'http://api.playstoreapi.com/v1.1/search/' + appCategory + '/' + keyword + '?key=' + apiKey;
		console.log("Es wird gesucht");
		
		HTTP.get(urlSearch, function(error,appDetails){
			if(!error){
				for(var i=0; i<1; i++){
					console.log(appDetails.data[i].itemID);
					var urlAppInfo = 'http://api.playstoreapi.com/v1.1/apps/' + appDetails.data[i].itemID + '?key=' + apiKey;
					HTTP.get(urlAppInfo, function(error,appInfo){
						if(!error){
							console.log(appInfo.data.appName);
							console.log(appInfo.data.developer);
							console.log(appInfo.data.category);
							console.log(appInfo.data.logo);
							console.log(appInfo.data.price);
							console.log(appInfo.data.playStoreUrl);
							console.log(appInfo.data.score);
							
							AppCollection.insert({appIcon: appInfo.data.logo,title: appInfo.data.appName, developer: appInfo.data.developer, rating: appInfo.data.score, category: appInfo.data.category, price: appInfo.data.price, link: appInfo.data.playStoreUrl, video: appInfo.data.videos});
						}	
					});
				}
			}
			else{return "Either your key is invalid or the limit of calls is reached"}
		});
	}
});
