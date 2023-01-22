# Battleship.

A Battleship web game, created with HTML, CSS and JavaScript.

Part of The Odin Project's [curriculum](https://www.theodinproject.com/lessons/node-path-javascript-battleship).

Created by Carl Madsen, 2023.

**[Live page!](https://elsaepo.github.io/odin-battleship/)**

## Functionality

* **Placing ships** - Place your 5 ships on the board in any location and orientation you like.
* **Gameplay** - Take turns firing shots into the enemy's grid. Sink all of their ships first to win!
* **AI** - Compete against the battleBot to see who will become the naval champion. battleBot will play intelligently, and will sometimes cheat.

## Contributions

* [Google Fonts](https://fonts.google.com/)

## Learning outcomes & challenges

* This is the first major project of the course where I used **Test-Driven Development (TDD)**, and it was just fantastic. Initially I struggled with spending time writing all of the tests and not any functional code, but after seeing how much easier it made to focus on what code -to- write, and the ease of debugging, I was quickly sold. Having studied TDD quite recently in the course, once I gained some experience with the workflow, it made the development process a lot lighter.
* Compared to the previous web game I made, Tic Tac Toe, I aimed to make this project a lot more **modular**, continuously splitting bits of code up into different functions and modules. This allowed me to easily navigate around the seperate functions of the game during development, and made it simpler to decide where a certain bit of logic should be placed.
* The **Drag and Drop** UI was one of the harder aspects of development - it was something I'd never implemented before, and whilst on a basic level it was easy, once I started to desire certain functionality in the placing of ships it quickly grew in complexity. Things like checking which ship was being placed, checking the validity of the ship placement, highlighting valid/invalid placements, aligning the drop zone with the relative position of the cursor on the ship and styling the shi pbeing placed were all significant hurdles to overcome. Following that, implementing all of this into a **Mobile Drag and Drop** UI was a whole other challenge.
* The **battleBot AI** turned out to be quite complex. Whilst the Tic Tac Toe AI is smarter (perfect), that game has completely known information, whereas in Battleship, there are unknowns - where the enemy ships are. Coding the AI to make obvious moves was much more involved than I expected, but test-first development of it helped tremendously. Things like understanding the orientation of a ship after 2 hits, keeping track of sunk ships and not choosing squares where a ship couldn't be are trivial to a human, but turn out to be quite complex for a computer.

## Future Development

* The mobile drag and drop ship-placing UI is a lot cleaner than the computer UI due to the 'ghost ship' I am using for mobile functionality - this is something I would like to clean up in the future.
* Displaying remaining ships next to the board, so the player knows which ships they're looking for.