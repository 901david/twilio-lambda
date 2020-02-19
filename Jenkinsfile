pipeline {
    agent any
    stages {

        stage('Using Docker Credentials') {
            steps {
                echo 'LOGGING INTO DOCKER................'
                sh'cat ~/my_creds.txt | docker login --username 4990814 --password-stdin'
            }
        }

        stage('Using Heroku Credentials') {
            steps {
                echo 'LOGGING INTO Heroku................'
                // sh'heroku container:login'
                sh'cat ~/my_creds.txt | heroku login --interactive --username 4990814 --password-stdin'
            }
        }

        stage('Build Prod Image') {
            steps {
                echo 'Building Prod Web Image....'
                sh 'docker build -t 4990814/twilio-lambda .'
            }
        }

        stage('Send Prod Image to Docker Hub') {
            steps {
                sh '''
                echo 'Pushing Image to Docker Hub'
                docker push 4990814/twilio-lambda
                '''
            }
        }

        stage('Pushing image to Heroku Registry') {
            steps {
                sh 'heroku container:push web --app "twilio-data"'
            }
        }

        stage('Releasing to Heroku') {
            steps {
                sh 'heroku container:release web --app "twilio-data"'
            }
        }
    }
}