//Server

Meteor.methods({
	invokeAPI: function(keyword) {
	
		//PLAY STORE API
	
		var apiKey = 'x';	//individual API key
		var app = "test"//itemID;									//for APP INFO API: package ID of the requested application, which is the same like the itemID of the results of the SEARCH API
		var appCategory = 'apps';								//for now we only use the category "apps", but there are the following categories for SEARCH API: "apps", "books", "movies" or "music"
		//var keyword = searchfield;						//for SEARCH API

		var urlAppInfo = 'http://api.playstoreapi.com/v1.1/apps/' + app + '?key=' + apiKey;
		var urlSearch = 'http://api.playstoreapi.com/v1.1/search/' + appCategory + '/' + keyword + '?key=' + apiKey;
		/*
		HTTP.get(urlSearch, {params: {}}, function(error,appDetails){
			if(!error){
				console.log(appDetails.data);
				for(var i=0; i<appDetails.data.length; i++){
					console.log(appDetails.data[i].itemID);
					var urlAppInfo = 'http://api.playstoreapi.com/v1.1/apps/' + appDetails.data[i].itemID + '?key=' + apiKey;
					HTTP.get(urlAppInfo, {params: {}}, function(error,appInfo){
						if(!error){
							console.log(appInfo.data[i].appName, appInfo.data[i].developer, appInfo.data[i].category, appInfo.data[i].logo, appInfo.data[i].price, appInfo.data[i].playStoreUrl, appInfo.data[i].video, appInfo.data[i].score);
						}
					});
				}
			}
		});
		*/
	}
});
