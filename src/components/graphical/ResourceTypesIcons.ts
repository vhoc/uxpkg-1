import User from '../../assets/icons/resource-types/User.png';
import Policy from "../../assets/icons/resource-types/Policy.png";
import Role from "../../assets/icons/resource-types/Role.png";
import AWSCompute from "../../assets/icons/resource-types/Compute.png";
import AWSUser from "../../assets/icons/resource-types/users.png";
import EC2Instance from '../../assets/icons/resource-types/aws/resource/Res_Amazon-EC2_Instance_48_Light.svg'
import ElasticIP from '../../assets/icons/resource-types/aws/resource/Res_Amazon-Elastic-Block-Store_Volume_48_Light.svg'

export const ResourceIcons = [
    User,// 0
    Policy,// 1
    Role,// 2
    AWSCompute,// 4
    AWSUser,// 5
    ElasticIP,//6
];

export const DisplayTypeToIconMap = {
    USER: User,
    POLICY: Policy,
    ROLE: Role,
    AWS_EC2_Instance: EC2Instance,
    AWS_Compute: AWSCompute,
    AWS_User: AWSUser,
    AWS_EC2_Elastic_IP: ElasticIP,

}
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
