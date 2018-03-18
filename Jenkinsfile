#!/usr/bin/env groovy
pipeline {
  agent {
    docker {
      image 'node:9.8-alpine'
      args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Test') {
      steps {
        sh 'node --version'
      }
    }
  }
}
