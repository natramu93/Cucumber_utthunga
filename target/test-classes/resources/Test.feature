@t1
Feature: Login
This feature is going to test the login functionality of magento
This feature involves following scenarios.
valid credentials
Invalid credentials

Background:
Given I am able to access magento web page
And I am a registered user on magento

@s1 @t2
Scenario: Valid Credentials
When I update the valid username
|user1|password1|
|user2|password2|
|user3|password3|
And I update the valid password
And I click on the SingIn button
Then I should get access to the dashboard
@s2 @t2
Scenario Outline: Parameterized valid Credentials
When I update the username as "<username>"
And I update the password as "<password>"
And I click on the SingIn button
Then I should get access to the dashboard
Examples:
|username|password|
|natarajan.ramanathan93@gmail.com|Welcome123|
|balajidinakaran1@gmail.com|Welcome@1|