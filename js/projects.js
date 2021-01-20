let paragraph = document.getElementById('app-explanation')
let title = document.getElementById('app-title')
let link = document.getElementById('link-to-app')
$(document).ready(() => {
    $('#projects-carousel').carousel({
        interval: 15000
      })
    $('#projects-carousel').on('slide.bs.carousel', function (event) {
        if(event.to === 0) {
            title.textContent = 'Weather App'
            paragraph.textContent = '\t This app allows you to input an address and find the weather at that address.' +
            ' It does this by sending the location to a location API to get the longitude and latitude, and then it sends' +
            ' those coordinates into a weather API to get the weather. Made using Node, Javascript, HTML, and CSS. Its on Heroku so it will take a bit of time to load.'
            link.href = 'https://lamke-weather-application.herokuapp.com/'
        }
        if(event.to === 1) {
            title.textContent = 'Notes App'
            paragraph.textContent =  "\t This app allows you to take notes. You can create, edit, and delete your notes. Also, each" + 
            " note can be filtered by last edited, recently created, or alphabetically. You can search for" + 
            " notes by the title of the note. Creating using Javascript, HTML, and CSS."
            link.href = 'https://lamke-notes.netlify.app/'
        }
        if(event.to === 2) {
            title.textContent = 'Todo App'
            paragraph.textContent =  "\t This app allows keep track of your todos. It allows you to filter the todos by whether"+
            " they are completed or not. It also allows you to search for a specific todo by the contents" + 
            " of the todo. Todos are saved to local storage on the browser. Made using Javascript, HTML, and CSS."
            link.href = 'https://lamke-todo.netlify.app/'
        }
        if(event.to === 3) {
            title.textContent = 'Hangman App'
            paragraph.textContent =  "\t This app allows you to play a classic game of hangman. It allows you to press a the letter on" +
            " your keyboard that you would like to guess and if the letter is correct, then part of the puzzle is revealed." +
            " Not mobile friendly." +
            " Phrases for the game are randomly fetched from a random phrase API at the start of each game." +
            " Created using Javascript, HTML, and CSS."
            link.href = 'https://lamke-hangman.netlify.app/' 
        }
        if(event.to === 4) {
            title.textContent = 'Recipe App'
            paragraph.textContent = `This app allows the user to store all of their favorite recipes. The users either has to log in or sign up
            to have access to the application. The recipes are stored to a postgres database on heroku and the application frontend is hosted on Netlify. 
            This application also uses express for the server. Made using Node, SQL, CSS, HTML, and Javascript. The database is on Heroku so logging in will take a bit of time but afterwards everything will work normally.`
            link.href = 'https://recipe-app-jg.netlify.app/'
        }
        if(event.to === 5) {
            title.textContent = 'E-Commerce App'
            paragraph.textContent = `This app is a mock version of a shopping application. You can login or signup and enter the app to shop around for items.
            You can click on each individual items and select how many you want. Then you can add it to your cart. Then you can checkout which will just
            clear all items from your cart. Since this is a mock shopping app it has no payment processing. To add new items or edit and delete items you can log in as an admin.
            The admin email is admin@test.com and the password is admin. When logging in with these credentials, you will be able to add, edit and delete items from the store.
            These changes will be reflected in the all normal user's application once the react component re-renders. The frontend of this app is built 
            using React, Redux, and Node. The backend is built using MongoDB and Node/Express. The backend is on Heroku and stores pictures there so any uploaded pictures will be 
            deleted after a day or whenever the backend restarts.`
            link.href = 'https://e-commerce-app-jka.netlify.app/'
        }
      })
})