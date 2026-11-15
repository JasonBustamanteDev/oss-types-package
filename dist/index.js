export const PROFILE_FORMS = {
    PERSONAL_DETAILS: "personalDetails",
    LOCATION: "location",
    PREFERENCES: "preferences",
    EDUCATION: "education",
    MEDIA_LINKS: "mediaLinks",
    LANGUAGES: "languages",
    SKILLS: "skills",
    WORK_EXPERIENCE: "workExperience",
};
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
})(ChannelEvents || (ChannelEvents = {}));
export var WorkExperienceFormFields;
(function (WorkExperienceFormFields) {
    WorkExperienceFormFields["JOB_TITLE"] = "jobTitle";
    WorkExperienceFormFields["COMPANY"] = "company";
    WorkExperienceFormFields["YEARS"] = "years";
    WorkExperienceFormFields["CURRENTLY_THERE"] = "currentlyThere";
})(WorkExperienceFormFields || (WorkExperienceFormFields = {}));
export var SkillsFormFields;
(function (SkillsFormFields) {
    SkillsFormFields["NAME"] = "name";
    SkillsFormFields["YEARS"] = "years";
})(SkillsFormFields || (SkillsFormFields = {}));
export var LanguagesFormFields;
(function (LanguagesFormFields) {
    LanguagesFormFields["LANGUAGE"] = "language";
    LanguagesFormFields["PROFICIENCY"] = "proficiency";
})(LanguagesFormFields || (LanguagesFormFields = {}));
