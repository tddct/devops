#!/bin/bash

ARGS=("$*")
workingDir=$(pwd)
# docker login -u thydaduong -p dckr_pat_Q_k8dEGaokkIlaLgaXIhOfhNEaE

if [ -z "$ARGS" ]; then
    echo "Please specify the service you want to deploy."
elif [ $ARGS == "all" ]; then
    for dir in services/*/;do 
        serviceDir="${workingDir}/${dir}"
        serviceName=$(echo $dir | sed 's/.$//' | sed 's/.*\///')

        if test -f "${serviceDir}Dockerfile"; then
            echo "Running service: ${serviceName}"
            cd "${serviceDir}"
            git pull
            docker build -t thydaduong/$serviceName:latest .
            docker push thydaduong/$serviceName:latest
        fi

    done
else
    for ARG in $ARGS
    do 
        if test -f "${workingDir}/services/${ARG}/Dockerfile"; then
            echo "Running service: ${ARG}"
            cd "${workingDir}/services/${ARG}"
            git pull
            docker build -t thydaduong/$ARG:latest .
            docker push thydaduong/$ARG:latest
        else
            echo "Service ${ARG} not found."
        fi
    done
fi
# cd "${workingDir}"
./start.sh