/*
var eventBox = document.getElementById("eventBox");
var eventTextContainer = document.getElementById("eventTextContainer");
var eventText = document.getElementById("eventText");
*/

//Navigation Bar variables.
var sideBarContainer = document.getElementById("sideBarContainer");
var navBar = document.getElementById("navBar");


$("#aboutButton").click(function(){
    changeRowBanner("about");
	changeMainContent("about");
	changeSideBar("about");

});

function changeRowBanner(content){
	if(content == "about"){
		//Debugging use
		// console.log("Function checked");
        $("#rowBannerImage").attr("src", "DevResources/aboutBanner.jpg");
	}
}

function changeMainContent(content){
	if(content == "about"){
		$("#primaryContent").load("about2.html #content");
	}
}

function changeSideBar(content){

}

/*
var homeDrop = navBar.getChildren()[0].getChildren()[0];
var homeButton = homeDrop.getChildren()[0];

var aboutDrop = navBar.getChildren()[0].getChildren()[1];
var aboutButton = aboutDrop.getChildren()[0];
var missonAndVisionButton = aboutDrop.getChildren()[1].getChildren()[0];
var meetOurTeamButton = aboutDrop.getChildren()[1].getChildren()[1];

var informationDrop = navBar.getChildren()[0].getChildren()[2];
var informationButton = informationDrop.getChildren()[0];
var resourcesButton = informationDrop.getChildren()[1].getChildren()[0];
var faqButton = informationDrop.getChildren()[1].getChildren()[1];

var activityDrop = navBar.getChildren()[0].getChildren()[3];
var activityButton = activityDrop.getChildren()[0];
var pastActivityButton = activityDrop.getChildren()[1].getChildren()[0];

var contactDrop = navBar.getChildren()[0].getChildren()[4];
var contactButton = contactDrop.getChildren()[0];

//Primary Content Variables.
var primaryContent = document.getElementById("primaryContent");
*/
