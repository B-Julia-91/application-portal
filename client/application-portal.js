//Client

//sets the global variables to false at the beginning
Meteor.startup(function() {					
	
	Session.set("motionSensors", false);
	Session.set("touchscreen", false);
	Session.set("microphone", false);
	Session.set("proximitySensor", false);
	Session.set("tap", false);
	Session.set("drag", false);
	Session.set("flick", false);
	Session.set("tilt", false);
	Session.set("shake", false);
	Session.set("pan", false);
	Session.set("wave", false);
	Session.set("arms", false);
	Session.set("oneHand", false);
	Session.set("twoHands", false);
	Session.set("finger", false);
	Session.set("vision", false);
	Session.set("hearing", false);
	Session.set("speaking", false);
	Session.set("standing", false);
	Session.set("sitting", false);
	Session.set("lying", false);
	Session.set("horizontal", false);
	Session.set("vertical", false);
	Session.set("editPressed", false);
});

//Search field
//Helper 
Template.searchField.helpers({

});
//Events
Template.searchField.events({
	"click #sb": function(){
		var keyword = $("#sf").val();
		console.log("Entered keyword: ", keyword);
		Meteor.call('invokeAPI', keyword);
		return [Session.set("sbPressed", true), Session.set("enteredKeyword", keyword)];
    }
});

//Add new app
//Helper 
Template.appHeader.helpers({
    
    
});
//Events
Template.appHeader.events({
    "click #appAdd": function(){
		AppCollection.insert({title: "Name your app", developer: "Choose a developer", rating: 1, category: "Choose a category", video: "Link to a video", price: "", motionSensor: false, touchscreen: false, microphone: false, proximitySensor: false, tap: false, drag: false, flick: false, tilt: false, shake: false, pan: false, wave: false, arms: false, oneHand: false, twoHands: false, finger: false, vision: false, hearing: false, speaking: false, standing: false, sitting: false, lying: false, horizontal: false, vertical: false});
	}
    
});

//Application container
//Helper 
Template.appList.helpers({
    app: function(){
		filter = {	};
		if(Session.get("motionSensors")){
			filter.motionSensors= true
		}
		if(Session.get("touchscreen")){
			filter.touchscreen= true
		}
		if(Session.get("microphone")){
			filter.microphone= true
		}
		if(Session.get("proximitySensor")){
			filter.proximitySensor= true
		}
		if(Session.get("tap")){
			filter.tap= true
		}
		if(Session.get("drag")){
			filter.drag= true
		}
		if(Session.get("flick")){
			filter.flick= true
		}
		if(Session.get("tilt")){
			filter.tilt= true
		}
		if(Session.get("shake")){
			filter.shake= true
		}
		if(Session.get("pan")){
			filter.pan= true
		}
		if(Session.get("wave")){
			filter.wave= true
		}
		if(Session.get("arms")){
			filter.arms= true
		}
		if(Session.get("oneHand")){
			filter.oneHand= true
		}
		if(Session.get("twoHands")){
			filter.twoHands= true
		}
		if(Session.get("finger")){
			filter.finger= true
		}
		if(Session.get("vision")){
			filter.vision= true
		}
		if(Session.get("hearing")){
			filter.hearing= true
		}
		if(Session.get("speaking")){
			filter.speaking= true
		}
		if(Session.get("standing")){
			filter.standing= true
		}
		if(Session.get("sitting")){
			filter.sitting= true
		}
		if(Session.get("lying")){
			filter.lying= true
		}
		if(Session.get("horizontal")){
			filter.horizontal= true
		}
		if(Session.get("vertical")){
			filter.vertical= true
		}
		if(Session.get("sbPressed")){
			var keyword = Session.get("enteredKeyword")
			matchingTitle = new RegExp(keyword,"i");
			filter.title = {$regex: matchingTitle}
			console.log("Entries of the filter", filter)
		}
		return AppCollection.find(filter)
	}
});
//Events
Template.appList.events({
	"click .apps": function(){
		if(Session.get("editPressed")){
			console.log("App clicked in edit-mode");
		}
		else if(Session.get("savePressed")){
			console.log("Ok-button clicked");
		}
		else{
			console.log("App clicked");
			var appId = this._id;
			return [Session.set("clickedApp", appId), Session.set("appClicked")];
		}
	},
    "click #appEdit": function(){
		var appId = this._id;
		console.log("Edit pressed")
		return [Session.set("selectedApp", appId), Session.set("editPressed", true)];
    },
    "click #appSave": function(){
		return [Session.set("selectedApp", false), Session.set("editPressed", false), Session.set("savePressed", true)];
	}
});

