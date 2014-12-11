//Server

Meteor.methods({
	invokeAPI: function(keyword) {
	
		//PLAY STORE API
	
		var apiKey = 'af6d0df9df2904e8da45b2d2ea2c0f3b';	//individual API key
		var app = "test"//itemID;									//for APP INFO API: package ID of the requested application, which is the same like the itemID of the results of the SEARCH API
		var category = 'apps';								//for now we only use the category "apps", but there are the following categories for SEARCH API: "apps", "books", "movies" or "music"
		//var keyword = searchfield;						//for SEARCH API

		var urlAppInfo = 'http://api.playstoreapi.com/v1.1/apps/' + app + '?key=' + apiKey;
		var urlSearch = 'http://api.playstoreapi.com/v1.1/search/' + category + '/' + keyword + '?key=' + apiKey;
	
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
		
		/*$.getJSON(urlSearch).done(function(appDetails) {
			for(var i=0; i<appDetails.length; i++){
					alert(appDetails[i].itemID);
			}
			
			
			//$('p:last').html(JSON.stringify(appDetails));
		});
		*/

		//itemID, welches in den appDetails steht, ist der Name des packages, welcher dann für die Suche nach AppInfo durch urlAppInfo gebraucht wird. 
		//Es muss (itemID = packageID) geprüft werden, demnach wird dann nach dieser ID gesucht um die benötigten Informationen zu erhalten.

	}
});
