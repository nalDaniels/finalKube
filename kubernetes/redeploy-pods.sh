#!/bin/bash

cd /home/ubuntu/final-kube/kubernetes

kubectl delete -f fe-deployment.yaml

sleep 30s

kubectl apply -f be-deployment.yaml 
kubectl apply -f fe-deployment.yaml 
kubectl apply -f redis-deployment.yaml 