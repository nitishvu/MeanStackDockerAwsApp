# MeanStackDockerAwsApp


  git remote add origin https://github.com/nitishvu/MeanStackDockerAwsApp.git
  git push -u origin master

  apt  install docker.io
  sudo usermod -aG docker ubuntu
  sudo usermod -aG docker ubuntu


ok: [127.0.0.1] => {
    "changed": false,
    "instance_ids": null,
    "instances": [],
    "invocation": {
        "module_args": {
            "assign_public_ip": false,
            "aws_access_key": null,
            "aws_secret_key": null,
            "count": 1,
            "count_tag": "env",
            "ebs_optimized": false,
            "ec2_url": null,
            "exact_count": 1,
            "group": null,
            "group_id": [
                "sg-07fca9e01f9f0bb1d"
            ],
            "id": null,
            "image": "ami-0d773a3b7bb2bb1c1",
            "instance_ids": null,
            "instance_initiated_shutdown_behavior": null,
            "instance_profile_name": null,
            "instance_tags": {
                "env": "staging"
            },
            "instance_type": "t2.nano",
            "kernel": null,
            "key_name": "meanapp-staging-key",
            "monitoring": false,
            "network_interfaces": null,
            "placement_group": null,
            "private_ip": null,
            "profile": null,
            "ramdisk": null,
            "region": "ap-south-1",
            "security_token": null,
            "source_dest_check": true,
            "spot_launch_group": null,
            "spot_price": null,
            "spot_type": "one-time",
            "spot_wait_timeout": "600",
            "state": "present",
            "tenancy": "default",
            "termination_protection": null,
            "user_data": null,
            "validate_certs": true,
            "volumes": null,
            "vpc_subnet_id": null,
            "wait": true,
            "wait_timeout": "300",
            "zone": null
        }
    },
    "tagged_instances": [
        {
            "ami_launch_index": "0",
            "architecture": "x86_64",

            "dns_name": "ec2-13-233-233-18.ap-south-1.compute.amazonaws.com",
            "ebs_optimized": false,
,           "hypervisor": "xen",
            "id": "i-025e4183ba8fa2d49",
            "image_id": "ami-0d773a3b7bb2bb1c1",
            "instance_type": "t2.nano",
            "kernel": null,
            "key_name": "meanapp-staging-key",
            "launch_time": "2018-12-22T17:57:15.000Z",
            "placement": "ap-south-1a",
            "private_dns_name": "ip-172-31-23-245.ap-south-1.compute.internal",
            "private_ip": "172.31.23.245",
            "public_dns_name": "ec2-13-233-233-18.ap-south-1.compute.amazonaws.com",
            "public_ip": "13.233.233.18",
            "ramdisk": null,
            "region": "ap-south-1",
            "root_device_name": "/dev/sda1",
            "root_device_type": "ebs",
            "state": "running",
            "state_code": 16,
            "tags": {
                "env": "staging"
            },
            "tenancy": "default",
            "virtualization_type": "hvm"
        }
    ]
}