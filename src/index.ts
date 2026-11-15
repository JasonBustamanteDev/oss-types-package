export const PROFILE_FORMS = {
  PERSONAL_DETAILS: "personalDetails",
  LOCATION: "location",
  PREFERENCES: "preferences",
  EDUCATION: "education",
  MEDIA_LINKS: "mediaLinks",

  LANGUAGES: "languages",
  SKILLS: "skills",
  WORK_EXPERIENCE: "workExperience",
} as const;

export enum JobPlatforms {
  INDEED = "indeed",
  LINKEDIN = "linkedin",
}

export enum ChannelEvents {
  PREVIEW_READY = "live preview is ready",
  HUMAN_INTERVENTION_REQUIRED = "Human in the loop actions required",
  UPDATE = "latest update",
  STOP_SESSION = "stop session",
  SWITCH_TO_MAIN_TAB = "make iframe preview the main tab",
  SWITCH_TO_SECONDARY_TAB = "make iframe preview the secondary tab",
}

export enum WorkExperienceFormFields {
  JOB_TITLE = "jobTitle",
  COMPANY = "company",
  YEARS = "years",
  CURRENTLY_THERE = "currentlyThere"
}

export enum SkillsFormFields {
  NAME = "name",
  YEARS = "years"
}

export enum LanguagesFormFields {
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