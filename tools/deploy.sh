#!/bin/bash

while [ "$1" != "" ]; do
    case $1 in
        --ssh-remote )          shift
                                export SSH_REMOTE=$1
                                ;;
        --base-path )           shift
                                export BASE_PATH=$1
                                ;;
        --local-path )          shift
                                export LOCAL_PATH=$1
                                ;;
        --remote-path )         shift
                                export REMOTE_PATH=$1
                                ;;
        --dont-build )          export DONT_BUILD=true
                                ;;
        --help )                echo "Usage: deploy.sh [options]"
                                echo "Options:"
                                echo "  --ssh-remote <host>    Set the SSH remote host"
                                echo "  --local-path <path>    Set the local path for the build"
                                echo "  --base-path <path>     Set the base path for the build"
                                echo "  --remote-path <path>   Set the remote path for the deployment"
                                echo "  --help                 Display this help message"
                                exit
                                ;;
        * )                     echo "Invalid argument: $1"
                                echo "Use --help to see the available options."
                                exit 1
    esac
    shift
done

if [ -z "$SSH_REMOTE" ]; then
    echo "SSH_REMOTE is not set!"
fi

if [ -z "${BASE_PATH+x}" ]; then
    echo "BASE_PATH is not set!"
fi

if [ -z "$REMOTE_PATH" ]; then
    echo "REMOTE_PATH is not set!"
fi

if [ -z "$SSH_REMOTE" ] || [ -z "${BASE_PATH+x}" ] || [ -z "$REMOTE_PATH" ]; then
    exit 1
fi

if [ -z "$DONT_BUILD" ]; then
    export DONT_BUILD=false
fi

echo "Publishing the static build..."

if $DONT_BUILD; then
    echo "Skipping build..."
else
    echo "Building..."
    
    output=$(npm run build > /dev/null 2>&1)

    if [ $? -eq 0 ]; then
        echo "" > deploy.log
        echo "$output" > deploy.log
        echo "" > deploy.log
        echo "Static version is built successfully."
    else
        echo "Build output:"
        echo "$output"
        echo "Couldn't build static version!"
        exit 1
    fi
fi

echo "Uploading..."

ssh $SSH_REMOTE "mkdir -p $REMOTE_PATH"
rsync -ru $LOCAL_PATH/* root@meowingcat.io:$REMOTE_PATH

echo "Published successfully!"