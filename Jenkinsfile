pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('djtoler-dockerhub')
    }
    
    stages {
        stage('SetHost') {
            steps {
                sh '''#!/bin/bash
                pwd
                pwd
                '''
            }
        }
        
        stage('DockerImageBuild') {
            agent { label 'DockerAgent' } 
            steps {
              dir('docker') {
                sh '''#!/bin/bash
                pwd
                docker rmi djtoler/frontkube1:latest || true
                docker rmi djtoler/backkube1:latest || true
                cd front && docker build --no-cache -t djtoler/frontkube1 .
                pwd
                cd ../ && docker build --no-cache -t djtoler/backkube1 .
                pwd
                // cd /home/ubuntu/docker_agent2/workspace/FinalTest_main/docker/front && pwd && ls && docker build --no-cache -t djtoler/frontkube1 .
                // cd /home/ubuntu/docker_agent2/workspace/FinalTest_main/docker/back && pwd && ls && docker build --no-cache -t djtoler/backkube1 .
              '''
              }
            }
        }
        
        stage('DockerLogin') {
            agent { label 'DockerAgent' } 
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | sudo docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('DockerHubPush') {
            agent { label 'DockerAgent' } 
            steps {
                sh 'sudo docker push djtoler/frontkube1'
                sh 'sudo docker push djtoler/backkube1'
            }
        }

        // stage('DockerComposeTest') {
        //     agent { label 'DockerAgent' } 
        //     steps {
        //         sh 'pwd && ls'
        //         // sh 'cd docker && pwd && ls'
        //         // sh 'cd docker && docker compose up'
        //     }
        // }
    }
}
