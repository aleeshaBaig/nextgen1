Feature: Side Bar
 Scenario: Display Menu
        When we request the side bar
        Then we should receive
            | name       | 
            | Dashboard  | 
            | Inputs     | 
            | Models     |         
 Scenario: Click on Inputs
   When we click on Inputs
   Then EngineFamily dropdown appear
