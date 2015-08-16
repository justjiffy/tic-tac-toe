![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")(GAme on)


# Tic-Tac-Toe Weekend Project

![](http://www.scientificamerican.com/sciam/cache/file/5C4F738B-F0EB-40C9-9F551F1CAEA36199.jpg)

---

Throughout the week we have been learning about writing functions, working with loops, and writing conditionals. We also learned about how parts of HTML work and function.

#####This weekend we will be making a Tic Tac Toe game using all of this.

## Objective

Build a Tic-Tac-Toe game incorporating the three web app technologies you've worked with this week:

- HTML
- CSS
- JavaScript

## Minimum Requirements
- Display an empty tic-tac-toe board when the page is initially displayed.
- A player can click on any of the nine cells to make a move.
- Every click will alternate between marking an `X` and `O`.
- Upon marking of an individual cell, use JavaScript to add a class to each cell to display separate colors.
- Once occupied with an `X` or `O`, the cell cannot be played again.
- Provide a `Reset Game` button that will clear the contents of the board.

### Getting Started / Hints

- Create an `index.html` page.
- Create and include in your `index.html` page, `style.css` and `script.js` files.
- Start by writing the HTML and CSS that displays a 3x3 grid and the `reset game` button.
- Using `id` and/or `class` attributes will help you wire up your click events with JavaScript.
- Programs, including games, are frequently focused on manipulating data and displaying that data to a user. Decide on the data structures, held in variables, that will maintain the _state_ (data / status) of the game. For example, you will need a variable to keep track of moves. As this will be used to indicate whether or not to draw an `X` or an `O`.
- Use javascript to locate the DOM elements you are going to use within your app. Think about using `document.getElementById`, `document.querySelector` or `document.getElementsByClassName` to locate your target elements. Try this in your console first to make sure your selection works.
- After finding the elements, start writing logic to listen for `click` events on those elements. Using a single listener with event bubbling is recommended but not required.
- Put any code that needs to run multiple times into functions. (Keep it DRY)

## Bonuses
- Display whose turn it is ("X" or "O").
- Provide win logic and display a winning message.
- Provide logic for a cat's game (tie), also displaying a message.
- Add your personal touch with unique styling.
- No plans this weekend? Make an [Ultimate Tic-Tac-Toe](http://bejofo.net/ttt) game or another more complex version of TTT [(some other examples)](http://www.math.cornell.edu/~mec/2003-2004/graphtheory/tictactoe/howtoplayttt.html). Go nuts.

## Resources

[DOM Events](http://www.smashingmagazine.com/2013/11/12/an-introduction-to-dom-events/)
