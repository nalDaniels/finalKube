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
        
        stage('BuildFrontImage') {
            agent { label 'DockerAgent' } 
            steps {
              dir('docker') {
                sh '''#!/bin/bash
                echo "REMOVING IMAGES" 
                docker image ls
                docker ps
                docker system prune -af
                docker rmi djtoler/frontkube1:latest || true
                docker rmi djtoler/backkube1:latest || true
                echo "FINISHED REMOVING IMAGES" 
                echo "START FRONTEND BUILD" 
                cd front && pwd && docker build --no-cache -t djtoler/frontkube1 .
                echo "FINISHED BUILDING FRONTEND"
              '''
              }
            }
        }

        stage('BuildBackImage') {
            agent { label 'DockerAgent' } 
            steps {
              dir('docker') {
                sh '''#!/bin/bash
                pwd
                echo "STARTING BACKEND BUILD" 
                cd back && pwd && docker build --no-cache -t djtoler/backkube1 .
                echo "FINISHED BUILDING BACKEND"
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
                sh 'echo "PUSHING TO DOCKERHUB1" '
                sh 'docker push djtoler/frontkube1:latest'
                sh 'docker push djtoler/backkube1:latest'
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

        // stage('DockerHubPush') {
        //     agent { label 'KubernetesAgent' } 
        //     steps {
        //         sh '''#!/bin/bash

        //         '''
        //     }
        // }
    }
}
