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
