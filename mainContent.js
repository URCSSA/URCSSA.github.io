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
	if(content = "about"){
		$("#rowBannerImage").getChildren()[0].src= "DevResources/aboutBanner.jpg";
	}
}

function changeMainContent(content){
	if(content = "about"){
		$("#primaryContent").append("<h1>About Us</h1>"); 
		$("#primaryContent").append("<h3>Who we are</h3>"); 
		$("#primaryContent").append(
			"<p> The Chinese Students and Scholars Association (CSSA) is a student organization at University of Richmond. Our operations are led by an executive council of a President, two Vice-Presidents, a Treasurer, and a Secretary. We also have a group of staff members who dedicate their time and effort to the operations of the CSSA. </p>"); 
		$("#primaryContent").append("<h3>What we do</h3>"); 
		$("#primaryContent").append("<p> We promote diversity on campus, provide and create opportunities, and facilitate information and cultural exchanges between China and the UR community. We organize events and activities for celebration of cultural festivals. We participate in UR events. We also co-sponsor and co-organize events with other student organizations. </p>"); 
		$("#primaryContent").append("<h3>What we do</h3>"); 
		$("#primaryContent").append("<h3>What we do</h3>"); 
		$("#primaryContent").append("<h3>What we do</h3>"); 
		$("#primaryContent").append("<h3>What we do</h3>"); 
		
		/*
		<h1>About Us</h1>

        <h3>Who we are</h3>
        <p>
            The Chinese Students and Scholars Association (CSSA) is a student organization at University of Richmond.
            Our operations are led by an executive council of a President, two Vice-Presidents, a Treasurer, and a Secretary.
            We also have a group of staff members who dedicate their time and effort to the operations of the CSSA. 
        </p>

        <h3>What we do</h3>
        <p>
            We promote diversity on campus, provide and create opportunities, and facilitate information and cultural
            exchanges between China and the UR community. We organize events and activities for celebration of cultural festivals.
            We participate in UR events. We also co-sponsor and co-organize events with other student organizations.
        </p>
        <p>
            In the <a href = "past.html">past</a>, our events have included an annual Chinese New Year Gala, Mid-Autumn Festival Celebration,
            and collaborative events with organizations such as Asian Echo and International Club.
        </p>

        <h3>How you can participate</h3>
        <p>
            We welcome everyone who is interested to join us at our events. We design many of our events with a particular emphasis
            on China and its traditional and popular culture, and we hope they can offer an opportunity for authentic
            cultural exchange and experience for anyone interested. You can enjoy our activities simply by spreading
            the words and being there.
        </p>
        <p>
            We also have various opportunities for those of you who may wish to work with us to plan events, manage correspondence,
            or otherwise become involved in the operations of the CSSA. If you are interested in helping out, please
            
            <a href = "contact.html">contact us</a> for more details.
        </p>
        */
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
