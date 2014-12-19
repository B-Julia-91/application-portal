//Server

Meteor.methods({
	invokeAPI: function(keyword) {
	
		//PLAY STORE API
	
		var apiKey = 'x';	//individual API key									
		var appCategory = 'apps';								//for now we only use the category "apps", but there are the following categories for SEARCH API: "apps", "books", "movies" or "music"

		var urlSearch = 'http://api.playstoreapi.com/v1.1/search/' + appCategory + '/' + keyword + '?key=' + apiKey;
		console.log("Es wird gesucht");
		
		/*HTTP.get(urlSearch, {params: {}}, function(error,appDetails){
			if(!error){
				console.log(appDetails.data);
				for(var i=0; i<1; i++){
					console.log(appDetails.data[i].itemID);
					var urlAppInfo = 'http://api.playstoreapi.com/v1.1/apps/' + appDetails.data[i].itemID + '?key=' + apiKey;
					HTTP.get(urlAppInfo, {params: {}}, function(error,appInfo){
						if(!error){
							console.log(appInfo.data);
							console.log(appInfo.data.appName);
							console.log(appInfo.data.developer);
							console.log(appInfo.data.category);
							console.log(appInfo.data.logo);
							console.log(appInfo.data.price);
							console.log(appInfo.data.playStoreUrl);
							console.log(appInfo.data.score);
							
							AppCollection.insert({title: appInfo.data.appName, developer: appInfo.data.developer, rating: appInfo.data.score, category: appInfo.data.category, price: appInfo.data.price, link: appInfo.data.playStoreUrl});
						}	
					});
				}
			}
		});*/
	}
});
