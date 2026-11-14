export var JobPlatforms;
(function (JobPlatforms) {
    JobPlatforms["INDEED"] = "indeed";
    JobPlatforms["LINKEDIN"] = "linkedin";
})(JobPlatforms || (JobPlatforms = {}));
export var ChannelEvents;
(function (ChannelEvents) {
    ChannelEvents["PREVIEW_READY"] = "live preview is ready";
    ChannelEvents["HUMAN_INTERVENTION_REQUIRED"] = "Human in the loop actions required";
    ChannelEvents["UPDATE"] = "latest update";
    ChannelEvents["STOP_SESSION"] = "stop session";
    ChannelEvents["SWITCH_TO_MAIN_TAB"] = "make iframe preview the main tab";
    ChannelEvents["SWITCH_TO_SECONDARY_TAB"] = "make iframe preview the secondary tab";
})(ChannelEvents || (ChannelEvents = {})); // tech_debt - must match the same name type in Nuxt project (ggbop42a)
export const PROFILE_FORMS = {
    PERSONAL_DETAILS: "personalDetails",
    LOCATION: "location",
    PREFERENCES: "preferences",
    EDUCATION: "education",
    MEDIA_LINKS: "mediaLinks",
    LANGUAGES: "languages",
    SKILLS: "skills",
    WORK_EXPERIENCE: "workExperience",
}; // tech_debt (99gfdt). Must match the variable with the same name in the UI project
