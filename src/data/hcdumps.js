export const hc_dumps_questions = [
  {
    id: "1",
    question: `A provider's office wants to verify a patient's insurance plan
  information and coverage when they call into the call center to book
  an appointment. Which capability should a consultant leverage to
  address this requirement?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: "Utilization Management" },
      { id: "B", option: "Intelligent Appointment Management" },
      { id: "C", option: "identity Verification" },
      { id: "D", option: "Benefits Eligibility and Verification" },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/benefits-and-eligibility-verification-with-health-cloud/get-started-with-benefits-verification",
    ],
  },
  {
    id: "2",
    question: `A company based in the United States requires a way to track medications that patients take in a standardized format and detect potential drug-to-drug interactions. Which two Health Cloud solutions should a consultant recommend?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: "Medication Audit" },
      { id: "B", option: "Medication Review" },
      { id: "C", option: "Medication Reconciliation" },
      { id: "D", option: "Medication Administration" },
    ],
    answer: [{ id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.medication_management_medication_review_overview.htm&type=5",
    ],
  },
  {
    id: "3",
    question: `An administrator at Bloomington Caregivers has received a change request to alter the appearance of the timeline so that it displays vertically instead of horizontally. Which step should the administrator take when implementing this change request?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Find the Timeline Orientation setting in Custom Metadata, which controls the orientation of all timelines, and change the value to vertical.`,
      },
      {
        id: "B",
        option: `Find the Timeline View Configuration for each relevant timeline in the Health Cloud - Lightning Admin app and change the Orientation to vertical.`,
      },
      {
        id: "C",
        option: `Enable Timeline in Salesforce Setup. then configure and activate new timeline and add to the relevant Lightning record.`,
      },
      {
        id: "D",
        option: `Enable Timeline in Salesforce Setup, then set the toggle for vertical orientation to false to set all timeline orientations as vertical.`,
      },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [""],
  },
  {
    id: "4",
    question: `A MedTech customer is looking to track surgical case visits for reps to sell their product leveraging Intelligent Sales. Which object should a consultant configure to track this visit type?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: "Action Plan" },
      { id: "B", option: "Visit" },
      { id: "C", option: "Work Type" },
      { id: "D", option: "Location" },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_hc_visit.htm",
      "https://www.p2pexams.com/free-questions/vceexamstest-salesforce-health-cloud-accredited-professional-sp22-salesforce-health-cloud-accredited-professional-sp22-verified-questions-answers-by-waters-29-01-2024-7qa.pdf",
    ],
  },
  {
    id: "5",
    question: `Bloomington Caregivers needs to use the objects foi the Clinical data model as part of its new Health Cloud implementation,Which preference should Bloomington Caregivers' administrator ensure is enabled?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `FHIR-Aligned Data Model org preference` },
      { id: "B", option: `Clinical R4 Model org preference` },
      { id: "C", option: `linical Data Model org preference` },
      { id: "D", option: `FHIR-Aligned EHR Data Model org preference` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_clinical_data_model.htm",
      "https://brainly.com/question/51428730",
    ],
  },
  {
    id: "6",
    question: `Users need to analyze their patient or member referrals through a prebuilt dashboard that includes reports on important aspects of their referral management.What should a consultant do in this case?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Install the add-on package that delivers Health Cloud Reports for Utilization Management and Health Cloud (or Patient Referral Management.`,
      },
      {
        id: "B",
        option: `Upload a Provider Referral Dashboard Template and enable the action bar so that users can generate a Patient referral Management report.`,
      },
      {
        id: "C",
        option: `Install the unmanaged extension package that delivers Health Cloud Reports for Patient Referral Management.`,
      },
      {
        id: "D",
        option: `Add extra picklist values to Account record type and add fields on the page layout for patient referral data for CRM Analytics to generate a Patient Referral Management report.`,
      },
    ],
    answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud.meta/health_cloud/admin_install_package.htm",
      "https://www.pass4success.com/salesforce/discussions/exam-health-cloud-accredited-professional-topic-4-question-52-discussion",
    ],
  },
  {
    id: "7",
    question: `Which two data exchange standards support clinical data in Health Cloud?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `HL7v2` },
      { id: "B", option: `DICOM 3.0` },
      { id: "C", option: `FHIR R4` },
      { id: "D", option: `SDTMv3.2` },
    ],
    answer: [{ id: "A" }, { id: "C" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.252.0.health_cloud_object_reference.meta/health_cloud_object_reference/hc_clinical_data_model.htm",
      "https://www.pass4success.com/salesforce/discussions/exam-health-cloud-accredited-professional-topic-4-question-41-discussion",
    ],
  },
  {
    id: "8",
    question: `Bloomington Caregivers has created and tested its first care plan template in a sandbox, Which includes problems, goals, and tasks. The company has deployed this template to its final environment using Data Loader. Which two steps should a consultant recommend, following this deployment, to enable users to successfully leverage this new template?`,
    questionType: "Multiple Choice",
    options: [
      {
        id: "A",
        option: `Conduct end-user training O he use of the care plan template.`,
      },
      { id: "B", option: `Confirm User access to Care plan objects.` },
      { id: "C", option: `Activate the new care plan template.` },
      {
        id: "D",
        option: `Activate the problems; goals, and tasks associated with the template.`,
      },
    ],
    answer: [{ id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_care_template_import.htm&type=5",
      "https://www.pass4success.com/salesforce/discussions/exam-health-cloud-accredited-professional-topic-1-question-37-discussion",
      "https://brainly.com/question/51429396",
    ],
  },
  {
    id: "9",
    question: `Bloomington Caregivers is looking to view potential drug-to-drug interactions for its patients' medications and make recommendations based on that data within Health Cloud.Which Health Cloud add-on should a consultant recommend to fulfill this requirement?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Allergy intolerance` },
      { id: "B", option: `RxNorm DDI connectivity` },
      { id: "C", option: `Medication interactions` },
      { id: "D", option: `Medication Management` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_health_RxNorm_API.htm&release=248&type=5",
      "https://www.pass4success.com/salesforce/discussions/exam-health-cloud-accredited-professional-topic-5-question-47-discussion",
    ],
  },
  {
    id: "10",
    question: `Bloomington Caregivers would like to send patient clinical data to an external payer, How should a consultant advise Bloomington Caregivers to make this information available to the payer using the most cost-effective method in out-of-the-box Health Cloud?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Build a custom remote call-in API into Salesforce.` },
      { id: "B", option: `Leverage the FHIR R4 Patient API` },
      { id: "C", option: `Use MuleSoft Accelerator with H 7 APL` },
      { id: "D", option: `Use a third-party tool from AppExChange.` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://www.mulesoft.com/exchange/org.mule.examples/fhir-r4-patient-api/",
      "https://www.mulesoft.com/exchange/org.mule.examples/hc-accelerator-sfdc-patient-api/minor/1.0/pages/Salesforce%20Health%20Cloud%20-%20UI%20view/",
      "https://www.pass4future.com/questions/salesforce/health-cloud-accredited-professional",
    ],
  },
  {
    id: "11",
    question: `Bloomiington Caregivers would like to display patient information from both Salesforce standard objects and data from an external system.Which three Health Cloud features should a consultant recommend the company use to display this on the patient record page?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Visualforce Pages` },
      { id: "B", option: `Salesforce Flows` },
      { id: "C", option: `FlexCards` },
      { id: "D", option: `Integration Procedures` },
      { id: "E", option: `DataRaptors` },
    ],
    answer: [{ id: "C" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://www.pass4future.com/questions/salesforce/health-cloud-accredited-professional",
      "https://www.coursehero.com/file/pfln6ppf/A-customer-wants-to-view-medica%C6%9Fon-data-from-Health-Cloud-leveraging-FHIR/",
    ],
  },
  {
    id: "12",
    question: `A customer wants to view and navigate to critical insurance, clinical, and primary care physician information on a patient's profile. Which Health Cloud capability should a consultant implement?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Advanced Patient Card` },
      { id: "B", option: `Patient Path` },
      { id: "C", option: `Enhanced Highlights Panel` },
      { id: "D", option: `Enhanced Timeline` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_health_advanced_patient_card.htm&release=238&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_advanced_patient_card.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_patient_card_overview.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_config_patient_card.htm&type=5",
      "https://www.pass4success.com/salesforce/discussions/exam-health-cloud-accredited-professional-topic-1-question-34-discussion",
    ],
  },
  {
    id: "13",
    question: `When implementing Provider Search functionality, which two changes allow an external user to access search results?`,
    questionType: "Multiple Choice",
    options: [
      {
        id: "A",
        option: `Give the site user profile Read access to the Data Pipeline object.`,
      },
      {
        id: "B",
        option: `Give the site user profile Read access to the Care Provider Searchable Field object`,
      },
      {
        id: "C",
        option: `Create a sharing rule on the Care Provider Searchable Field object to share with external users.`,
      },
      {
        id: "D",
        option: `Use Experience Builder to add the Provider Search component to a page on the site.`,
      },
    ],
    answer: [{ id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.hc_admin_provider_search_experience_cloud.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_provider_search_guest_user_profile_access_to_objects.htm&type=5",
      "https://www.pass4future.com/questions/salesforce/health-cloud-accredited-professional",
      "https://help.salesforce.com/s/articleView?id=sf.hc_provider_search_sharing_rules_guest_users.htm&type=5",
    ],
  },
  {
    id: "14",
    question: `An administrator is configuring security for a patient list.Which three considerations should the administrator take into account to ensure proper access to the list?`,
    questionType: "Multiple Choice",
    options: [
      {
        id: "A",
        option: `Administrators can restrict access to patient or member lists using standard Salesforce sharing settings on the list.`,
      },
      {
        id: "B",
        option: `Users with profile or permission sets that restrict access to an object cannot create a list using that object.`,
      },
      {
        id: "C",
        option: `Administrators can restrict access using HCPatientLisrSecurity custom setting`,
      },
      {
        id: "D",
        option: `When a user's field-level security restricts access to a field used as a display column, the column does not appear in the list`,
      },
      {
        id: "E",
        option: `Administrators can create restriction rules to offset a private organization-wide default setting`,
      },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_patient_list_sharing.htm&type=5",
      "https://www.p2pexams.com/free-questions/salesforce-health-cloud-accredited-professional-sp22-dumps-by-mueller-24-05-2024-7qa-dumpssheet.pdf",
    ],
  },
  {
    id: "15",
    question: `As part of a post-visit summary, a client wants to send patients information documenting their visit and care plan. A patient advocate will select from templates to create personalized documents to send. Which tool should a developer use to provide the necessary functionality?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Salesforce PDF Generator` },
      { id: "B", option: `OmniStudio Document Generation` },
      { id: "C", option: `Health Cloud Email Manager` },
      { id: "D", option: `Contract Lifecycle Management` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=ind.doc_gen_foundation_document_generation_overview_389381.htm&type=5",
      "https://www.p2pexams.com/free-questions/salesforce-health-cloud-accredited-professional-sp22-dumps-by-mueller-24-05-2024-7qa-dumpssheet.pdf",
    ],
  },
  {
    id: "16",
    question: `A new user story requires an OmniScript to update an existing field on a custom SObject. Which two components should a consultant use to satisfy the requirement?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `SOQL Query` },
      { id: "B", option: `API Actions` },
      { id: "C", option: `Integration Procedures` },
      { id: "D", option: `DataRaptors` },
    ],
    answer: [{ id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://www.p2pexams.com/free-questions/salesforce-health-cloud-accredited-professional-sp22-dumps-by-mueller-24-05-2024-7qa-dumpssheet.pdf",
    ],
  },
  {
    id: "17",
    question: `While working with a received document using Intelligent Document Automation, which three capabilities should a consultant leverage with Health Cloud out-of-the-box?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Barcode Scanning` },
      { id: "B", option: `Record Type Association` },
      { id: "C", option: `eFax Connection` },
      { id: "D", option: `Automated Document Checklist Item Creation` },
      { id: "E", option: `Document Rotation` },
    ],
    // answer: [{ id: "A" }, { id: "B" }, { id: "D" }],
    answer: [{ id: "B" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_create_document_checklist_items_automatically.htm&release=238&type=5",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_receiveddocument.htm",
      "https://chatgpt.com",
    ],
  },
  {
    id: "18",
    question: `During a design session, the client asks for best practices around when to use DataRaptors vs For which scenario should a consultant advise the client to use a single DataRaptor?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `The action must perform a SendMail task and check for any errors.`,
      },
      {
        id: "B",
        option: `The dataset requires connecting to an external data source, such as CSV or REST API`,
      },
      {
        id: "C",
        option: `The dataset required needs to read two SObjects with a clearly defined relationship.`,
      },
      {
        id: "D",
        option: `The task requires both a read and write of SObject data`,
      },
    ],
    answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.os_dataraptor_or_integration_procedure_8166.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.os_dataraptor_best_practices_47412.htm&type=5",
      "https://www.dumpspedia.com/health-cloud-accredited-professional-salesforce-health-cloud-accredited-professional-sp23-dumps.html",
    ],
  },
  {
    id: "19",
    question: `Bloomington Caregivers wants to share details about a patient's medical condition with Bedrock Hospitals through an integration. What should a consultant recommend as the appropriate method for Bedrock to access the information leveraging Health Cloud functionality?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Expose the MedicalCondition object through an Apex class.`,
      },
      { id: "B", option: `Integrate using the FHIR Clinical API` },
      { id: "C", option: `Use the FHIR Patient API through DataRaptor` },
      {
        id: "D",
        option: `Leverage the MedicalCondition Integration Procedure.`,
      },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/industries/health/overview",
      "https://help.salesforce.com/s/articleView?id=sf.admin_clinical_data_model_fhir.htm&type=5",
      "https://www.certsmarket.com/free-questions/salesforce/Health-Cloud-Accredited-Professional",
    ],
  },
  {
    id: "20",
    question: `While running user acceptance testing (UAT) for a customer, an end user is unable to view certain data on the Enhanced Timeline for Contact Center. What should be the first step in troubleshooting this issue?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Ensure the user has the right object permissions.` },
      { id: "B", option: `Ensure the component has been activated` },
      {
        id: "C",
        option: `Check the Health Cloud Data permission set assignment`,
      },
      {
        id: "D",
        option: `Check the Enhanced Patient permission set assignment`,
      },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.hc_timeline_salesforce_users.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_timeline_client_information.htm&type=5",
      "https://www.certsmarket.com/free-questions/salesforce/Health-Cloud-Accredited-Professional",
    ],
  },
  {
    id: "21",
    question: `Bloomington Caregivers wants to use patient or member lists for its care coordinators in its current implementation. What is an important consideration when implementing this in Health Cloud?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `An administrator can create an override filter field on the person account.`,
      },
      {
        id: "B",
        option: `If a user cannot access a field used in a fitter on a patient or member list, they will not be able to see the list`,
      },
      {
        id: "C",
        option: `An administrator can create lists or add records to existing lists from the Campaign object`,
      },
      {
        id: "D",
        option: `Fitter logic for patient or member lists is controlled by formula fields on records.`,
      },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_patient_list_sharing.htm&type=5",
      "https://www.coursehero.com/file/p6o0887d/39-Bloomington-Caregivers-wants-to-ensure-it-maintains-the-privacy-of-its-users/",
    ],
  },
  {
    id: "22",
    question: `Bloomington Caregivers is looking to migrate from Service Cloud to Health Cloud to take advantage of the prebuilt healthcare features and functionality.Which three prerequisites should Bloomington Caregivers' administrators complete to successfully install the Health Cloud managed package in its org?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Make data protection details available in records` },
      { id: "B", option: `Enable person accounts from Setup.` },
      { id: "C", option: `Enable Chatter settings from Setup.` },
      { id: "D", option: `Enable contacts to relate to multiple accounts.` },
      { id: "E", option: `Log a support case to have person accounts enabled` },
    ],
    // answer: [{ id: "B" }, { id: "C" }, { id: "D" }],
    answer: [{ id: "A" }, { id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_planning.htm&type=5",
      "file:///C:/Users/Lenovo/Downloads/Health%20Cloud%20PLC%20Workbook%20-%20Version%201.1.pdf",
    ],
  },
  {
    id: "23",
    question: `Bloomington Caregivers wants to ensure it maintains the privacy of its users' data by enabling data protection details for leads, contacts, and person accounts during the initial Health Cloud install and configuration.Which entity should the administrator enable within Data Protection and Privacy for Health Cloud to work in this scenario?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Fields` },
      { id: "B", option: `Records` },
      { id: "C", option: `Tasks` },
      { id: "D", option: `Objects` },
    ],
    // answer: [{ id: "A" }],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_make_data_protection_details_available_in_records.htm&type=5",
      "https://www.coursehero.com/file/p5fkqvtd/A-healthcare-provider-with-multiple-clinics-and-specialties-is-struggling-to/",
    ],
  },
  {
    id: "24",
    question: `A provider is looking to view a patient's insurance coverage, including co-pay and deductible information, prior to their appointment. Using Health Cloud, which two steps should a consultant take to access this information in the Benefit Verification component?`,
    questionType: "Multiple Choice",
    options: [
      {
        id: "A",
        option: `Configure the Connection Label with the source systems API details`,
      },
      {
        id: "B",
        option: `Create a new record for the HCBenVerConnect custom setting`,
      },
      {
        id: "C",
        option: `Configure the link to the clearinghouses endpoint using a Uniform Resource Identifier (URI) path.`,
      },
      {
        id: "D",
        option: `Create a named credential to support authenticated callouts.`,
      },
    ],
    // answer: [{ id: "B" }, { id: "D" }],
    answer: [{ id: "A" }, { id: "D" }],
    conform: true,
    reference: [
      "https://www.coursehero.com/file/p5fkqvtd/A-healthcare-provider-with-multiple-clinics-and-specialties-is-struggling-to/",
    ],
  },
  {
    id: "25",
    question: `A customer that already has Service Cloud is onboarding a new business unit, which needs to use Health Cloud. Which three organization-wide default settings should an administrator change to ensure the original business unit that leverages Service Cloud does not have visibility into protected health information (PHI)?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Set Person Accounts to Private.` },
      { id: "B", option: `Set Contact to Controlled by Parent.` },
      {
        id: "C",
        option: `Set related clinical objects to Controlled by Parent or Private.`,
      },
      {
        id: "D",
        option: `Set Health Details to Controlled by Parent or Private`,
      },
      {
        id: "E",
        option: `Set Account and Contract to Private.`,
      },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.account_person_behavior.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=000395996&type=1",
      "https://help.salesforce.com/s/articleView?id=sf.lsc_admin_enable_person_account.htm&type=5",
      "https://www.certshero.com/salesforce/health-cloud-accredited-professional/practice-test",
    ],
  },
  {
    id: "26",
    question: `Bloomington Caregivers is Implementing Health Cloud to streamline the process to register patients to care programs while capturing their consent. The company plans to leverage out-of-the-box Health Cloud features. Which Health Cloud feature should a consultant recommend the company use in this scenario?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Care Plan Enrollment Flow` },
      { id: "B", option: `Program Enrollment Flow` },
      { id: "C", option: `Enrollment Consent OmmScript` },
      { id: "D", option: `Program Eligibility OmniScript` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_programs_configure_enrollment_flow.htm&type=5",
      "https://www.certshero.com/salesforce/health-cloud-accredited-professional/practice-test",
    ],
  },
  {
    id: "27",
    question: `How should a consultant at a large provider system model a patient in Health Cloud?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Configure Account` },
      { id: "B", option: `Leverage Contact-Contact` },
      { id: "C", option: `Configure Contact` },
      { id: "D", option: `Leverage Person Account` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_patient_records.htm&type=5",
      "https://www.premiumdumps.com/salesforce/salesforce-health-cloud-accredited-professional-dumps",
    ],
  },
  {
    id: "28",
    question: `A healthcare provider with multiple clinics and specialties is struggling to manage its appointment scheduling process efficiently. Patients are experiencing long wait times on the phone and want to leverage self-service options.Which three Health Cloud capabilities should a consultant recommend configuring to provide a solution to improve patient satisfaction?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Intelligent Appointment Management` },
      { id: "B", option: `Intelligent Form Reader` },
      { id: "C", option: `Provider Search` },
      { id: "D", option: `Assessments and Recommendations` },
      { id: "E", option: `Experience Cloud for Hearth Cloud` },
    ],
    answer: [{ id: "A" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.set_up_intelligent_appointment_management.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_provider_search.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_appointment_management_self_service.htm&type=5",
      "https://www.coursehero.com/file/p5fkqvtd/A-healthcare-provider-with-multiple-clinics-and-specialties-is-struggling-to/",
    ],
  },
  {
    id: "29",
    question: `A customer compliance department requires encryption at rest, notification of activities, and extensive field tracking. What are some key considerations and recommended practices for supporting compliance in Salesforce?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Use Role Hierarchy to control data access, implement password policies for user accounts, and use IP Restrictions to limit access to trusted ^ networks`,
      },
      {
        id: "B",
        option: `Enable Salesforce Shield to monitor data access and usage, configure Data Classification for sensitive data, and use Event Monitoring to track user activity.`,
      },
      {
        id: "C",
        option: `Enable Field Audit Trail, implement encryption for sensitive data, and configure two-factor authentication for all users.`,
      },
      {
        id: "D",
        option: `Use the Salesforce Security Health Check to identify vulnerabilities, implement custom profiles and permission sets to control data access, and configure Data Loss Prevention policies to prevent data leakage.`,
      },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_salesforce_shield.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.data_classification_intro.htm&type=5",
    ],
  },
  {
    id: "30",
    question: `A consultant is implementing Identity Verification for their customer's customer service representatives and needs to add a new search parameter.Which record should the consultant configure to accomplish this?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Linked Identity Search Detail` },
      { id: "B", option: `Identity Verification Process Detail` },
      { id: "C", option: `Verification Search Feature` },
      { id: "D", option: `Identity Verification Parameter Item` },
    ],
    // answer: [{ id: "D" }],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.components_of_identity_verification.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=ind.comms_identity_verification_objects_and_fields_in_communications_cloud_b2c_agent_console.htm&type=5",
      "https://www.coursehero.com/file/p34mnp96/A-pharmaceutical-company-is-looking-to-support-patients-throughout-their/",
    ],
  },
  {
    id: "31",
    question: `A hospital system wants to track patient relationships to its cardiologist, primary care physician, and oncologist. Which object should a consultant recommend to implement?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Contact-Contact Relationship` },
      { id: "B", option: `Affiliation Relationship` },
      { id: "C", option: `Healthcare Practitioner Facility` },
      { id: "D", option: `Patient Provider Relationship` },
    ],
    // answer: [{ id: "D" }],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-data-models/take-a-look-at-the-household-data-model",
      "https://help.salesforce.com/s/articleView?id=sf.admin_data_model_hh.htm&type=5",
      "https://www.coursehero.com/file/p34mnp96/A-pharmaceutical-company-is-looking-to-support-patients-throughout-their/",
    ],
  },
  {
    id: "32",
    question: `A payer is looking for a solution to recruit, credential, and onboard providers into its network. Which Health Cloud add-on should help the payer address these requirements?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Provider Network Management` },
      { id: "B", option: `Contact Center for Payers` },
      { id: "C", option: `Provider Relationship Management` },
      { id: "D", option: `Utilization Management` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.landing_provider_network_mgmt.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_provider_network_relationship_management.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_provider_network_management.htm&type=5",
      "https://www.coursehero.com/file/p34mnp96/A-pharmaceutical-company-is-looking-to-support-patients-throughout-their/",
    ],
  },
  {
    id: "33",
    question: `A consultant is working with an insurance provider to set up prior authorizations in Health Cloud. The provider requires a display of preauthorization outcomes from its external system which manages the end-to-end prior authorization process Which solution is appropriate to meet this use case?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Service Preauth and Preauth Detail` },
      { id: "B", option: `Care Request and Care Request Item` },
      { id: "C", option: `Plan Benefit and Plan Benefit Item` },
      { id: "D", option: `Care Preauth and Care Preauth Item` },
    ],
    // answer: [{ id: "B" }],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_membership_data_model.htm",
      "https://www.coursehero.com/file/p34mnp96/A-pharmaceutical-company-is-looking-to-support-patients-throughout-their/",
    ],
  },
  {
    id: "34",
    question: `A pharmaceutical company is looking to support patients throughout their clinical journey. One of the factors the company needs to track is the socioeconomic and cultural barriers that could hinder a patient's process. Which Health Cloud capability should a consultant implement to fulfill this requirement?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Care Blockers` },
      { id: "B", option: `Clinical Barriers` },
      { id: "C", option: `Social Determinants of Health` },
      { id: "D", option: `Utilization Management` },
    ],
    answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.landing_social_determinants.htm&type=5",
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-data-models/discover-the-social-determinants-of-health-data-model",
      "https://www.coursehero.com/file/p34mnp96/A-pharmaceutical-company-is-looking-to-support-patients-throughout-their/",
    ],
  },
  {
    id: "35",
    question: `Bloomington Caregivers is implementing Health Cloud for managing the healthcare data of children under the age of 13. Which three considerations should the company take into account to ensure compliance with the Children's Online Privacy Protection Act (COPPA)?`,
    questionType: "Multiple Choice",
    options: [
      {
        id: "A",
        option: `Obtaining verified parental consent before collecting and storing any personal information of children`,
      },
      {
        id: "B",
        option: `Disclosing the organization's privacy policy to parents and obtaining their consent`,
      },
      {
        id: "C",
        option: `Ensuring that Bloomington Caregivers' system implementation partner has met all COPPA regulations during the build phase`,
      },
      {
        id: "D",
        option: `Implementing appropriate security measures to safeguard children's personal information`,
      },
      {
        id: "E",
        option: `Ensuring information collected about children is protected with at rest and in-transit encryption`,
      },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://www.coursehero.com/file/p3pgu768/Identify-key-stakeholders-and-how-they-measure-success-6-What-are-three/",
      "https://www.p2pexams.com/free-questions/salesforce-health-cloud-accredited-professional-dumps-by-reyes-09-08-2024-9qa-certscare.pdf",
    ],
  },
  {
    id: "36",
    question: `A MedTech company needs to manage its run rate business to ensure contract compliance for its customers. Which two features of Health Cloud should a consultant recommend the company use?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Remote Device Monitoring` },
      { id: "B", option: `MedTech Accelerator` },
      { id: "C", option: `Advanced Account Forecasting` },
      { id: "D", option: `Sales Agreements` },
    ],
    answer: [{ id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.aaf_admin_parent_concept.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.retail_concept_admin_sasettings_sa.htm&type=5",
      "https://www.coursehero.com/file/p2g4c1uk/A-MedTech-company-needs-to-manage-its-run-rate-business-to-ensure-contract/",
    ],
  },
  {
    id: "37",
    question: `Bloomington Caregivers has set up Health Cloud and needs to analyze patient referrals through Salesforce reports and dashboards. Which Health Cloud unmanaged package should a consultant recommend to deliver a prebuilt dashboard and reports?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Health Cloud Network Management Reports` },
      {
        id: "B",
        option: `Health Cloud Reports for Patient Referral Management ...`,
      },
      { id: "C", option: `Health Cloud Referral Management Reports` },
      { id: "D", option: `Health Cloud Member Referral Management Reports` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud.meta/health_cloud/admin_install_package.htm",
      "https://www.coursehero.com/file/pobu378/A-payer-needs-to-implement-a-program-to-address-the-rising-healthcare-expenses/",
    ],
  },
  {
    id: "38",
    question: `A pharma customer requires a scheduling tool to book infusions with multiple steps as part of its Health Cloud implementation. It needs a solution for care coordinators to book appointments without having to manually check availability and resources themselves. Which solution should a consultant recommend?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Intelligent Appointment Management` },
      { id: "B", option: `Procedure Scheduling` },
      { id: "C", option: `Salesforce Scheduler` },
      { id: "D", option: `Advanced Therapy Management` },
    ],
    // answer: [{ id: "A" }],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/advanced-therapy-management-in-health-cloud/explore-multi-step-scheduling",
      "https://help.salesforce.com/s/articleView?id=sf.admin_advanced_therapy_management_learn_about_multi_step_scheduling.htm&type=5",
      "https://www.coursehero.com/file/p1ovm6qo/A-pharma-customer-requires-a-scheduling-tool-to-book-infusions-with-mul%C6%9Fple/",
    ],
  },
  {
    id: "39",
    question: `A consultant needs to implement Health Cloud and is in the discovery stage of the project. Which three approaches should the consultant consider to collect information to understand where Health Cloud fits within the application architecture?`,
    questionType: "Multiple Choice",
    options: [
      {
        id: "A",
        option: `Identify personas involved and their existing pain points.`,
      },
      { id: "B", option: `Start writing Apex code to customize Health Cloud` },
      {
        id: "C",
        option: `Build an architecture diagram depicting Health Cloud integrations`,
      },
      {
        id: "D",
        option: `Create business process diagrams to understand information flow`,
      },
      {
        id: "E",
        option: `Identify key stakeholders and how they measure success`,
      },
    ],
    // answer: [{ id: "A" }, { id: "C" }, { id: "E" }],
    answer: [{ id: "A" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://www.coursehero.com/file/235743909/SET2-markedpdf/",
      "https://chatgpt.com/",
    ],
  },
  {
    id: "40",
    question: `Bloomington Caregivers needs to easily view all of the complex associations between patients, personal relationships, healthcare practitioners, other people, and organizations in healthcare. Which Health Cloud feature should a consultant leverage to meet this requirement7`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Care Team` },
      { id: "B", option: `Actionable Relationship Center` },
      { id: "C", option: `Enhanced Timeline` },
      { id: "D", option: `Patient Card` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.hc_actionable_relationship_center.htm&type=5",
      "https://www.coursehero.com/file/235743909/SET2-markedpdf/",
    ],
  },
  {
    id: "41",
    question: `A pharma company runs personalized medicine programs and needs the ability to coordinate various steps involved in the process, like apheresis and infusion. Which Health Cloud capability should help the company with this program?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Advanced Therapy Management` },
      { id: "B", option: `Intelligent Document Automation` },
      { id: "C", option: `Integrated Care Management` },
      { id: "D", option: `Intelligent Sales` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_advanced_therapy_management_overview.htm&type=5",
      "https://trailhead.salesforce.com/content/learn/modules/advanced-therapy-management-in-health-cloud/get-to-know-advanced-therapy-management",
      "https://www.coursehero.com/file/235743909/SET2-markedpdf/",
    ],
  },
  {
    id: "42",
    question: `Bloomington Caregivers is looking to streamline the user experience for its call center agents On the patient's record, the company wants the ability to:

    * Inform agents about changes in information
    
    * View basic details about a patients insurance
    
    * Have a complete view of all engagement interactions in one place
    
    Which three components from Contact Center for Health Cloud should a consultant use to achieve this?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Member Plan FlexCard` },
      { id: "B", option: `Identity Verification` },
      { id: "C", option: `Record Alerts` },
      { id: "D", option: `Action Launcher` },
      { id: "E", option: `Timeline` },
    ],
    // answer: [{ id: "C" }, { id: "D" }, { id: "E" }],
    answer: [{ id: "A" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_contact_center_profile_card_and_member_plan_flexcards.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.record_alerts.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_component_timeline.htm&type=5",
      "https://www.coursehero.com/file/235743909/SET2-markedpdf/",
    ],
  },
  {
    id: "43",
    question: `Bloomington Caregivers is implementing Home Health scheduling with Health Cloud. It must ensure that those who need to schedule the visits have the right permission set license. Which permission set license should a consultant assign in this scenario?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Field Dispatch Scheduler` },
      { id: "B", option: `Manage Home Health` },
      { id: "C", option: `Healthcare Visit Manager` },
      { id: "D", option: `Execute Health Scheduling` },
    ],
    // answer: [{ id: "C" }],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.hc_home_health_schedule_visits.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_admin_home_health_data_model_and_permissions.htm&type=5",
      "https://www.coursehero.com/file/p20ah4tv/A-developer-needs-to-modify-the-out-of-the-box-Advanced-Pa%C6%9Fent-Card-to-display/",
    ],
  },
  {
    id: "44",
    question: `Bloomington Caregivers has replaced its legacy Contact Center application with Health Cloud. During user acceptance testing (UAT), the call center team is reporting differences between current Identity Verification business processes and what was built in Health Cloud.

    The call center manager has requested the following changes:
    
    * Birth Date be available in results and as an optional verifier, but no longer required for verification purposes
    
    * Add 'Bloomington ID', a custom field on Account, to search results and as a required verifier
    
    What should a consultant do to meet these requirements?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Add two new Identity Verification Process Field records for 'Bloomington ID'; one with Field Type set to Result Field and one with Field Type set to Required Verifier Change the Birth Date record with Field Type value Required Verifier to Optional Verifier`,
      },
      {
        id: "B",
        option: `Add two new Identity Verification Process Field records for 'Bloomington ID'. Set the Field Type to Result Field and set the Required field to false. Add the new record to the Lightning component parameters in the identity flow screen in Flow Builder.`,
      },
      {
        id: "C",
        option: `Add 'Bloomington ID' to the picklist choices within the Identity Verification flow and mark it as required. Remove the Birth Date record from the required fields picklist and add Birth Date to the optional verifiers picklist.`,
      },
      {
        id: "D",
        option: `Add two new Identity Verification Process Field records for 'Bloomington ID'; one with the Field Type set to Result Field and one with Field Type set to Optional Verifier. Delete the Birth Date record which has the Field Type value Required Verifier.`,
      },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://www.p2pexams.com/free-questions/ebraindumps-salesforce-health-cloud-accredited-professional-sp22-exam-dumps-by-powell-12-12-2023-9qa.pdf",
      "https://www.pass4success.com/salesforce/discussions/exam-health-cloud-accredited-professional-topic-1-question-27-discussion",
    ],
  },
  {
    id: "45",
    question: `Bloomington Caregivers want to offer its patients remote monitoring to bring data from patient devices into Health Cloud. Which set of records should an administrator populate to implement this functionality?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Units of Measure, Remote Monitoring Device Types, Care Observations, Code Sets`,
      },
      {
        id: "B",
        option: `Code Sets, Units of Measure, Care Metric Targets, Care Observations`,
      },
      {
        id: "C",
        option: `Code Sets, Biometrics, Care Observations, Chart Metrics`,
      },
      {
        id: "D",
        option: `Units of Measure, Code Sets, Remote Monitoring Device Types, Care Episodes`,
      },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_remote_monitoring_setup.htm&type=5",
      "https://www.coursehero.com/file/p3uv0v2q/Bloomington-Caregivers-want-to-offer-its-pa%C6%9Fents-remote-monitoring-to-bring/",
    ],
  },
  {
    id: "46",
    question: `Bloomington Caregivers has configured the Provider Network Management add-on license. Some of the users are reporting that they are unable to access some of the new functionality. Which two permission sets should an administrator ensure are assigned so the users can access Provider Network Management?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Health Cloud Standard permission set` },
      { id: "B", option: `Provider Network Management permission set` },
      { id: "C", option: `Health Cloud Utilization Management permission set` },
      { id: "D", option: `Health Cloud Foundation permission set` },
    ],
    answer: [{ id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.perm_set_health_cloud_provider_network_management.htm&type=5",
    ],
  },
  {
    id: "47",
    question: `A customer is implementing Intelligent Appointment Management in Health Cloud to eliminate swivel chair to other scheduling systems. Which two connectivity options should a consultant leverage as the scheduling engine?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Business Rules Engine` },
      { id: "B", option: `Electronic Health Record (EHR) System` },
      { id: "C", option: `Salesforce Scheduler` },
      { id: "D", option: `Scheduler for Industries` },
    ],
    answer: [{ id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.set_up_intelligent_appointment_management.htm&type=5",
      "https://www.p2pexams.com/free-questions/ebraindumps-salesforce-health-cloud-accredited-professional-sp22-exam-dumps-by-powell-12-12-2023-9qa.pdf",
    ],
  },
  {
    id: "48",
    question: `Bloomington Caregivers would like to bulk upload information to support Provider Search and Provider Relationship Card. What are the two best practice recommendations to upload this information?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Use Provider Relationship API.` },
      { id: "B", option: `Use Composite API Request.` },
      { id: "C", option: `Use Provider Card API.` },
      { id: "D", option: `Use Data Loader.` },
    ],
    answer: [{ id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_create_provider_search_data.htm&type=5",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_provider_data_model_overview.htm",
      "https://www.p2pexams.com/free-questions/ebraindumps-salesforce-health-cloud-accredited-professional-sp22-exam-dumps-by-powell-12-12-2023-9qa.pdf",
    ],
  },
  {
    id: "49",
    question: `Bloomington Caregivers has decided to enable Integrated Care Management so that its end users can leverage Health Cloud Assessments. Administrators must now configure their org to be able to use Assessments. Which three steps should the administrator take as part of the org setup to enable Assessments?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Enable Discovery Framework in Setup.` },
      { id: "B", option: `Add the Assessment component to the Patient page.` },
      { id: "C", option: `Download and Install OmniStudio.` },
      { id: "D", option: `Update sharing settings in Setup.` },
      { id: "E", option: `Enable users to view and complete Assessments.` },
    ],
    // answer: [{ id: "A" }, { id: "B" }, { id: "E" }],
    answer: [{ id: "A" }, { id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.hc_admin_integrated_care_management_set_up_discovery_framework.htm&type=5",
    ],
  },
  {
    id: "50",
    question: `Bloomington Caregivers currently has the organization-wide default controlling patient access set to Private. A new respiratory therapist is being added to support a patient at Bloomington Caregivers, and the therapist needs access to the patient's data. How should an administrator grant access to the respiratory therapist using out-of-the-box Health Cloud features?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Add the respiratory therapist to the patient's Account Team and default access will be automatically granted.`,
      },
      {
        id: "B",
        option: `Add the respiratory therapist to the patient's Care Team and default access will be automatically granted.`,
      },
      {
        id: "C",
        option: `Add the respiratory therapist to the patient's Account Team and grant Read or Read/Write access as needed.`,
      },
      {
        id: "D",
        option: `Add the respiratory therapist to the patient's Care Team and grant Read or Read/Write access as needed.`,
      },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_care_team_roles.htm&type=5",
      "https://www.p2pexams.com/free-questions/ebraindumps-salesforce-health-cloud-accredited-professional-sp22-exam-dumps-by-powell-12-12-2023-9qa.pdf",
    ],
  },
  {
    id: "51",
    question: `An administrator for Salesforce Health Cloud wants to ensure that the files in their full sandbox instance are encrypted. Which encryption solution supports the encryption of files in this scenario?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Industry Data Security` },
      { id: "B", option: `Salesforce Data Mask` },
      { id: "C", option: `Classic Encryption` },
      { id: "D", option: `Salesforce Shield` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.security_pe_enable_files_attachments.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.security_pe_concepts.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.security_pe_masking.htm&type=5",
      "https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/security_pe_vs_classic_encryption.htm",
      "https://help.salesforce.com/s/articleView?id=sf.data_mask_overview.htm&type=5",
      "https://www.p2pexams.com/free-questions/ebraindumps-salesforce-health-cloud-accredited-professional-sp22-exam-dumps-by-powell-12-12-2023-9qa.pdf",
    ],
  },
  {
    id: "52",
    question: `A bug is assigned to a developer stating that when an address contains data in the Address Line 2 field, the FlexCard display adds additional line, causing formatting issues. How should the developer handle this in a DataRaptor without changing the underlying data structures?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Modify the Extract DataRaptor to concatenate the address fields by using a formula.`,
      },
      {
        id: "B",
        option: `Replace the Extract DataRaptor with a Transform DataRaptor to convert the data as needed.`,
      },
      {
        id: "C",
        option: `Create a new Turbo Extract DataRaptor to trim the Address data in both fields.`,
      },
      {
        id: "D",
        option: `Add a Load DataRaptor to write the data into one new custom field.`,
      },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.os_dataraptors.htm&type=5",
    ],
  },
  {
    id: "53",
    question: `A provider is looking to implement Utilization Management in Health Cloud and submit and track prior authorizations. Which two capabilities should a consultant customize to achieve this?`,
    questionType: "Multiple Choice",
    options: [
      {
        id: "A",
        option: `Create a new UtilizationManagementSettings record in Custom Settings.`,
      },
      {
        id: "B",
        option: `Create a new Support Process to match the customer's process steps.`,
      },
      {
        id: "C",
        option: `Integrate using MuleSoft Direct for electronic Prior Authorizations (ePA).`,
      },
      { id: "D", option: `Customize the Service Request object.` },
    ],
    answer: [{ id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_um_data_model.htm&type=5",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_ServiceRequest.htm",
    ],
  },
  {
    id: "54",
    question: `At Bloomington Caregivers, care coordinators can only view patient records they own in Health Cloud. Moving forward, a small subset of auditors need access. What should a consultant do to expand this access?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Create a user access policy with grant permissions.`,
      },
      {
        id: "B",
        option: `Update organization-wide default for Account and Contract to Public Read-Only.`,
      },
      {
        id: "C",
        option: `Create a restriction rule for the Person Account object.`,
      },
      { id: "D", option: `Create a criteria-based Account sharing rule.` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_patient_list_sharing.htm&type=5",
      "https://www.coursehero.com/file/p3uv0v2q/Bloomington-Caregivers-want-to-offer-its-pa%C6%9Fents-remote-monitoring-to-bring/",
    ],
  },
  {
    id: "55",
    question: `A healthcare organization is launching a new gene therapy program, and an administrator needs to leverage Advanced Therapy Management. In which two ways does Advanced Therapy Management assist the healthcare organization with its complex scheduling requirements?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Schedule a telehealth appointment.` },
      { id: "B", option: `Reschedule part of the appointment chain.` },
      { id: "C", option: `Book multi-step appointments.` },
      { id: "D", option: `Optimize appointment chain with Einstein.` },
    ],
    answer: [{ id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_advanced_therapy_management_overview.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.advanced_therapy_management_summary.htm&type=5",
      "https://www.pass4success.com/salesforce/discussions/exam-health-cloud-accredited-professional-topic-1-question-30-discussion",
    ],
  },
  {
    id: "56",
    question: `Bloomington Caregivers needs to monitor care plan adherence for the patients at various facilities within its network. What is available to extend the reporting capability of Health Cloud?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Care Management Extension` },
      { id: "B", option: `CRM Analytics for Health Cloud` },
      { id: "C", option: `Insights for Health Cloud` },
      { id: "D", option: `Reporting unmanaged package` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_health_analytics_care_managers.htm&release=244&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.analytics_health_dashboards_care_performance.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.analytics_health_overview.htm&type=5",
      "https://www.pass4success.com/salesforce/discussions/exam-health-cloud-accredited-professional-topic-1-question-31-discussion",
    ],
  },
  {
    id: "57",
    question: `An agent at a MedTech company requires a Ul component that displays customer data and contains a link to create a new order. Once clicked, the link starts a process to build a new order and displays the available products for purchase. Which three OmniStudio capabilities are required to solve this use case?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `DataRaptors` },
      { id: "B", option: `OmniScript` },
      { id: "C", option: `FlexCards` },
      { id: "D", option: `Document Generation` },
      { id: "E", option: `Integration Procedures` },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "E" }],
    // answer: [{ id: "B" }, { id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=ind.v_contracts_t_document_generation_overview_379872.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=ind.doc_gen_foundation_document_generation_overview_389381.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=ind.v_contracts_t_using_the_generic_document_generation_omniscript_386991.htm&type=5",
      "https://chatgpt.com/",
    ],
  },
  {
    id: "58",
    question: `Bloomington Caregivers is launching a patient portal with contact tracing functionality as part of its Health Cloud implementation. Users require the ability to leverage advanced sharing and customizable dashboards. Which license should a consultant recommend for the external patient users?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `External Apps for Health Cloud` },
      { id: "B", option: `Experience Cloud for Health Cloud` },
      { id: "C", option: `Customer Community for Health Cloud` },
      { id: "D", option: `Customer Community Plus for Health Cloud` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_communities_license_access.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.experience_cloud_for_health_cloud_faq.htm&type=5",
    ],
  },
  {
    id: "59",
    question: `A developer needs to modify the out-of-the-box Advanced Patient Card to display the Category, SubjectID, and Date for active Clinical Alerts. Which three steps should the developer take to accomplish this?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Create and activate a new child card.` },
      { id: "B", option: `Clone the parent card.` },
      {
        id: "C",
        option: `Define session variables to control visibility of clinical data.`,
      },
      { id: "D", option: `Create a DataRaptor to extract necessary data.` },
      { id: "E", option: `Change the child card state to show active.` },
    ],
    answer: [{ id: "A" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://www.coursehero.com/file/p20ah4tv/A-developer-needs-to-modify-the-out-of-the-box-Advanced-Pa%C6%9Fent-Card-to-display/",
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_health_advanced_patient_card.htm&release=238&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_advanced_patient_card.htm&type=5",
    ],
  },
  {
    id: "60",
    question: `A customer is looking to implement Discovery Framework to manage their intake and clinical assessments. Which three capabilities should a consultant configure with Health Cloud out-of-the-box to enhance their assessment functionality?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `FHIR Question Bank` },
      { id: "B", option: `Using Previously Submitted Responses` },
      { id: "C", option: `Digital Signature Capture` },
      { id: "D", option: `Adding a QR Code` },
      { id: "E", option: `SMS Assessment Completion` },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "D" }],
    // answer: [{ id: "A" }, { id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.hc_admin_assessments_prefill.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.capture_respondents_signature_on_the_form.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.use_qr_codes_on_assessment_forms.htm&type=5",
      "https://www.pass4success.com/salesforce/health-cloud-accredited-professional/dumps",
      "https://www.p2pexams.com/free-questions/salesforce-health-cloud-accredited-professional-sp22-braindumpscollection-actual-questions-by-walker-18-01-2024-7qa.pdf",
    ],
  },
  {
    id: "61",
    question: `While a consultant is implementing Integrated Care Management for a customer, the customer requests that a change is made to the Care Plan creation wizard. Which underlying component should the consultant customize to achieve this?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Field Sets` },
      { id: "B", option: `FlexCard` },
      { id: "C", option: `Flow` },
      { id: "D", option: `OmniScript` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_health_create_care_plans_from_care_gaps.htm&release=246&type=5",
      "https://www.pass4success.com/salesforce/discussions/exam-health-cloud-accredited-professional-topic-1-question-29-discussion",
    ],
  },
  {
    id: "62",
    question: `A provider has moved an existing office to a new location and wants to ensure that whenever a patient books an existing portal, the patient receives an email with the new address. How should a developer modify the existing Create Appointment Integration Procedure to solve the request?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Remove the Try-Catch.` },
      { id: "B", option: `Build If-Elself logic.` },
      { id: "C", option: `Add a Conditional Block.` },
      { id: "D", option: `Update the Test Condition.` },
    ],
    answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.os_create_a_conditional_block_example_with_if_elseif_else_logic_48581.htm&type=5",
      "https://www.passeidireto.com/arquivo/130125510/salesforce-health-cloud-accredited-professional-dumps",
    ],
  },
  {
    id: "63",
    question: `A payer needs to connect an electronic health record (EHR) to Health Cloud to display key clinical data to Health Cloud users. The data in the source system is aligned to FHIR R4 standards, but some transformation is anticipated. Which approach should a consultant use to set up this integration?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `A middleware integration solution that can handle data transformation if necessary`,
      },
      {
        id: "B",
        option: `A point-to-point API connection from the EHR to Health Cloud`,
      },
      {
        id: "C",
        option: `A 'swivel-chair' standard operating procedure document that will be distributed to users`,
      },
      {
        id: "D",
        option: `A scheduled batch job that retrieves a file from an SFTP`,
      },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_considerations.htm",
      "https://www.passreview.com/articles/feb-2024-health-cloud-accredited-professional-exam-dumps-pass-with-updated-2024-salesforce-health-cloud-accredited-professional-q65-q80/#",
    ],
  },
  {
    id: "64",
    question: `Bloomington Caregivers is implementing Virtual Care in Health Cloud. Which three steps are required as part of the setup?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Configure Provider Search.` },
      { id: "B", option: `Set up and configure Salesforce Scheduler` },
      {
        id: "C",
        option: `Connect to an external electronic health record (EHR) scheduling system.`,
      },
      { id: "D", option: `Assign Health Cloud Video Calls permission set.` },
      { id: "E", option: `Install the Virtual Care unmanaged package.` },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_health_virtual_care_enable.htm&release=240&type=5",
      "https://www.coursehero.com/file/p4o22co7b/An-agent-at-a-MedTech-company-requires-a-Ul-component-that-displays-customer/",
    ],
  },
  {
    id: "65",
    question: `Bloomington Caregivers would like to share patient medication information with an external pharmacy as soon as it's updated in Bloomington Caregivers' Health Cloud system. It would also like to receive an immediate confirmation about any medication interactions from the pharmacy. Which two integration patterns should a consultant recommend?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Industries ETL` },
      { id: "B", option: `Platform Event` },
      { id: "C", option: `OmniStudio Integration Procedure` },
      { id: "D", option: `Apex HTTP Callout` },
    ],
    answer: [{ id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_intro.htm",
      "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_callouts_http.htm",
    ],
  },
  {
    id: "66",
    question: `Bloomington Caregivers has decided to expand its Health Cloud implementation to include a Crisis Support Center. Which two steps should an administrator take as part of the implementation?`,
    questionType: "Multiple Choice",
    options: [
      {
        id: "A",
        option: `Assign users the Health Cloud Crisis Support Center Management permission set license.`,
      },
      {
        id: "B",
        option: `Install the Crisis Support Center unmanaged package.`,
      },
      {
        id: "C",
        option: `Enable Crisis Support Center Management App in Setup.`,
      },
      {
        id: "D",
        option: `Review and modify the Crisis Center Intake flow in Flow Builder to meet requirements.`,
      },
    ],
    answer: [{ id: "A" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_crisis_center_overview.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_crisis_center_assign_permission_sets_and_permission_set_licenses.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_crisis_center_enable_crisis_center_app.htm&type=5",
    ],
  },
  {
    id: "67",
    question: `A customer wants to leverage dependent intervention tasks as part of their care coordination solution using Integrated Care Management. Which feature should a consultant configure to accomplish this task?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Intervention Templates` },
      { id: "B", option: `Action Plan Templates` },
      { id: "C", option: `Care Plan Task Templates` },
      { id: "D", option: `Industry Template Library` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_set_up_action_plan_templates.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_admin_integrated_care_management_pgi_library.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_admin_integrated_care_management_create_action_plan_template.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_integrated_care_management_add_interventions.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_admin_integrated_care_management_create_action_plan_template_assignments.htm&type=5",
    ],
  },
  {
    id: "68",
    question: `A payer is looking to optimize the workflow for its call center, which focuses primarily on members calling to check on the status of their prior authorization requests. How should a consultant conduct discovery to define a workflow for these call center users?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Identify personas and ask them to walk through a day in their life, taking notes and identifying opportunities for optimization.`,
      },
      {
        id: "B",
        option: `Use work from another project to inform the discovery, then review it with the IT department.`,
      },
      {
        id: "C",
        option: `Build a proof of concept to present to the client and ask them for feedback.`,
      },
      {
        id: "D",
        option: `Research industry trends and develop a point of view, then present it to the customer for validation.`,
      },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://examsboost.actualpdf.com/articles/salesforce-health-cloud-accredited-professional-exam-dumps-2023-practice-valid-exam-dumps-question-q90-q107/#",
    ],
  },
  {
    id: "69",
    question: `What are three requirements for implementing patients or members in Health Cloud?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Ensure the Person Account object is used.` },
      { id: "B", option: `Ensure the Parent Contact object is blank.` },
      { id: "C", option: `Ensure l-to-1 Account to Contact relationship.` },
      { id: "D", option: `Ensure the Parent Account field is blank.` },
      {
        id: "E",
        option: `Ensure the Account is the Parent to Household Accounts.`,
      },
    ],
    answer: [{ id: "A" }, { id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/impl_person_accounts.pdf",
      "https://help.salesforce.com/s/articleView?id=sf.account_person_enable.htm&type=5",
    ],
  },
  {
    id: "70",
    question: `Which industry data standard should a with Health Cloud?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Personal Health Record (PHR)` },
      { id: "B", option: `Clinical Data Acquisition` },
      { id: "C", option: `HL7 v1 Messaging` },
      { id: "D", option: `FHIRR4` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hl7.htm",
      "https://examsboost.actualpdf.com/articles/salesforce-health-cloud-accredited-professional-exam-dumps-2023-practice-valid-exam-dumps-question-q90-q107/#",
    ],
  },
  {
    id: "71",
    question: `A provider wants to get a comprehensive view of a patient's prescriptions, including history, to improve health outcomes. Which Health Cloud capability should a consultant leverage to assist the provider?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Intelligent Appointment Management` },
      { id: "B", option: `Medication Management` },
      { id: "C", option: `Integrated Care Management` },
      { id: "D", option: `Virtual Care` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_medication_management.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.medication_management.htm&type=5",
    ],
  },
  {
    id: "72",
    question: `A call center agent at Bloomington Caregivers wants the ability to look up providers by appointment on behalf of their patients. Which two capabilities should a consultant recommend to enable this requirement?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Experience Cloud for Health Cloud` },
      { id: "B", option: `Provider Search` },
      { id: "C", option: `Intelligent Appointment Management` },
      { id: "D", option: `Integrated Care Management` },
    ],
    answer: [{ id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://www.coursehero.com/file/p4fgf41o/58-A-call-center-agent-at-Bloomington-Caregivers-wants-the-ability-to-look-up/",
    ],
  },
  {
    id: "73",
    question: `A provider wants to set up a Contact Center leveraging Health Cloud to enable its patients to set up appointments, get answers to their billing questions, and update their plan information. Which group of people should a consultant work with to identify pain points and define project requirements?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `(Persona) General physician
      (Stakeholder) Salesforce administrator
      (Stakeholder) Marketing Cloud administrator`,
      },
      {
        id: "B",
        option: `(Persona) Contact Center agent
      (Stakeholder) Salesforce administrator
      (Stakeholder) Integration architect`,
      },
      {
        id: "C",
        option: `(Persona) Care coordinator
      (Stakeholder) Salesforce administrator
      (Stakeholder) Tableau developer`,
      },
      {
        id: "D",
        option: `(Persona) Contact Center agent
      (Stakeholder) Tableau developer
      (Stakeholder) MuleSoft developer`,
      },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://www.passeidireto.com/arquivo/130125510/salesforce-health-cloud-accredited-professional-dumps",
      "https://help.salesforce.com/s/articleView?id=sf.admin_contact_center_in_health_cloud.htm&type=5",
    ],
  },
  {
    id: "74",
    question: `A provider system wants to leverage Health Cloud to enable its care providers to conduct video visits socioeconomic factors that impact their care. Which capability should a consultant recommend for this use case?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Integrated Care Management` },
      { id: "B", option: `Intelligent Appointment Management` },
      { id: "C", option: `Telehealth` },
      { id: "D", option: `Virtual Care` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_virtual_care.htm&type=5",
      "https://www.coursehero.com/file/235743909/SET2-markedpdf/",
    ],
  },
  {
    id: "75",
    question: `Which Health Cloud feature helps ensure compliance with Health Insurance Portability and Accountability Act (HIPAA) regulations?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Real-time monitoring and alerts` },
      { id: "B", option: `Social media integration` },
      { id: "C", option: `Data visualization and analytics` },
      { id: "D", option: `User authentication and access control` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_forcecom_external_data.htm&release=228&type=5",
      "https://www.actual4test.com/discussions/Salesforce/exam-health-cloud-accredited-professional-topic-1-question-18-discussion-p1051743.html",
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_forcecom_external_data.htm&release=228&type=5",
    ],
  },
  {
    id: "76",
    question: `An external provider wants to get a patient's allergy information from Bloomington Caregivers' Health Cloud system. Which Health Cloud API should a consultant recommend?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `AllergyMedication API` },
      { id: "B", option: `Patient Healthcare API` },
      { id: "C", option: `Interoperability API` },
      { id: "D", option: `Clinical Summary Healthcare API` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/industries/health/references/clinical_summary?meta=Summary",
      "https://help.salesforce.com/s/articleView?id=release-notes.health_cloud_fhir_apis.htm&release=240&type=5",
    ],
  },
  {
    id: "77",
    question: `Bloomington Caregivers has identified the need to encrypt data to comply with the Health Insurance Portability and Accountability Act (HIPAA). What are three key considerations when complying with HIPAA regulations using Salesforce Shield in conjunction with Bloomington Caregivers' data strategy?`,
    questionType: "Multiple Choice",
    options: [
      {
        id: "A",
        option: `Ensuring that sensitive data is encrypted both in transit and at rest`,
      },
      {
        id: "B",
        option: `Configuring data retention policies to ensure that records are retained for the appropriate length of time`,
      },
      {
        id: "C",
        option: `Using third-party data backup solutions to store backups of sensitive data off-site`,
      },
      {
        id: "D",
        option: `Implementing audit trails and regularly reviewing them to detect unauthorized access attempts`,
      },
      {
        id: "E",
        option: `Providing access to third-party auditors to regularly review Shield implementation settings`,
      },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_salesforce_shield.htm&type=5",
      "https://cloudely.com/salesforce-health-cloud-explained/",
    ],
  },
  {
    id: "78",
    question: `During a sprint demo, a customer wants to update fields in the Ul on the Patient Medication Manager component. Which two objects is a consultant able to add and/or remove fields from?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Medication Dispense` },
      { id: "B", option: `Medication Strength` },
      { id: "C", option: `Medication Details` },
      { id: "D", option: `Medication Request` },
    ],
    answer: [{ id: "A" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_medication_management_config.htm&type=5",
      "https://examtorrent.testkingpdf.com/articles/jan-2024-updated-and-accurate-health-cloud-accredited-professional-questions-answers-for-passing-the-exam-quickly-q109-q133/#",
    ],
  },
  {
    id: "79",
    question: `A pharma company wants the ability to:

    * Upload a patient's insurance card, including automatic Member Plan record creation
    
    * Run a benefits verification check
    
    * Schedule on behalf of the patient with a provider
    
    Which set of Health Cloud capabilities should enable the company to build this business process?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Intelligent Document Automation, Intelligent Appointment Management, Intelligent Document Reader, Benefits Verification`,
      },
      {
        id: "B",
        option: `Virtual Care, Intelligent Appointment Management, Intelligent Document Automation, Intelligent Document Reader`,
      },
      {
        id: "C",
        option: `Intelligent Appointment Management, Benefits Verification, Intelligent Document Automation, eFax Integration`,
      },
      {
        id: "D",
        option: `Utilization Management, Care Management, Intelligent Document Automation, Intelligent Appointment Management`,
      },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_doc_automation.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.set_up_intelligent_appointment_management.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.intelligent_document_reader.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_benefit_verification.htm&type=5",
    ],
  },
  {
    id: "80",
    question: `A clinic is looking to manage its associated physicians within Health Cloud. Which two objects support Salesforce's recommended approach to model the doctors in the clinic's Health Cloud org?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Person Account` },
      { id: "B", option: `Contact` },
      { id: "C", option: `Healthcare Provider` },
      { id: "D", option: `Healthcare Practitioner` },
    ],
    answer: [{ id: "A" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_patient_records.htm&type=5",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_healthcareprovider.htm",
    ],
  },
  {
    id: "81",
    question: `A pharma company wants to leverage Provider Search to help patients find nearby infusion clinics. Which Health Cloud tool should a consultant leverage to drive performance and scalability?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Flow for Industries` },
      { id: "B", option: `Pipeline Analytics` },
      { id: "C", option: `Business Rules Engine` },
      { id: "D", option: `Data Processing Engine` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_provider_search_setup.htm&type=5",
    ],
  },
  {
    id: "82",
    question: `Bloomington Caregivers uses Health Cloud and has an integration setup with an external payer system. Which three business level APIs should a consultant recommend to help the payer organization electronically receive requests for services?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Admission, Discharge, and Transfer (ADT)` },
      { id: "B", option: `Prior Authorization` },
      { id: "C", option: `Care Services` },
      { id: "D", option: `Benefit Verification` },
      { id: "E", option: `Referral Request` },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_care_services_review_intro.htm",
      "https://www.pass4test.com/Health-Cloud-Accredited-Professional-exam-questions.html",
    ],
  },
  {
    id: "83",
    question: `Bloomington Caregivers is implementing Health Cloud to reduce manual processes for its Contact Center agents. To help streamline caller authentication, the company plans to leverage out-of-the-box Health Cloud features. Which Health Cloud feature should a consultant recommend the company use in this scenario?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Customer Identity OmniScript Templates` },
      { id: "B", option: `Reusable Verification FlexCards` },
      { id: "C", option: `Verify Customer Identity Process Flow` },
      { id: "D", option: `Identity Verification Flow Templates` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.fsc_identity_verification.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_provided_flows.htm&type=5",
    ],
  },
  {
    id: "84",
    question: `A customer wants to view medication data from Health Cloud leveraging FHIR standards. Which Health Cloud data model should a consultant use?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Integrated Care Management data model` },
      { id: "B", option: `Electronic health record (EHR) data model` },
      { id: "C", option: `Virtual Care data model` },
      { id: "D", option: `Clinical data model` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_clinical_data_model.htm",
    ],
  },
  {
    id: "85",
    question: `A MedTech company is implementing Health Cloud to better plan and track surgical case visits, manage device inventory and run cycle counts. Which data model should a consultant recommend the company use?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Intelligent Sales` },
      { id: "B", option: `Inventory Management` },
      { id: "C", option: `Life Sciences` },
      { id: "D", option: `Provider Engagement` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      `https://help.salesforce.com/s/articleView?id=sf.IS_intelligent_sales.htm&type=5`,
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_intelligent_sales_data_model.htm",
      "https://www.coursehero.com/file/pfln6ppf/A-customer-wants-to-view-medica%C6%9Fon-data-from-Health-Cloud-leveraging-FHIR/",
    ],
  },
  {
    id: "86",
    question: `A provider would like to create Salesforce reports to analyze patient outcomes and patient referrals. Which three steps should a consultant recommend as part of the reporting setup to ensure the provider can view this report appropriately?`,
    questionType: "Multiple Choice",
    options: [
      {
        id: "A",
        option: `Enable the enhanced Analytics for Healthcare setting in Setup.`,
      },
      { id: "B", option: `Create custom report types for clinical objects.` },
      { id: "C", option: `Assign appropriate permissions to internal users.` },
      {
        id: "D",
        option: `Leverage the Patient Referral Management unmanaged package.`,
      },
      {
        id: "E",
        option: `Adjust template care management reports and dashboards.`,
      },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_utlization_management_reports.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sfdo.CM_Reports_Dashboards.htm&type=5",
      "https://www.dumpspedia.com/health-cloud-accredited-professional-salesforce-health-cloud-accredited-professional-sp23-dumps.html",
    ],
  },
  {
    id: "87",
    question: `A health plan provider would like to manage prior authorizations with predefined approval criteria. Which three features in Health Cloud should a consultant recommend in this case?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Claims data model` },
      { id: "B", option: `Business Rules Engine` },
      { id: "C", option: `Utilization Management data model` },
      { id: "D", option: `Intelligent Appointment Management` },
      { id: "E", option: `Out-of-the-box Process libraries` },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-utilization-management/explore-utilization-management-for-payers",
      "https://help.salesforce.com/s/articleView?id=sf.admin_utilization_management_prior_auth_processsetup.htm&type=5",
    ],
  },
  {
    id: "88",
    question: `A pharma company is implementing Health Cloud and trying to track insurance details related to its patients. The company wants to track:

    * A list of all payer organizations
    
    * The plans offered by a given payer
    
    * The standard benefits available under a plan
    
    * Which plan a given patient is enrolled in and their specific insurance details
    
    Which set of objects should a consultant implement to meet these requirements?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Account, Purchaser Plan, Member Benefit, Insurance Plan`,
      },
      {
        id: "B",
        option: `Purchaser, Insurance Plan, Insurance Benefit, Plan Detail`,
      },
      { id: "C", option: `Account, Purchaser Plan, Plan Benefit, Member Plan` },
      {
        id: "D",
        option: `Payer, Plan Offering, Coverage Benefit, Member Plan`,
      },
    ],
    answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_purchaserplan_bv.htm",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_planbenefit.htm",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_memberplan.htm",
    ],
  },
  {
    id: "89",
    question: `A payer is implementing Health Cloud and wants to leverage predefined rules for its prior authorization request review process. The payer would like to leverage out-of-the-box Health Cloud functionality to drive speed to value. Which prebuilt feature should a consultant recommend the payer leverage?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Integration Procedures` },
      { id: "B", option: `OmniScript Templates` },
      { id: "C", option: `FlexCards` },
      { id: "D", option: `Expression Set Templates` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.bre_expression_set_templates.htm&type=5",
    ],
  },
  {
    id: "90",
    question: `A payer needs to implement a program to address the rising healthcare expenses and ensure affordable care for its members. The payer aims to strike a balance between quality care and managing the cost of care effectively by streamlining its approval processes for care requests. Which capability in Health Cloud helps the payer accomplish this?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Provider Network Management` },
      { id: "B", option: `Intelligent Appointment Management` },
      { id: "C", option: `Utilization Management` },
      { id: "D", option: `Integrated Care Management` },
    ],
    answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-utilization-management/learn-about-utilization-management",
      "https://www.coursehero.com/file/pobu378/A-payer-needs-to-implement-a-program-to-address-the-rising-healthcare-expenses/",
    ],
  },
  {
    id: "91",
    question: `A customer wants to move its existing Patient-Reported Outcome Measures (PROMs) surveys to Health Cloud. It requires a solution that allows for question banks and version control for this standardized survey. Which solution should a consultant recommend?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Salesforce Feedback Management` },
      { id: "B", option: `Health Cloud Forms` },
      { id: "C", option: `Discovery Framework` },
      { id: "D", option: `Salesforce Surveys` },
    ],
    answer: [{ id: "A" }],
    // answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.concept_salesforce_surveys.htm&type=5",
    ],
  },
  {
    id: "92",
    question: `Bloomington Caregivers wants to show its end users highlighted information about its providers that work at specific facilities, in one place. This would include provider contact details and the provider's specialty at a given facility. Which Health Cloud feature should a consultant implement to fulfill this requirement?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Provider Relationship Card` },
      { id: "B", option: `Provider Network Management` },
      { id: "C", option: `Facility Relationship Center` },
      { id: "D", option: `HCProvider360 FlexCard` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_provider_cards.htm&type=5",
      "https://www.coursehero.com/file/pfln6ppf/A-customer-wants-to-view-medica%C6%9Fon-data-from-Health-Cloud-leveraging-FHIR/",
    ],
  },
  {
    id: "93",
    question: `Care managers at Bloomington Caregivers call patients after they are discharged from a hospital to ask a series of questions, which the care manager enters into Health Cloud. The patient is then automatically assigned a personalized care plan based on the answers they provided. Which two capabilities should a consultant leverage together to fulfill this requirement?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Discovery Framework` },
      { id: "B", option: `Integrated Care Management` },
      { id: "C", option: `Care Programs` },
      { id: "D", option: `Salesforce Surveys` },
    ],
    answer: [{ id: "A" }, { id: "B" }],
    // answer: [{ id: "A" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.hc_admin_integrated_care_management.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.fsc_discovery_framework_overview.htm&type=5",
    ],
  },
  {
    id: "94",
    question: `A payer needs to enable its agents to answer questions from members regarding their benefits coverage. The payer has already set up the required objects to be populated with the necessary information through an integration. Which Health Cloud component should a consultant recommend for the Member record page?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Benefits Verification` },
      { id: "B", option: `Eligibility Validation` },
      { id: "C", option: `Benefits Coverage` },
      { id: "D", option: `Coverage Confirmation` },
    ],
    answer: [{ id: "A" }],
    // answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_benefit_verification.htm&type=5",
    ],
  },
  {
    id: "95",
    question: `A provider uses an external appointment management system. The default solution provided by Health Cloud is not viable for the How should a consultant implement a robust system for the provider?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Use an electronic health record (EHR) routing system to book the appointment in Health Cloud.`,
      },
      {
        id: "B",
        option: `Create a custom FHIR Adapter to make calls to Health Cloud.`,
      },
      {
        id: "C",
        option: `Use a package created by ISV (Independent Software Vendor) for Health Cloud.`,
      },
      {
        id: "D",
        option: `Create an Apex class and leverage Intelligent Appointment Management.`,
      },
    ],
    // answer: [{ id: "C" }],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.set_up_intelligent_appointment_management.htm&type=5",
      "https://chatgpt.com/",
    ],
  },
  {
    id: "96",
    question: `Bloomington Caregivers has been using the legacy Health Cloud electronic health record (EHR) data model and wants to move to the FHIR R4 clinical data model. Which two steps should a consultant take to complete this?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Use the Health Cloud Clinical Transition tool.` },
      { id: "B", option: `Leverage the Health Cloud FHIR API.` },
      { id: "C", option: `Use Data Loader to load the respective data.` },
      { id: "D", option: `Map objects and fields to the target objects.` },
    ],
    answer: [{ id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=release-notes.health_cloud_fhir_apis.htm&release=240&type=5",
      "https://developer.salesforce.com/docs/atlas.en-us.240.0.health_cloud_object_reference.meta/health_cloud_object_reference/ehr_cdm.htm",
      "https://www.pass4test.com/Health-Cloud-Accredited-Professional-exam-questions.html",
    ],
  },
  {
    id: "97",
    question: `A customer wants to view a patient's health conditions and clinical encounters as a sequence patient's Person Account page. What should a consultant do to achieve this using the Enhanced Timeline functionality?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Clone the HCTimeline FlexCard for customization.` },
      {
        id: "B",
        option: `Add a record to the HealthCloudTimelineConfig custom setting.`,
      },
      { id: "C", option: `Create a new Timeline View Configuration record.` },
      { id: "D", option: `Create a new Timeline record within Setup.` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.hc_timeline_client_information.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_config_timeline.htm&type=5",
    ],
  },
  {
    id: "98",
    question: `How should a consultant recommend modeling a physician's locations of service, when the physician practices at clinics?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Healthcare Practitioner Facility` },
      { id: "B", option: `Healthcare Provider Relationship` },
      { id: "C", option: `Healthcare Taxonomy` },
      { id: "D", option: `Account Contact Relationship` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_healthcarepractitionerfacility.htm",
      "https://help.salesforce.com/s/articleView?id=sf.create_healthcare_practitioner_facility_records.htm&type=5",
    ],
  },
  {
    id: "99",
    question: `A provider wants its care coordinators to track a series of problems, goals, and interventions (PGIs) related to a patient's care in a repeatable, efficient way. Which approach should a consultant recommend?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Configure an action plan template with tasks for each PGI.`,
      },
      {
        id: "B",
        option: `Coach the care coordinators to quickly create tasks using a checklist.`,
      },
      {
        id: "C",
        option: `Create care program templates and assign them to patients.`,
      },
      {
        id: "D",
        option: `Define a PGI Library and care plan templates using the library.`,
      },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.hc_admin_integrated_care_management_pgi_library.htm&type=5",
      "https://www.dumpspedia.com/health-cloud-accredited-professional-salesforce-health-cloud-accredited-professional-sp23-dumps.html",
    ],
  },
  {
    id: "100",
    question: `Prior to go-live for Bloomington Caregivers, a consultant loads the future system users into Salesforce. Which two permission set licenses should the consultant assign to the users to give them access to Health Cloud?`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Health Cloud Foundation permission set license` },
      { id: "B", option: `Health Cloud permission set license` },
      { id: "C", option: `Health Cloud Standard permission set license` },
      { id: "D", option: `Health Cloud Platform permission set license` },
    ],
    answer: [{ id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_permissionset_licenses_assign.htm&type=5",
      "file:///C:/Users/Lenovo/Downloads/Health%20Cloud%20PLC%20Workbook%20-%20Version%201.1.pdf",
    ],
  },
  {
    id: "101",
    question: `An administrator for Bloomington Caregivers has added an Enhanced Timeline to an existing Patient Lightning page showing patient interactions, including records from a custom object developed to track caregiver preferences. What else should the administrator complete post deployment of the enhanced timeline?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Assign the users permissions to be able to view the Timeline before adding it to the Timeline component.`,
      },
      {
        id: "B",
        option: `Add the Timeline component to the Patient Lightning page and activate the Timeline.`,
      },
      {
        id: "C",
        option: `Add the Timeline component to the Patient Lightning page and select the Timeline.`,
      },
      {
        id: "D",
        option: `Add the custom object to the Timeline after deployment, then add it to the Timeline component.`,
      },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://www.youtube.com/watch?v=jzePq0jQBTY&t=190s",
      "https://help.salesforce.com/s/articleView?id=sf.hc_timeline_client_information.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_timeline_background.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=33",
    ],
  },
  {
    id: "102",
    question: `A payer needs to manage requests for concurrent review of prior authorizations within Health Cloud and wants to use out-of-the-box record types and page layouts. However, the payer's Salesforce administrator does not see any preconfigured record types or page layouts for prior authorizations in the payer's Salesforce org. What should a consultant recommend to the Salesforce administrator to expedite implementation?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Install the Health Cloud Claims unmanaged package.` },
      {
        id: "B",
        option: `Build custom page layouts and record types to support the requirement.`,
      },
      {
        id: "C",
        option: `Install the Health Cloud Care Request Extensions package.`,
      },
      {
        id: "D",
        option: `Install an AppExchange prior authorization package.`,
      },
    ],
    answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud.meta/health_cloud/admin_install_package.htm",
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_health_utilimgmt_prior_authorization.htm&release=240&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_utilization_management_prior_auth_processsetup.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.utilization_management_prior_auth_link_request.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.care_request_submit.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=33",
    ],
  },
  {
    id: "103",
    question: `When setting up Intelligent Sales, which three types of records should an administrator create for a Field Sales Agent before Visit records can be created? (Choose three.)`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Contacts` },
      { id: "B", option: `Opportunities` },
      { id: "C", option: `Locations` },
      { id: "D", option: `Accounts` },
      { id: "E", option: `Assets` },
    ],
    answer: [{ id: "A" }, { id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_intelligent_sales_data_model.htm&type=5",
      "https://certsprovider.com/exam/health-cloud-accredited-professional",
    ],
  },
  {
    id: "104",
    question: `In which three ways does Health Cloud meet compliance and regulatory requirements? (Choose three.)`,
    questionType: "Multiple Choice",
    options: [
      {
        id: "A",
        option: `Health Cloud helps HIS organization achieve HIPAA compliance`,
      },
      { id: "B", option: `Health Cloud is HIPPA certified` },
      { id: "C", option: `Health Cloud is HL7 compliant` },
      { id: "D", option: `Health Cloud is HITRUST certified` },
      { id: "E", option: `Health Cloud is GDPR certified` },
    ],
    // answer: [{ id: "A" }, { id: "B" }, { id: "C" }],
    answer: [{ id: "A" }, { id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://compliance.salesforce.com/en/hitrust",
      "https://compliance.salesforce.com/en/hipaa",
      "https://compliance.salesforce.com/en/gdpr",
      "https://trailhead.salesforce.com/content/learn/modules/interoperability-and-the-clinical-data-model/review-the-data-exchange-standards",
      "https://www.actual4test.com/discussions/Salesforce/exam-health-cloud-accredited-professional-topic-1-question-214-discussion-p1016528.html",
    ],
  },
  {
    id: "105",
    question: `Which three are steps required to configure Health Cloud? (Choose three.)`,
    questionType: "Multiple Choice",
    options: [
      {
        id: "A",
        option: `Enable the option for contacts to relate to multiple accounts.`,
      },
      { id: "B", option: `Install the Health Cloud Managed Package.` },
      { id: "C", option: `Verify that Chatter Is enabled.` },
      { id: "D", option: `Configure the console view.` },
      { id: "E", option: `Install Health Cloud Unmanaged Packages.` },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_planning.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_person_account_overview.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_admin_health_could_managed_package.htm&type=5",
      "https://www.pass4success.com/salesforce/discussions/exam-health-cloud-accredited-professional-topic-1-question-26-discussion",
    ],
  },
  {
    id: "106",
    question: `An Health Cloud administrator has setup risk recalculation by setting the recalculate flag to false, but is not seeing the recalculation score for the patient. Which of the following is mostly likely the reason why the recalculation score for the patient is not displaying?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `CMS risk scores cannot be recalculated in Health Cloud.`,
      },
      {
        id: "B",
        option: `CMS risk scores should be recalculated using only third party APIs.`,
      },
      {
        id: "C",
        option: `Risk scores are recalculated only for patients that are affiliated with a Care Program.`,
      },
      {
        id: "D",
        option: `Risk scores can only be calculated using the CMS recalculation API.`,
      },
    ],
    answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_apex_risk_scoring.htm&type=5",
      "https://www.coursehero.com/file/p69f8j0m/The-Salesforce-administrator-for-ABC-Policies-Inc-a-Health-Care-Payer/",
    ],
  },
  {
    id: "107",
    // question: `Which three statements about the patient timeline view are false? (Choose three.)`,
    question: `Which three statements about the patient timeline view are true? (Choose three.)`,
    questionType: "Multiple Choice",
    options: [
      {
        id: "A",
        option: `The patient timeline can be used in any Salesforce application.`,
      },
      {
        id: "B",
        option: `Events can be specified to appear when the Health Cloud home page first loads.`,
      },
      {
        id: "C",
        option: `The patient timeline is a Health Cloud Empower component.`,
      },
      {
        id: "D",
        option: `The patient timeline supports standard and custom objects.`,
      },
      {
        id: "E",
        option: `Filters can be used to limit the number of records shown in the patient timeline.`,
      },
    ],
    // answer: [{ id: "B" }, { id: "D" }, { id: "E" }],
    answer: [{ id: "C" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_config_timeline.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_component_timeline.htm&type=5",
      "https://certsprovider.com/exam/health-cloud-accredited-professional",
    ],
  },
  {
    id: "108",
    question: `Which three options explain why the new clinical data model in Health Cloud is labeled as FHIR aligned and not FHIR compliant? (Choose three)`,
    questionType: "Multiple Choice",
    options: [
      {
        id: "A",
        option: `Some entitles have additional non-FHIR attributes to increase the usability of the data within Salesforce.`,
      },
      {
        id: "B",
        option: `The cardinality of a few attributes has been changed (e.g. in picklist scenarios)`,
      },
      {
        id: "C",
        option: `Not all attributes in a given FHIR resource may be supported.`,
      },
      { id: "D", option: `It does not utilize the latest FHIR R4 standards.` },
      { id: "E", option: `It only aligns with FHIR 0STU2 specs.` },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_clinical_data_model_fhir.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=32",
    ],
  },
  {
    id: "109",
    question: `Which Salesforce product allows encryption of Protected Health Information (PHI) data at rest to enhance Health Cloud?`,
    questionType: "Single Choice",
    options: [
      { id: "A", option: `Tableau CRM` },
      { id: "B", option: `Service Cloud` },
      { id: "C", option: `Shield` },
      { id: "D", option: `Health Cloud` },
    ],
    answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_salesforce_shield.htm&type=5",
      "https://www.pass4success.com/salesforce/discussions/exam-health-cloud-accredited-professional-topic-1-question-14-discussion",
    ],
  },
  {
    id: "110",
    question: `While not every component or attribute within Hearth Cloud is customizable, which three of the following components are customizable within Health Cloud? (Choose three.)`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Custom label` },
      { id: "B", option: `HER data` },
      { id: "C", option: `Patient Card` },
      { id: "D", option: `Timeline` },
      { id: "E", option: `Life Events` },
    ],
    answer: [{ id: "C" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_manage_life_event_types.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_admin_events_and_milestones.htm&type=5",
      "https://chatgpt.com/",
    ],
  },
  {
    id: "111",
    question: `How does an administrator display device information on a patient card?`,
    questionType: "Single Choice",
    options: [
      {
        id: "A",
        option: `Create a custom field on the EHR_Patient object with a formula that returns the information to display on patient card`,
      },
      {
        id: "B",
        option: `Create a custom field on the EHR_DeviceRequest with a formula that returns the information to display on patient card`,
      },
      {
        id: "C",
        option: `Create a custom field on the FilterConditon_c with a formula that returns the information to display on patient card`,
      },
      {
        id: "D",
        option: `Create an Asset record and create a Care Registered Device record that looks up to the Asset record and then looks up to the Account record for the Patient`,
      },
      {
        id: "E",
        option: `Create a custom field on the EHR_MedicalDevices with a formula that returns the nf ormauon to display on patient card`,
      },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careregistereddevice.htm",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_remote_monitoring_data_model.htm",
      "https://www.coursehero.com/file/p69f8j0m/The-Salesforce-administrator-for-ABC-Policies-Inc-a-Health-Care-Payer/",
    ],
  },
  {
    id: "112",
    question: `Which Permission Set Licenses and Permission Sets need to be assigned to users to leverage Utilization Management' (Choose three)`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Health Cloud Analytics Permission Set` },
      { id: "B", option: `Health Cloud Platform Permission Set License` },
      { id: "C", option: `Health Cloud Utilization Management Permission Set` },
      { id: "D", option: `Health Cloud Permission Set License` },
      { id: "E", option: `Health Cloud Foundation Permission Set` },
    ],
    // answer: [{ id: "B" }, { id: "C" }, { id: "D" }],
    answer: [{ id: "B" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud.meta/health_cloud/admin_permissionset_licenses_assign.htm",
      "https://help.salesforce.com/s/articleView?id=sf.admin_utilization_management_prereq.htm&type=5",
      "https://chatgpt.com/",
    ],
  },
  {
    id: "113",
    question: `A Salesforce Admin wants to create tasks within a Care Plan that is related to a specific problem or goal. Which three different locations in the Health Cloud console can be used to create tasks related to a specific problem or goal within a Care Plan? (Choose three.)`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Timeline Tab` },
      { id: "B", option: `Care Team` },
      { id: "C", option: `Care Plan page` },
      { id: "D", option: `Patient List` },
      { id: "E", option: `Household Tab` },
    ],
    // answer: [{ id: "A" }, { id: "D" }, { id: "E" }],
    // answer: [{ id: "B" }, { id: "C" }, { id: "D" }],
    answer: [{ id: "A" }, { id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.create_tasks.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.timeline_view_health_information_holistically_with_enhanced_timeline.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=30",
    ],
    // reference: [
    //   "https://help.salesforce.com/s/articleView?id=sf.create_tasks.htm&type=5",
    //   "https://www.coursehero.com/file/p4suj0sn/How-Should-Members-and-Patients-be-represented-during-the-Managers-as-per-the/",
    // ],
  },
  {
    id: "114",
    question: `Which two steps can an administrator take to configure the Care Program enrollment flow? (Choose two.)`,
    questionType: "Multiple Choice",
    options: [
      { id: "A", option: `Customize the provider site flow.` },
      { id: "B", option: `Customize the care coordinator flow for patient` },
      { id: "C", option: `Use the patient approval flow` },
      { id: "D", option: `Use the provided enrollment flow out of the box.` },
      {
        id: "E",
        option: `Customize the out of the box enrollment flow template to match requirements.`,
      },
    ],
    // answer: [{ id: "D" }, { id: "E" }],
    answer: [{ id: "B" }, { id: "E" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-care-programs/use-care-programs",
      "https://help.salesforce.com/s/articleView?id=sf.admin_programs_configure_enrollment_flow.htm&type=5",
    ],
  },
  {
    id: "115",
    questionType: "Multiple Choice",
    question: `Which features does Health Cloud Consent Management provide? (Choose two)`,
    options: [
      { id: "A", option: `Capture Data Use Purpose'` },
      { id: "B", option: `Email for signature` },
      { id: "C", option: `Delegated signing` },
      { id: "D", option: `Capture IP Address during completion` },
      { id: "E", option: `E-Signature` },
    ],
    answer: [{ id: "B" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.consent_management_health.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=30#:~:text=)%3A%20B%2CE-,Explanation%3A,for%20signature%20and%20e%2Dsignature.",
    ],
  },
  {
    id: "116",
    questionType: "Multiple Choice",
    question: `Service cloud organization is migrating to health cloud, and only certain teams of users have health cloud use cases .Which Users with health cloud use cases or users who need access to health cloud objects require health cloud permission set licences. What three types of ancillary information can be included in a single care request.`,
    options: [
      { id: "A", option: `Care request providers` },
      { id: "B", option: `Care request reviews` },
      { id: "C", option: `Care request drug` },
      { id: "D", option: `Care request diagnosis` },
      { id: "E", option: `Care request facility` },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.care_request.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_config_care_request.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.utilization_management_payer.htm&type=5",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_responses.htm",
      "https://help.salesforce.com/s/articleView?id=sf.utilization_management_types.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=30",
    ],
  },
  {
    id: "117",
    questionType: "Multiple Choice",
    // question: `Which two fields are required when creating a new care plan task?`,
    question: `Which two fields are optional when creating a new Care plan task? (Choose Two)`,
    options: [
      { id: "A", option: `owner` },
      { id: "B", option: `problem` },
      { id: "C", option: `Status` },
      { id: "D", option: `Goal` },
      { id: "E", option: `Due Date` },
    ],
    // answer: [{ id: "A" }, { id: "C" }],
    answer: [{ id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-care-plans/explore-care-plans-and-care-plan-templates",
      "https://help.salesforce.com/s/articleView?id=sf.admin_care_template_task_config.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=23",
    ],
  },
  {
    id: "118",
    questionType: "Single Choice",
    question: `Which solution includes pre-built APIs, connectors ,implementation templates, and a prescriptive end-to-end reference architecture to enable EHR connectivity and power a patient 360 from any HER into HC using HL7 V2 or FHIR standards?`,
    options: [
      { id: "A", option: `Mulesoft Accelerator for HealthCare` },
      { id: "B", option: `Shield` },
      { id: "C", option: `Specialty vendors` },
      { id: "D", option: `Tableau CRM for HealthCare` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://www.mulesoft.com/exchange/org.mule.examples/mulesoft-accelerator-for-healthcare/",
      "https://www.coursehero.com/file/p6h7q5ljo/CHECK-the-Modeling-VIDEO-in-PLC-course-given-for-migrating-and-verify-109Three/",
    ],
  },
  {
    id: "119",
    questionType: "Multiple Choice",
    question: `What are the two steps required to create Health care providers for Health program?Choose two`,
    options: [
      { id: "A", option: `Add NPI for associated provider` },
      { id: "B", option: `Choose associated facility for Care Program.` },
      { id: "C", option: `Add the UPIN` },
      {
        id: "D",
        option: `Create Care Program Providers from the App Launcher`,
      },
      {
        id: "E",
        option: `Create a care program health care provider with an associated care prgm provider`,
      },
    ],
    // answer: [{ id: "A" }, { id: "E" }],
    answer: [{ id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_associate_hp_cp.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_associate_hp_cp.htm&type=5",
      "https://www.coursehero.com/file/p7v59b01/Which-two-fields-are-optional-when-creatinga-new-Care-plan-task-Choose-Two-A/",
      "https://www.certqueen.com/news_Salesforce-Health-Cloud-Accredited-Professional-Exam-Dumps_858.html",
    ],
  },
  {
    id: "120",
    questionType: "Single Choice",
    question: `Which of the standard objects are included in the Care Plan Data Model?`,
    options: [
      { id: "A", option: `Crae programs,Product,Patients` },
      { id: "B", option: `Life Events` },
      { id: "C", option: `Benifts,Barriers,Provider Education` },
      { id: "D", option: `Case,Problems,Goals,Tasks,Care Plan Templates` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-care-plans/explore-care-plans-and-care-plan-templates",
      "https://help.salesforce.com/s/articleView?id=sf.care_plan_overview.htm&type=5",
      "https://www.coursehero.com/file/p10raufd/107-Which-3-of-the-components-are-customizable-in-HC-aTimeline-b-EHR-Data-c-Life/",
    ],
  },
  {
    id: "121",
    questionType: "Multiple Choice",
    question: `Three steps required to configure HC?`,
    options: [
      { id: "A", option: `Install HC unmanaged Package` },
      { id: "B", option: `Install HC managed package` },
      { id: "C", option: `Verify that chatter is enabled` },
      { id: "D", option: `Configure the console view` },
      {
        id: "E",
        option: `Enable the options for contact to related with multiple accounts`,
      },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_planning.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=000382690&type=1",
      "https://www.coursehero.com/file/p10raufd/107-Which-3-of-the-components-are-customizable-in-HC-aTimeline-b-EHR-Data-c-Life/",
    ],
  },
  {
    id: "122",
    questionType: "Single Choice",
    question: `A service cloud organization migrating to HC uses Contacts to represent patients, physicians and non-clinical staff. Which of these groups of contacts should be modeled as Person Accounts post-migration?`,
    options: [
      {
        id: "A",
        option: `Patients should be modeled as Person Accounts. Providers and non-clinical staff can be modeled as Person Accounts or Contacts`,
      },
      {
        id: "B",
        option: `Patients, physicians and non-clinical staff should be modeled as Person Accounts.`,
      },
      {
        id: "C",
        option: `None By using individual data model, the use of person account can be avoided`,
      },
      {
        id: "D",
        option: `Patients should be modeled as Person Accounts. Providers and non-clinical staff should be modeled as Contacts`,
      },
    ],
    // answer: [{ id: "D" }],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_patient_records.htm&type=5",
      "https://www.dumpsbase.com/freedumps/new-salesforce-health-cloud-accredited-professional-exam-dumps-good-online-resource.html#:~:text=A%20service%20cloud%20organization%20migrating,as%20Person%20Accounts%20post%2Dmigration%3F&text=Patients%2C%20physicians%20and%20non%2Dclinical%20staff%20should,be%20modeled%20as%20Person%20Accounts.",
    ],
  },
  {
    id: "123",
    questionType: "Multiple Choice",
    question: `Which 3 of the components are customizable in HC?`,
    options: [
      { id: "A", option: `Timeline` },
      { id: "B", option: `EHR Data` },
      { id: "C", option: `Life Events` },
      { id: "D", option: `Patient Card` },
      { id: "E", option: `Custom Label` },
    ],
    answer: [{ id: "A" }, { id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_config_timeline.htm&type=5",
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-data-displays/adapt-the-patient-card",
      "https://help.salesforce.com/s/articleView?id=sf.admin_manage_life_event_types.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=28",
    ],
  },
  {
    id: "124",
    questionType: "Multiple Choice",
    // question: `A HC admin is configuring a 'Convert to Patient' process,utilizing the Lead to Individual Conversion Apex class. Which statements are false about the steps the admin can take?(choose 3)`,
    question: `A HC admin is configuring a 'Convert to Patient' process,utilizing the Lead to Individual Conversion Apex class. Which statements are true about the steps the admin can take?(choose 3)`,
    options: [
      {
        id: "A",
        option: `The admin must configure all Lead field mappings including Medical Record Number,Source System and Source System ID.`,
      },
      {
        id: "B",
        option: `The custom Convert to Patient button should be added to the Lead list view.`,
      },
      {
        id: "C",
        option: `Some Lead field mappings including Medical Record Number,Source SystemID can be handled automatically by HC.`,
      },
      {
        id: "D",
        option: `The Lead to Individual Conversion apex class will create a new Opportunity for the patient.`,
      },
      {
        id: "E",
        option: `Duplicate checks on Medical Record Number,Source System and Source System ID can be handled automatically by HC`,
      },
    ],
    // answer: [{ id: "A" }, { id: "C" }, { id: "E" }],
    answer: [{ id: "B" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://www.coursehero.com/file/p10raufd/107-Which-3-of-the-components-are-customizable-in-HC-aTimeline-b-EHR-Data-c-Life/",
      "https://www.pass4success.com/salesforce/discussions/exam-health-cloud-accredited-professional-topic-1-question-4-discussion",
    ],
  },
  {
    id: "125",
    questionType: "Single Choice",
    question: `An admin wants to enable their users to leverage Provider Search,which denormalized object holds data to support this feature`,
    options: [
      { id: "A", option: `HealthCare Provider Facility` },
      { id: "B", option: `Provider Search Sync Logs` },
      { id: "C", option: `HealthCare Provider` },
      { id: "D", option: `Care Provider Searchable field` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_provider_search_setup.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_provider_search.htm&type=5",
      "https://www.coursehero.com/file/p10raufd/107-Which-3-of-the-components-are-customizable-in-HC-aTimeline-b-EHR-Data-c-Life/",
    ],
  },
  {
    id: "126",
    questionType: "Multiple Choice",
    question: `Which credentials are available to track against providers with standard Health Cloud? (Choose two.)`,
    options: [
      { id: "A", option: `Specialties` },
      { id: "B", option: `Facility Relationship` },
      { id: "C", option: `Business License` },
      { id: "D", option: `Board Certification` },
    ],
    answer: [{ id: "A" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_pnm_credentialing.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=27",
    ],
  },
  {
    id: "127",
    questionType: "Multiple Choice",
    question: `In which three ways can users access Provider Management standard objects? (Choose three)`,
    options: [
      { id: "A", option: `By using Service Cloud` },
      {
        id: "B",
        option: `By assigning Health Cloud Platform Permission set licenses.`,
      },
      {
        id: "C",
        option: `By assigning Health Cloud Foundation Permission set.`,
      },
      { id: "D", option: `By assigning the Provider Permission set.` },
      { id: "E", option: `By using Health Cloud.` },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_provider_data_model_permissions.htm",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=27#:~:text=Users%20can%20access%20Provider%20Management,Health%20Cloud%20Foundation%20Permission%20set.",
    ],
  },
  {
    id: "128",
    questionType: "Single Choice",
    question: `How can Code Sets be managed in Health Cloud?`,
    options: [
      {
        id: "A",
        option: `Health Cloud provides a Code Sets data model that is pre-populated with industry standard procedures and diagnostic code sets.`,
      },
      {
        id: "B",
        option: `Health Cloud does not provide a Code Sets data model`,
      },
      {
        id: "C",
        option: `Health Cloud provides a Code Sets data model that must be populated from an external source.`,
      },
      {
        id: "D",
        option: `Health Cloud provides a Code Sets data model that is pre-integrated to authoritative sources to ensure the latest code sets are always available.`,
      },
    ],
    answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_code_sets_data_model.htm",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=27#:~:text=How%20can%20Code%20Sets%20be,procedures%20and%20diagnostic%20code%20sets.&text=Sets%20data%20model-,Health%20Cloud%20provides%20a%20Code%20Sets%20data%20model%20that,populated%20from%20an%20external%20source.",
    ],
  },
  {
    id: "129",
    questionType: "Single Choice",
    question: `Which entity in the new data model of Health Cloud can be used to store mappings between different coding systems such ICD and HCC codes?`,
    options: [
      { id: "A", option: `Identifier` },
      { id: "B", option: `Codesets` },
      { id: "C", option: `ContactPoint` },
      { id: "D", option: `Codeset Bundle` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.code_sets_and_code_set_bundles.htm&type=5",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_CodeSet.htm",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=26",
      "https://help.salesforce.com/s/articleView?id=sf.admin_condition_hhc_mapping.htm&type=5",
    ],
  },
  {
    id: "130",
    questionType: "Multiple Choice",
    question: `An Health Cloud administrator has a requirement to display a custom field from the HealthCondition object that categorizes High Risk Conditions on the Patient Card. Which two are steps required to achieve this? (Choose two.)`,
    options: [
      {
        id: "A",
        option: `Add the newly created custom formula field on the Patient Card referencing the HelthCondition object.`,
      },
      { id: "B", option: `Create a custom formula the Account object.` },
      {
        id: "C",
        option: `Create a custom formula field on the Custom HealhCondition object.`,
      },
      {
        id: "D",
        option: `Create an APEX Trigger to categorize the High Risk Conditions.`,
      },
    ],
    answer: [{ id: "A" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_patient_card_configuration.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_patient_card_cdm_templates.htm&type=5",
    ],
  },
  {
    id: "131",
    questionType: "Multiple Choice",
    question: `The Salesforce administrator for Lake Tahoe Hospital would like to implement Utilization Management. What are the design consideration that administrator has to be aware of when creating the application? (Choose two.)`,
    options: [
      {
        id: "A",
        option: `Path can not be used to visually represent the status of a care request.`,
      },
      {
        id: "B",
        option: `Care request functionality is included in the Health Cloud managed package.`,
      },
      { id: "C", option: `Each Care request has to have an associated case.` },
      {
        id: "D",
        option: `New Care requests can be created using the 'create care request' component.`,
      },
      {
        id: "E",
        option: `Care requests has empower components that can be exposed within Communities.`,
      },
    ],
    answer: [{ id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_um_data_model.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.care_request_submit.htm&type=5",
      "https://www.coursehero.com/file/p4suj0sn/How-Should-Members-and-Patients-be-represented-during-the-Managers-as-per-the/",
    ],
  },
  {
    id: "132",
    questionType: "Single Choice",
    question: `Care Requests seek authorization from a health plan for drugs, services, and admissions. They can also contain request for review, appeals, complaints and grievances. Which Care Request review ensure that a member is getting the right care in timely and cost-effective way?`,
    options: [
      { id: "A", option: `Disposition Review` },
      { id: "B", option: `Concurrent Review` },
      { id: "C", option: `Care Review` },
      { id: "D", option: `Preauthorization Review` },
      { id: "E", option: `Retrospective Review` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.utilization_management_types.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=26",
    ],
  },
  {
    id: "133",
    questionType: "Single Choice",
    question: `Which add-on license enhances Health Cloud to allow you to highlight times when a patient is most likely to attend an appointment ?`,
    options: [
      { id: "A", option: `Einstein Vision` },
      { id: "B", option: `Einstein Analytics Predictions` },
      { id: "C", option: `Einstein Bots` },
      { id: "D", option: `Einstein Activity Capture` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_unmanaged_package_wave.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.set_up_einstein_analytics_prediction.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.modify_the_appointment_management_configuration.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.update_the_records.htm&type=5",
      "https://testinsides.dumps4pdf.com/articles/q52-q69-the-best-valid-health-cloud-accredited-professional-dumps-for-helping-passing-health-cloud-accredited-professional-exam/",
    ],
  },
  {
    id: "134",
    questionType: "Single Choice",
    question: `How Should Members and Patients be represented during the............ Managers as per the Salesforce recommendation?`,
    options: [
      {
        id: "A",
        option: `Leveraging Person Accounts is the recommended approach to .........`,
      },
      {
        id: "B",
        option: `The individual Data Model may be used to represent members .........`,
      },
      {
        id: "C",
        option: `Salesforce recommends using Member Accounts to represent members ......`,
      },
      {
        id: "D",
        option: `Leveraging Candidate Accounts are the recommended approach to .........`,
      },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_person_account_overview.htm&type=5",
      "https://www.marks4sure.com/health-cloud-accredited-professional-salesforce-health-cloud-accredited-professional-questions.html",
    ],
  },
  {
    id: "135",
    questionType: "Multiple Choice",
    question: `Which two health cloud specific setting must be configuration .......... Health cloud org has lightning experience enabled person account......... (Choose two)`,
    options: [
      {
        id: "A",
        option: `Under Custom Metadata Types, enable the Health cloud Setting`,
      },
      {
        id: "B",
        option: `Disable ''Use Individual Data Model'' in custom setting`,
      },
      {
        id: "C",
        option: `Under Custom Metadata Types, Update the Health cloud 'HCFeature'...`,
      },
      { id: "D", option: `Enable ''Use Person Accounts'' custom setting.` },
      {
        id: "E",
        option: `Under Custom Metadata Types, Create a mapping records for Person accounts.`,
      },
    ],
    answer: [{ id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_enable_person_account.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_map_person_accounts.htm&type=5",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud.meta/health_cloud/admin_person_account_overview.htm",
      "https://testinsides.dumps4pdf.com/articles/q52-q69-the-best-valid-health-cloud-accredited-professional-dumps-for-helping-passing-health-cloud-accredited-professional-exam/#",
    ],
  },
  {
    id: "136",
    questionType: "Single Choice",
    question: `Which data model is used to represent information via standard object and record types on standard objects to manage how care is covered?`,
    options: [
      { id: "A", option: `Health Insurance data model` },
      { id: "B", option: `Coverage data model` },
      { id: "C", option: `Payer data model` },
      { id: "D", option: `Plan data model` },
      { id: "E", option: `Benefit data model` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_membership_data_model.htm",
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-data-models/investigate-the-health-insurance-and-claims-data-model",
      "https://www.marks4sure.com/health-cloud-accredited-professional-salesforce-health-cloud-accredited-professional-questions.html",
    ],
  },
  {
    id: "137",
    questionType: "Multiple Choice",
    question: `Which three type of basic Patient or Member information is displayed on the Patient info component? (Choose three.)`,
    options: [
      { id: "A", option: `Primary Care Coordinator` },
      { id: "B", option: `List of Patient/Member Conditions` },
      { id: "C", option: `Gender` },
      { id: "D", option: `Thumbnail of Chatter Photo` },
      { id: "E", option: `Date of Birth and Age` },
    ],
    answer: [{ id: "C" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_patient_info_component.htm&type=5",
      "https://www.coursehero.com/file/p2m91b40/Which-three-type-of-basic-Patient-or-Member-information-is-displayed-a-Primary/",
    ],
  },
  {
    id: "138",
    questionType: "Multiple Choice",
    question: `In which three ways does Health cloud meet compliance and regulatory requirements? (Choose three.)`,
    options: [
      {
        id: "A",
        option: `Health Cloud helps HLS organization achieve HIPAA Compliance`,
      },
      { id: "B", option: `Health cloud is HIPAA certified` },
      { id: "C", option: `Health cloud is HITRUST certified` },
      { id: "D", option: `Health cloud is GDPR certified` },
      { id: "E", option: `Health cloud is HL-7 Compliant` },
    ],
    answer: [{ id: "A" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://www.salesforce.com/healthcare-life-sciences/health-cloud/",
      "https://compliance.salesforce.com/en/hipaa",
      "https://compliance.salesforce.com/en/hitrust",
      "https://compliance.salesforce.com/en/gdpr",
    ],
  },
  {
    id: "139",
    questionType: "Multiple Choice",
    question: `Which three are the main consideration when transforming the individual ..........`,
    options: [
      {
        id: "A",
        option: `Transforming the individual data model to person accounts in production org...`,
      },
      { id: "B", option: `Patient to Case Object relationship` },
      { id: "C", option: `Account to Case object relationship` },
      { id: "D", option: `OWD sharing` },
      {
        id: "E",
        option: `Integration between Salesforce and 3rd party system`,
      },
    ],
    answer: [{ id: "A" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.fsc_admin_transform_consider.htm&type=5",
      "https://www.coursehero.com/file/pv07dmv/Question-No-90-Which-three-are-the-main-consideration-when-transforming-the/",
    ],
  },
  {
    id: "140",
    questionType: "Multiple Choice",
    question: `Which three steps should the Data Architect take to ensure a successful migration from the individual Model to person Accounts? (Choose three).`,
    options: [
      {
        id: "A",
        option: `Configure your person account record type in the individual Record type Migration`,
      },
      {
        id: "B",
        option: `Enable 'Individual to Person Account Migration' in custom setting`,
      },
      { id: "C", option: `Ensure Person Accounts is enabled on the org.` },
      {
        id: "D",
        option: `Log a case with Salesforce to perform the conversion from the individual Model to Person Accounts.`,
      },
      {
        id: "E",
        option: `Use a CSV field a map PersonRecordTypeId to the Person Account Recordtype.......`,
      },
    ],
    answer: [{ id: "A" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.fsc_admin_person_accounts.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=000387364&type=1",
      "https://www.coursehero.com/file/p1l8507m/Which-three-steps-should-the-Data-Architect-take-to-ensure-a-successful/",
    ],
  },
  {
    id: "141",
    questionType: "Multiple Choice",
    question: `Which three steps are needed to setup Care Requests? (Choose three).`,
    options: [
      {
        id: "A",
        option: `Create a new case record type for each Care Request type`,
      },
      {
        id: "B",
        option: `Install UM unmanaged package for Health Cloud. Then assign Health cloud Utilization management permission set to users along with Health cloud permission set licenses.`,
      },
      {
        id: "C",
        option: `All Care requests are pre-setup on all Health Cloud orgs by default.`,
      },
      {
        id: "D",
        option: `Choose any existing case record type for each Care Request type.`,
      },
      {
        id: "E",
        option: `Choose case Care Request record type for each Care Request configuration.`,
      },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "E" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud.meta/health_cloud/admin_config_care_request.htm",
      "https://help.salesforce.com/s/articleView?id=sf.admin_config_care_request.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=23",
    ],
  },
  {
    id: "142",
    questionType: "Single Choice",
    question: `Which format is acceptable for intelligent document automation upload?`,
    options: [
      { id: "A", option: `.PNG` },
      { id: "B", option: `.CSV` },
      { id: "C", option: `.DOC` },
      { id: "D", option: `.MP4` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.document_automation.htm&type=5",
    ],
  },
  {
    id: "143",
    questionType: "Single Choice",
    question: `Which Data Model Leverages external objects to support the use Case?`,
    options: [
      { id: "A", option: `Care Observations` },
      { id: "B", option: `Claims` },
      { id: "C", option: `Member Plan` },
      { id: "D", option: `Clinical Service Requests` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_claims_data_model.htm",
      "https://help.salesforce.com/s/articleView?id=sf.landing_claims_management.htm&type=5",
    ],
  },
  {
    id: "144",
    questionType: "Multiple Choice",
    question: `Which two fields are optional when creating a new Care plan task? (Choose Two)`,
    options: [
      { id: "A", option: `Status` },
      { id: "B", option: `Due Date` },
      { id: "C", option: `Goal` },
      { id: "D", option: `Problem` },
      { id: "E", option: `Task Owner` },
    ],
    answer: [{ id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=23",
      "https://help.salesforce.com/s/articleView?id=sf.admin_care_template_task_config.htm&type=5",
    ],
  },
  {
    id: "145",
    questionType: "Multiple Choice",
    question: `Which three of the following statements are true about Care Plan Templates? (Choose ThreE.`,
    // question: `Which three of the following statements are false about Care Plan Templates? (Choose ThreE.`,
    options: [
      {
        id: "A",
        option: `When creating a care plan with a template you can unselect tasks so they will not be included.`,
      },
      {
        id: "B",
        option: `The sort order of the Task group by Fields can be changed under custom setting task group.`,
      },
      {
        id: "C",
        option: `Care plan templates must include at least 1 problem, 1 goal and 1 task.`,
      },
      {
        id: "D",
        option: `When creating a care plan with a template you can change the offsets of the tasks.`,
      },
      {
        id: "E",
        option: `Care plan templates can only be used when creating a new care plan.`,
      },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-care-plans/create-and-use-care-plans",
      "https://help.salesforce.com/s/articleView?id=sf.admin_care_template_task_config.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.create_tasks.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_care_template_config.htm&type=5",
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-care-plans/customize-care-plans",
    ],
  },
  {
    id: "146",
    questionType: "Multiple Choice",
    question: `Which two steps can an administrator take to configure the care program enrollment flow? (choose two)`,
    options: [
      {
        id: "A",
        option: `Customize the out of box enrollment flow to match requirements`,
      },
      { id: "B", option: `Use the provider enrollment flow out of box.` },
      { id: "C", option: `Customize the provider site flow.` },
      {
        id: "D",
        option: `Identify the patient as approved candidate in the flow.`,
      },
      { id: "E", option: `Customize the care coordinator flow for patient.` },
    ],
    answer: [{ id: "A" }, { id: "D" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-care-programs/use-care-programs",
      "https://help.salesforce.com/s/articleView?id=sf.admin_programs_configure_enrollment_flow.htm&type=5",
      "https://www.pass4success.com/salesforce/discussions/exam-health-cloud-accredited-professional-topic-1-question-10-discussion",
    ],
  },
  {
    id: "147",
    questionType: "Multiple Choice",
    question: `An insurance organization wants to be able to track specialties and sub-specialties related to practitioner to use in provider search. Which would they store these relationships? (Choose threE.`,
    options: [
      { id: "A", option: `Care provider facility specialty` },
      { id: "B", option: `Healthcare provider specialty` },
      { id: "C", option: `Care Taxonomy` },
      { id: "D", option: `Healthcare provider Taxonomy` },
      { id: "E", option: `Care specialty` },
    ],
    answer: [{ id: "A" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_map_provider_search_data.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=22",
    ],
  },
  {
    id: "148",
    questionType: "Multiple Choice",
    question: `In which two ways can Makana health service administrator prevent unauthorized users accessing the data?(choose two)`,
    options: [
      { id: "A", option: `Encrypt the data using shield` },
      { id: "B", option: `Install shield and enable mask.` },
      { id: "C", option: `create sharing sets` },
      { id: "D", option: `optimize data using mask` },
      {
        id: "E",
        option: `use field level security setting, record access setting and object permission.`,
      },
    ],
    answer: [{ id: "A" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.security_pe_concepts.htm&type=5",
      "https://www.exam4free.com/articles/valid-health-cloud-accredited-professional-exam-dumps-ensure-you-a-high-score-2023-q96-q120/#",
    ],
  },
  {
    id: "149",
    questionType: "Multiple Choice",
    question: `Which of the following capabilities of provide search would a customer service agent use to help prospective and returning patients for the right provider? (Choose threE.`,
    options: [
      {
        id: "A",
        option: `Use custom fields defined in health care provider and health care practitioner facility entities as part of search experience.`,
      },
      {
        id: "B",
        option: `Use custom fields defined in any entity within the provider data model in health cloud as part of search experience.`,
      },
      {
        id: "C",
        option: `Use provider search in an authenticated community page`,
      },
      {
        id: "D",
        option: `Connect the list of fields displayed in the search panel and search results.`,
      },
      {
        id: "E",
        option: `Use provider search in an unauthenticated community page.`,
      },
    ],
    answer: [{ id: "A" }, { id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://www.coursehero.com/file/pb2ohk6/Which-of-the-following-capabilities-of-provide-search-would-a-customer-service/",
    ],
  },
  {
    id: "150",
    questionType: "Single Choice",
    question: `Which statement is true about using PurchaserPlan and MemberPlan together when onboarding new insurance members?`,
    // question: `Which statement is false about using PurchaserPlan and MemberPlan together when onboarding new insurance members?`,
    options: [
      {
        id: "A",
        option: `Multiple purchaser plans can be associated to multiple Member Plans.`,
      },
      {
        id: "B",
        option: `Purchaser Plan and Member Plan has a master detail relationship`,
      },
      {
        id: "C",
        option: `there is no relationship between MemberPlan and Purchaser Plan.`,
      },
      {
        id: "D",
        option: `PurchasePlan is to be used as a template for creating MemberPlan.`,
      },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://www.coursehero.com/file/pkpu96h/Which-underlying-object-helps-with-sales-compliance-with-sales-agreements-a/",
    ],
  },
  {
    id: "151",
    questionType: "Multiple Choice",
    question: `Which two actions should be completed by health cloud admin in order to leverage the health cloud utilization management capabilities?`,
    options: [
      {
        id: "A",
        option: `Install the heath cloud unmanaged package extension`,
      },
      { id: "B", option: `Install the health cloud managed package` },
      {
        id: "C",
        option: `Install the health cloud care request extensions managed package.`,
      },
      {
        id: "D",
        option: `Assign the health cloud social determinants permission set`,
      },
      { id: "E", option: `Assign the health cloud foundation permission set` },
    ],
    answer: [{ id: "B" }, { id: "E" }],
    // answer: [{ id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_utilization_management_prereq.htm&type=5",
      "https://www.coursehero.com/file/p5n9ja26/a-78-Which-two-actions-should-be-completed-by-health-cloud-admin-in-order-to/",
      "https://help.salesforce.com/s/articleView?id=sf.care_request_submit.htm&type=5",
    ],
  },
  {
    id: "152",
    questionType: "Single Choice",
    question: `A Salesforce technical architect is migrating a service cloud org to health cloud and needs to update existing integrations to create records in health cloud objects instead of creating records in custom objects. Which unique health cloud considerations apply regarding the use of APIs in this case?`,
    options: [
      {
        id: "A",
        option: `Health Cloud uses Business API's that should be used instead of object level API's`,
      },
      {
        id: "B",
        option: `Only object level APIs should be used as Business APIs are not used for record creation.`,
      },
      {
        id: "C",
        option: `Health cloud and custom objects both leverage the same object -level API approach. No unique health cloud considerations apply.`,
      },
      {
        id: "D",
        option: `Any combination of object-level APIs and business APIs may be used.`,
      },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_business_apis.htm",
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_health_cloud_business_apis.htm&release=220&type=5",
      "https://www.coursehero.com/file/p7dcbjn9/Explanation-Reference-and-details-below-Question-No-76-During-set-up-a/",
    ],
  },
  {
    id: "153",
    questionType: "Single Choice",
    question: `During set up a salesforce admin is unable to install the health cloud claims unmanaged package. What is the reason?`,
    options: [
      { id: "A", option: `The health cloud managed package is missing` },
      { id: "B", option: `The health cloud permission set license is missing` },
      { id: "C", option: `The administrator is not registered in AppExchange` },
      {
        id: "D",
        option: `The administrator doesn't have health cloud license`,
      },
    ],
    answer: [{ id: "B" }],
    // answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_unmanaged_package_claims.htm&type=5",
    ],
  },
  {
    id: "154",
    questionType: "Single Choice",
    question: `Which underlying object helps with sales compliance with sales agreements?`,
    options: [
      { id: "A", option: `Opportunities` },
      { id: "B", option: `Contacts` },
      { id: "C", option: `Orders` },
      { id: "D", option: `Forecasts` },
    ],
    answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.sa_user_parent_concept.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.auto_sales_agreements_dealers.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.retail_concept_admin_sasettings_sa.htm&type=5",
      "https://www.coursehero.com/file/p7657clt/Which-underlying-object-helps-with-sales-compliance-with-sales-agreements-a/",
    ],
  },
  {
    id: "155",
    questionType: "Multiple Choice",
    question: `Which Three items can be a Life Science company track about a Care Programs using Program Management? (Choose Three.`,
    options: [
      {
        id: "A",
        option: `The multiple marketing campaigns that enrollees are subjected to as part of the Care Program.`,
      },
      {
        id: "B",
        option: `The budget & Expenses of the company's associate Care Program`,
      },
      {
        id: "C",
        option: `The clinical indicators that need to be monitored in the care programs`,
      },
      {
        id: "D",
        option: `The products that are associate with a given Care Program`,
      },
      {
        id: "E",
        option: `The plans that enrollees have been engaged in as part of the care program`,
      },
    ],
    answer: [{ id: "A" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_care_program_data_model.htm",
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-care-programs/get-to-know-care-programs",
      "https://www.coursehero.com/file/pvo2hvt/What-is-the-best-practice-when-transitioning-an-org-from-Service-Cloud-to-HC-A/",
    ],
  },
  {
    id: "156",
    questionType: "Multiple Choice",
    question: `Which Intelligent Appointment Management, What products or feature can be leveraged to supplement? (Choose two)`,
    options: [
      { id: "A", option: `Salesforce Field Service` },
      { id: "B", option: `Tableau CRM` },
      { id: "C", option: `Salesforce Scheduler` },
      { id: "D", option: `External Scheduling Systems` },
    ],
    answer: [{ id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.appointment_scheduling_system.htm&type=5",
    ],
  },
  {
    id: "157",
    questionType: "Multiple Choice",
    // question: `Which three statement are false about a Care Program? (Choose 3)`,
    question: `Which three statement are true about a Care Program? (Choose 3)`,
    options: [
      {
        id: "A",
        option: `A Patient can be enrolled in multiple care programs at the same time.`,
      },
      {
        id: "B",
        option: `A Patient cannot be enrolled in the same care program more than once.`,
      },
      {
        id: "C",
        option: `More than 500 patients can be enrolled in a care program in a single request using the Care Program Enrollment.`,
      },
      {
        id: "D",
        option: `CareProgramEnrollee represents the participant enrolled in a care program`,
      },
      {
        id: "E",
        option: `A patient can be enrolled in the same care program more than once.`,
      },
    ],
    answer: [{ id: "A" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_care_program_data_model.htm",
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_health_multiple_enrollees.htm&release=226&type=5",
    ],
  },
  {
    id: "158",
    questionType: "Multiple Choice",
    question: `Which of the following is a valid Life Science Program Management data object ? (Choose threE.`,
    options: [
      { id: "A", option: `Care Program Problem` },
      { id: "B", option: `Care Program Team Member` },
      { id: "C", option: `Care Program Provider` },
      { id: "D", option: `Care Program Enrollee Product` },
      { id: "E", option: `Care Program Enrollee Campaign` },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_care_program_data_model.htm",
      "https://developer.salesforce.com/docs/atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/life_sciences_sforce_api_objects.htm",
    ],
  },
  {
    id: "159",
    questionType: "Multiple Choice",
    question: `Which of the following capabilities of the provider search would a customer service Agent use to help payers to find the right provider? (Choose Three.`,
    options: [
      {
        id: "A",
        option: `Use Provider search in an authenticated community page`,
      },
      {
        id: "B",
        option: `Use provider search in an unauthenticated community page`,
      },
      {
        id: "C",
        option: `Control the list of the fields displayed in the search panel and search results`,
      },
      {
        id: "D",
        option: `Use custom fields defined in healthcare provider and healthcare Practitioner Facility entities as part of the search provider.`,
      },
      {
        id: "E",
        option: `Use custom fields defined in any entities within the Provider data model in Health cloud as part of the search component.`,
      },
    ],
    answer: [{ id: "A" }, { id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.hc_admin_provider_search_experience_cloud.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.hc_admin_provider_search_criteria_based.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_provider_search_custom_fields.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_provider_search_setup.htm&type=5",
    ],
  },
  {
    id: "160",
    questionType: "Multiple Choice",
    question: `Which three activities does ''The Social Determinants'' feature in Health cloud help providers perform? (choose three.`,
    options: [
      {
        id: "A",
        option: `Integrate service such as transportation and meal delivery into their patient care plans and programs.`,
      },
      {
        id: "B",
        option: `Track determinants and barriers to care across their patient populations`,
      },
      {
        id: "C",
        option: `Automatically import credit scores and income information into the patient record in Health cloud`,
      },
      {
        id: "D",
        option: `Track the influence of the social network of the patient on the patients' health outcomes`,
      },
      {
        id: "E",
        option: `Plan interventions to help address the barriers to care within their patient populations`,
      },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "E" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-data-models/discover-the-social-determinants-of-health-data-model",
      "https://help.salesforce.com/s/articleView?id=sf.landing_social_determinants.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=19",
    ],
  },
  {
    id: "161",
    questionType: "Single Choice",
    question: `Which Feature would an administrator setup to help their sales team view all provider related to a specific facility?`,
    options: [
      { id: "A", option: `Provider Search` },
      { id: "B", option: `Practitioner Relationship` },
      { id: "C", option: `Provider Cards` },
      { id: "D", option: `Provider Relationship` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_provider_cards.htm&type=5",
      "https://www.coursehero.com/file/p37slnd3/ooo-A-client-wants-to-store-data-for-patients-smartwatch-to-display-within-the/",
    ],
  },
  {
    id: "162",
    questionType: "Single Choice",
    question: `A client wants to store data for patient's smartwatch to display within the Remote Monitoring charts. What object would you store this information in?`,
    options: [
      { id: "A", option: `DiagnosticSummary` },
      { id: "B", option: `Care Observations` },
      { id: "C", option: `Clinical Encounters` },
      { id: "D", option: `Identifiers` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://www.crack4sure.com/Health-Cloud-Accredited-Professional-dumps.html",
      "https://www.crack4sure.com/Health-Cloud-Accredited-Professional-dumps.html",
    ],
  },
  {
    id: "163",
    questionType: "Multiple Choice",
    question: `Which three types of Electronic Health Record data transmitted via HL7 can be stored in Salesforce objects? (Choose Three.`,
    options: [
      { id: "A", option: `Continuation of Care document (CCD.` },
      { id: "B", option: `Observation Results (ORU)` },
      { id: "C", option: `Personal Health Record (PHR)` },
      { id: "D", option: `Admission, Discharge, Transfer Data (ADT)` },
      { id: "E", option: `Clinical Document Architecture (CDA.` },
    ],
    answer: [{ id: "B" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_hl7_overview.htm",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hl7_cda.htm",
      "https://www.coursehero.com/file/p25m0u65/Explanation-Question-No-66-Which-three-types-of-Electronic-Health-Record-data/",
    ],
  },
  {
    id: "164",
    questionType: "Single Choice",
    question: `Which entity in Health cloud is used to store the details of a vaccine being administrated?`,
    options: [
      { id: "A", option: `Procedure` },
      { id: "B", option: `Patient Immunization` },
      { id: "C", option: `Medication` },
      { id: "D", option: `Encounter` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_PatientImmunization.htm",
      "https://www.coursehero.com/file/pn2trno/a-63-How-Can-you-restrict-access-to-an-entire-patient-member-list-or-to-specific/",
    ],
  },
  {
    id: "165",
    questionType: "Multiple Choice",
    question: `Which three steps should be followed when setting up Intelligent Sales in Health Cloud? (Choose three.`,
    options: [
      { id: "A", option: `Customize Visit Execution event object` },
      { id: "B", option: `Customize the vendor product fulfillment flow` },
      { id: "C", option: `Enable Intelligent Sales` },
      { id: "D", option: `Set up permission set for Intelligent Sales` },
      { id: "E", option: `Set Visit Inventory Management to enabled` },
    ],
    answer: [{ id: "C" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.landing_intelligent_sales.htm&type=5",
      "https://www.coursehero.com/file/p129df4ig/Which-Salesforce-object-is-used-to-model-a-Care-Plan-a-Account-b-Lead-c-Case-d/",
    ],
  },
  {
    id: "166",
    questionType: "Multiple Choice",
    question: `How Can you restrict access to an entire patient / member list or to specific columns of that list? (Choose two)`,
    options: [
      { id: "A", option: `Permission Sets` },
      { id: "B", option: `Sharing setting` },
      { id: "C", option: `List View Permissions` },
      { id: "D", option: `Field Level Security` },
    ],
    answer: [{ id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_patient_list_sharing.htm&type=5",
      "https://www.coursehero.com/file/pn2trno/a-63-How-Can-you-restrict-access-to-an-entire-patient-member-list-or-to-specific/",
    ],
  },
  {
    id: "167",
    questionType: "Single Choice",
    question: `How does an administrator display device information on a patient card?`,
    options: [
      {
        id: "A",
        option: `Create an Asset record and create a care registered device record that look up to the patient.`,
      },
      {
        id: "B",
        option: `Create a custom field on the EHR_Patient object with a formula that return the information.`,
      },
      {
        id: "C",
        option: `Create a custom field on the EHR_DeviceRequest object with a formula that return the information.`,
      },
      {
        id: "D",
        option: `Create a custom field on the EHR_MedicalDevice object with a formula that return the information.`,
      },
      {
        id: "E",
        option: `Create a custom field on the FilterCondition__c object with a formula that return the information.`,
      },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_remote_monitoring_data_model.htm",
      "https://www.coursehero.com/file/p69f8j0m/The-Salesforce-administrator-for-ABC-Policies-Inc-a-Health-Care-Payer/",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/ehr_cdm.htm",
      "https://help.salesforce.com/s/articleView?id=sf.admin_config_patient_card.htm&type=5",
    ],
  },
  {
    id: "168",
    questionType: "Multiple Choice",
    question: `When Setting Up Intelligent Sales, which three types of record should be a ....................
    Records can be Created? (Choose Three)`,
    options: [
      { id: "A", option: `Accounts` },
      { id: "B", option: `Contacts` },
      { id: "C", option: `Assets` },
      { id: "D", option: `Locations` },
      { id: "E", option: `Opportunities` },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_intelligent_sales_set_up_data.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_intelligent_sales_data_model.htm&type=5",
      "https://www.coursehero.com/file/p69f8j0m/The-Salesforce-administrator-for-ABC-Policies-Inc-a-Health-Care-Payer/",
    ],
  },
  {
    id: "169",
    questionType: "Single Choice",
    question: `Which Salesforce object is used to model a Care Plan?`,
    options: [
      { id: "A", option: `Account` },
      { id: "B", option: `Lead` },
      { id: "C", option: `Case` },
      { id: "D", option: `Opportunity` },
      { id: "E", option: `Task` },
    ],
    answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.care_plan_creation.htm&type=5",
      "https://www.coursehero.com/file/p129df4ig/Which-Salesforce-object-is-used-to-model-a-Care-Plan-a-Account-b-Lead-c-Case-d/",
    ],
  },
  {
    id: "170",
    questionType: "Single Choice",
    question: `A Health Cloud administrator has set up risk recalculation by setting the recalculate flag to false but is not seeing the recalculation score for the patient. Which of the following is most likely the reason why recalculation score for the patient is not displaying?`,
    options: [
      { id: "A", option: `Use the CMS recalculation API` },
      {
        id: "B",
        option: `Risk scores are only recalculated for patients who are affiliated with a care program.`,
      },
      { id: "C", option: `CMS scores cannot be recalculated in health cloud.` },
      {
        id: "D",
        option: `Use a 3 - Apply to Real World / Analyze / Evaluated party API to recalculate CMS risk score.`,
      },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_apex_risk_scoring.htm&type=5",
      "https://www.coursehero.com/file/p69f8j0m/The-Salesforce-administrator-for-ABC-Policies-Inc-a-Health-Care-Payer/",
    ],
  },
  {
    id: "171",
    questionType: "Multiple Choice",
    question: `Which two of the following statements are false about Care Teams? (Choose Two.)`,
    options: [
      { id: "A", option: `Care Team Members are optional on a Care Plan.` },
      {
        id: "B",
        option: `A Care Plan must have a Coordinator as a member of the Care Team before a Care Plan Template can be applied.`,
      },
      {
        id: "C",
        option: `If the Problem and Goal objects use Private Sharing, Care Team Membership provides access to these objects.`,
      },
      {
        id: "D",
        option: `Communities must be enabled before External Care Team members can be added.`,
      },
    ],
    answer: [{ id: "A" }, { id: "C" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-care-plans/set-up-care-plans",
      "https://help.salesforce.com/s/articleView?id=sf.add_care_team_member.htm&type=5",
      "https://salesforce.vidyard.com/watch/ikv2NvvU85oBpYfDnbEUtA",
    ],
  },
  {
    id: "172",
    questionType: "Single Choice",
    question: `The Salesforce administrator for ABC Policies Inc, a Health Care Payer Organization, would like to enable the members to enroll in and out of Care Program multiple times. Where, within Health Cloud Settings, should a Health Cloud administrator make changes to accomplish this requirement?`,
    options: [
      { id: "A", option: `Program Enrollee Settings` },
      { id: "B", option: `Care Program Settings` },
      { id: "C", option: `Health Cloud Settings` },
      { id: "D", option: `Care Request Settings` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_health_multiple_enrollees.htm&release=226&type=5",
      "https://www.coursehero.com/file/p69f8j0m/The-Salesforce-administrator-for-ABC-Policies-Inc-a-Health-Care-Payer/",
    ],
  },
  {
    id: "173",
    questionType: "Multiple Choice",
    question: `Which three of the following Health Cloud objects are part of the standard Care Management data Model? (Choose three)`,
    options: [
      { id: "A", option: `CareSpeciality` },
      { id: "B", option: `CarePlan Template Task` },
      { id: "C", option: `TimelineViewConfiguration` },
      { id: "D", option: `CareProgramGoal` },
      { id: "E", option: `CarePlanGoal` },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_care_management_data_model.htm",
      "https://www.coursehero.com/file/p7ctso87/In-which-two-ways-can-an-administrator-ensure-that-Patient-Risk-scores-are/",
    ],
  },
  {
    id: "174",
    questionType: "Multiple Choice",
    question: `In which two ways can an administrator ensure that Patient Risk scores are recalculated periodically? (Choose Two.)`,
    options: [
      { id: "A", option: `Setup a scheduled Apex batch job.` },
      { id: "B", option: `Use the CMS recalculation API` },
      {
        id: "C",
        option: `Use a third party API to recalculate CMS risk score`,
      },
      { id: "D", option: `Setup a Apex batch job and run the job manually` },
      { id: "E", option: `Create a Healthcare Provider enrollment flow.` },
    ],
    answer: [{ id: "A" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_apex_risk_scoring.htm&type=5",
      "https://www.coursehero.com/file/p7ctso87/In-which-two-ways-can-an-administrator-ensure-that-Patient-Risk-scores-are/",
    ],
  },
  {
    id: "175",
    questionType: "Multiple Choice",
    question: `A Health Cloud administrator working on a Care Coordination project needs to change the role name 'Care Coordinator' to 'Care Consultant' to match the organizations nomenclaturE. Which three steps should the administrator take to ensure all Tasks identify the role 'Care Consultant'? (Choose three.)`,
    options: [
      {
        id: "A",
        option: `Create an ETL script to update the previously assigned To picklist values of Tasks created in the past.`,
      },
      {
        id: "B",
        option: `Update/Add the organization roles in the CarePlan_Role_Patient key:value pair in Health Cloud Setting.`,
      },
      {
        id: "C",
        option: `Update the organization roles in the CarePlan_Role_Care_Coordinator key:value pair in Health Cloud Setting.`,
      },
      {
        id: "D",
        option: `Update the Care Plan Record Type custom metadata type to reflect the care coordination processes specific to the Care Coordinators.`,
      },
      {
        id: "E",
        option: `Update the corresponding roles in the Assigned To picklist for the Care Plan Template Task object.`,
      },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_customize_delivered_roles.htm&type=5",
      "https://www.coursehero.com/file/p36nfseq/A-Health-Cloud-administrator-is-working-to-create-an-external-facing-site-to/",
    ],
  },
  {
    id: "176",
    questionType: "Single Choice",
    question: `A Health Cloud administrator is working to create an external facing site to allow patients to find providers within their network. The site is being built by Experience ClouD. The administrator needs to determine what access external users must be granted to allow patients to search and find Providers that fit selected criteriA Which object do the external user need read access to?`,
    options: [
      { id: "A", option: `CareProviderFacilitySpeciality` },
      { id: "B", option: `HealthcarePractitionerFacility` },
      { id: "C", option: `CareProviderSearchableField` },
      { id: "D", option: `CareProviderSearchConfig` },
    ],
    answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.hc_provider_search_guest_user_profile_access_to_objects.htm&type=5",
      "https://www.coursehero.com/file/p36nfseq/A-Health-Cloud-administrator-is-working-to-create-an-external-facing-site-to/",
    ],
  },
  {
    id: "177",
    questionType: "Multiple Choice",
    question: `Which three actions can providers take with the help of the Contact Tracing feature in Health Cloud? (Choose three.)`,
    options: [
      {
        id: "A",
        option: `Perform an audit of the Contact Record to keep track of the changes made to the Contact record by users.`,
      },
      {
        id: "B",
        option: `Perform contact tracing of their internal employees during an infectious disease outbreak or pandemic.`,
      },
      {
        id: "C",
        option: `Perform contact tracing of their patients during an infectious disease outbreak or pandemic.`,
      },
      {
        id: "D",
        option: `Track their patients as contacts by using Contact entity in Salesforce.`,
      },
      {
        id: "E",
        option: `Track the location duration and number of participants in each contact encounter that the infected person was involved in.`,
      },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.emergency_response_admin_contact_tracing_intro.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.emergency_response_admin_set_up_contact_tracing.htm&type=5",
      "https://www.coursehero.com/file/p7o61j5i/Explanation-Reference-and-details-below-Question-No-51-Which-objects-are/",
    ],
  },
  {
    id: "178",
    questionType: "Single Choice",
    question: `Which objects are leveraged to track patient referrals?`,
    options: [
      { id: "A", option: `Lead` },
      { id: "B", option: `Care Request` },
      { id: "C", option: `Care Program Enrollee` },
      { id: "D", option: `Cases` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.referrals_create.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=14",
    ],
  },
  {
    id: "179",
    questionType: "Multiple Choice",
    question: `An administrator wants to add additional fields to their Provider Search capabilities. Which two objects can they map fields from? (Choose Two.)`,
    options: [
      { id: "A", option: `Healthcare Practitioner Facility` },
      { id: "B", option: `Care Provider Searchable Field` },
      { id: "C", option: `Person Account` },
      { id: "D", option: `Account` },
      { id: "E", option: `Healthcare Provider` },
    ],
    answer: [{ id: "A" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_provider_search_custom_fields.htm&type=5",
      "https://www.coursehero.com/file/p4an4ouv/An-administrator-wants-to-add-additional-fields-to-their-Provider-Search/",
    ],
  },
  {
    id: "180",
    questionType: "Single Choice",
    question: `A company recently migrated from Service Cloud to Health Cloud and is working on strengthening their relationships within their provider network. Which object within the Provider Relationship Management data model can be used to track each of the different locations where a provider practiced?`,
    options: [
      { id: "A", option: `HealthcareFacilityNetwork` },
      { id: "B", option: `HealthcareProvider` },
      { id: "C", option: `HealthcarePractitionerFacility` },
      { id: "D", option: `HealthcareProviderSpeciality` },
      { id: "E", option: `BusinessLicense` },
    ],
    answer: [{ id: "C" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_provider_data_model_overview.htm",
      "https://www.coursehero.com/file/p3tuhd6a/Which-two-use-cases-can-be-enabled-using-the-Remote-Patient-Monitoring-feature/",
    ],
  },
  {
    id: "181",
    questionType: "Multiple Choice",
    question: `Which of the following Salesforce and Health Cloud objects can be used to represent Provider and their relationship in a Provider Management data model? (Choose Three.)`,
    options: [
      { id: "A", option: `Contact` },
      { id: "B", option: `Healthcare Practitioner Facility` },
      { id: "C", option: `Lead` },
      { id: "D", option: `Case` },
      { id: "E", option: `Healthcare Provider` },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "E" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.250.0.health_cloud_object_reference.meta/health_cloud_object_reference/hc_pnm_data_model.htm",
      "https://www.coursehero.com/file/p4h9nu4j/Which-two-use-cases-can-be-enabled-using-the-Remote-Patient-Monitoring-feature/",
    ],
  },
  {
    id: "182",
    questionType: "Multiple Choice",
    question: `Which two use cases can be enabled using the Remote Patient Monitoring feature in Health Cloud? (Choose two.)`,
    options: [
      {
        id: "A",
        option: `Monitor the location of the patient using the GPS on their mobile device.`,
      },
      {
        id: "B",
        option: `Use a meaningful subset of the data generated by connected devices to drive patient engagement and intervention.`,
      },
      {
        id: "C",
        option: `Connect the patient's social media accounts to the patient profile and use information contained in social media feeds to monitor the patient's health.`,
      },
      {
        id: "D",
        option: `Bring in all the device generated data for the entire patient population to create a device data lake within Health ClouD.`,
      },
      {
        id: "E",
        option: `Use the data generated by connected devices used by patient to monitor the patient's health.`,
      },
    ],
    answer: [{ id: "B" }, { id: "E" }],
    conform: true,
    reference: [
      "https://www.coursehero.com/file/p4h9nu4j/Which-two-use-cases-can-be-enabled-using-the-Remote-Patient-Monitoring-feature/",
      "https://help.salesforce.com/s/articleView?id=sf.admin_remote_monitoring.htm&type=5",
    ],
  },
  {
    id: "183",
    questionType: "Single Choice",
    question: `A Salesforce administrator is migrating a Service Cloud org to Health Cloud and is considering using the Health Cloud Provider data model. Which approach should the administrator take if the Custom Provider Search Lightning component is to be used?`,
    options: [
      {
        id: "A",
        option: `The Provider data model is required for all Service Cloud to Health Cloud migrations, but either the standard or custom search components may be useD.`,
      },
      {
        id: "B",
        option: `If the Provider data model is used, the standard Health Cloud Provider Search component must be used or extendeD. Custom search components are not supporteD.`,
      },
      {
        id: "C",
        option: `The current data model with the existing component can be used as well as the Provider data model with either custom search component or the Health Cloud Provider Search component.`,
      },
      {
        id: "D",
        option: `The Standard Health Cloud Provider Search component can be used to search either the Health Cloud Provider data model or a custom Provider data model.`,
      },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.hc_provider_search.htm&type=5",
      "https://www.coursehero.com/file/p7rlaq58/In-which-two-ways-can-a-Data-Architect-ensure-PHIPII-data-visibility-is/",
    ],
  },
  {
    id: "184",
    questionType: "Single Choice",
    question: `Which step is recommended to be completed before migrating from Service Cloud to HC?`,
    options: [
      { id: "A", option: `Migrate all existing leads to candidate leads.` },
      { id: "B", option: `Migrate patient data to person accounts.` },
      { id: "C", option: `Uninstall any Sales Cloud related packages.` },
      { id: "D", option: `Log a Salesforce support case.` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_person_account_overview.htm&type=5",
      "No any other reference available but by eliminating all option it is correct.",
    ],
  },
  {
    id: "185",
    questionType: "Single Choice",
    question: `What is the recommended approach to create patients' records used in HC?`,
    options: [
      {
        id: "A",
        option: `Use Patient Data Import Wizard for importing up to 50,000 records.`,
      },
      { id: "B", option: `Patient object to convert leads into contacts.` },
      {
        id: "C",
        option: `Create patient records using Patient Loader WizarD.`,
      },
      { id: "D", option: `Create as Person Accounts or Leads for referrals` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_person_account_overview.htm&type=5",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_lead_custom_fields.htm",
    ],
  },
  {
    id: "186",
    questionType: "Multiple Choice",
    question: `In which two ways can a Data Architect ensure PHI/PII data visibility is minimized during the migration of Patient Data from an existing Service Cloud org to a new HC org?(Choose 2)`,
    options: [
      {
        id: "A",
        option: `Use Salesforce Data Masking when moving data to a Sandbox.`,
      },
      {
        id: "B",
        option: `Use Data Templates to exclude PHI/PII data from being added to Partial Copy Sandboxes`,
      },
      {
        id: "C",
        option: `Export Data to a spreadsheet to remove PHI before importing it into a Sandbox`,
      },
      { id: "D", option: `Ensure Sandboxes have` },
      { id: "E", option: `Platform Shield enabled.` },
    ],
    answer: [{ id: "A" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_security_data_mask.htm&release=244&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_salesforce_shield.htm&type=5",
      "https://www.coursehero.com/file/p5pd269to/In-which-two-ways-can-a-Data-Architect-ensure-PHIPII-data-visibility-is/",
    ],
  },
  {
    id: "187",
    questionType: "Single Choice",
    question: `A Payer Service Cloud org uses Accounts and contacts to model Health Insurance Members. While all teams within the organization Work with all members, only some teams require HC capabilities. What is the recommended best practice for modeling members in HC for this organization?`,
    options: [
      {
        id: "A",
        option: `Only groups needing HC capabilities need to use Person Accounts.`,
      },
      {
        id: "B",
        option: `Model as Person Accounts, whether they are using HC capabilities or not.`,
      },
      {
        id: "C",
        option: `Account Record Types for existing members can remain as-is. Future members should be created as Person Accounts.`,
      },
      { id: "D", option: `Use the individual model with HC` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_person_account_overview.htm&type=5",
    ],
  },
  {
    id: "188",
    questionType: "Single Choice",
    question: `What is the best practice when transitioning an org from Service Cloud to HC?`,
    options: [
      {
        id: "A",
        option: `Approach depends on how each customer uses their org. Any other options may be used.`,
      },
      {
        id: "B",
        option: `Put HC use cases in a new org, leave only Service Cloud use cases in an existing org.`,
      },
      { id: "C", option: `Migrate the entire org in place.` },
      {
        id: "D",
        option: `Build out HC capabilities in a new org, then migrate all users and data.`,
      },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: ["Still No reference available."],
  },
  {
    id: "189",
    questionType: "Single Choice",
    question: `Which permission set is needed to grant users read access to health insurance records and also create, read and update access to Utilization Management records?`,
    options: [
      { id: "A", option: `HC Utilization Management Permission Set` },
      { id: "B", option: `HC Foundation permission set` },
      { id: "C", option: `HC Permission set license` },
      { id: "D", option: `The Health Cloud Member Services Permission Set` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_utilization_management_prereq.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_utilization_management_record_types.htm&type=5",
      "https://www.coursehero.com/file/p4ff9kg9/Which-three-standard-objects-are-used-in-the-workflow-to-manage-utilization-data/",
    ],
  },
  {
    id: "190",
    questionType: "Multiple Choice",
    question: `Healthcare companies face challenges from a variety of sources. What are three common challenges they could encounter that HC solves for? (Choose 3)`,
    options: [
      {
        id: "A",
        option: `There are not enough Providers for the amount of the Care Requests.`,
      },
      {
        id: "B",
        option: `Insufficient funds allocated to Research and Development.`,
      },
      { id: "C", option: `The need to drive sales while reducing cost.` },
      {
        id: "D",
        option: `Growing customer expectations for delivery of care everywherE.`,
      },
      {
        id: "E",
        option: `Growing demand for a more personalized care experience.`,
      },
    ],
    answer: [{ id: "C" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/the-healthcare-provider-industry-sector/review-provider-products-customers-and-trendsreview-provider-products-customers-",
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-for-providers/meet-health-cloud-for-providers?trail_id=get-to-know-healthcloud",
    ],
  },
  {
    id: "191",
    questionType: "Single Choice",
    question: `Which is true about choosing a care request type when setting up a new care request record?`,
    options: [
      {
        id: "A",
        option: `Any case record type can be chosen when creating care request.`,
      },
      {
        id: "B",
        option: `A care request type cannot be chosen when creating a new care request.`,
      },
      {
        id: "C",
        option: `A case record type can be chosen to identify a single care request type for each care request.`,
      },
      {
        id: "D",
        option: `Multiple care request types can be chosen for a single care request.`,
      },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://www.marks4sure.com/health-cloud-accredited-professional-salesforce-health-cloud-accredited-professional-questions.html#:~:text=A%20care%20request%20type%20cannot,type%20for%20each%20care%20request.",
      "https://www.dumpsmate.com/health-cloud-accredited-professional-salesforce-health-cloud-accredited-professional-sp22-question.html",
      "No Admin document available but you can do practical in Health Cloud Superbadge by try to create a new Care Request record.",
    ],
  },
  {
    id: "192",
    questionType: "Multiple Choice",
    question: `Which three standard objects are used in the workflow to manage utilization data? (Choose 3)`,
    options: [
      { id: "A", option: `Care Request Plan` },
      { id: "B", option: `Care Diagnosis` },
      { id: "C", option: `Care Authorization` },
      { id: "D", option: `Care Request` },
      { id: "E", option: `Care Request Drug` },
    ],
    answer: [{ id: "B" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_um_data_model.htm&type=5",
    ],
  },
  {
    id: "193",
    questionType: "Multiple Choice",
    question: `Which three business process are supported by Salesforce HC utilization Management? (Choose 3)`,
    options: [
      { id: "A", option: `Ticketing` },
      { id: "B", option: `Physician Request` },
      { id: "C", option: `Drug Request` },
      { id: "D", option: `Admissions` },
      { id: "E", option: `Appeals` },
    ],
    answer: [{ id: "C" }, { id: "D" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_um_data_model.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=10",
    ],
  },
  {
    id: "194",
    questionType: "Multiple Choice",
    question: `The Salesforce Admin for Lake Tahoe Hospital wants to implement Utilization Management. Which two of the listed steps need to be taken during the set-up process? (Choose 2)`,
    options: [
      {
        id: "A",
        option: `Install the Health Cloud Care Request Extensions unmanaged packagE.`,
      },
      {
        id: "B",
        option: `Assign the Health Cloud Permission Set License and Health Cloud Platform Permission Set License to Salesforce Classic users.`,
      },
      {
        id: "C",
        option: `Assign the Health Cloud Permission Set License and the Health Cloud Platform Permission Set License to Salesforce Lightning users.`,
      },
      { id: "D", option: `Install the Utilization Management Extensions.` },
    ],
    answer: [{ id: "A" }, { id: "C" }],
    conform: true,
    reference: [
      "https://www.salesforce.com/content/dam/web/en_au/www/documents/pricing/healthcloud-pricing-datasheet-au.pdf",
      "https://help.salesforce.com/s/articleView?id=sf.admin_utilization_management_prereq.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_utilization_management_record_types.htm&type=5",
    ],
  },
  {
    id: "195",
    questionType: "Multiple Choice",
    question: `Which three options are standard objects available for Insurance Management? (choose 3)`,
    options: [
      { id: "A", option: `Insurance Benefit` },
      { id: "B", option: `PurchaserPlan` },
      { id: "C", option: `MemberPlan` },
      { id: "D", option: `Coverage Benefit` },
      { id: "E", option: `Insurance Coverage` },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_membership_data_model.htm",
      "https://www.coursehero.com/file/p1l50nim/Question-No-33-Which-Visual-representation-in-Health-Cloud-would-enable-a-care/",
    ],
  },
  {
    id: "196",
    questionType: "Single Choice",
    question: `Which Visual representation in Health Cloud would enable a care coordination to see all the relationships between a patient and the people and organizations participating in the patient's, including those across multiple care plans?`,
    options: [
      { id: "A", option: `Timeline view` },
      { id: "B", option: `Care Team` },
      { id: "C", option: `Lightning Empower Components` },
      { id: "D", option: `Householding Map` },
      { id: "E", option: `Patient Card` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.household_map_overview.htm&type=5",
    ],
  },
  {
    id: "197",
    questionType: "Multiple Choice",
    question: `Which three of the following features are included with a Health Cloud License?`,
    options: [
      { id: "A", option: `EHR Mulesoft Templates` },
      { id: "B", option: `Surveys` },
      { id: "C", option: `Intelligent Document Automation` },
      { id: "D", option: `Care Cordination(Patient Services)` },
      { id: "E", option: `Intelligent Form Reader with Amazon Textract` },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://www.salesforce.com/content/dam/web/en_au/www/documents/pricing/healthcloud-pricing-datasheet-au.pdf",
      "https://help.salesforce.com/s/articleView?id=sf.provide_assessments_and_surveys_for_gathering_information.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.form_reader.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=9",
    ],
  },
  {
    id: "198",
    questionType: "Single Choice",
    question: `Clinicians want to see an overview of the patient's life, like Starting a New Job, Birth of a Baby, Divorce, etC. to understand the patient better and help them with a personalized care plan. What should the administrator configure in the Health Cloud so the clinicians can access this information in one place?`,
    options: [
      { id: "A", option: `Life Goals` },
      { id: "B", option: `Life Events` },
      { id: "C", option: `Household Map` },
      { id: "D", option: `Milestones` },
      { id: "E", option: `Life Map` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_manage_life_event_types.htm&type=5",
      "https://www.coursehero.com/file/p2l7s71n/Clinicians-want-to-see-an-overview-of-the-patients-life-like-Starting-a-New-Job/",
    ],
  },
  {
    id: "199",
    questionType: "Multiple Choice",
    question: `What is Health Cloud? (Choose two.)`,
    options: [
      { id: "A", option: `Health Cloud is an engagement layer.` },
      {
        id: "B",
        option: `An AppExchange core package and third party service.`,
      },
      {
        id: "C",
        option: `Health Cloud is part managed package and part core services.`,
      },
      { id: "D", option: `Core services exposed by permission license.` },
      {
        id: "E",
        option: `Health Cloud is a new type of Electronic Health Record.`,
      },
    ],
    answer: [{ id: "A" }, { id: "C" }],
    conform: true,
    reference: [
      "https://in-cloud.ca/combining-salesforce-health-cloud-and-ehr-platforms-in-healthcare/#:~:text=What%20sets%20Health%20Cloud%20apart,layer%20that%20enhances%20patient%20experiences.",
      "https://help.salesforce.com/s/articleView?id=sf.emergency_response_admin_install_package_public_health.htm&type=5",
    ],
  },
  {
    id: "200",
    questionType: "Multiple Choice",
    question: `Which three types of customizations can be managed through the Health Cloud Admin app? (Choose three.)`,
    options: [
      { id: "A", option: `Patient Card Configurations` },
      { id: "B", option: `Timeline View Configurations` },
      { id: "C", option: `Cross Object Relationships` },
      { id: "D", option: `Household Relationships` },
      { id: "E", option: `Permission Set Assignments` },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_custom_tabs.htm&type=5",
    ],
  },
  {
    id: "201",
    questionType: "Single Choice",
    question: `Where can a Salesforce administrator configuring different levels of access to patients' care plans, configure team members different levels of access to cases to ensure sensitive data is not shared with the wrong groups?`,
    options: [
      { id: "A", option: `Permission Set Groups` },
      { id: "B", option: `Profiles` },
      { id: "C", option: `Contact Roles on case` },
      { id: "D", option: `Permission Sets` },
      { id: "E", option: `Case Team Roles` },
    ],
    answer: [{ id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.caseteam_roles.htm&type=5",
    ],
  },
  {
    id: "202",
    questionType: "Single Choice",
    question: `How would a Health Cloud administrator indicate which tab should appear when a patient record is opened in the Patient Console?`,
    options: [
      {
        id: "A",
        option: `In the CardView dropdown custom setting for that tab, enter Default for Category Name.`,
      },
      {
        id: "B",
        option: `In the CardView dropdown custom setting for that tab, select Subtab for Tab Type.`,
      },
      {
        id: "C",
        option: `Edit the Patient Card configuration for the tab and enable Default Subtab`,
      },
      {
        id: "D",
        option: `In the CardView dropdown custom setting for that tab, enable Default subtab.`,
      },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_card_view_menu.htm&type=5",
      "https://www.coursehero.com/file/p6dftmms/A-Health-Cloud-administrator-would-like-to-setup-a-new-default-sub-tab-when/",
    ],
  },
  {
    id: "203",
    questionType: "Single Choice",
    question: `A Health Cloud administrator is working on a call center implementation and has to ensure that the phone numbers passing through the CTI settings display the matching contact record via Screen Pop. Which custom metadata type within Health Cloud should the administrator update to achieve this requirement?`,
    options: [
      { id: "A", option: `Flow Session Setting -> CallCenterFlow` },
      { id: "B", option: `Feature Flag Setting -> CTIDriverSetting` },
      { id: "C", option: `Job Flow Setting -> ConsoleDisplayValue` },
      { id: "D", option: `Health Cloud Setting -> HcFeatureDriver` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_customize_patient_details_tab.htm&type=5",
      "https://www.coursehero.com/file/p6dftmms/A-Health-Cloud-administrator-would-like-to-setup-a-new-default-sub-tab-when/",
    ],
  },
  {
    id: "204",
    questionType: "Single Choice",
    question: `A Health Cloud administrator would like to setup a new default sub-tab when opening record, where in the setup menu would the administrator go to accomplish this?`,
    options: [
      { id: "A", option: `Custom Permissions` },
      { id: "B", option: `Custom Settings` },
      { id: "C", option: `Custom Labels` },
      { id: "D", option: `Custom Metadata Types` },
      { id: "D", option: `Custom Object` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: ["Still No Data"],
  },
  {
    id: "205",
    questionType: "Multiple Choice",
    question: `Within Health Cloud Console, there are two apps available for use depending on work preferences, which console is available within Lightning Experience?`,
    options: [
      { id: "A", option: `Health Cloud -- Worklist` },
      { id: "B", option: `Health Cloud -- Individual` },
      { id: "C", option: `Health Cloud -- Personal` },
      { id: "D", option: `Health Cloud -- Console` },
    ],
    answer: [{ id: "A" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.care_console_overview.htm&type=5",
    ],
  },
  {
    id: "206",
    questionType: "Single Choice",
    question: `How should Members and Patients be represented during the basic set-up of Health Cloud console for Care Coordinators and Managers as per the Salesforce recommendation?`,
    options: [
      {
        id: "A",
        option: `The Individual data model may be used to represent Members and Patients.`,
      },
      {
        id: "B",
        option: `Leveraging Candidate Accounts are the recommended approach to represent Members and Patients.`,
      },
      {
        id: "C",
        option: `Salesforce recommends using Member Accounts to represent Members and Patients.`,
      },
      {
        id: "D",
        option: `Leveraging Person Accounts is the recommended approach to represent Members and Patients.`,
      },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_person_account_overview.htm&type=5",
    ],
  },
  {
    id: "207",
    questionType: "Single Choice",
    question: `How can a Health Cloud administrator change the label 'Patient Card' to 'Member Card' to be more aligned with their specific business terminology and use case?`,
    options: [
      {
        id: "A",
        option: `Go to setup, navigate to Custom Labels, select the 'Patient_Card_Header' label, click the 'New Local Translation/Overrides' button, Select the language and enter the new label.`,
      },
      {
        id: "B",
        option: `Go to the Health Cloud -- Admin Home page, select the Patient Card Configuration tab, and click 'New' to add a new configuration for 'Member.`,
      },
      {
        id: "C",
        option: `Go to Setup, navigate to the Patient Card object, and edit the Patient field name.`,
      },
      {
        id: "D",
        option: `Edit the page layout where the Patient Card is shown, click on the attributes for the Patient Card component, and edit the name to 'Member'.`,
      },
      {
        id: "E",
        option: `The labels that come with the Health Cloud cannot be changed.`,
      },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.cl_edit.htm&type=5",
    ],
  },
  {
    id: "208",
    questionType: "Multiple Choice",
    question: `Which Permission Set Licenses are required to utilize and access Health Cloud feature and functionalities? (Choose two)`,
    options: [
      { id: "A", option: `Health Cloud for Community` },
      { id: "B", option: `Health Cloud` },
      { id: "C", option: `Health Cloud Platform` },
      { id: "D", option: `Health Cloud Permission Set License` },
      { id: "E", option: `Health Cloud Standard` },
    ],
    answer: [{ id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://org62.my.salesforce.com/sfc/p/#000000000062/a/3y000000iUA9/m0Q8H6fhbCd0ANSGq2bkedUISWfjFT.iOjBHLTQr8Tk",
      "https://help.salesforce.com/s/articleView?id=sf.admin_permissionset_licenses_assign.htm&type=5",
      "https://cyntexa.com/blog/salesforce-health-cloud-implementation/",
    ],
  },
  {
    id: "209",
    questionType: "Single Choice",
    question: `What is the difference between Care Program and Care Plans in Health Cloud? (Choose 1 -- Recall concept / Remember.)`,
    options: [
      {
        id: "A",
        option: `Care Programs track a patient's overall health journey, while Care Plans are more focused on specific care needs.`,
      },
      {
        id: "B",
        option: `Care Plans can be exposed in a community while Care Programs cannot.`,
      },
      {
        id: "C",
        option: `Care Plans are only used by Providers & Payers while Care Programs are only used by Life Sciences companies.`,
      },
      {
        id: "D",
        option: `Care Programs are just a different type of Care Plan which capture more details such as financial information.`,
      },
      { id: "E", option: `Care Programs are an extension on Care Plans.` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-care-programs/get-to-know-care-programs",
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-care-plans/explore-care-plans-and-care-plan-templates",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_care_program_data_model.htm",
    ],
  },
  {
    id: "210",
    questionType: "Multiple Choice",
    question: `Which three terms can a Life Sciences company track about a Care Program using Program Management in Health Cloud? (Choose three)`,
    options: [
      {
        id: "A",
        option: `The clinical indicators that need to be monitored in the Care Program.`,
      },
      {
        id: "B",
        option: `The products that are associated with a given Care Program.`,
      },
      {
        id: "C",
        option: `The multiple marketing campaigns that enrollees are subjected to as part of the Care Program.`,
      },
      {
        id: "D",
        option: `The budget & expense of the company's associated Care Program.`,
      },
      {
        id: "E",
        option: `The Plans that enrollees have been engaged in as part of the Care Program.`,
      },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_health_cloud_for_life_sciences_overview.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.landing_care_programs.htm&type=5",
    ],
  },
  {
    id: "211",
    questionType: "Multiple Choice",
    question: `In which two ways can an administrator support the Health department so that the team can efficiently assess the individual, enroll them in a program, and monitor them during emergency? (Choose two)`,
    options: [
      { id: "A", option: `Create a healthcare provider enrollment flow` },
      {
        id: "B",
        option: `Install emergency Response Management unmanaged package`,
      },
      {
        id: "C",
        option: `Leverage pre-configured flows provided with Health Cloud`,
      },
      { id: "D", option: `Create Patient Enrollment Console` },
    ],
    answer: [{ id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.rn_emergency_response_management.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.rn_erm_20200730.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.emergency_response_admin_install_package_public_sector.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_erm_public_health.htm&release=224&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=6",
    ],
  },
  {
    id: "212",
    questionType: "Multiple Choice",
    question: `In which two ways can Life Science organizations capture consent from enrollees of Care Program? (2 -- Simple Application correct options)

    Options not visible`,
    options: [
      {
        id: "A",
        option: `By engaging in a web chat with an agent who presents consent forms in chat window.`,
      },
      {
        id: "B",
        option: `By sending an email that then create a case using email-to-case.`,
      },
      {
        id: "C",
        option: `By talking to an agent via phone who then enrolls the patient`,
      },
      {
        id: "D",
        option: `By submitting consent Via SMS using Einstien Chat bot.`,
      },
      { id: "E", option: `By using a Self-Service portal via a Community.` },
    ],
    answer: [{ id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.care_programs_overview.htm&type=5",
      "https://free-braindumps.com/salesforce/free-health-cloud-accredited-professional-braindumps.html?p=6",
    ],
  },
  {
    id: "213",
    questionType: "Multiple Choice",
    question: `Which type of files can be uploaded as Consent Documents in secure folders of Health Cloud for a Care Program? (Choose two)`,
    options: [
      { id: "A", option: `Copy-protected PDF files` },
      { id: "B", option: `Opt out consent documents` },
      { id: "C", option: `Authorization consent forms` },
      {
        id: "D",
        option: `Files that are smaller than 2 -- Simple Application 5MB`,
      },
      { id: "E", option: `Password protected files` },
    ],
    answer: [{ id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_programs_upload_docs.htm&type=5",
    ],
  },
  {
    id: "214",
    questionType: "Multiple Choice",
    question: `Which action is Possible in the program enrollment flow when adding in 'Enroll in Program' quick action to a record? (Choose three)`,
    options: [
      { id: "A", option: `Starting a new blank care plan` },
      { id: "B", option: `Signing enrollment consent form` },
      {
        id: "C",
        option: `Seeing a list of all product and selecting applicable products`,
      },
      { id: "D", option: `Selecting the provider associate with a product` },
      { id: "E", option: `Creating a new care program` },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_programs_configure_enrollment_flow.htm&type=5",
      "https://trailhead.salesforce.com/content/learn/modules/health-cloud-care-programs/set-up-care-programs",
    ],
  },
  {
    id: "215",
    questionType: "Single Choice",
    question: `Makana Pharmaceutical is planning to run a Patient support program on Health Cloud. A System Administrator has been tasked to ensure the platform encryption has been configured. The patient's name is stored on firstname and lastname fields on the person account record. Firstname and Lastname field have been identified as holding PHI(Personal Health Information) data. They are also important search criteria commonly used by Users to find a patient record. The Compliance team has indicated that all PHI Data must be encrypted at rest. What is the best practice for platform encryption configuration for this solution?`,
    options: [
      { id: "A", option: `Encrypt all PHI/PII data` },
      { id: "B", option: `Encrypt all data` },
      {
        id: "C",
        option: `Use Class Encryption to encrypt field identified as PHI`,
      },
      {
        id: "D",
        option: `Use a Deterministic Encryption Policy on Account FirstName & LastName fields.`,
      },
      {
        id: "E",
        option: `Use a Probabilistic Encryption Policy on Account FirstName & LastName fields.`,
      },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.security_pe_enable_standard_fields.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.security_pe_deterministic_encrypt.htm&type=5",
    ],
  },
  {
    id: "216",
    questionType: "Single Choice",
    question: `A Health Cloud administrator has to provide the DevOps team access to production copy sandboxes for investigation and fixes. How can be administrator ensure that all privacy, compliance and regulatory requirement are met.`,
    options: [
      {
        id: "A",
        option: `Install Mask and anonymize sensitive data on production copy sandboxes.`,
      },
      {
        id: "B",
        option: `Only allow offshore team access to production copy sandboxes if they have taken compliance training and are certified to have access.`,
      },
      {
        id: "C",
        option: `Only allow onshore team access to Health cloud objects on production copy sandboxes.`,
      },
      { id: "D", option: `Install Shield only in production copy sandboxes.` },
      {
        id: "E",
        option: `Install shield and encrypted all PII data on production sandboxes.`,
      },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=release-notes.rn_security_data_mask.htm&release=244&type=5",
    ],
  },
  {
    id: "217",
    questionType: "Single Choice",
    question: `Which Salesforce Product allows encryption of Protected Health Information (PHI) data at rest to enhance Health Cloud?`,
    options: [
      { id: "A", option: `Shield` },
      { id: "B", option: `Tableau CRM` },
      { id: "C", option: `Health Cloud` },
      { id: "D", option: `Service Cloud` },
    ],
    answer: [{ id: "A" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_salesforce_shield.htm&type=5",
    ],
  },
  {
    id: "218",
    questionType: "Multiple Choice",
    question: `A sales Representative wants to request a Rep-to-Rep Transfer. What two paths are available to request the transfer? (Choose two)`,
    options: [
      { id: "A", option: `Under visit, choose to navigate to visit Products.` },
      {
        id: "B",
        option: `The transfer can be requested while creating an Order Authorization for a Visit.`,
      },
      {
        id: "C",
        option: `To Request the transfer, navigate to product, then choose the specific inventory location against which to request the transfer.`,
      },
      {
        id: "D",
        option: `During Visit creation you can request the transfer while selecting products required for a visit.`,
      },
    ],
    answer: [{ id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/med-tech-surgical-case-management-visits-field-inventory-management/schedule-visits-and-request-product-transfer",
      "https://help.salesforce.com/s/articleView?id=sf.admin_intelligent_sales_flows.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.IS_request_transfer.htm&type=5",
    ],
  },
  {
    id: "219",
    questionType: "Multiple Choice",
    question: `Dr. Jill Mikel at Tahoe Hospital would like to improve the management of patient visits. Which steps should the salesforce Administrator complete to setup a patient visit Process? (Choose two)`,
    options: [
      {
        id: "A",
        option: `Create a Task and add task to an action plan template.`,
      },
      { id: "B", option: `Create flow for the business process.` },
      { id: "C", option: `Create a task and add the task to visit creation.` },
      {
        id: "D",
        option: `Create an action plan template add flow and published the template.`,
      },
    ],
    answer: [{ id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_set_up_action_plan_templates.htm&type=5",
    ],
  },
  {
    id: "220",
    questionType: "Multiple Choice",
    question: `Which two preference must a salesforce administrator enable to begin using Intelligent Sales for Medical Devices? (Choose two)`,
    options: [
      { id: "A", option: `Visit Inventory Management` },
      { id: "B", option: `Intelligent Sales` },
      { id: "C", option: `Action Plans` },
      { id: "D", option: `Lightning Flows` },
      { id: "E", option: `Lightning App builder` },
    ],
    answer: [{ id: "A" }, { id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_intelligent_sales_enable.htm&type=5",
    ],
  },
  {
    id: "221",
    questionType: "Multiple Choice",
    question: `Which steps should a salesforce administrator complete to set up a warehouse that serves as a product fulfillment location to salesforce representative in a specific region, irrespective of the account? (Choose three)`,
    options: [
      {
        id: "A",
        option: `Create Inventory Location and add Visitor Address as Location Address.`,
      },
      { id: "B", option: `Create Record in Product Fulfillment Location.` },
      { id: "C", option: `Set-up Product Transfer and product request.` },
      { id: "D", option: `Select inventory location while creating visit` },
      {
        id: "E",
        option: `Create a product item entry inventory, a single entry for each product that will be replenished from industry.`,
      },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "E" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.fs_create_locations.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.fs_create_parts.htm&type=5",
      "https://help.salesforce.com/s/articleView?id=sf.admin_intelligent_sales_set_up_data.htm&type=5",
    ],
  },
  {
    id: "222",
    questionType: "Multiple Choice",
    question: `With regards to Integration/Interoperability, which three statement are true about health cloud? (Choose Three)`,
    options: [
      {
        id: "A",
        option: `The New clinical data model in health cloud is aligned with FHIR R4 standards.`,
      },
      {
        id: "B",
        option: `Health cloud support data exchange with both HL7 and FHIR enabled systems.`,
      },
      {
        id: "C",
        option: `Most EHR (Electronic Health Record) data exchange today is still done via legacy HL7 v2 -- simple application interface.`,
      },
      { id: "D", option: `Health cloud has a FHIR server.` },
      {
        id: "E",
        option: `The new clinical data model in Health cloud is aligned with HL7 v2-simple application standard.`,
      },
    ],
    answer: [{ id: "A" }, { id: "B" }, { id: "C" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_clinical_data_model_fhir.htm&type=5",
    ],
  },
  {
    id: "223",
    questionType: "Multiple Choice",
    question: `Which three medication related FHIR resources are supported in the new data model of Health cloud (Choose Three)`,
    options: [
      { id: "A", option: `Medical Administration` },
      { id: "B", option: `Medication` },
      { id: "C", option: `Dosage` },
      { id: "D", option: `Medication Dispense` },
      { id: "E", option: `Medical Request` },
    ],
    answer: [{ id: "B" }, { id: "C" }, { id: "E" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_overview.htm",
    ],
  },
  {
    id: "224",
    questionType: "Multiple Choice",
    question: `Which two interoperability standards are support by salesforce to facilitate the exchange of health data? (Choose two)?`,
    options: [
      { id: "A", option: `EDI ANSI X1- Recall Concept/Remainder 2` },
      {
        id: "B",
        option: `FHIR V4( Fast Healthcare interoperability Resources)`,
      },
      { id: "C", option: `The Direct Standard` },
      {
        id: "D",
        option: `HL7 V2- Simple Application3 -- Apply to real word/Analyze / Evaluate(Health Level Seven)`,
      },
      {
        id: "E",
        option: `DICOM (Digital Imaging and communications In Medicine`,
      },
    ],
    answer: [{ id: "B" }, { id: "D" }],
    conform: true,
    reference: [
      "https://trailhead.salesforce.com/content/learn/modules/interoperability-and-the-clinical-data-model/review-the-data-exchange-standards",
    ],
  },
  {
    id: "225",
    questionType: "Single Choice",
    question: `When bringing in the Business identifier for patient record from external system like EHRs, which entity is most suitable to hold that information in Health cloud?`,
    options: [
      { id: "A", option: `Sourcesytem identifier` },
      { id: "B", option: `Contacts` },
      { id: "C", option: `Account` },
      { id: "D", option: `Identifier` },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_create_get_update_patients.htm",
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_Identifier.htm",
    ],
  },
  {
    id: "226",
    questionType: "Single Choice",
    question: `What is the latest FHIR model aligned to Health Cloud?`,
    options: [
      { id: "A", option: `V5` },
      { id: "B", option: `V4` },
      { id: "C", option: `V3` },
      { id: "D", option: `V1` },
    ],
    answer: [{ id: "B" }],
    conform: true,
    reference: [
      "https://help.salesforce.com/s/articleView?id=sf.admin_clinical_data_model_fhir.htm&type=5",
    ],
  },
  {
    id: "227",
    questionType: "Single Choice",
    question: `Which resource within health cloud facilitates the easy exchange of data between Health Cloud and the client Electronic Medical Records`,
    options: [
      { id: "A", option: `Health Cloud has a built in HL7 integration Engine` },
      {
        id: "B",
        option: `Health cloud has prebuilt connections for the top ten EMR's`,
      },
      {
        id: "C",
        option: `Health cloud has a lightning component button automatically configured to 'Export to EMR'`,
      },
      {
        id: "D",
        option: `Health cloud has published data mappings from commonly used HL7 message to the Health Cloud data model`,
      },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://developer.salesforce.com/docs/atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hl7.htm",
    ],
  },
  {
    id: "228",
    questionType: "Single Choice",
    question: `If a Health Cloud administrator wanted to consume the content of an HL7 v2 -- Simple Application message, which step would they need to take?`,
    options: [
      {
        id: "A",
        option: `Do Nothing -- Health Cloud works out of the box with native HL7 message`,
      },
      { id: "B", option: `Use salesforce Connect` },
      {
        id: "C",
        option: `Write a custom apex class to consume parse and store a native HL7 message`,
      },
      {
        id: "D",
        option: `Use an HL7 broker/engine to transform the text based HL7 message into JSON and pass it to the Health Cloud.`,
      },
    ],
    answer: [{ id: "D" }],
    conform: true,
    reference: [
      "https://www.mulesoft.com/exchange/org.mule.examples/hls-sfdc-oru-listener/",
    ],
  },
];
/*
conform: true,
    reference: [
      "",
    ],
*/
