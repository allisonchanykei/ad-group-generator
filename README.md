# Ad Group Generator

This is a Google Script App.

Given a list of keywords, CSVs will be created for Google AdWord bulk import.

To define where to get the keywords, create a class that implements `ISource`.
To define what words should be positive or negative, define a class that implements `IKeywordsGenerator`.
