Feature: Login Feature

Scenario Outline: Orange HRM Login Test Scenario

Given i launch the browser
When I enter the URL
When title of login page
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then Close the browser 
Examples:
	| username | password |
	| admin    | admin123 | 

