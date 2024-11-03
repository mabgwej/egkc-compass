 #!bin/bash
  #!/bin/bash

  NS=$1
  DEPLOYMENT_NAME=$2

  echo "Lets check the deployment is ready or not...."

  deploy_status=$( kubectl rollout status deployment/$DEPLOYMENT_NAME -n $NS --timeout=1200s )
  echo "deploy status :: $deploy_status"

  if [[ "$deploy_status" = *"successfully"* ]];
  then
   echo "PODS information"
   pods=$( kubectl get pods -n $NS | grep $DEPLOYMENT_NAME )
   echo "$pods"
   
   echo "deployment status check exiting successfully"
   exit 0;
  else
   echo "deployment status check exiting with timeout/error, please check Deployment and POD logs"
   exit 1;
  fi
  # sleep 30;COUNTER=20;FLAG=READY
  # NS=$1
  # DEPLOYMENT_NAME=$2
             
  #  echo "Lets check whether the pod status is ready or not...."
  #         while ! [[ $COUNTER == "0" ]]
  #         do
  #           for POD_STATUS in `kubectl get pods -n $NS | grep $DEPLOYMENT_NAME | awk '{print $2}'`
  #           do
  #             PRE=$(echo $POD_STATUS | cut -d'/' -f1)
  #             POST=$(echo $POD_STATUS | cut -d'/' -f2)
  #             if ! [[ $PRE = $POST ]]; then
  #               FLAG=NOT_READY
  #             fi
  #           done
  #           (( COUNTER-- ))
  #           if ! [[ $FLAG = "READY" ]]; then
  #             kubectl get pods -n $NS | head -1
  #             kubectl get pods -n $NS| grep $DEPLOYMENT_NAME
  #             echo -e "\n Pod is yet to be in ready state, Lets wait for another minute\n"
  #             sleep 30
  #             FLAG=READY
  #           else
  #             echo "Pod is ready: $POD_STATUS"
  #             break
  #           fi
  #        done
  #        kubectl get pods -n $NS | head -1
  #        kubectl get pods -n $NS | grep $DEPLOYMENT_NAME
  #        kubectl describe deploy $DEPLOYMENT_NAME -n $NS | grep Image -i
  #        if [[ $COUNTER == "0" ]]; then
  #         echo -e "\nReached maximum retries(20), please check the pod's error log\n"
  #         exit 1
  #        fi
