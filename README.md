#Bulliown 
###URL: cse134b-team14.github.io/index.html
###Team Members:
* Alex Rodriguez
* Andrew Dang
* Eugene Che
* Hassan Shaikely
* Scott Upton
 
###Project Overview:
Bullion owning is a hobby, a monetary venture, and, for some folks, a way of life. It makes sense to have an arsenal of responsible and quality made applications to help provide novice and semi-pro bullion (gold, silver, and platinum) investors with asymmetrical information on pricing, premiums, and resale possibilities. Unfortunately, the existing applications currently in the market fail to cater specifically to the needs of the diverse community of bullion investors. Bulliown hopes to address this challenge by providing an improved idea of allowing users to track their assets while comparing them to bullion spot prices. This application provides a quick and easy way for a user to purchase bullion. By logging in through Facebook or creating an account a user can access the history of bullion that they purchased as well as more. We have a sleek and simple user interface that is easy to navigate and to pick up. This appeals to the target users of the application.
 
#Using Bulliown
 
###Technologies:
For this project, we used a number of different technologies, including:
* HTML5 and SASS/CSS on the front end of the application.
* Analytics implemented with Mixpanel.
* Javascript was used for most of the backend.
* JQuery tool was used for styling and backend handling.
* chart.js library for data visualization.
* popup.js library for the popups.
* velocity.js library for animations.
* jscolor.js library for color selector
* IcoMoon Icons
 
###Features:
* Login through Facebook
* Create a new account
* Change the Background Color
* Add multiple types of coin
* View history of coin price
* Gulp, to package production released code.
* CRUD for coins.
* View own inventory
* Responsive design
* Basic Analytics (Mixpanel) for event tracking actions such as when the user adds an coin, when the user logins in, and other CRUD user focused actions to keep track of.
* Error Tracking (trackJS)
 
###Navigation:
Our bullion investor/user starts at index.html. They are presented with the options of logging in with a previously created user credential, logging in and authenticating via Facebook, or signing up for a new account. Facebook login is one Bulliown’s many attempts to improve usability for the user. Facebook login achieves this by helping reduce fake users and potential fraud, making login incredibly easy, users don’t have to remember another username and password, but most importantly, we can get information we need for the user’s profile without entering anything. Bulliown does not use the user’s facebook profile for anything else other than for login. According to ISO, usability is the extent to which a product can be used by a specified users to achieve goals with effectiveness, efficiency, and satisfaction in a specified context of use. If the user decides to sign up for an account, they will encounter a menu popup. This keeps the signup on a single page and tries to minimize the discontinuity of experience for the user when starting out. When entries are added in, form validation will alert the end user of invalid entries, with the error inside of it. Logging in will take the user to the main “main.html” page, which is the home page where the total coin value and graphs are displayed. From this page, you are able to refresh the page with the circular icon on the top left or access the settings through the cogs on the righthand side of the top bar. The graphs and data are generated from parsing the JSON objects of the first party data giant quandl gold, silver, and platinum pages. We encountered an issue where quandl allowed our Bulliown app to call their server for a daily limit 50. We were able to acquire a quandl authentication token that allowed us to make unlimited server calls. The spot data was parsed from a third party application. The logic for data collection may be found in the data.js file. From user settings, you are able to change your email, password, as well as change the background color. Changing the background color will be reflected throughout the user’s experience of the web application.  The Additionally, the settings is where one would log out as well. There is a side navigation bar that allows you to get to the Gold (AU), Silver (AG), and Platinum (PT) pages. Each page has the value displayed as well as a price per time chart and the amount of coins you added. Main-metal.html stores the information for a specific metal type, and includes the information for a particular type. From here, you can see a list of all the metals you own, paginated and fully searchable. When you type into the search box and hit enter, the list of items that are displayed will be filtered by whether or not they start with the query typed. Pagination allows the user to scroll through different items, restricting the height of the page. Search and pagination also work in conjunction. When you hover your mouse over the items, you will see a menu show that allows you to edit or delete. Furthermore, clicking on the name will allow you to view the item in more detail. Edit.html is the update and delete part of our CRUD model. This allows you to make changes to the bullion that you have purchased or added. Each coin has an image, an item type, a quantity, weight, value, and a percentage. The page numbers for the bullion are stored in the hash location so you can get to a page with the specific url. We have also added search functionality that allows a user to filter out results by searching. The create page will allow a user to create a new entry. It is passed a hash so that it knows what type that the user will be entering. It also knows which page to go back to if the user chooses to go back. Our create page will automatically populate the name field if it recognizes a known type.  We decided to do an autocomplete text field because we figured that because we probably will not be able to fulfill getting all the known coins, allowing the user to modify and assisting the user when we have extra information without restricting the user's input was a crucial part. View.html allows a user to see details about any given coin that is not shown in the main-metal page. Furthermore, image upload works, and will correctly display as soon as the user uploads. In terms of usability, we display things a lot with various pop-ups, that show what is going on when a user does something in particular. It is important that the user see what is working at the time of operation to confirm to them that the process is going smoothly. While all this is going on, we are tracking errors and analytics in the background. Nonetheless, the load time does take a hit because of this, because we are loading 2-3 external libraries on each page hit, which is not ideal. In the future, we can potentially store the js files locally and minify them into our bundled js files so that these are few round trips to multiple different servers. Nonetheless, with our testing, we have shown that the code remains consistently under 100 milliseconds before display and half a second before all the data has been loaded. This was made possible with ajax, and is made even better by the fact that we took the time to try to smooth the transition out by letting the user know that we are doing work in the background while still letting them preview the page, watching it update as it loads.
 
