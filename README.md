API Automated Tests & WEb Automation Test


> "This repository contains the automated API for PetStore and UI test automation for Saucedemo

## Built With
- Postman
- Newman runner
- GitHub
- Mockawesome HTML Reporter
- Nodejs
- Cypress
  

## Getting Started
To get a local copy of the program running, follow these simple steps

### Prerequisites
- Postman should be installed
- To run using CLI, Install nodejs. Once installation of node and npm has been confirmed 
- run 'npm install -g newman'
- verify installation with command 'newman -v'
- confirm that cypress is installed 

### Install
- Postman
- Newman runner
- Cypress
- Newman reporter htmlextra


### Setup - Postman runner
- Open a command line terminal (Git bash preferrably) and navigate to a directory where you would like to save the work folder using cd.
- Clone the repository with git clone https://github.com/Nikkydee/SauceDemo.git
- To get the current working tree, git fetch --all, then checkout to "main" branch.
- Finally, import the project[postman collection and environment variable] to postman 
- Open, right-click on the collection and select run collection

### Setup- newman runner
   - Invariably, tests can be run on CLI using newman runner
   - Open terminal or cmd on the root directory of this project 
   - Run `npm install` to install all project dependecies
   - run this command `npm run api-test`
   - An html report is generated and placed in the `/newman` directory

### Setup- cypress
- Open a command line terminal (Git bash preferrably) and navigate to a directory where you would like to save the work folder using cd.
- Clone the repository with git clone https://github.com/Nikkydee/SauceDemo.git (If you have not done that in the previous steps)
- To get the current working tree, git fetch --all, then checkout to "main" branch.
- install all necessary dependencies by running `npm install`
- Finally, run the tests by running the command `npm run test-windows` (if you are using a windows machine) or `npm run test-mac` (for mac)

### Output
- After the execution of the test, your default browser will launch HTML report detailing the status of each test case with screenshots of failed test ceses.Alternatively, you can open open the report which will be located at cypress/reports/html.


## Author

👤 *Adenike Olapetan*

- GitHub: [@Nikkydee](https://github.com/Nikkydee)

### Observations
I noticed that the User APIs for pet store were not properly validated resulting to failed scenarios with 6 failed tests. also, generic response data were returned in certain scenarios. This resulted to failure of the edge cases as most of the edge case and negative scenarios could not be properly validated

### Blockers

One of my major blockers was time constraint in completeing this project task. While the time allocated for completion of the task was short I was able to work extra hours and during the salah holiday break to tackele the project. There was a major limitation to the extent at which cypress could be used to automate as recurrent sesion timeout were not favourable for the smooth running of the UI automated Tests.



## 🤝 Contributing

Contributions, issues, and feature requests are welcome!


## Show your support

Give a ⭐ if you like this project!

## Acknowledgments
- Shout out to [Enyata](https://www.enyata.com/) for the opportunity