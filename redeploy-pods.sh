#!/bin/bash

cd /home/ubuntu/final-kube/yamls 

kubectl apply -f be-deployment.yaml 
kubectl apply -f fe-deployment.yaml 
kubectl apply -f redis-deployment.yaml 