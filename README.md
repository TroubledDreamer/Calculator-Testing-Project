To run the application run Windows/index.html (recommended to use open live server)


To run the karma tests

cd Windows   

npm install

npm install karma -g  

npm install --save-dev jasmine-core karma-jasmine karma

npm install --save-dev karma-chrome-launcher

 

npm test


For running the cypress tests navagate to Windows/cypress/e2e/assesment/test.cy.js and replace the url with the url giving when 
running open server from index.html

npx cypress open 

Then run the assesment/test.cy.js file