//App details
//Helper 
Template.appDetails.helpers({
	
    editID: function(){
		var appId = this._id;
		var selectedApp = Session.get("selectedApp");
		if(appId == selectedApp){
			console.log("Set editID to true")
			return true
		}
		else return false
	},
	appClicked: function(){
		var appId = this._id;
		var clickedApp = Session.get("clickedApp");
		if(appId == clickedApp){
			return console.log("Clicked here")
		}
	},
	motionClicked: function(){
		return Session.get("motionClicked")
	},
	touchClicked: function(){
		return Session.get("touchClicked")
	},
	micClicked: function(){
		return Session.get("micClicked")
	},
	proxClicked: function(){
		return Session.get("proxClicked")
	},
	tapClicked: function(){
		return Session.get("tapClicked")
	},
	dragClicked: function(){
		return Session.get("dragClicked")
	},
	flickClicked: function(){
		return Session.get("flickClicked")
	},
	tiltClicked: function(){
		return Session.get("tiltClicked")
	},
	shakeClicked: function(){
		return Session.get("shakeClicked")
	},
	panClicked: function(){
		return Session.get("panClicked")
	},
	waveClicked: function(){
		return Session.get("waveClicked")
	},
	armsClicked: function(){
		return Session.get("armsClicked")
	},
	handClicked: function(){
		return Session.get("handClicked")
	},
	handsClicked: function(){
		return Session.get("handsClicked")
	},
	fingerClicked: function(){
		return Session.get("fingerClicked")
	},
	visionClicked: function(){
		return Session.get("visionClicked")
	},
	hearingClicked: function(){
		return Session.get("hearingClicked")
	},
	speakingClicked: function(){
		return Session.get("speakingClicked")
	},
	standingClicked: function(){
		return Session.get("standingClicked")
	},
	sittingClicked: function(){
		return Session.get("sittingClicked")
	},
	lyingClicked: function(){
		return Session.get("lyingClicked")
	},
	horClicked: function(){
		return Session.get("horClicked")
	},
	vertClicked: function(){
		return Session.get("vertClicked")
	}
});
//Events
Template.appDetails.events({
	
    "keyup #editName": function (){
		var editedName = $("#editName").val();
		var appId = this._id;
		console.log("Modified name: ", editedName, " has the appId ", appId);
		AppCollection.update({_id: this._id}, {$set: {title: editedName}});
	},
	"keyup #editDeveloper": function (){
		var editedDeveloper = $("#editDeveloper").val();
		console.log("Modified developer: ", editedDeveloper);
		AppCollection.update({_id: this._id}, {$set: {developer: editedDeveloper}});
	},
	"keyup #editRating": function (){
		var editedRating = $("#editRating").val();
		console.log("Modified rating: ", editedRating);
		AppCollection.update({_id: this._id}, {$set: {rating: editedRating}});
	},
	"keyup #editCategory": function (){
		var editedCategory = $("#editCategory").val();
		console.log("Modified category: ", editedCategory);
		AppCollection.update({_id: this._id}, {$set: {category: editedCategory}});
	},
	"keyup #editVideo": function (){
		var editedVideo = $("#editVideo").val();
		console.log("Modified URL to the video: ", editedVideo);
		AppCollection.update({_id: this._id}, {$set: {video: editedVideo}});
	},
	"keyup #editPrice": function (){
		var editedPrice = $("#editPrice").val();
		console.log("Modified price: ", editedPrice);
		AppCollection.update({_id: this._id}, {$set: {price: editedPrice}});
	},
	"click #motionIcon": function (){
		if(Session.get("motionClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"motionSensors": false}});
			return Session.set("motionClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"motionSensors": true}});
			return Session.set("motionClicked", true)
		}
	},
	"click #touchIcon": function (){
		if(Session.get("touchClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"touchscreen": false}});
			return Session.set("touchClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"touchscreen": true}});
			return Session.set("touchClicked", true)
		}
	},
	"click #micIcon": function (){
		if(Session.get("micClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"microphone": false}});
			return Session.set("micClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"microphone": true}});
			return Session.set("micClicked", true)
		}
	},
	"click #proxIcon": function (){
		if(Session.get("proxClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"proximitySensor": false}});
			return Session.set("proxClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"proximitySensor": true}});
			return Session.set("proxClicked", true)
		}
	},
	"click #tapIcon": function (){
		if(Session.get("tapClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"tap": false}});
			return Session.set("tapClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"tap": true}});
			return Session.set("tapClicked", true)
		}
	},
	"click #dragIcon": function (){
		if(Session.get("dragClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"drag": false}});
			return Session.set("dragClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"drag": true}});
			return Session.set("dragClicked", true)
		}
	},
	"click #flickIcon": function (){
		if(Session.get("flickClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"flick": false}});
			return Session.set("flickClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"flick": true}});
			return Session.set("flickClicked", true)
		}
	},
	"click #tiltIcon": function (){
		if(Session.get("tiltClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"tilt": false}});
			return Session.set("tiltClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"tilt": true}});
			return Session.set("tiltClicked", true)
		}
	},
	"click #shakeIcon": function (){
		if(Session.get("shakeClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"shake": false}});
			return Session.set("shakeClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"shake": true}});
			return Session.set("shakeClicked", true)
		}
	},
	"click #panIcon": function (){
		if(Session.get("panClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"pan": false}});
			return Session.set("panClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"pan": true}});
			return Session.set("panClicked", true)
		}
	},
	"click #waveIcon": function (){
		if(Session.get("waveClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"wave": false}});
			return Session.set("waveClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"wave": true}});
			return Session.set("waveClicked", true)
		}
	},
	"click #armsIcon": function (){
		if(Session.get("armsClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"arms": false}});
			return Session.set("armsClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"arms": true}});
			return Session.set("armsClicked", true)
		}
	},
	"click #handIcon": function (){
		if(Session.get("handClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"oneHand": false}});
			return Session.set("handClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"oneHand": true}});
			return Session.set("handClicked", true)
		}
	},
	"click #handsIcon": function (){
		if(Session.get("handsClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"twoHands": false}});
			return Session.set("handsClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"twoHands": true}});
			return Session.set("handsClicked", true)
		}
	},
	"click #fingerIcon": function (){
		if(Session.get("fingerClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"finger": false}});
			return Session.set("fingerClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"finger": true}});
			return Session.set("fingerClicked", true)
		}
	},
	"click #visionIcon": function (){
		if(Session.get("visionClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"vision": false}});
			return Session.set("visionClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"vision": true}});
			return Session.set("visionClicked", true)
		}
	},
	"click #hearingIcon": function (){
		if(Session.get("hearingClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"hearing": false}});
			return Session.set("hearingClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"hearing": true}});
			return Session.set("hearingClicked", true)
		}
	},
	"click #speakingIcon": function (){
		if(Session.get("speakingClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"speaking": false}});
			return Session.set("speakingClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"speaking": true}});
			return Session.set("speakingClicked", true)
		}
	},
	"click #standingIcon": function (){
		if(Session.get("standingClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"standing": false}});
			return Session.set("standingClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"standing": true}});
			return Session.set("standingClicked", true)
		}
	},
	"click #sittingIcon": function (){
		if(Session.get("sittingClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"sitting": false}});
			return Session.set("sittingClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"sitting": true}});
			return Session.set("sittingClicked", true)
		}
	},
	"click #lyingIcon": function (){
		if(Session.get("lyingClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"lying": false}});
			return Session.set("lyingClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"lying": true}});
			return Session.set("lyingClicked", true)
		}
	},
	"click #horIcon": function (){
		if(Session.get("horClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"hor": false}});
			return Session.set("horClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"hor": true}});
			return Session.set("horClicked", true)
		}
	},
	"click #vertIcon": function (){
		if(Session.get("vertClicked")){
			console.log("false")
			AppCollection.update({_id: this._id}, {$set: {"vert": false}});
			return Session.set("vertClicked", false)
		}
		else{
			console.log("true")
			AppCollection.update({_id: this._id}, {$set: {"vert": true}});
			return Session.set("vertClicked", true)
		}
	},
	"keyup #editLink": function (){
		var editedLink = $("#editLink").val();
		console.log(editedLink);
		AppCollection.update({_id: this._id}, {$set: {link: editedLink}});
	}
});

//Sorting
//Helper 
Template.sorting.helpers({
    
    
});
//Events
Template.sorting.events({
    
    
});


//Market-Store-filtering
//Helper 
Template.storeFiltering.helpers({
    
    
});
//Events
Template.storeFiltering.events({
    
    
});


//Icon-Filtering
//Helper
Template.iconFiltering.helpers({
	motionSensors: function(){
		return Session.get("motionSensors")
	},
	touchscreen: function(){
		return Session.get("touchscreen")
	},
	microphone: function(){
		return Session.get("microphone")
	},
	proximitySensor: function(){
		return Session.get("proximitySensor")
	},
	tap: function(){
		return Session.get("tap")
	},
	drag: function(){
		return Session.get("drag")
	},
	flick: function(){
		return Session.get("flick")
	},
	tilt: function(){
		return Session.get("tilt")
	},
	shake: function(){
		return Session.get("shake")
	},
	pan: function(){
		return Session.get("pan")
	},
	wave: function(){
		return Session.get("wave")
	},
	arms: function(){
		return Session.get("arms")
	},
	oneHand: function(){
		return Session.get("oneHand")
	},
	twoHands: function(){
		return Session.get("twoHands")
	},
	finger: function(){
		return Session.get("finger")
	},
	vision: function(){
		return Session.get("vision")
	},
	hearing: function(){
		return Session.get("hearing")
	},
	speaking: function(){
		return Session.get("speaking")
	},
	standing: function(){
		return Session.get("standing")
	},
	sitting: function(){
		return Session.get("sitting")
	},
	lying: function(){
		return Session.get("lying")
	},
	horizontal: function(){
		return Session.get("horizontal")
	},
	vertical: function(){
		return Session.get("vertical")
	}
	  
});
//Events
Template.iconFiltering.events({
	"click #motion": function(){
		if(Session.get("motionSensors")){
			return Session.set("motionSensors", false)
		}
		else{
			return Session.set("motionSensors", true)
		}
	},
	"click #touch": function(){
		if(Session.get("touchscreen")){
			return Session.set("touchscreen", false)
		}
		else{
			return Session.set("touchscreen", true)
		}
	},
	"click #mic": function(){
		if(Session.get("microphone")){
			return Session.set("microphone", false)
		}
		else{
			return Session.set("microphone", true)
		}
	},
	"click #prox": function(){
		if(Session.get("proximitySensor")){
			return Session.set("proximitySensor", false)
		}
		else{
			return Session.set("proximitySensor", true)
		}
	},
	"click #tap": function(){
		if(Session.get("tap")){
			return Session.set("tap", false)
		}
		else{
			return Session.set("tap", true)
		}
	},
	"click #drag": function(){
		if(Session.get("drag")){
			return Session.set("drag", false)
		}
		else{
			return Session.set("drag", true)
		}
	},
	"click #flick": function(){
		if(Session.get("flick")){
			return Session.set("flick", false)
		}
		else{
			return Session.set("flick", true)
		}
	},
	"click #tilt": function(){
		if(Session.get("tilt")){
			return Session.set("tilt", false)
		}
		else{
			return Session.set("tilt", true)
		}
	},
	"click #shake": function(){
		if(Session.get("shake")){
			return Session.set("shake", false)
		}
		else{
			return Session.set("shake", true)
		}
	},
	"click #pan": function(){
		if(Session.get("pan")){
			return Session.set("pan", false)
		}
		else{
			return Session.set("pan", true)
		}
	},
	"click #wave": function(){
		if(Session.get("wave")){
			return Session.set("wave", false)
		}
		else{
			return Session.set("wave", true)
		}
	},
	"click #arms": function(){
		if(Session.get("arms")){
			return Session.set("arms", false)
		}
		else{
			return Session.set("arms", true)
		}
	},
	"click #hand": function(){
		if(Session.get("oneHand")){
			return Session.set("oneHand", false)
		}
		else{
			return Session.set("oneHand", true)
		}
	},
	"click #hands": function(){
		if(Session.get("twoHands")){
			return Session.set("twoHands", false)
		}
		else{
			return Session.set("twoHands", true)
		}
	},
	"click #finger": function(){
		if(Session.get("finger")){
			return Session.set("finger", false)
		}
		else{
			return Session.set("finger", true)
		}
	},
	"click #vision": function(){
		if(Session.get("vision")){
			return Session.set("vision", false)
		}
		else{
			return Session.set("vision", true)
		}
	},
	"click #hearing": function(){
		if(Session.get("hearing")){
			return Session.set("hearing", false)
		}
		else{
			return Session.set("hearing", true)
		}
	},
	"click #speaking": function(){
		if(Session.get("speaking")){
			return Session.set("speaking", false)
		}
		else{
			return Session.set("speaking", true)
		}
	},
	"click #standing": function(){
		if(Session.get("standing")){
			return Session.set("standing", false)
		}
		else{
			return Session.set("standing", true)
		}
	},
	"click #sitting": function(){
		if(Session.get("sitting")){
			return Session.set("sitting", false)
		}
		else{
			return Session.set("sitting", true)
		}
	},
	"click #lying": function(){
		if(Session.get("lying")){
			return Session.set("lying", false)
		}
		else{
			return Session.set("lying", true)
		}
	},
	"click #hor": function(){
		if(Session.get("horizontal")){
			return Session.set("horizontal", false)
		}
		else{
			return Session.set("horizontal", true)
		}
	},
	"click #vert": function(){
		if(Session.get("vertical")){
			return Session.set("vertical", false)
		}
		else{
			return Session.set("vertical", true)
		}
	}  
});



