
//Navigation Bar variables.
var sideBarContainer=document.getElementById("sideBarContainer");
var navBar=document.getElementById("navBar");
var CONTENT_LOCATION="pageContents/";
var DEV_SRC_LOCATION="devResources/";

//Global enum of all pages
var CONTENT_TABLE = {
    HOME: {
        homeRowWrapper: CONTENT_LOCATION + "index.html #homeRowWrapper",
        latestNewsContainer: CONTENT_LOCATION + "index.html #latestNewsContainer",
        banner: DEV_SRC_LOCATION + "homeBanner.jgp"
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
        sideBar: "pageContents/about.html #sideBar",
        banner: DEV_SRC_LOCATION + "aboutBanner.jpg"
    },
    INFORMATION: {
        LANDING: {
        	content: CONTENT_LOCATION + "information.html #information"
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
        PAST: {
            content: CONTENT_LOCATION + "activities.html #past"
        },
        sideBar: "pageContents/activities.html #sideBar",
        banner: DEV_SRC_LOCATION + "activitiesBanner16.jpg"

    },
    CONTACT: {
		banner: DEV_SRC_LOCATION + "contactBanner.jpg",
        content: CONTENT_LOCATION + "contact.html #content"
	}
};
//
// $("#clickable").click(function() {
//     var href=$(this).attr("i.html");
//     navigate(CONTENT_TABLE.ABOUT.LANDING);
//     window.location.href=href;
//     navigate(CONTENT_TABLE.ABOUT.LANDING);
// });

function navigate(content) {

    if (content == CONTENT_TABLE.ABOUT.LANDING || content == CONTENT_TABLE.ABOUT.TEAM
        || content == CONTENT_TABLE.ABOUT.MISSION) {

        $("#sideBarContainer").load("pageContents/about.html #sideBar");
        $("#rowBannerImage").attr("src", CONTENT_TABLE.ABOUT.banner);
        switch (content) {
            // default:
            // if (window.location != "about.html")
            //     window.location.href = "about.html";

            case CONTENT_TABLE.ABOUT.LANDING:
                $("#primaryContent").load(CONTENT_TABLE.ABOUT.LANDING.content);
                break;
            case CONTENT_TABLE.ABOUT.MISSION:
                $("#primaryContent").load(CONTENT_TABLE.ABOUT.MISSION.content);
                break;
            case CONTENT_TABLE.ABOUT.TEAM:
                $("#primaryContent").load(CONTENT_TABLE.ABOUT.TEAM.content);
                break;
            default:
                break;
        }
    }
    else if (content == CONTENT_TABLE.INFORMATION.LANDING || content == CONTENT_TABLE.INFORMATION.RESOURCES
        || content == CONTENT_TABLE.INFORMATION.FAQ) {

        $("#sideBarContainer").load("pageContents/information.html #sideBar");
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
        $("#sideBarContainer").load("pageContents/activities.html #sideBar");
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
    else if (content == CONTENT_TABLE.CONTACT) {
        $("#sideBarContainer").load("pageContents/contact.html #sideBar");
        $("#rowBannerImage").attr("src", CONTENT_TABLE.CONTACT.banner);
        $("#primaryContent").load(CONTENT_TABLE.CONTACT.content);
    }
}