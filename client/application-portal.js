//Client

//sets the filtering-icons to false in the beginning
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
	Session.set("editID", false)
});


//Search field
//Helper 
Template.searchField.helpers({
    
    
    
});
//Events
Template.searchField.events({
	"click #sb": function(){
		var keyword = $("#sf").val();
		console.log(keyword);
		Meteor.call('invokeAPI', keyword);
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
			filter.mircophone= true
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

		return AppCollection.find(filter)

    },
    editID: function(){
	return Session.get("editID");
    }
});
//Events
Template.appList.events({
    
    	"click #appEdit": function(){
		var appId = this._id;
		Session.set('selectedApp', appId);
		if(Session.get("editID")){
			return Session.set("editID", false)
		}
		else{
			return Session.set("editID", true)
		}
    	},
    	"keyup #editName": function (){
		var editedName = $("#editName").val();
		console.log(editedName);
		AppCollection.update({_id: id}, {$set: {title: editedName}});
	},
	"keyup #editDeveloper": function (){
		var editedDeveloper = $("#editDeveloper").val();
		console.log(editedDeveloper);
		AppCollection.update({_id: id}, {$set: {developer: editedDeveloper}});
	},
	"keyup #editRating": function (){
		var editedRating = $("#editRating").val();
		console.log(editedRating);
		AppCollection.update({_id: id}, {$set: {rating: editedRating}});
	},
	"keyup #editCategory": function (){
		var editedCategory = $("#editCategory").val();
		console.log(editedCategory);
		AppCollection.update({_id: id}, {$set: {category: editedCategory}});
	},
	"keyup #editVideo": function (){
		var editedVideo = $("#editVideo").val();
		console.log(editedVideo);
		AppCollection.update({_id: id}, {$set: {video: editedVideo}});
	},
	"keyup #editPrice": function (){
		var editedPrice = $("#editPrice").val();
		console.log(editedPrice);
		AppCollection.update({_id: id}, {$set: {price: editedPrice}});
	},
	"click #appSave": function(){
		return Session.set("editID", false);
	}
});

//Add new app
//Helper 
Template.appHeader.helpers({
    
    
});
//Events
Template.appHeader.events({
    "click #appAdd": function(){
		AppCollection.insert({title: "Name your app", developer: "Choose a developer"});
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
		if(Session.get("proximity")){
			return Session.set("proximity", false)
		}
		else{
			return Session.set("proximity", true)
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



