// ----------------------------------------------------------------------

import { IUserEntity } from "@/modules/human-resource";
import {
  IAccessRoleEntity,
  IAccountEntity,
} from "@/modules/account-management";
import { IEducationEntity, IFamilyEntity, ILanguageEntity, IOrganizationEntity, IReferenceEntity, ISkillEntity, IWorkEntity, IDoctypeEntity, ICandidateEntity, IMedicalEntity} from "@/modules/personal";
import { IDegreeEntity, IDiseaseEntity, IGenderEntity, IJobFieldEntity, IJobTypeEntity, IMaritalStatusEntity, IMedicalQuestionEntity, IReligionEntity, ISkillCommonEntity, ISkillLevelEntity, ITaxEntity,} from "@/modules/master";
import { IStorageEntity } from "@/modules/core";
import { INotificationEntity } from "../notification";

const ROOTS = {
  v1: "/v1.0",
};

// ----------------------------------------------------------------------

export const endpoints = {
  config: {
    code: {
      getAll: `${ROOTS.v1}/config/codes`,
    },
  },

  auth: {
    signIn: `${ROOTS.v1}/auth/login`,
    refresh: `${ROOTS.v1}/auth/refresh`,
    signUp: `${ROOTS.v1}/auth/register`,
    sendEmailVerification: `${ROOTS.v1}/auth/verification-email/send`,
    emailVerification: `${ROOTS.v1}/auth/verification-email/verify`,
    requestResetPassword: `${ROOTS.v1}/auth/reset-password/request`,
    resetPassword: `${ROOTS.v1}/auth/reset-password/reset`,
    logout: `${ROOTS.v1}/auth/logout`,
  },

  notification: {
    statistic: `${ROOTS.v1}/notification/self/statistic`,
    getAll: `${ROOTS.v1}/notification/self`,
    readAll: `${ROOTS.v1}/notification/self`,
    read: (id: INotificationEntity["id"]) =>
      `${ROOTS.v1}/notification/self/${id}`,
    deleteAll: `${ROOTS.v1}/notification/self`,
  },

  profile: {
    getMySelf: `${ROOTS.v1}/profile`,
    updateProfile: `${ROOTS.v1}/profile/update/profile`,
    updatePassword: `${ROOTS.v1}/profile/update/password`,
    updatePicture: `${ROOTS.v1}/profile/update/picture`,
  },

  access: {
    role: {
      getAll: `${ROOTS.v1}/access/roles`,
      getDetails: (id: IAccessRoleEntity["id"]) =>
        `${ROOTS.v1}/access/roles/${id}`,
      create: `${ROOTS.v1}/access/roles`,
      update: (id: IAccessRoleEntity["id"]) => `${ROOTS.v1}/access/roles/${id}`,
      delete: (id: IAccessRoleEntity["id"]) => `${ROOTS.v1}/access/roles/${id}`,
    },
    permission: {
      getAll: `${ROOTS.v1}/access/permissions`,
      getByRole: (id: IAccessRoleEntity["id"]) =>
        `${ROOTS.v1}/access/permissions/role/${id}`,
    },
  },

  user: {
    getAll: `${ROOTS.v1}/users`,
    getDetails: (id: IUserEntity["id"]) => `${ROOTS.v1}/users/${id}`,
    create: `${ROOTS.v1}/users`,
    update: (id: IUserEntity["id"]) => `${ROOTS.v1}/users/${id}`,
    delete: (id: IUserEntity["id"]) => `${ROOTS.v1}/users/${id}`,
  },

  account: {
    getAll: `${ROOTS.v1}/accounts`,
    getDetails: (id: IAccountEntity["id"]) => `${ROOTS.v1}/accounts/${id}`,
    create: `${ROOTS.v1}/accounts`,
    updateUsername: (id: IAccountEntity["id"]) =>
      `${ROOTS.v1}/accounts/${id}/username`,
    updatePassword: (id: IAccountEntity["id"]) =>
      `${ROOTS.v1}/accounts/${id}/password`,
    updateResetPassword: (id: IAccountEntity["id"]) =>
      `${ROOTS.v1}/accounts/${id}/password/reset`,
    updateStatus: (id: IAccountEntity["id"]) =>
      `${ROOTS.v1}/accounts/${id}/status`,
    updateEnable: (id: IAccountEntity["id"]) =>
      `${ROOTS.v1}/accounts/${id}/enable`,
    updateDisable: (id: IAccountEntity["id"]) =>
      `${ROOTS.v1}/accounts/${id}/disable`,
    updateRole: (id: IAccountEntity["id"]) => `${ROOTS.v1}/accounts/${id}/role`,
    updateAccess: (id: IAccountEntity["id"]) =>
      `${ROOTS.v1}/accounts/${id}/access`,
    delete: (id: IAccountEntity["id"]) => `${ROOTS.v1}/accounts/${id}/destroy`,
  },

  storage: {
    upload: `${ROOTS.v1}/storages/uploads`,
    multipleUpload: `${ROOTS.v1}/storages/uploads/multiple`,
    delete: (id: IStorageEntity["id"]) => `${ROOTS.v1}/storages/${id}`,
  },

  code: {
    getAll: `${ROOTS.v1}/code`, 
    accountStatus: `${ROOTS.v1}/code/account-status`,
    userType: `${ROOTS.v1}/code/user-type`,
    educationType: `${ROOTS.v1}/code/education-type`,
    educationStatus: `${ROOTS.v1}/code/education-status`,
    familyType: `${ROOTS.v1}/code/family-type`,
    maritalType: `${ROOTS.v1}/code/marital-type`,
    genderType: `${ROOTS.v1}/code/gender-type`,
    religionType: `${ROOTS.v1}/code/religion-type`,
    levelType: `${ROOTS.v1}/code/level-type`,
  },
  

  education: {
    getAll: `${ROOTS.v1}/education`,
    getDetails: (id: IEducationEntity["id"]) => `${ROOTS.v1}/education/${id}`,
    create: `${ROOTS.v1}/education`,
    createMultiple: `${ROOTS.v1}/education/multiple`,
    update: (id: IEducationEntity["id"]) => `${ROOTS.v1}/education/${id}`,
    updateMultiple: `${ROOTS.v1}/education/multiple`,
    delete: (id: IEducationEntity["id"]) => `${ROOTS.v1}/education/${id}`,
  },

  medical: {
    getAll: `${ROOTS.v1}/medical`,
    getAllCustom: `${ROOTS.v1}/medical/custom`,
    getDetails: (id: IMedicalEntity["id"]) => `${ROOTS.v1}/medical/${id}`,
    create: `${ROOTS.v1}/medical`,
    createMultiple: `${ROOTS.v1}/medical/multiple`,
    update: (id: IMedicalEntity["id"]) => `${ROOTS.v1}/medical/${id}`,
    updateMultiple: `${ROOTS.v1}/medical/multiple`,
    delete: (id: IMedicalEntity["id"]) => `${ROOTS.v1}/medical/${id}`,
  },

  family: {
    getAll: `${ROOTS.v1}/family`,
    getDetails: (id: IFamilyEntity["id"]) => `${ROOTS.v1}/family/${id}`,
    create: `${ROOTS.v1}/family`,
    createMultiple: `${ROOTS.v1}/family/multiple`,
    update: (id: IFamilyEntity["id"]) => `${ROOTS.v1}/family/${id}`,
    updateMultiple: `${ROOTS.v1}/family/multiple`,
    delete: (id: IFamilyEntity["id"]) => `${ROOTS.v1}/family/${id}`,
  },

  language: {
    getAll: `${ROOTS.v1}/language`,
    getDetails: (id: ILanguageEntity["id"]) => `${ROOTS.v1}/language/${id}`,
    create: `${ROOTS.v1}/language`,
    update: (id: ILanguageEntity["id"]) => `${ROOTS.v1}/language/${id}`,
    delete: (id: ILanguageEntity["id"]) => `${ROOTS.v1}/language/${id}`,
  },

  organization: {
    getAll: `${ROOTS.v1}/organization`,
    getDetails: (id: IOrganizationEntity["id"]) => `${ROOTS.v1}/organization/${id}`,
    create: `${ROOTS.v1}/organization`,
    update: (id: IOrganizationEntity["id"]) => `${ROOTS.v1}/organization/${id}`,
    delete: (id: IOrganizationEntity["id"]) => `${ROOTS.v1}/organization/${id}`,
  },

  reference: {
    getAll: `${ROOTS.v1}/reference`,
    getDetails: (id: IReferenceEntity["id"]) => `${ROOTS.v1}/reference/${id}`,
    create: `${ROOTS.v1}/reference`,
    update: (id: IReferenceEntity["id"]) => `${ROOTS.v1}/reference/${id}`,
    delete: (id: IReferenceEntity["id"]) => `${ROOTS.v1}/reference/${id}`,
  },

  skill: {
    getAll: `${ROOTS.v1}/skill`,
    getDetails: (id: ISkillEntity["id"]) => `${ROOTS.v1}/skill/${id}`,
    create: `${ROOTS.v1}/skill`,
    update: (id: ISkillEntity["id"]) => `${ROOTS.v1}/skill/${id}`,
    delete: (id: ISkillEntity["id"]) => `${ROOTS.v1}/skill/${id}`,
  },

  work: {
    getAll: `${ROOTS.v1}/work`,
    getDetails: (id: IWorkEntity["id"]) => `${ROOTS.v1}/work/${id}`,
    create: `${ROOTS.v1}/work`,
    update: (id: IWorkEntity["id"]) => `${ROOTS.v1}/work/${id}`,
    delete: (id: IWorkEntity["id"]) => `${ROOTS.v1}/work/${id}`,
  },

  doctype: {
    getAll: `${ROOTS.v1}/doctype`,
    getDetails: (id: IDoctypeEntity["id"]) => `${ROOTS.v1}/doctype/${id}`,
    create: `${ROOTS.v1}/doctype`,
    createMultiple: `${ROOTS.v1}/doctype/multiple`,
    update: (id: IDoctypeEntity["id"]) => `${ROOTS.v1}/doctype/${id}`,
    updateFile: (id: IDoctypeEntity["id"]) => `${ROOTS.v1}/doctype/${id}/file`,
    delete: (id: IDoctypeEntity["id"]) => `${ROOTS.v1}/doctype/${id}`,
  },

  candidate: {
    getAll: `${ROOTS.v1}/candidate`,
    getDetails: (id: ICandidateEntity["id"]) => `${ROOTS.v1}/candidate/${id}`,
    create: `${ROOTS.v1}/candidate`,
    update: (id: ICandidateEntity["id"]) => `${ROOTS.v1}/candidate/${id}`,
    delete: (id: ICandidateEntity["id"]) => `${ROOTS.v1}/candidate/${id}`,
  },

  //MASTER DATA

  degree: {
    getAll: `${ROOTS.v1}/degree`,
    getDetails: (id: IDegreeEntity["id"]) => `${ROOTS.v1}/degree/${id}`,
    create: `${ROOTS.v1}/degree`,
    update: (id: IDegreeEntity["id"]) => `${ROOTS.v1}/degree/${id}`,
    delete: (id: IDegreeEntity["id"]) => `${ROOTS.v1}/degree/${id}`,
  },

  disease: {
    getAll: `${ROOTS.v1}/disease`,
    getAllCustom: `${ROOTS.v1}/disease/custom`,
    getDetails: (id: IDiseaseEntity["id"]) => `${ROOTS.v1}/disease/${id}`,
    create: `${ROOTS.v1}/disease`,
    update: (id: IDiseaseEntity["id"]) => `${ROOTS.v1}/disease/${id}`,
    delete: (id: IDiseaseEntity["id"]) => `${ROOTS.v1}/disease/${id}`,
  },

  gender: {
    getAll: `${ROOTS.v1}/gender`,
    getDetails: (id: IGenderEntity["id"]) => `${ROOTS.v1}/gender/${id}`,
    create: `${ROOTS.v1}/gender`,
    update: (id: IGenderEntity["id"]) => `${ROOTS.v1}/gender/${id}`,
    delete: (id: IGenderEntity["id"]) => `${ROOTS.v1}/gender/${id}`,
  },

  jobfield: {
    getAll: `${ROOTS.v1}/jobfield`,
    getDetails: (id: IJobFieldEntity["id"]) => `${ROOTS.v1}/jobfield/${id}`,
    create: `${ROOTS.v1}/jobfield`,
    update: (id: IJobFieldEntity["id"]) => `${ROOTS.v1}/jobfield/${id}`,
    delete: (id: IJobFieldEntity["id"]) => `${ROOTS.v1}/jobfield/${id}`,
  },

  jobtype: {
    getAll: `${ROOTS.v1}/jobtype`,
    getDetails: (id: IJobTypeEntity["id"]) => `${ROOTS.v1}/jobtype/${id}`,
    create: `${ROOTS.v1}/jobtype`,
    update: (id: IJobTypeEntity["id"]) => `${ROOTS.v1}/jobtype/${id}`,
    delete: (id: IJobTypeEntity["id"]) => `${ROOTS.v1}/jobtype/${id}`,
  },

  maritalstatus: {
    getAll: `${ROOTS.v1}/maritalstatus`,
    getDetails: (id: IMaritalStatusEntity["id"]) => `${ROOTS.v1}/maritalstatus/${id}`,
    create: `${ROOTS.v1}/maritalstatus`,
    update: (id: IMaritalStatusEntity["id"]) => `${ROOTS.v1}/maritalstatus/${id}`,
    delete: (id: IMaritalStatusEntity["id"]) => `${ROOTS.v1}/maritalstatus/${id}`,
  },

  medicalquestion: {
    getAll: `${ROOTS.v1}/medical-question`,
    getAllCustom: `${ROOTS.v1}/medical-question/custom`,
    getDetails: (id: IMedicalQuestionEntity["id"]) => `${ROOTS.v1}/medical-question/${id}`,
    create: `${ROOTS.v1}/medical-question`,
    update: (id: IMedicalQuestionEntity["id"]) => `${ROOTS.v1}/medical-question/${id}`,
    delete: (id: IMedicalQuestionEntity["id"]) => `${ROOTS.v1}/medical-question/${id}`,
  },

  religion: {
    getAll: `${ROOTS.v1}/religion`,
    getDetails: (id: IReligionEntity["id"]) => `${ROOTS.v1}/religion/${id}`,
    create: `${ROOTS.v1}/religion`,
    update: (id: IReligionEntity["id"]) => `${ROOTS.v1}/religion/${id}`,
    delete: (id: IReligionEntity["id"]) => `${ROOTS.v1}/religion/${id}`,
  },

  skillcommon: {
    getAll: `${ROOTS.v1}/skill-common`,
    getDetails: (id: ISkillCommonEntity["id"]) => `${ROOTS.v1}/skill-common/${id}`,
    create: `${ROOTS.v1}/skill-common`,
    update: (id: ISkillCommonEntity["id"]) => `${ROOTS.v1}/skill-common/${id}`,
    delete: (id: ISkillCommonEntity["id"]) => `${ROOTS.v1}/skill-common/${id}`,
  },

  skilllevel: {
    getAll: `${ROOTS.v1}/skilllevel`,
    getDetails: (id: ISkillLevelEntity["id"]) => `${ROOTS.v1}/skilllevel/${id}`,
    create: `${ROOTS.v1}/skilllevel`,
    update: (id: ISkillLevelEntity["id"]) => `${ROOTS.v1}/skilllevel/${id}`,
    delete: (id: ISkillLevelEntity["id"]) => `${ROOTS.v1}/skilllevel/${id}`,
  },

  tax: {
    getAll: `${ROOTS.v1}/tax`,
    getDetails: (id: ITaxEntity["id"]) => `${ROOTS.v1}/tax/${id}`,
    create: `${ROOTS.v1}/tax`,
    update: (id: ITaxEntity["id"]) => `${ROOTS.v1}/tax/${id}`,
    delete: (id: ITaxEntity["id"]) => `${ROOTS.v1}/tax/${id}`,
  },
};
