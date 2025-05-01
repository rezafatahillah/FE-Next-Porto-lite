export enum PermissionModuleEnum {
  Account = "Account",
  Profile = "Profile",
  Access = "Access",
  User = "User",
}

// ----------------------------------------------------------------------

export enum PermissionSlugEnum {
  // Account related permissions
  AccountView = "account:view",
  AccountCreate = "account:create",
  AccountUpdate = "account:update",
  AccountDelete = "account:delete",
  AccountAccessControl = "account:access-control",
  AccountUpdateStatus = "account:update-status",
  AccountUpdatePassword = "account:update-password",
  AccountUpdateUsername = "account:update-username",

  // Profile related permissions
  ProfileView = "profile:view",
  ProfileUpdate = "profile:update",
  ProfileUpdatePassword = "profile:update-password",
  ProfileUpdateUsername = "profile:update-username",

  // Access related permissions
  AccessView = "access:view",
  AccessCreate = "access:create",
  AccessUpdate = "access:update",
  AccessDelete = "access:delete",
  AccessAssignment = "access:assignment",
  AccessPermission = "access:permission",

  // User related permissions
  UserView = "account:view",
  UserCreate = "account:create",
  UserUpdate = "account:update",
  UserDelete = "account:delete",

  //personal
  EducationView = "education:view",
  EducationCreate = "education:create",
  EducationUpdate = "education:update",
  EducationDelete = "education:delete",

  FamilyView = "family:view",
  FamilyCreate = "family:create",
  FamilyUpdate = "family:update",
  FamilyDelete = "family:delete",

  LanguageView = "language:view",
  LanguageCreate = "language:create",
  LanguageUpdate = "language:update",
  LanguageDelete = "language:delete",

  OrganizationView = "organization:view",
  OrganizationCreate = "organization:create",
  OrganizationUpdate = "organization:update",
  OrganizationDelete = "organization:delete",

  DoctypeView = "doctype:view",
  DoctypeCreate = "doctype:create",
  DoctypeUpdate = "doctype:update",
  DoctypeDelete = "doctype:delete",

  ReferenceView = "reference:view",
  ReferenceCreate = "reference:create",
  ReferenceUpdate = "reference:update",
  ReferenceDelete = "reference:delete",

  SkillView = "skill:view",
  SkillCreate = "skill:create",
  SkillUpdate = "skill:update",
  SkillDelete = "skill:delete",

  WorkView = "work:view",
  WorkCreate = "work:create",
  WorkUpdate = "work:update",
  WorkDelete = "work:delete",

  CandidateView = "candidate:view",
  CandidateCreate = "candidate:create",
  CandidateUpdate = "candidate:update",
  CandidateDelete = "candidate:delete",

  //master
  DegreeView = "degree:view",
  DegreeCreate = "degree:create",
  DegreeUpdate = "degree:update",
  DegreeDelete = "degree:delete",

  DiseaseView = "disease:view",
  DiseaseCreate = "disease:create",
  DiseaseUpdate = "disease:update",
  DiseaseDelete = "disease:delete",

  GenderView = "gender:view",
  GenderCreate = "gender:create",
  GenderUpdate = "gender:update",
  GenderDelete = "gender:delete",

  JobFieldView = "job-field:view",
  JobFieldCreate = "job-field:create",
  JobFieldUpdate = "job-field:update",
  JobFieldDelete = "job-field:delete",

  JobTypeView = "job-type:view",
  JobTypeCreate = "job-type:create",
  JobTypeUpdate = "job-type:update",
  JobTypeDelete = "job-type:delete",

  MaritalStatusView = "marital-status:view",
  MaritalStatusCreate = "marital-status:create",
  MaritalStatusUpdate = "marital-status:update",
  MaritalStatusDelete = "marital-status:delete",

  MedicalQuestionView = "medical-question:view",
  MedicalQuestionCreate = "medical-question:create",
  MedicalQuestionUpdate = "medical-question:update",
  MedicalQuestionDelete = "medical-question:delete",

  ReligionView = "religion:view",
  ReligionCreate = "religion:create",
  ReligionUpdate = "religion:update",
  ReligionDelete = "religion:delete",

  SkillCommonView = "skill-common:view",
  SkillCommonCreate = "skill-common:create",
  SkillCommonUpdate = "skill-common:update",
  SkillCommonDelete = "skill-common:delete",

  SkillLevelView = "skill-level:view",
  SkillLevelCreate = "skill-level:create",
  SkillLevelUpdate = "skill-level:update",
  SkillLevelDelete = "skill-level:delete",

  TaxView = "tax:view",
  TaxCreate = "tax:create",
  TaxUpdate = "tax:update",
  TaxDelete = "tax:delete",
}

// ----------------------------------------------------------------------

