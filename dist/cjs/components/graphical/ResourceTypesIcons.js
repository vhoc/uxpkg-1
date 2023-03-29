"use strict";
exports.__esModule = true;
exports.DisplayTypeToIconMap = exports.ResourceIcons = void 0;
var tslib_1 = require("tslib");
/** AWS ICONS Imports */
var User_png_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/User.png"));
var ServiceAccount_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/ServiceAccount.svg"));
var UserGroups_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/UserGroups.svg"));
var Policy_png_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/Policy.png"));
var Role_png_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/Role.png"));
var Compute_png_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/Compute.png"));
var users_png_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/users.png"));
var Res_Amazon_EC2_Instance_48_Light_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Res_Amazon-EC2_Instance_48_Light.svg"));
var Res_Amazon_EC2_Elastic_IP_Address_48_Light_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Res_Amazon-EC2_Elastic-IP-Address_48_Light.svg"));
var Res_Amazon_Elastic_Block_Store_Volume_48_Light_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Res_Amazon-Elastic-Block-Store_Volume_48_Light.svg"));
var Arch_Amazon_EC2_Image_Builder_48_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch_Amazon-EC2-Image-Builder_48.svg"));
var Arch_Amazon_EC2_64_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch_Amazon-EC2_64.svg"));
var Arch_AWS_Key_Management_Service_48_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch_AWS-Key-Management-Service_48.svg"));
var Arch_Amazon_Simple_Storage_Service_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch_Amazon-Simple-Storage-Service_32.svg"));
var Arch_Amazon_Virtual_Private_Cloud_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch_Amazon-Virtual-Private-Cloud_32.svg"));
var AWS_Simple_Icons_AWS_Cloud_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/AWS_Simple_Icons_AWS_Cloud.svg"));
var Arch_Amazon_Elastic_Kubernetes_Service_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch_Amazon-Elastic-Kubernetes-Service_32.svg"));
var Arch_Amazon_Elastic_Container_Registry_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch_Amazon-Elastic-Container-Registry_32.svg"));
var Arch_Amazon_Elastic_Container_Service_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch_Amazon-Elastic-Container-Service_32.svg"));
var Arch_AWS_Lambda_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch_AWS-Lambda_32.svg"));
var Arch_Amazon_RDS_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch_Amazon-RDS_32.svg"));
var Arch_AWS_Secrets_Manager_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch_AWS-Secrets-Manager_32.svg"));
var Arch_Amazon_Managed_Streaming_for_Apache_Kafka_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch_Amazon-Managed-Streaming-for-Apache-Kafka_32.svg"));
var Arch_Category_Analytics_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Analytics_32.svg"));
var Arch_Category_Application_Integration_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Application-Integration_32.svg"));
var Arch_Category_Blockchain_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Blockchain_32.svg"));
var Arch_Category_Business_Applications_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Business-Applications_32.svg"));
var Arch_Category_Cloud_Financial_Management_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Cloud-Financial-Management_32.svg"));
var Arch_Category_Containers_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Containers_32.svg"));
var Arch_Category_Customer_Enablement_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Customer-Enablement_32.svg"));
var Arch_Category_Developer_Tools_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Developer-Tools_32.svg"));
var Arch_Category_End_User_Computing_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_End-User-Computing_32.svg"));
var Arch_Category_Front_End_Web_Mobile_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Front-End-Web-Mobile_32.svg"));
var Arch_Category_Games_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Games_32.svg"));
var Arch_Category_Internet_of_Things_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Internet-of-Things_32.svg"));
var Arch_Category_Machine_Learning_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Machine-Learning_32.svg"));
var Arch_Category_Management_Governance_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Management-Governance_32.svg"));
var Arch_Category_Media_Services_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Media-Services_32.svg"));
var Arch_Category_Migration_Transfer_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Migration-Transfer_32.svg"));
var Arch_Category_Networking_Content_Delivery_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Networking-Content-Delivery_32.svg"));
var Arch_Category_Quantum_Technologies_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Quantum-Technologies_32.svg"));
var Arch_Category_Robotics_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Robotics_32.svg"));
var Arch_Category_Satellite_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Satellite_32.svg"));
var Arch_Category_Security_Identity_Compliance_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Security-Identity-Compliance_32.svg"));
var Arch_Category_Serverless_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Serverless_32.svg"));
var Arch_Category_Storage_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_Storage_32.svg"));
var Arch_Category_VR_AR_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Arch-Category_VR-AR_32.svg"));
/** AWS Sub-category Icons : ANALYTICS */
var Arch_Amazon_Athena_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_Amazon-Athena_32.svg"));
var Arch_Amazon_CloudSearch_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_Amazon-CloudSearch_32.svg"));
var Arch_Amazon_DataZone_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_Amazon-DataZone_32.svg"));
var Arch_Amazon_EMR_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_Amazon-EMR_32.svg"));
var Arch_Amazon_FinSpace_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_Amazon-FinSpace_32.svg"));
var Arch_Amazon_Kinesis_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_Amazon-Kinesis_32.svg"));
var Arch_Amazon_Kinesis_Data_Analytics_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_Amazon-Kinesis-Data-Analytics_32.svg"));
var Arch_Amazon_Kinesis_Data_Streams_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_Amazon-Kinesis-Data-Streams_32.svg"));
var Arch_Amazon_Kinesis_Firehose_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_Amazon-Kinesis-Firehose_32.svg"));
var Arch_Amazon_Kinesis_Video_Streams_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_Amazon-Kinesis-Video-Streams_32.svg"));
var Arch_Amazon_Managed_Streaming_for_Apache_Kafka_32_svg_2 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_Amazon-Managed-Streaming-for-Apache-Kafka_32.svg"));
var Arch_Amazon_OpenSearch_Service_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_Amazon-OpenSearch-Service_32.svg"));
var Arch_Amazon_QuickSight_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_Amazon-QuickSight_32.svg"));
var Arch_Amazon_Redshift_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_Amazon-Redshift_32.svg"));
var Arch_AWS_Clean_Rooms_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_AWS-Clean-Rooms_32.svg"));
var Arch_AWS_Data_Exchange_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_AWS-Data-Exchange_32.svg"));
var Arch_AWS_Data_Pipeline_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_AWS-Data-Pipeline_32.svg"));
var Arch_AWS_Glue_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_AWS-Glue_32.svg"));
var Arch_AWS_Glue_DataBrew_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_AWS-Glue-DataBrew_32.svg"));
var Arch_AWS_Glue_Elastic_Views_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_AWS-Glue-Elastic-Views_32.svg"));
var Arch_AWS_Lake_Formation_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/analytics/Arch_AWS-Lake-Formation_32.svg"));
/** AWS Sub-category Icons : APP INTEGRATION */
var Arch__Amazon_API_Gateway_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/app_integration/Arch_ Amazon-API-Gateway_32.svg"));
var Arch_Amazon_AppFlow_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/app_integration/Arch_Amazon-AppFlow_32.svg"));
var Arch_Amazon_EventBridge_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/app_integration/Arch_Amazon-EventBridge_32.svg"));
var Arch_Amazon_Managed_Workflows_for_Apache_Airflow_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/app_integration/Arch_Amazon-Managed-Workflows-for-Apache-Airflow_32.svg"));
var Arch_Amazon_MQ_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/app_integration/Arch_Amazon-MQ_32.svg"));
var Arch_Amazon_Simple_Notification_Service_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/app_integration/Arch_Amazon-Simple-Notification-Service_32.svg"));
var Arch_Amazon_Simple_Queue_Service_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/app_integration/Arch_Amazon-Simple-Queue-Service_32.svg"));
var Arch_AWS_AppSync_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/app_integration/Arch_AWS-AppSync_32.svg"));
var Arch_AWS_Console_Mobile_Application__32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/app_integration/Arch_AWS-Console-Mobile-Application _32.svg"));
var Arch_AWS_Express_Workflows_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/app_integration/Arch_AWS-Express-Workflows_32.svg"));
var Arch_AWS_Step_Functions_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/app_integration/Arch_AWS-Step-Functions_32.svg"));
/** AWS Sub-category Icons : BLOCKCHAIN */
var Arch_Amazon_Managed_Blockchain_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/blockchain/Arch_Amazon-Managed-Blockchain_32.svg"));
var Arch_Amazon_Quantum_Ledger_Database_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/blockchain/Arch_Amazon-Quantum-Ledger-Database_32.svg"));
/** AWS Sub-category Icons : BUSINESS APPLICATIONS */
var Arch_Alexa_For_Business_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/business-applications/Arch_Alexa-For-Business_32.svg"));
var Arch_Amazon_Chime_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/business-applications/Arch_Amazon-Chime_32.svg"));
var Arch_Amazon_Chime_SDK_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/business-applications/Arch_Amazon-Chime-SDK_32.svg"));
var Arch_Amazon_Chime_Voice_Connector_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/business-applications/Arch_Amazon-Chime-Voice-Connector_32.svg"));
var Arch_Amazon_Connect_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/business-applications/Arch_Amazon-Connect_32.svg"));
var Arch_Amazon_Honeycode_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/business-applications/Arch_Amazon-Honeycode_32.svg"));
var Arch_Amazon_Pinpoint_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/business-applications/Arch_Amazon-Pinpoint_32.svg"));
var Arch_Amazon_Pinpoint_APIs_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/business-applications/Arch_Amazon-Pinpoint-APIs_32.svg"));
var Arch_Amazon_Simple_Email_Service_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/business-applications/Arch_Amazon-Simple-Email-Service_32.svg"));
var Arch_Amazon_WorkDocs_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/business-applications/Arch_Amazon-WorkDocs_32.svg"));
var Arch_Amazon_WorkDocs_SDK_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/business-applications/Arch_Amazon-WorkDocs-SDK_32.svg"));
var Arch_Amazon_WorkMail_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/business-applications/Arch_Amazon-WorkMail_32.svg"));
var Arch_AWS_Supply_Chain_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/business-applications/Arch_AWS-Supply-Chain_32.svg"));
var Arch_AWS_Wickr_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/business-applications/Arch_AWS-Wickr_32.svg"));
/** AWS Sub-category : CLOUD FINANCIAL MANAGEMENT */
var Arch_AWS_Application_Cost_Profiler_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/cloud-financial-management/Arch_AWS-Application-Cost-Profiler_32.svg"));
var Arch_AWS_Billing_Conductor_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/cloud-financial-management/Arch_AWS-Billing-Conductor_32.svg"));
var Arch_AWS_Budgets_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/cloud-financial-management/Arch_AWS-Budgets_32.svg"));
var Arch_AWS_Cost_and_Usage_Report_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/cloud-financial-management/Arch_AWS-Cost-and-Usage-Report_32.svg"));
var Arch_AWS_Cost_Explorer_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/cloud-financial-management/Arch_AWS-Cost-Explorer_32.svg"));
var Arch_Reserved_Instance_Reporting_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/cloud-financial-management/Arch_Reserved-Instance-Reporting_32.svg"));
var Arch_Savings_Plans_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/cloud-financial-management/Arch_Savings-Plans_32.svg"));
/** AWS Sub-category : COMPUTE */
var Arch_Amazon_EC2_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_Amazon-EC2_32.svg"));
var Arch_Amazon_EC2_Auto_Scaling_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_Amazon-EC2-Auto-Scaling_32.svg"));
var Arch_Amazon_EC2_M5n_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_Amazon-EC2-M5n_32.svg"));
var Arch_Amazon_EC2_R5n_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_Amazon-EC2-R5n_32.svg"));
var Arch_Amazon_Elastic_Container_Kubernetes_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_Amazon-Elastic-Container-Kubernetes_32.svg"));
var Arch_Amazon_Elastic_Container_Registry_32_svg_2 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_Amazon-Elastic-Container-Registry_32.svg"));
var Arch_Amazon_Elastic_Container_Service_32_svg_2 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_Amazon-Elastic-Container-Service_32.svg"));
var Arch_Amazon_Genomics_CLI_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_Amazon-Genomics-CLI_32.svg"));
var Arch_Amazon_Lightsail_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_Amazon-Lightsail_32.svg"));
var Arch_AWS_App_Runner_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-App-Runner_32.svg"));
var Arch_AWS_Batch_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Batch_32.svg"));
var Arch_AWS_Compute_Optimizer_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Compute-Optimizer_32.svg"));
var Arch_AWS_Elastic_Beanstalk_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Elastic-Beanstalk_32.svg"));
var Arch_AWS_Fargate_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Fargate_32.svg"));
var Arch_AWS_Local_Zones_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Local-Zones_32.svg"));
var Arch_AWS_Nitro_Enclaves_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Nitro-Enclaves_32.svg"));
var Arch_AWS_Outposts_family_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Outposts-family_32.svg"));
var Arch_AWS_Outposts_rack_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Outposts-rack_32.svg"));
var Arch_AWS_Outposts_servers_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Outposts-servers_32.svg"));
var Arch_AWS_ParallelCluster_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-ParallelCluster_32.svg"));
var Arch_AWS_Serverless_Application_Repository_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Serverless-Application-Repository_32.svg"));
var Arch_AWS_SimSpace_Weaver_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-SimSpace-Weaver_32.svg"));
var Arch_AWS_Thinkbox_Deadline_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Thinkbox-Deadline_32.svg"));
var Arch_AWS_Thinkbox_Frost_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Thinkbox-Frost_32.svg"));
var Arch_AWS_Thinkbox_Krakatoa_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Thinkbox-Krakatoa_32.svg"));
var Arch_AWS_Thinkbox_Sequoia_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Thinkbox-Sequoia_32.svg"));
var Arch_AWS_Thinkbox_Stoke_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Thinkbox-Stoke_32.svg"));
var Arch_AWS_Thinkbox_XMesh_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Thinkbox-XMesh_32.svg"));
var Arch_AWS_Wavelength_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_AWS-Wavelength_32.svg"));
var Arch_Bottlerocket_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_Bottlerocket_32.svg"));
var Arch_Elastic_Fabric_Adapter_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_Elastic-Fabric-Adapter_32.svg"));
var Arch_NICE_DCV_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_NICE-DCV_32.svg"));
var Arch_NICE_EnginFrame_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_NICE-EnginFrame_32.svg"));
var Arch_VMware_Cloud_on_AWS_32_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/compute/Arch_VMware-Cloud-on-AWS_32.svg"));
/** GCP Icons */
var bigquery_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/gcp/bigquery.svg"));
var bigtable_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/gcp/bigtable.svg"));
var cloud_functions_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/gcp/cloud_functions.svg"));
var cloud_storage_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/gcp/cloud_storage.svg"));
var compute_engine_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/gcp/compute_engine.svg"));
var project_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/gcp/project.svg"));
var pubsub_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/gcp/pubsub.svg"));
exports.ResourceIcons = [
    User_png_1["default"],
    Policy_png_1["default"],
    Role_png_1["default"],
    Compute_png_1["default"],
    users_png_1["default"],
    Res_Amazon_EC2_Elastic_IP_Address_48_Light_svg_1["default"], //6
];
exports.DisplayTypeToIconMap = {
    USERGROUPS: UserGroups_svg_1["default"],
    SERVICEACCOUNT: ServiceAccount_svg_1["default"],
    USER: User_png_1["default"],
    POLICY: Policy_png_1["default"],
    ROLE: Role_png_1["default"],
    AWS_EC2_Instance: Res_Amazon_EC2_Instance_48_Light_svg_1["default"],
    AWS_Compute: Compute_png_1["default"],
    AWS_User: users_png_1["default"],
    AWS_EC2_Elastic_IP: Res_Amazon_EC2_Elastic_IP_Address_48_Light_svg_1["default"],
    AWS_EC2_EBS_Volume: Res_Amazon_Elastic_Block_Store_Volume_48_Light_svg_1["default"],
    AWS_EC2_Image: Arch_Amazon_EC2_Image_Builder_48_svg_1["default"],
    AWS_EC2_Key_Pair: Res_Amazon_EC2_Instance_48_Light_svg_1["default"],
    AWS_EC2_Network_Interface: Res_Amazon_EC2_Instance_48_Light_svg_1["default"],
    AWS_EC2_Security_Group: Arch_Amazon_EC2_64_svg_1["default"],
    AWS_KMS: Arch_AWS_Key_Management_Service_48_svg_1["default"],
    AWS_S3: Arch_Amazon_Simple_Storage_Service_32_svg_1["default"],
    AWS_VPC: Arch_Amazon_Virtual_Private_Cloud_32_svg_1["default"],
    All_Resource: AWS_Simple_Icons_AWS_Cloud_svg_1["default"],
    AWS_EKS: Arch_Amazon_Elastic_Kubernetes_Service_32_svg_1["default"],
    AWS_ECR: Arch_Amazon_Elastic_Container_Registry_32_svg_1["default"],
    AWS_ECS: Arch_Amazon_Elastic_Container_Service_32_svg_1["default"],
    AWS_ECS_Container: Arch_Amazon_Elastic_Container_Service_32_svg_1["default"],
    AWS_LAMBDA: Arch_AWS_Lambda_32_svg_1["default"],
    AWS_EC2_Load_Balancer: Res_Amazon_EC2_Instance_48_Light_svg_1["default"],
    AWS_EC2_Target_Group: Res_Amazon_EC2_Instance_48_Light_svg_1["default"],
    AWS_EC2_EBS_Snapshot: Res_Amazon_EC2_Instance_48_Light_svg_1["default"],
    AWS_EC2_Placement_Group: Res_Amazon_EC2_Instance_48_Light_svg_1["default"],
    AWS_RDS_Cluster: Arch_Amazon_RDS_32_svg_1["default"],
    AWS_RDS_DB: Arch_Amazon_RDS_32_svg_1["default"],
    AWS_SM: Arch_AWS_Secrets_Manager_32_svg_1["default"],
    AWS_MSK: Arch_Amazon_Managed_Streaming_for_Apache_Kafka_32_svg_1["default"],
    AWS_ANALYTICS: Arch_Category_Analytics_32_svg_1["default"],
    AWS_APPLICATION_INTEGRATION: Arch_Category_Application_Integration_32_svg_1["default"],
    AWS_BLOCKCHAIN: Arch_Category_Blockchain_32_svg_1["default"],
    AWS_BUSINESS_APPLICATIONS: Arch_Category_Business_Applications_32_svg_1["default"],
    AWS_CFM: Arch_Category_Cloud_Financial_Management_32_svg_1["default"],
    AWS_CONTAINERS: Arch_Category_Containers_32_svg_1["default"],
    AWS_CUSTOMER_ENABLEMENT: Arch_Category_Customer_Enablement_32_svg_1["default"],
    AWS_DATABASE: Arch_Amazon_RDS_32_svg_1["default"],
    AWS_DEVELOPER_TOOLS: Arch_Category_Developer_Tools_32_svg_1["default"],
    AWS_EUC: Arch_Category_End_User_Computing_32_svg_1["default"],
    AWS_FEW: Arch_Category_Front_End_Web_Mobile_32_svg_1["default"],
    AWS_GAMES: Arch_Category_Games_32_svg_1["default"],
    AWS_IOT: Arch_Category_Internet_of_Things_32_svg_1["default"],
    AWS_MACHINE_LEARNING: Arch_Category_Machine_Learning_32_svg_1["default"],
    AWS_MANAGEMENT_GOVERNANCE: Arch_Category_Management_Governance_32_svg_1["default"],
    AWS_MEDIA_SERVICES: Arch_Category_Media_Services_32_svg_1["default"],
    AWS_MIGRATION_TRANSFER: Arch_Category_Migration_Transfer_32_svg_1["default"],
    AWS_NCD: Arch_Category_Networking_Content_Delivery_32_svg_1["default"],
    AWS_QUANTUM_TECHNOLOGIES: Arch_Category_Quantum_Technologies_32_svg_1["default"],
    AWS_ROBOTICS: Arch_Category_Robotics_32_svg_1["default"],
    AWS_SATELLITE: Arch_Category_Satellite_32_svg_1["default"],
    AWS_SIC: Arch_Category_Security_Identity_Compliance_32_svg_1["default"],
    AWS_SERVERLESS: Arch_Category_Serverless_32_svg_1["default"],
    AWS_STORAGE: Arch_Category_Storage_32_svg_1["default"],
    AWS_VR_AR: Arch_Category_VR_AR_32_svg_1["default"],
    AWS_ANALYTICS_ATHENA: Arch_Amazon_Athena_32_svg_1["default"],
    AWS_ANALYTICS_CLOUDSEARCH: Arch_Amazon_CloudSearch_32_svg_1["default"],
    AWS_ANALYTICS_DATAZONE: Arch_Amazon_DataZone_32_svg_1["default"],
    AWS_ANALYTICS_EMR: Arch_Amazon_EMR_32_svg_1["default"],
    AWS_ANALYTICS_FINSPACE: Arch_Amazon_FinSpace_32_svg_1["default"],
    AWS_ANALYTICS_KINESIS: Arch_Amazon_Kinesis_32_svg_1["default"],
    AWS_ANALYTICS_KDA: Arch_Amazon_Kinesis_Data_Analytics_32_svg_1["default"],
    AWS_ANALYTICS_KDS: Arch_Amazon_Kinesis_Data_Streams_32_svg_1["default"],
    AWS_ANALYTICS_KF: Arch_Amazon_Kinesis_Firehose_32_svg_1["default"],
    AWS_ANALYTICS_KVS: Arch_Amazon_Kinesis_Video_Streams_32_svg_1["default"],
    AWS_ANALYTICS_MSA: Arch_Amazon_Managed_Streaming_for_Apache_Kafka_32_svg_2["default"],
    AWS_ANALYTICS_OSS: Arch_Amazon_OpenSearch_Service_32_svg_1["default"],
    AWS_ANALYTICS_QUICKSIGHT: Arch_Amazon_QuickSight_32_svg_1["default"],
    AWS_ANALYTICS_REDSHIFT: Arch_Amazon_Redshift_32_svg_1["default"],
    AWS_ANALYTICS_CLEANROOMS: Arch_AWS_Clean_Rooms_32_svg_1["default"],
    AWS_ANALYTICS_DATAEXCHANGE: Arch_AWS_Data_Exchange_32_svg_1["default"],
    AWS_ANALYTICS_DATAPIPELINE: Arch_AWS_Data_Pipeline_32_svg_1["default"],
    AWS_ANALYTICS_GLUE: Arch_AWS_Glue_32_svg_1["default"],
    AWS_ANALYTICS_GDB: Arch_AWS_Glue_DataBrew_32_svg_1["default"],
    AWS_ANALYTICS_GEV: Arch_AWS_Glue_Elastic_Views_32_svg_1["default"],
    AWS_ANALYTICS_LAKEFORMATION: Arch_AWS_Lake_Formation_32_svg_1["default"],
    AWS_APPINTEGRATION_API_GATEWAY: Arch__Amazon_API_Gateway_32_svg_1["default"],
    AWS_APPINTEGRATION_APPFLOW: Arch_Amazon_AppFlow_32_svg_1["default"],
    AWS_APPINTEGRATION_EVENTBRIDGE: Arch_Amazon_EventBridge_32_svg_1["default"],
    AWS_APPINTEGRATION_MANAGEDWORKFLOWSAPACHE: Arch_Amazon_Managed_Workflows_for_Apache_Airflow_32_svg_1["default"],
    AWS_APPINTEGRATION_MQ: Arch_Amazon_MQ_32_svg_1["default"],
    AWS_APPINTEGRATION_SNS: Arch_Amazon_Simple_Notification_Service_32_svg_1["default"],
    AWS_APPINTEGRATION_SQS: Arch_Amazon_Simple_Queue_Service_32_svg_1["default"],
    AWS_APPINTEGRATION_APPSYNC: Arch_AWS_AppSync_32_svg_1["default"],
    AWS_APPINTEGRATION_CMA: Arch_AWS_Console_Mobile_Application__32_svg_1["default"],
    AWS_APPINTEGRATION_EXPRESSWORKFLOWS: Arch_AWS_Express_Workflows_32_svg_1["default"],
    AWS_APPINTEGRATION_STEPFUNCTIONS: Arch_AWS_Step_Functions_32_svg_1["default"],
    AWS_BLOCKCHAIN_MANAGEDBLOCKCHAIN: Arch_Amazon_Managed_Blockchain_32_svg_1["default"],
    AWS_BLOCKCHAIN_QLD: Arch_Amazon_Quantum_Ledger_Database_32_svg_1["default"],
    AWS_BUSINESSAPPLICATIONS_AFB: Arch_Alexa_For_Business_32_svg_1["default"],
    AWS_BUSINESSAPPLICATIONS_CHIME: Arch_Amazon_Chime_32_svg_1["default"],
    AWS_BUSINESSAPPLICATIONS_CHIMESDK: Arch_Amazon_Chime_SDK_32_svg_1["default"],
    AWS_BUSINESSAPPLICATIONS_CVC: Arch_Amazon_Chime_Voice_Connector_32_svg_1["default"],
    AWS_BUSINESSAPPLICATIONS_CONNECT: Arch_Amazon_Connect_32_svg_1["default"],
    AWS_BUSINESSAPPLICATIONS_HONEYCODE: Arch_Amazon_Honeycode_32_svg_1["default"],
    AWS_BUSINESSAPPLICATIONS_PINPOINT: Arch_Amazon_Pinpoint_32_svg_1["default"],
    AWS_BUSINESSAPPLICATIONS_PINPOINTAPI: Arch_Amazon_Pinpoint_APIs_32_svg_1["default"],
    AWS_BUSINESSAPPLICATIONS_SES: Arch_Amazon_Simple_Email_Service_32_svg_1["default"],
    AWS_BUSINESSAPPLICATIONS_WORKDOCS: Arch_Amazon_WorkDocs_32_svg_1["default"],
    AWS_BUSINESSAPPLICATIONS_WORKDOCSSDK: Arch_Amazon_WorkDocs_SDK_32_svg_1["default"],
    AWS_BUSINESSAPPLICATIONS_WORKMAIL: Arch_Amazon_WorkMail_32_svg_1["default"],
    AWS_BUSINESSAPPLICATIONS_SUPPLYCHAIN: Arch_AWS_Supply_Chain_32_svg_1["default"],
    AWS_BUSINESSAPPLICATIONS_WICKR: Arch_AWS_Wickr_32_svg_1["default"],
    AWS_CLOUDFINANCIALMANAGEMENT_ACP: Arch_AWS_Application_Cost_Profiler_32_svg_1["default"],
    AWS_CLOUDFINANCIALMANAGEMENT_BILLING_CONDUCTOR: Arch_AWS_Billing_Conductor_32_svg_1["default"],
    AWS_CLOUDFINANCIALMANAGEMENT_BUDGETS: Arch_AWS_Budgets_32_svg_1["default"],
    AWS_CLOUDFINANCIALMANAGEMENT_CUR: Arch_AWS_Cost_and_Usage_Report_32_svg_1["default"],
    AWS_CLOUDFINANCIALMANAGEMENT_COSTEXPLORER: Arch_AWS_Cost_Explorer_32_svg_1["default"],
    AWS_CLOUDFINANCIALMANAGEMENT_RIR: Arch_Reserved_Instance_Reporting_32_svg_1["default"],
    AWS_CLOUDFINANCIALMANAGEMENT_SAVINGPLANS: Arch_Savings_Plans_32_svg_1["default"],
    AWS_COMPUTE_EC2: Arch_Amazon_EC2_32_svg_1["default"],
    AWS_COMPUTE_AUTOSCALING: Arch_Amazon_EC2_Auto_Scaling_32_svg_1["default"],
    AWS_COMPUTE_M5N: Arch_Amazon_EC2_M5n_32_svg_1["default"],
    AWS_COMPUTE_R5M: Arch_Amazon_EC2_R5n_32_svg_1["default"],
    AWS_COMPUTE_ECK: Arch_Amazon_Elastic_Container_Kubernetes_32_svg_1["default"],
    AWS_COMPUTE_ECR: Arch_Amazon_Elastic_Container_Registry_32_svg_2["default"],
    AWS_COMPUTE_ECS: Arch_Amazon_Elastic_Container_Service_32_svg_2["default"],
    AWS_COMPUTE_GENOMICS: Arch_Amazon_Genomics_CLI_32_svg_1["default"],
    AWS_COMPUTE_LIGHTSAIL: Arch_Amazon_Lightsail_32_svg_1["default"],
    AWS_COMPUTE_APPRUNNER: Arch_AWS_App_Runner_32_svg_1["default"],
    AWS_COMPUTE_BATCH: Arch_AWS_Batch_32_svg_1["default"],
    AWS_COMPUTE_OPTIMIZER: Arch_AWS_Compute_Optimizer_32_svg_1["default"],
    AWS_COMPUTE_ELASTIC_BEANSTALK: Arch_AWS_Elastic_Beanstalk_32_svg_1["default"],
    AWS_COMPUTE_FARGATE: Arch_AWS_Fargate_32_svg_1["default"],
    AWS_COMPUTE_LOCALZONES: Arch_AWS_Local_Zones_32_svg_1["default"],
    AWS_COMPUTE_NITRO_ENCLAVES: Arch_AWS_Nitro_Enclaves_32_svg_1["default"],
    AWS_COMPUTE_OUTPOSTS_FAMILY: Arch_AWS_Outposts_family_32_svg_1["default"],
    AWS_COMPUTE_OUTPOSTS_RACK: Arch_AWS_Outposts_rack_32_svg_1["default"],
    AWS_COMPUTE_OUTPOSTS_SERVERS: Arch_AWS_Outposts_servers_32_svg_1["default"],
    AWS_COMPUTE_PARALLEL_CLUSTER: Arch_AWS_ParallelCluster_32_svg_1["default"],
    AWS_COMPUTE_SAR: Arch_AWS_Serverless_Application_Repository_32_svg_1["default"],
    AWS_COMPUTE_SIMSPACE_WEAVER: Arch_AWS_SimSpace_Weaver_32_svg_1["default"],
    AWS_COMPUTE_THINKBOX_DEADLINE: Arch_AWS_Thinkbox_Deadline_32_svg_1["default"],
    AWS_COMPUTE_THINKBOX_FROST: Arch_AWS_Thinkbox_Frost_32_svg_1["default"],
    AWS_COMPUTE_THINKBOX_KRAKATOA: Arch_AWS_Thinkbox_Krakatoa_32_svg_1["default"],
    AWS_COMPUTE_THINKBOX_SEQUOIA: Arch_AWS_Thinkbox_Sequoia_32_svg_1["default"],
    AWS_COMPUTE_THINKBOX_STOKE: Arch_AWS_Thinkbox_Stoke_32_svg_1["default"],
    AWS_COMPUTE_THINKBOX_XMESH: Arch_AWS_Thinkbox_XMesh_32_svg_1["default"],
    AWS_COMPUTE_WAVELENGTH: Arch_AWS_Wavelength_32_svg_1["default"],
    AWS_COMPUTE_BOTTLEROCKET: Arch_Bottlerocket_32_svg_1["default"],
    AWS_COMPUTE_EFA: Arch_Elastic_Fabric_Adapter_32_svg_1["default"],
    AWS_COMPUTE_NICE_DCV: Arch_NICE_DCV_32_svg_1["default"],
    AWS_COMPUTE_NICE_ENGINFRAME: Arch_NICE_EnginFrame_32_svg_1["default"],
    AWS_COMPUTE_VMWARECLOUD: Arch_VMware_Cloud_on_AWS_32_svg_1["default"],
    GCP_BIG_QUERY_TABLE: bigquery_svg_1["default"],
    GCP_BIG_TABLE: bigtable_svg_1["default"],
    GCP_BUCKET: cloud_storage_svg_1["default"],
    GCP_CLOUD_FUNCTION: cloud_functions_svg_1["default"],
    GCP_COMPUTE_INSTANCE: compute_engine_svg_1["default"],
    GCP_PROJECT: project_svg_1["default"],
    GCP_PUBSUB_SUSCRIPTION: pubsub_svg_1["default"],
    GCP_PUBSUB_TOPIC: pubsub_svg_1["default"]
};
