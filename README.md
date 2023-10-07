# Quote Of The Day

bokka a goat

# Rutgers BITS Fall 2022 Datathon

<!---
What they are grading us on: 
1) research questions
2) data analysis visualization and methodology 
3) coonclusion
4) reflection and improvements
-->

## 11/06 Update - We Ranked #1 and best project overall :)

Final Video Presentation:
https://youtu.be/TCiNaajMAC4

We started off our project by looking for data sets to work with. We wanted to be able to answer relevant and interesting questions with tangible data. Something we had to keep in mind was picking data sets that did not have too many lines of data in the .csv file because we did not have laptops with a lot of computing power.

We ended up going with the [**Global Happiness Score**](https://www.kaggle.com/datasets/unsdsn/world-happiness) dataset because we are genuinely interested in the happiness of people around the world and the different factors that affect it. 

Since happiness is a pretty broad topic, we wanted to cross-correlate with two other dataset to see similarities/differences and have a partial causation to happiness. We decided to work with [**Carbon Emissions**](https://www.kaggle.com/datasets/ankanhore545/carbon-dioxide-emissions-of-the-world) globally as well as [**Alcohol Consumption**](https://www.kaggle.com/datasets/pralabhpoudel/alcohol-consumption-by-country) globally.

After brainstorming, we wanted to answer the following questions used data visualization and statistical analysis.

```
1)  Does having more money (GDP/capita) and better life conditions lead to more happiness?
2)  Is there a correlation between alcohol consumption and happiness? 
3)  Is there a correlation between CO2 emissions and happiness? 
4)  For countries without clear happiness scores, is there a way to predict/classify them?
```

We kept these questions in mind while doing our project but also let our imagination fly sometimes.

With all this in mind, here is our project!

>All of the data we used can be found [here.](https://github.com/akhilvreddy/Datathon/tree/main/Excel%20%26%20CSV/Original%20CSV%20Files)

# Techfer
![github repo badge: Built With](https://img.shields.io/badge/Using-Python-181717?color=blue)
![github repo badge: Built With](https://img.shields.io/badge/Using-Excel-181717?color=blue)
![github repo badge: Built With](https://img.shields.io/badge/Using-SQL-181717?color=blue)
![github repo badge: Built With](https://img.shields.io/badge/Using-Tableau-181717?color=blue)
![github repo badge: Built On](https://img.shields.io/badge/Built%20On-VSCode-181717?color=blue)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

Infrences based on technology.

## Features
- Plot visualizations using *matplotlib* and *seaborn*
- *Tableau* visualiation to show comparisons by country
- Python visualization for regression and histogram analysis
- Linear Regression in Python to draw relationships between categories
- Cross correlation between other datasets
- Inferential Statistics to determine if different categories have an effect on the happiness score
- Random forest categorization to decide whether a tenative country is happy or not
- Machine learning classification in order to create a model to predict happiness of countries, and find the weight each category holds on determining happiness 
- Cross correlation between other datasets that we found on Kaggle
- Final conclusions between what we got and the future steps on how we can expand the project

## Contributors 
[Akhil Reddy](https://www.linkedin.com/in/akhilvreddy/) is a junior at the Rutgers School of Engineering studying Computer Engineering. 

[Aadya Gadkari](https://www.linkedin.com/in/aadyagadkari/) is a junior at the Rutgers School of Engineering studying Biomedical Engineering.

[Misaal Singh](https://www.linkedin.com/in/misaal-singh-531a1018b/) is a junior at the Rutgers Business School studying Statistics & BAIT.

## Project Itinerary

### Data Cleaning & Sanitation - [jump to file](https://github.com/akhilvreddy/Datathon/tree/main/Excel%20%26%20CSV) 
- When we first got the CSV files from Kaggle, it was unstructured and very messy. We took these files and loaded them into excel to get a better sense of what the data looked like. We were able to remove some basic lines which didn't follow the proper formatting.
- Then we used MySQL to load the data into a .db file and wrote queries in order to delete some columns and rows.
- This finally gave us a clean dataset that we could import into python using pandas.


### Tableau Data Visualization - [jump to file](https://github.com/akhilvreddy/Datathon/tree/main/Tableau)
- One way to visualize the data was using Tableau. First we utilized heat maps to see which countries report less happiness and which ones report higher. We also used a heat map to see GDP per capita. 
- Then, we charted the comparisons between Alcohol and Life Expectancy in order to find correlation. Additionally, we also vi
sualized Happiness and Social Support to find correlation. 
- Lastly, we looked into Corruption and Freedom as a scatter plot in order to prove no correlation.


### Python-based Visualization - [jump to file](https://github.com/akhilvreddy/Datathon/blob/main/Python%20%26%20Jupyter%20Notebook/Main_Python_File.ipynb)
- In jupyter notebook, we imported the cleaned CSV file using pandas's *read_csv* function.
- We plotted and did regression for the score of happiness vs all the other country qualities.
- We got good results since all the data we had was lining up with what we had in tableau.

### Regression in Python - [jump to file](https://github.com/akhilvreddy/Datathon/blob/main/Python%20%26%20Jupyter%20Notebook/Main_Python_File.ipynb)
- We did linear regression within a certain confidence interval for all of the plots that we had.
- Calculated the r value using the given r squared value in order to see the strength of correlation that we had. 
- Used the f score to predict if the data that we got had statistical significance.

### Machine Learning (Decision Trees & Random Forest) - [jump to file](https://github.com/akhilvreddy/Datathon/blob/main/Machine%20Learning/RandomForest_Classfication.ipynb)
An issue we ran into while understanding the total data sets is how some countries do not have much data about their happiness score and other such things. This might be because there is not much of a way to get good data from these countries. A way we could get tentative data from a country which doesn’t have any data is by using a decision tree. This could tell us if a country is happy or not just based on the qualities about the country like GDP, Population, etc. 

Decision trees are going to help us understand if a country is generally happy/sad and the future trajectory of it.
 
 ### Machine Learning (Convolution Neural Network) - [jump to file](https://github.com/akhilvreddy/Datathon/blob/main/Machine%20Learning/NeuralNetwork_NumberGeneration.ipynb)
When we were going through the Random Forest of multiple Decision Trees, we ran into the issue of not getting a specific value. For example, the Decision Trees only told us whether a tentative country was going to be either generally happy or not. However, we wanted to do better than that. We wanted to use some machine learning techniques that would help us get us a estimated score. This would be nice since we could fill in the gaps to countries that do not have a score. The way we did this was by using PyTorch.


### Correlation Dataset - [jump to file](https://github.com/akhilvreddy/Datathon/blob/main/Excel%20%26%20CSV/Original%20CSV%20Files/Alcohol_Table.csv)
For both of these new datasets, we loaded them into pandas and then merged within pandas. 

- **Happiness vs Alcohol Consumption**: The histogram of countries happienss vs. alcohol consumption shows us that there is almost a very level distribution but a slight correlation. The r value hovers between 0.6 and 0.7, meaning that it is very slightly significant. We can say that to the utmost slightest degree, alcohol consumption means happier countries.
- **Happiness vs Carbon Dioxide Consumption**: This histogram shows a VERY significant correlation between a country's happiness and the gas emissions. We see that the *r value* is around 0.91 with a sharp turn down meaning that when there is high emissions, the happiness is not high at all. 
 

## Conclusions & Answering our Questions
Here, we want to answer the three questions that we had in the beginning of the project. We'll go over them one by one.

### Question 1
In this data analysis project we measured GDP/Capita, Social Support, Life Expectancy, Freedom, Corruption, and Gas Emissions and used the correlation coefficient and linear regression.

Out of the metrics we measured Gas Emissions is shown to be the least correlated to the overall happiness of a country. This was determined by the correlation coefficient of .25 output from the linear regression analysis. Whereas all of the other data elements have a correlation coefficient of .8 or higher and an F-statistic of 10 or higher. This concludes that for the most part the living conditions of your country correlate towards the overall happiness of their citizens.

### Question 2
In this study we conducted a linear regression and correlation analysis between alcohol consumption and happiness score, from this we found that the correlation coefficient of the two variables is .864 and the F-Statistic, which compares the effect that the variances of both variables have on one another, is 420.3. These metrics show that there is evidence to show that their alcohol consumption has an effect on the happiness of a country. 
However, of the metrics we measured alcohol consumption of a country holds a lower weight on the happiness of a region, of the metrics we measured alcohol consumption holds the second lowest weight on the happiness of a region. For this metric we used a Random Forest Classifier to predict whether a country was happy or not and the model concluded that alcohol consumption held a 8.29% weight in its predictions. This shows that although alcohol consumption has a correlation towards the happiness of a region, it does not hold massive weight in determining the happiness of a region.

### Question 3
From our histogram, we can see an r value of -0.91 meaning that there is very high correlation between lesser emissions and happier people. The reason for this could be that lesser emissions mean that people go outside more or that the place they live in is less indusrtial and more residential. 

### Question 4
Machine Learning techniques have been used excessively to statistically predict outcomes based on past data. We used this concept to predict whether a country was happy or not. For this we used classification which groups labeled data into subsets in order to predict categorical data. The classification method that we felt would best predict this model is a random forest classifier which creates several decision trees and averages their output to produce a final output. From this our model predicted outcomes at a .977 percent accuracy rate, which can conclude that we can determine whether they are happy or not.

### Next Steps

The next steps for the project can be getting a holistic understanding of how all the countries in the world rank in happiness. The neural network can be made in order to output more country's happiness scores and fill in the gaps between places that do not have a score. We will be able to use the random forest decision trees to categorize more countries.

On the analysis side, we hope to do more statistical testing on some of the data. Running tests such as pearson correlation would be really helpful because it would tell us the ways the data is correlated.

On the software side, we hope to expand the reach of this project. The goal would be to generalize the testing and data analysis to any generic dataset so that someone could clone this repository in the future and copy the path of their own project and have multiple dashboards and plots on their data.

In conclusion, we had a great time analyzing and doing a lot of different analysis with data. We loved how this project made us use multiple different tools together in order to get to the final goal. In the future, given a large, messy CSV file, we won't be afraid to tackle it!
