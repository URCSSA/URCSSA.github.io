
//Navigation Bar variables.
var sideBarContainer=document.getElementById("sideBarContainer");
var navBar=document.getElementById("navBar");
var CONTENT_LOCATION="pageContents/";
var DEV_SRC_LOCATION="devResources/";

//Global enum of all pages
var CONTENT_TABLE = {
    HOME: {
        content: CONTENT_LOCATION + "home.html #home"
    },
    ABOUT: {
        LANDING: {
			content: CONTENT_LOCATION + "about.html #about"
		},
        MISSION: {
            content: CONTENT_LOCATION + "about.html #mission"
        },
        TEAM: {
            content: CONTENT_LOCATION + "about.html #teamInformation"
        },
        CONTACT: {
            content: CONTENT_LOCATION + "about.html #contact"
        },
        banner: "pageContents/about.html #rowBanner",
        sideBar: "pageContents/about.html #sideBar"
    },
    INFORMATION: {
        LANDING: {
        	content: CONTENT_LOCATION + "information.html #information"
		},
        HANDBOOK: {
            content: CONTENT_LOCATION + "information.html #resources"
        },
        RESOURCES: {
        	content: CONTENT_LOCATION + "information.html #resources"
		},
        FAQ: {
            content: CONTENT_LOCATION + "information.html #faq"
        },
        sideBar: "pageContents/information.html #sideBar",
        banner: DEV_SRC_LOCATION + "infoBanner.jpg"
    },
    ACTIVITIES: {
        LANDING: {
            content: CONTENT_LOCATION + "activities.html #active"
        },
        UPCOMING: {
            content: CONTENT_LOCATION + "activities.html #upcoming"
        },
        PAST: {
            content: CONTENT_LOCATION + "activities.html #past"
        },
        sideBar: "pageContents/activities.html #sideBar",
        banner: DEV_SRC_LOCATION + "activitiesBanner16.jpg"
    }
    // CONTACT: {
	// 	banner: DEV_SRC_LOCATION + "contactBanner.jpg",
     //    sideBar: CONTENT_LOCATION + "contact.html #sideBar",
     //    content: CONTENT_LOCATION + "contact.html #content"
	// }
};

//
// $("#clickable").click(function() {
//     var href=$(this).attr("i.html");
//     navigate(CONTENT_TABLE.ABOUT.LANDING);
//     window.location.href=href;
//     navigate(CONTENT_TABLE.ABOUT.LANDING);
// });

function navigate(content) {
    loadIndex();
    // console.log("Check");
    if(content == CONTENT_TABLE.HOME){
        $("#change").load(CONTENT_TABLE.HOME.content);
    }
    else if (content == CONTENT_TABLE.ABOUT.LANDING || content == CONTENT_TABLE.ABOUT.TEAM
        || content == CONTENT_TABLE.ABOUT.MISSION || content == CONTENT_TABLE.ABOUT.CONTACT) {
        console.log("Check!");
        // $("#banner").load("index.html #infoDrop");
        // $("#banner").innerHTML = "Hello World";
        $("#banner").load(CONTENT_TABLE.ABOUT.banner);
        $("#sideBarContainer").load(CONTENT_TABLE.ABOUT.sideBar);
        switch (content) {
            // default:
            // if (window.location != "index.html")
            //     window.location.href = "index.html";

            case CONTENT_TABLE.ABOUT.LANDING:
                $("#primaryContent").load(CONTENT_TABLE.ABOUT.LANDING.content);
                break;
            case CONTENT_TABLE.ABOUT.MISSION:
                $("#primaryContent").load(CONTENT_TABLE.ABOUT.MISSION.content);
                break;
            case CONTENT_TABLE.ABOUT.TEAM:
                $("#primaryContent").load(CONTENT_TABLE.ABOUT.TEAM.content);
                break;
            case CONTENT_TABLE.ABOUT.CONTACT:
                $("#primaryContent").load(CONTENT_TABLE.ABOUT.CONTACT.content);
                break;
            default:
                break;
        }
    }
    else if (content == CONTENT_TABLE.INFORMATION.LANDING || content == CONTENT_TABLE.INFORMATION.RESOURCES
        || content == CONTENT_TABLE.INFORMATION.FAQ) {

        $("#sideBarContainer").load(CONTENT_TABLE.INFORMATION.sideBar);
        $("#rowBannerImage").attr("src", CONTENT_TABLE.INFORMATION.banner);

        switch (content) {
            // default:
            //     if (window.location != "information.html")
            //         window.location.href = "information.html";
            case CONTENT_TABLE.INFORMATION.LANDING:
                $("#primaryContent").load(CONTENT_TABLE.INFORMATION.LANDING.content);
                break;
            case CONTENT_TABLE.INFORMATION.RESOURCES:
                $("#primaryContent").load(CONTENT_TABLE.INFORMATION.RESOURCES.content);
                break;
            case CONTENT_TABLE.INFORMATION.FAQ:
                $("#primaryContent").load(CONTENT_TABLE.INFORMATION.FAQ.content);
                break;
            default:
                break;
        }
    }
    else if (content == CONTENT_TABLE.ACTIVITIES.LANDING || content == CONTENT_TABLE.ACTIVITIES.PAST) {
        $("#sideBarContainer").load(CONTENT_TABLE.ACTIVITIES.sideBar);
        $("#rowBannerImage").attr("src", CONTENT_TABLE.ACTIVITIES.banner);

        switch (content) {
            case CONTENT_TABLE.ACTIVITIES.LANDING:
                $("#primaryContent").load(CONTENT_TABLE.ACTIVITIES.LANDING.content);
                break;
            case CONTENT_TABLE.ACTIVITIES.PAST:
                $("#primaryContent").load(CONTENT_TABLE.ACTIVITIES.PAST.content)
                break;
            default:
                break;
        }
    }
    // else if (content == CONTENT_TABLE.CONTACT) {
    //     $("#sideBarContainer").load(CONTENT_TABLE.CONTACT.sideBar);
    //     $("#rowBannerImage").attr("src", CONTENT_TABLE.CONTACT.banner);
    //     $("#primaryContent").load(CONTENT_TABLE.CONTACT.content);
    // }
}

function loadIndex(){
    // console.log("Damn");
    $("#change").load("index.html #indexContent");
}
