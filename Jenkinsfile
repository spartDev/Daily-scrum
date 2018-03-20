#!/usr/bin/env groovy
pipeline {
  agent {
    docker {
      image 'node:9.8-alpine'
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
