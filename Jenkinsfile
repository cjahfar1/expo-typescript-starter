pipeline {
    agent any
    environment {
        EXPO_USERNAME = credentials('expo-user-name')
        EXPO_PASSWORD = credentials('expo-password')
        KEYSTORE_PATH = credentials('android-keystore')
    }
    stages {
        stage('Checkout') {
                steps {
                        git branch: 'master',
                            url: 'https://github.com/cjahfar1/expo-typescript-starter.git'
                        echo 'Clone and Checkout from git: Completed'
                }
        }
	    stage('Prepare') {
            steps {
                sh 'npm i'
                echo "Prepare: Completed ${env.KEYSTORE_PATH}"
            }
	    }
	    stage('Unit Tests') {
            steps {
                sh 'npm run test'
                echo "Unit Tests: Completed ${env.KEYSTORE_PATH}"
            }
	    }
	    stage('Sonar') {
            steps {
                sh 'sonar-scanner -Dsonar.projectKey=cjahfar1_expo-typescript-starter -Dsonar.organization=cjahfar1-github -Dsonar.sources=. -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=ea61f6445cc91ebc171541b194f95d73ee7754c7'
                echo "Sonar: Completed ${env.KEYSTORE_PATH}"
            }
	    }
	    stage('Build') {
            steps {
                //sh "npx expo login -u ${env.EXPO_USERNAME} -p ${env.EXPO_PASSWORD}"
                //sh "npx expo build:android --non-interactive"
                //sh 'curl -o app.apk "$(expo url:apk --non-interactive)"'
                echo "Build: Completed ${env.KEYSTORE_PATH}"
            }
	    }
    }
}