###Known Issues:
We are having CSS validation issues:
The validator was giving us a “Property fill doesn’t exist” error. The validator does not recognize fill as a valid attribute, but we were able to test with Chrome, Firefox and Internet Explorer, and we were willing to forgo the validation to actually implement the fill attribute.
The validator was giving us a Calc() parse error. Any time that calc() is called in our CSS file, the validator threw a parse error.
We have the following issues we want to improve on in the future
Form validation for login could be done better. We feel that rather than completely nuking the current entry and showing a new popup, a different approach would be to simply show a toast next to the items that failed.
 
###Future Implementation:
If we were to continue this project, there would be a few other things that we would implement to make it as capable and usable as possible. First, we would like to add more capability to the settings menu. For instance, to change the text size. In order to appeal to an older population, a way to increase text size would be ideal. We would also like to implement the option to purchase more types of bullion. There should be options to purchase other semi precious metals as well. Some more polish can be done on the UI. We also feel that certain things such as load times can be improved if we bundled more items together. Furthermore, we did not have that much control over the security on the back end, and our form validation on the front end is rather weak. We feel this can be improved if we had more specifications on what type of things we need to validate for, but we did include the basics for whether or not an entry was valid. Additionally, we feel that the charts.js is too heavyweight for our purposes. It really slows down the application from it’s crisp animation aesthetics, and reloading it was a huge hassle in trying to make look smooth. In the future, it may have been better to just build a custom one or to use a different javascript library. We also feel like more smooth transitions could have been added to actions. Additionally, we currently do not take advantage of the local-storage and server-storage dual model which a lot of applications have been switching to. Doing so will allow us to not need to reload the most recent metal data on each page, and we would only push to the server when a change has occurred. This would make the responsiveness of the app a lot better, and improve the stability of the refresh. We also feel that more UI work can be done, but that was put on the backburner when doing this project, as we felt that the functionality was more important in this aspect, and UI iterations are relatively quick with CSS. The general amount of branding in our app is a little weak as well. Nonetheless, we feel that these features, while nice, do not take away from the outlined overall functionality of the app, which has been implemented to the fullest. We feel this practical approach, where we focus on the specified deliverables was what drove our decisions on what could be done in the time frame we had, with all of us having finals this coming Monday, and some of us even having finals on Saturday.
 
###Code Outline:               
* js:                           Holds all of our javascript
* combine.js:           Our uglified, javascript bundle
* crud.js:              Code for create, retrieve, update, delete
* data.js:              Code for pulling data from quandl
* edit.js:              Code specific to the edit page.
* helper.js:            Global helper items for displaying data
* index.js:             Code specific to the index page
* main.js:              Code specific to main page
* metal-main.js:        Code specific to metal main pages
* parse.js:             Frequently used parse commands
* part.js:                      Code for initializing layout
* popup.js:             Popup code that initializes and sets the page’s popup properties.
* settings.js:          Provides functionality to the settings menu
* signup.js:            Code to present the popup signup menu
* view.js:              Code that is specific to view pages

###Project Diagram:
![Picture](https://github.com/cse134b-team14/cse134b-team14.github.io/blob/master/Chart.jpg)

