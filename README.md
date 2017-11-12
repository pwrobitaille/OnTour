# README

![Build Status](https://codeship.com/projects/e0c20e60-94c5-0135-bb8f-2651940696f3/status?branch=master)
![Code Climate](https://codeclimate.com/github/uncommonAP/booze_yourself.png)
![Coverage Status](https://coveralls.io/repos/github/uncommonAP/booze_yourself/badge.png)

website: www.concertsontour.com
dummy account: concertsontour@gmail.com pw: testconcertsontour

# OnTour

OnTour is an interactive app that lets users document and track their concert history.

## Features

  * Users can login through Google
  * Users can sign in/out of their account
  * Users can view 5 recent concerts, top venue, top artist, and shows per year on their profile
  * Users can add a concert
  * Users can view and search through every concert they've added


## Technologies

  * Backend: Rails 5.1.2
  * Frontend: React.js and Embedded Ruby
  * User Auth: Github Omniauth
  * Styling: Foundation
  * Database: Postgres


## To run this app on your browser

  * Install Ruby.2.3.3
  * In a terminal, run git clone https://github.com/pwrobitaille/OnTour.git
  * Navigate to the project's root directory with cd OnTour
  * Run bundle install && yarn install && rake db:setup
  * In another terminal window, run foreman start
  * Visit http://localhost:5000/ in your browser
