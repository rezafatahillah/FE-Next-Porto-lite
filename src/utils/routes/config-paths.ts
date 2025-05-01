// ----------------------------------------------------------------------

import { IUserEntity } from "@/modules/human-resource";
import {
  IAccessRoleEntity,
  IAccountEntity,
} from "@/modules/account-management";

import {
  IEducationEntity,
  IFamilyEntity,
  ILanguageEntity,
  IOrganizationEntity,
  IReferenceEntity,
  ISkillEntity,
  IWorkEntity,
  IDoctypeEntity,
  // ICandidateEntity,
  IMedicalEntity,
} from "@/modules/personal";

import {
  IDegreeEntity,
  IDiseaseEntity,
  IGenderEntity,
  IJobFieldEntity,
  IJobTypeEntity,
  IMaritalStatusEntity,
  IMedicalQuestionEntity,
  IReligionEntity,
  ISkillCommonEntity,
  ISkillLevelEntity,
  ITaxEntity,
} from "@/modules/master";

export const ROOTS = {
  DASHBOARD: "/back-office",
};

// ----------------------------------------------------------------------

export const paths = {
  root: "/",
  maintenance: "/maintenance",

  auth: {
    jwt: {
      signIn: `/auth/sign-in`,
      signUp: `/auth/sign-up`,
      requestResetPassword: `/auth/reset-password/request`,
      resetPassword: `/auth/reset-password/reset`,
    },
  },

  // DASHBOARD
  backOffice: {
    root: ROOTS.DASHBOARD,

    profile: {
      root: `${ROOTS.DASHBOARD}/profile`,
    },

    users: {
      root: `${ROOTS.DASHBOARD}/users`,
      create: `${ROOTS.DASHBOARD}/users/create`,
      edit: (id: IUserEntity["id"]) => `${ROOTS.DASHBOARD}/users/${id}`,
    },

    accounts: {
      root: `${ROOTS.DASHBOARD}/accounts`,

      create: `${ROOTS.DASHBOARD}/accounts/create`,
      edit: (id: IAccountEntity["id"]) => `${ROOTS.DASHBOARD}/accounts/${id}`,

      configs: {
        root: `${ROOTS.DASHBOARD}/accounts/configs`,

        roles: {
          root: `${ROOTS.DASHBOARD}/accounts/configs/roles`,
          create: `${ROOTS.DASHBOARD}/accounts/configs/roles/create`,
          edit: (id: IAccessRoleEntity["id"]) =>
            `${ROOTS.DASHBOARD}/accounts/configs/roles/${id}`,
        },
      },
    },

    personal: {
      root: `${ROOTS.DASHBOARD}/personal`,
      // page: `${ROOTS.DASHBOARD}/personal/page`,
      education: {
        root: `${ROOTS.DASHBOARD}/personal/education`,
        create: `${ROOTS.DASHBOARD}/personal/education/create`,
        edit: `${ROOTS.DASHBOARD}/personal/education/edit`,
        createMultiple: `${ROOTS.DASHBOARD}/personal/education/create-multiple`,
        // edit: (id: IEducationEntity["id"]) =>
        //   `${ROOTS.DASHBOARD}/personal/education/${id}`,
      },
      family: {
        root: `${ROOTS.DASHBOARD}/personal/family`,
        create: `${ROOTS.DASHBOARD}/personal/family/create`,
        edit: `${ROOTS.DASHBOARD}/personal/family/edit`,
        // edit: (id: IFamilyEntity["id"]) =>
        //   `${ROOTS.DASHBOARD}/personal/family/${id}`,
      },
      language: {
        root: `${ROOTS.DASHBOARD}/personal/language`,
        create: `${ROOTS.DASHBOARD}/personal/language/create`,
        edit: (id: ILanguageEntity["id"]) =>
          `${ROOTS.DASHBOARD}/personal/language/${id}`,
      },
      organization: {
        root: `${ROOTS.DASHBOARD}/personal/organization`,
        create: `${ROOTS.DASHBOARD}/personal/organization/create`,
        edit: (id: IOrganizationEntity["id"]) =>
          `${ROOTS.DASHBOARD}/personal/organization/${id}`,
      },
      reference: {
        root: `${ROOTS.DASHBOARD}/personal/reference`,
        create: `${ROOTS.DASHBOARD}/personal/reference/create`,
        edit: (id: IReferenceEntity["id"]) =>
          `${ROOTS.DASHBOARD}/personal/reference/${id}`,
      },
      skill: {
        root: `${ROOTS.DASHBOARD}/personal/skill`,
        create: `${ROOTS.DASHBOARD}/personal/skill/create`,
        edit: (id: ISkillEntity["id"]) =>
          `${ROOTS.DASHBOARD}/personal/skill/${id}`,
      },

      medical: {
        root: `${ROOTS.DASHBOARD}/personal/medical`,
        create: `${ROOTS.DASHBOARD}/personal/medical/create`,
        edit: (id: IMedicalEntity["id"]) =>
          `${ROOTS.DASHBOARD}/personal/medical/${id}`,
      },
      work: {
        root: `${ROOTS.DASHBOARD}/personal/work`,
        create: `${ROOTS.DASHBOARD}/personal/work/create`,
        edit: (id: IWorkEntity["id"]) =>
          `${ROOTS.DASHBOARD}/personal/work/${id}`,
      },

      profile: {
        root: `${ROOTS.DASHBOARD}/personal/profile`,
      },
      identity: {
        root: `${ROOTS.DASHBOARD}/personal/identity`,
      },
      other: {
        root: `${ROOTS.DASHBOARD}/personal/other`,
      },
      doctype: {
        root: `${ROOTS.DASHBOARD}/personal/doctype`,
        create: `${ROOTS.DASHBOARD}/personal/doctype/create`,
        edit: (id: IDoctypeEntity["id"]) =>
          `${ROOTS.DASHBOARD}/personal/doctype/${id}`,
      },
      // candidate: {
      //   root: `${ROOTS.DASHBOARD}/personal/candidate`,
      //   create: `${ROOTS.DASHBOARD}/personal/candidate/create`,
      //   edit: (id: ICandidateEntity["id"]) =>
      //     `${ROOTS.DASHBOARD}/personal/candidate/${id}`,
      // },
    },

    master: {
      root: `${ROOTS.DASHBOARD}/master`,
      // page: `${ROOTS.DASHBOARD}/master/page`,
      degree: {
        root: `${ROOTS.DASHBOARD}/master/degree`,
        create: `${ROOTS.DASHBOARD}/master/degree/create`,
        edit: (id: IDegreeEntity["id"]) =>
          `${ROOTS.DASHBOARD}/master/degree/${id}`,
      },
      disease: {
        root: `${ROOTS.DASHBOARD}/master/disease`,
        create: `${ROOTS.DASHBOARD}/master/disease/create`,
        edit: (id: IDiseaseEntity["id"]) =>
          `${ROOTS.DASHBOARD}/master/disease/${id}`,
      },
      gender: {
        root: `${ROOTS.DASHBOARD}/master/gender`,
        create: `${ROOTS.DASHBOARD}/master/gender/create`,
        edit: (id: IGenderEntity["id"]) =>
          `${ROOTS.DASHBOARD}/master/gender/${id}`,
      },
      jobfield: {
        root: `${ROOTS.DASHBOARD}/master/jobfield`,
        create: `${ROOTS.DASHBOARD}/master/jobfield/create`,
        edit: (id: IJobFieldEntity["id"]) =>
          `${ROOTS.DASHBOARD}/master/jobfield/${id}`,
      },
      jobtype: {
        root: `${ROOTS.DASHBOARD}/master/jobtype`,
        create: `${ROOTS.DASHBOARD}/master/jobtype/create`,
        edit: (id: IJobTypeEntity["id"]) =>
          `${ROOTS.DASHBOARD}/master/jobtype/${id}`,
      },
      maritalstatus: {
        root: `${ROOTS.DASHBOARD}/master/maritalstatus`,
        create: `${ROOTS.DASHBOARD}/master/maritalstatus/create`,
        edit: (id: IMaritalStatusEntity["id"]) =>
          `${ROOTS.DASHBOARD}/master/maritalstatus/${id}`,
      },
      medicalquestion: {
        root: `${ROOTS.DASHBOARD}/master/medicalquestion`,
        create: `${ROOTS.DASHBOARD}/master/medicalquestion/create`,
        edit: (id: IMedicalQuestionEntity["id"]) =>
          `${ROOTS.DASHBOARD}/master/medicalquestion/${id}`,
      },
      religion: {
        root: `${ROOTS.DASHBOARD}/master/religion`,
        create: `${ROOTS.DASHBOARD}/master/religion/create`,
        edit: (id: IReligionEntity["id"]) =>
          `${ROOTS.DASHBOARD}/master/religion/${id}`,
      },
      skillcommon: {
        root: `${ROOTS.DASHBOARD}/master/skillcommon`,
        create: `${ROOTS.DASHBOARD}/master/skillcommon/create`,
        edit: (id: ISkillCommonEntity["id"]) =>
          `${ROOTS.DASHBOARD}/master/skillcommon/${id}`,
      },
      skilllevel: {
        root: `${ROOTS.DASHBOARD}/master/skilllevel`,
        create: `${ROOTS.DASHBOARD}/master/skilllevel/create`,
        edit: (id: ISkillLevelEntity["id"]) =>
          `${ROOTS.DASHBOARD}/master/skilllevel/${id}`,
      },
      tax: {
        root: `${ROOTS.DASHBOARD}/master/tax`,
        create: `${ROOTS.DASHBOARD}/master/tax/create`,
        edit: (id: ITaxEntity["id"]) =>
          `${ROOTS.DASHBOARD}/master/tax/${id}`,
      },
    },
  },
};