export const permissionsPath = {
  role: [
    PermissionSlugEnum.AccessView,
    PermissionSlugEnum.AccessCreate,
    PermissionSlugEnum.AccessUpdate,
    PermissionSlugEnum.AccessDelete,
    PermissionSlugEnum.AccessAssignment,
  ],
  profile: [
    PermissionSlugEnum.ProfileView,
    PermissionSlugEnum.ProfileUpdate,
    PermissionSlugEnum.ProfileUpdatePassword,
    PermissionSlugEnum.ProfileUpdateUsername,
  ],
  account: [
    PermissionSlugEnum.AccountView,
    PermissionSlugEnum.AccountCreate,
    PermissionSlugEnum.AccountUpdate,
    PermissionSlugEnum.AccountDelete,
    PermissionSlugEnum.AccountAccessControl,
    PermissionSlugEnum.AccountUpdatePassword,
    PermissionSlugEnum.AccountUpdateUsername,
    PermissionSlugEnum.AccountUpdateStatus,
  ],
  user: [
    PermissionSlugEnum.UserView,
    PermissionSlugEnum.UserCreate,
    PermissionSlugEnum.UserUpdate,
    PermissionSlugEnum.UserDelete,
  ],

  education: [
    PermissionSlugEnum.EducationView,
    PermissionSlugEnum.EducationCreate,
    PermissionSlugEnum.EducationUpdate,
    PermissionSlugEnum.EducationDelete,
  ],

  family: [
    PermissionSlugEnum.FamilyView,
    PermissionSlugEnum.FamilyCreate,
    PermissionSlugEnum.FamilyUpdate,
    PermissionSlugEnum.FamilyDelete,
  ],

  language: [
    PermissionSlugEnum.LanguageView,
    PermissionSlugEnum.LanguageCreate,
    PermissionSlugEnum.LanguageUpdate,
    PermissionSlugEnum.LanguageDelete,
  ],

  organization: [
    PermissionSlugEnum.OrganizationView,
    PermissionSlugEnum.OrganizationCreate,
    PermissionSlugEnum.OrganizationUpdate,
    PermissionSlugEnum.OrganizationDelete,
  ],

  docType: [
    PermissionSlugEnum.DoctypeView,
    PermissionSlugEnum.DoctypeCreate,
    PermissionSlugEnum.DoctypeUpdate,
    PermissionSlugEnum.DoctypeDelete,
  ],

  reference: [
    PermissionSlugEnum.ReferenceView,
    PermissionSlugEnum.ReferenceCreate,
    PermissionSlugEnum.ReferenceUpdate,
    PermissionSlugEnum.ReferenceDelete,
  ],

  skill: [
    PermissionSlugEnum.SkillView,
    PermissionSlugEnum.SkillCreate,
    PermissionSlugEnum.SkillUpdate,
    PermissionSlugEnum.SkillDelete,
  ],

  work: [
    PermissionSlugEnum.WorkView,
    PermissionSlugEnum.WorkCreate,
    PermissionSlugEnum.WorkUpdate,
    PermissionSlugEnum.WorkDelete,
  ],

  candidate: [
    PermissionSlugEnum.CandidateView,
    PermissionSlugEnum.CandidateCreate,
    PermissionSlugEnum.CandidateUpdate,
    PermissionSlugEnum.CandidateDelete,
  ],

  degree: [
    PermissionSlugEnum.DegreeView,
    PermissionSlugEnum.DegreeCreate,
    PermissionSlugEnum.DegreeUpdate,
    PermissionSlugEnum.DegreeDelete,
  ],

  disease: [
    PermissionSlugEnum.DiseaseView,
    PermissionSlugEnum.DiseaseCreate,
    PermissionSlugEnum.DiseaseUpdate,
    PermissionSlugEnum.DiseaseDelete,
  ],

  gender: [
    PermissionSlugEnum.GenderView,
    PermissionSlugEnum.GenderCreate,
    PermissionSlugEnum.GenderUpdate,
    PermissionSlugEnum.GenderDelete,
  ],

  jobField: [
    PermissionSlugEnum.JobFieldView,
    PermissionSlugEnum.JobFieldCreate,
    PermissionSlugEnum.JobFieldUpdate,
    PermissionSlugEnum.JobFieldDelete,
  ],

  jobType: [
    PermissionSlugEnum.JobTypeView,
    PermissionSlugEnum.JobTypeCreate,
    PermissionSlugEnum.JobTypeUpdate,
    PermissionSlugEnum.JobTypeDelete,
  ],

  maritalStatus: [
    PermissionSlugEnum.MaritalStatusView,
    PermissionSlugEnum.MaritalStatusCreate,
    PermissionSlugEnum.MaritalStatusUpdate,
    PermissionSlugEnum.MaritalStatusDelete,
  ],

  medicalQuestion: [
    PermissionSlugEnum.MedicalQuestionView,
    PermissionSlugEnum.MedicalQuestionCreate,
    PermissionSlugEnum.MedicalQuestionUpdate,
    PermissionSlugEnum.MedicalQuestionDelete,
  ],

  religion: [
    PermissionSlugEnum.ReligionView,
    PermissionSlugEnum.ReligionCreate,
    PermissionSlugEnum.ReligionUpdate,
    PermissionSlugEnum.ReligionDelete,
  ],

  skillCommon: [
    PermissionSlugEnum.SkillCommonView,
    PermissionSlugEnum.SkillCommonCreate,
    PermissionSlugEnum.SkillCommonUpdate,
    PermissionSlugEnum.SkillCommonDelete,
  ],

  skillLevel: [
    PermissionSlugEnum.SkillLevelView,
    PermissionSlugEnum.SkillLevelCreate,
    PermissionSlugEnum.SkillLevelUpdate,
    PermissionSlugEnum.SkillLevelDelete,
  ],

  tax: [
    PermissionSlugEnum.TaxView,
    PermissionSlugEnum.TaxCreate,
    PermissionSlugEnum.TaxUpdate,
    PermissionSlugEnum.TaxDelete,
  ],
};
