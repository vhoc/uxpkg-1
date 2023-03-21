"use strict";
exports.__esModule = true;
exports.DisplayTypeToIconMap = exports.ResourceIcons = void 0;
var tslib_1 = require("tslib");
var User_png_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/User.png"));
var Policy_png_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/Policy.png"));
var Role_png_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/Role.png"));
var Compute_png_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/Compute.png"));
var users_png_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/users.png"));
var Res_Amazon_EC2_Instance_48_Light_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Res_Amazon-EC2_Instance_48_Light.svg"));
var Res_Amazon_Elastic_Block_Store_Volume_48_Light_svg_1 = tslib_1.__importDefault(require("../../assets/icons/resource-types/aws/resource/Res_Amazon-Elastic-Block-Store_Volume_48_Light.svg"));
exports.ResourceIcons = [
    User_png_1["default"],
    Policy_png_1["default"],
    Role_png_1["default"],
    Compute_png_1["default"],
    users_png_1["default"],
    Res_Amazon_Elastic_Block_Store_Volume_48_Light_svg_1["default"], //6
];
exports.DisplayTypeToIconMap = {
    USER: User_png_1["default"],
    POLICY: Policy_png_1["default"],
    ROLE: Role_png_1["default"],
    AWS_EC2_Instance: Res_Amazon_EC2_Instance_48_Light_svg_1["default"],
    AWS_Compute: Compute_png_1["default"],
    AWS_User: users_png_1["default"],
    AWS_EC2_Elastic_IP: Res_Amazon_Elastic_Block_Store_Volume_48_Light_svg_1["default"]
};
/*
export const ResourceTypes = {
    AWS_EC2_EBS_Volume: EBSVolume,
    AWS_EC2_Elastic_IP: ElasticIP,
    AWS_EC2_Image: ImageBuilder,
    AWS_EC2_Instance: EC2Instance,
    AWS_EC2_Key_Pair: EC2Instance,
    AWS_EC2_Network_Interface: EC2Instance,
    AWS_EC2_Security_Group: SecurityGroup,
    AWS_KMS: KMS,
    AWS_S3: S3,
    AWS_VPC: VPC,
    All_Resource: NewReleases,
    AWS_EKS: EKS,
    AWS_ECR: ECR,
    AWS_ECS: ECS,
    AWS_ECS_Container: ECS,
    AWS_LAMBDA: Lambda,
    AWS_EC2_Load_Balancer: EC2Instance,
    AWS_EC2_Target_Group: EC2Instance,
    AWS_EC2_EBS_Snapshot: EC2Instance,
    AWS_EC2_Placement_Group: EC2Instance,
    AWS_RDS_Cluster: RDS,
    AWS_RDS_DB: RDS,
    AWS_SM: SecretsManager,
    AWS_MSK: MSK
}*/
