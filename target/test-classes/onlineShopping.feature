#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Online Shopping


Background: Login to Home page
				Given Launch Browser
				When User Navigate to Login page
				Then User in Login page
 
  #Scenario:1 Verify Register on the website
  #Given  Create account by entering EmailID  
    #And Click on Create Account to register
    #When Enter Personal Informaion
    #And Click on Register
    #And Registered Successfully
    #Then Validate First name and Last name on Home page
    #And Logout Successfull 
    
     Scenario:2 Verify Buy a product and make payment
    Given User navigate to login page
    And User Inputs Username and Password
    And User login successfull 
    When User Proceed for shopping 
    And User add a product to cart
    And Proceed the product to checkout
    And Proceed to confirm address
    And Proceed to Shipment and Payment details
    Then Validate Product details on payment page
    And Logout Successfull 

  #@tag2
  #Scenario Outline: Title of your scenario outline
    #Given I want to write a step with <name>
    #When I check for the <value> in step
    #Then I verify the <status> in step
#
    #Examples: 
      #| name  | value | status  |
      #| name1 |     5 | success |
      #| name2 |     7 | Fail    |
