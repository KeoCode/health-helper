# Health Helper

Health Helper is a site consisting of HTML, CSS and Javascript. It is a fully interactive javascript based calculator to help calculate calories needed to meet your specified goal. 

Health helper  is a site that can be used by anyone, it's aim is to educate the user on the correct calorie intake based on factors including age, height, weight, gender as well as fitness level and their goals. Using javascript, it will take all information input in the form and calculate calorie and macronutrients the user should aim for to become the healiest version of themselves.

![AmIResponsive](assets/images/responsiveshot.png)

The results are an average based on the Harris-Benedict Equation for calculating your Basal Metabolic Rate (BMR). Your BMR refers to the number of calories your body burns each day to keep you alive in a 24 hour period if all you did was lay in bed all day long. This is the absolute bare minimum of calories it takes to ensure your survival. 

You Total Daily Energy Expenditure (TDEE) is the total number of calories you burn in a given day. This is worked out by what is known as the Katch-McArdle multipliers. This takes into account your BMR, Thermic Effect of Food, Non-Exercise Activity Thermogenesis and Thermic Effect of Activity (Exercise). Basically, it estimates the amount of calories you use in a day by not just your BMR but by taking into account the amount of calorie you burn for food digestion (Thermic Effect of Food or TEF), the calories burned by daily movement eg walking around the house / office / to and from the car etc (Non-Exercise Activity Thermogenesis or NEAT)and lastly, the number of calories burned as a result of exercise (Thermic Effect of Activity or TEA).

Based on the Goal you have selected Health Helper will advise the calories you should aim for to reach that goal eg losing one pound per week means being 3500 calories in defict so TDEE less 500 calories a day should get you close to that lose every week.

Lastly, Health Helper will go one step futher to give you the best chance at success by breaking down the best ratio of your Macronutrients. By Tracking and meeting macro targets it not only be priortising nutrient dense foods but can supply your body with exactly what it needs for fuel. The Main 3 Macros are Fats, Carbohydrates and Protein. The calculater will tell how much of each you should use in both Calories amounts and Gram amounts to make it twice as accessable to track.

![Screenshot of Main PAge](/assets/images/siteScreenshot.png)

### Existing Features

- __The Health Helper Heading__

  - Featured at the top of the page, the Health Helper heading, which is simple clean and contracting with the background in a different font to the rest of the page.

  ![Heading](/assets/images/heading.png)

- __The Introduction Paragraph__

This Is brief intoduction in to what the site is about and about what it will calculate. 

![Introduction Text](/assets/images/introText.png)

- __The image__

 An Image of a woman preparing healthy food to break up the text and to reinforce the idea that this site is recommending healthy lifestyle.

![Main Image](/assets/images/imgshot.png)

- __The Form Area__

  - This section is where the user input their data and submit it so it will run the calculations just before being redirected to the results page.

![Form Section](/assets/images/formshot.png)

- __The Footer Area__

  - Basic Footer with a disclaimer to consult a doctor for any health decisions.

  ![Footer Section](/assets/images/footer.png)

- __The result page__

- The user will be redirected to the results page and using session storage, it will display the results of the calculations.

![Result Page](/assets/images/resultspage.png)

- __The Results explained Area__

  - A break down of what each result means and is explained so can action with the results.

  ![Result info Text](/assets/images/resultInfo.png)

## Testing 

- I Have added all Form fields as a requirement as all data is needed to make accurate calculations, I also have added a minimum length and a max length to certain fields to ensure it will validate that the correct data is entered inte right field.

- I have commented out the console log's in my code but i reguarly use the to double check the formula's are correct.

- The Screen is responsive as can be seen here in the AmIREsponsive screen shots on all tested devices.

![AmIResponsive](assets/images/responsiveshot.png)

- In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.



### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)

    ![HTML Validation](/assets/images/htmlValidatorScreenshot.png)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

![CSS Validation](/assets/images/cssValidatorScreenshot.png)

- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)

![Javascript Validation](/assets/images/jshintScreenshot.png)

- Lighthouse Accessibility testing

![Lighthouse results](/assets/images/lighthouseScreenshot.png)

## Deployment

- Steps used to deploy on Github through Pages section

![Screen shot of the github pages to deploy page](/assets/images/deployone.png)
![Screen shot of the github once deployed](/assets/images/deployTwo.png)
 
## Credits 

### Content 

        * The text for the Home page was taken from [Steelfit](https://steelfitusa.com/blogs/health-and-wellness/calculate-tdee)
        * Text used in read me and result page from [Macro Article](https://www.womenshealthmag.com/uk/food/weight-loss/a706111/counting-calculate-macros/)
        * Code institute for the sample READ.md for layout
        * W3 school online and stackoverflow for general ways to implament Navigation bar and style in css
        * How to implement Session Storage from [YouTube](https://www.youtube.com/watch?v=x0VcigW9kN0&ab_channel=OpenJavaScript)


### Media

        * photos from [Pexels](https://www.pexels.com/)
        * font from [Googlefonts](https.//www.googlefonts.com)
        * favicon from [icons8](https://icons8.com/icons/set/html-favicon)
