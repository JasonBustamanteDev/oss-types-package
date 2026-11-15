export declare const PROFILE_FORMS: {
    readonly PERSONAL_DETAILS: "personalDetails";
    readonly LOCATION: "location";
    readonly PREFERENCES: "preferences";
    readonly EDUCATION: "education";
    readonly MEDIA_LINKS: "mediaLinks";
    readonly LANGUAGES: "languages";
    readonly SKILLS: "skills";
    readonly WORK_EXPERIENCE: "workExperience";
};
export declare enum JobPlatforms {
    INDEED = "indeed",
    LINKEDIN = "linkedin"
}
export declare enum ChannelEvents {
    PREVIEW_READY = "live preview is ready",
    HUMAN_INTERVENTION_REQUIRED = "Human in the loop actions required",
    UPDATE = "latest update",
    STOP_SESSION = "stop session",
    SWITCH_TO_MAIN_TAB = "make iframe preview the main tab",
    SWITCH_TO_SECONDARY_TAB = "make iframe preview the secondary tab"
}
export declare enum WorkExperienceFormFields {
    JOB_TITLE = "jobTitle",
    COMPANY = "company",
    YEARS = "years",
    CURRENTLY_THERE = "currentlyThere"
}
export declare enum SkillsFormFields {
    NAME = "name",
    YEARS = "years"
}
export declare enum LanguagesFormFields {
    LANGUAGE = "language",
    PROFICIENCY = "proficiency"
}
export type JobSearchFilters = {
    role: string;
    jobLocation: string;
    selectedProfile: string;
    datePosted: string;
    salary: string;
    experienceLevel: string;
    remote: string;
    jobType: string;
};
