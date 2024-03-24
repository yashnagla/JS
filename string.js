// Strings
// It is zero or more characters written inside quotes.
// Strings can be created as primitives, from string literals, or as objects, using the String() constructor.

// let name = 'Yash Nagla';
// let age = 23;

// console.log(name);
// console.log(age);

// Length Property
// console.log(name.length);

// Escape Character
// let nmessage = "We arethe so-called \"Vikings\" from the north."
// console.log(nmessage);
// let message = 'We arethe so-called "Vikings" from the north.'
// console.log(message);

// Finding a string in a string
// let myBio = 'I am Yash Nagla'
// console.log(myBio.indexOf( 'am'));

// Extractin String Parts
// slice()
// it extracts a part of a srting and returns the extracted part in a new string.
// This method takes 2 parameters: the strat position and the end position
// var str = 'Apple, Bananan, Kiwi, Mango';
// let res = str.slice(0,4)
// let res = str.slice(7)
// let res = str.slice(7,-2)
// console.log(res);

// display only 280 characters of a string like the one used in Twitter.
// let myTweet = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quo veritatis alias et. Quo vero doloribus praesentium eius enim, nesciunt inventore, libero voluptatibus suscipit alias omnis facilis distinctio molestiae illo corrupti ab cumque iure quisquam itaque ea velit animi? Sequi voluptas ex laudantium Ratione, earum cumque libero vero voluptatibus magnam ab quibusdam ut incidunt tenetur dicta nulla quae tempora, repellendus eos laudantium quod ex soluta? Ea eaque similique labore explicabo reiciendis quam, error quidem beatae commodi temporibus ab. Qui architecto sint rem maiores ab harum est laudantium dicta, accusantium odio! Quis ut enim a soluta distinctio. Ipsam, et maiores! Impedit perferendis consequuntur delectus saepe placeat dolorum quia excepturi veritatis. Quo adipisci blanditiis corporis, nostrum dicta inventore beatae repellat. Quo nobis molestiae maxime velit consequuntur asperiores facilis amet reprehenderit, quae, ducimus corporis porro, esse perspiciatis. Odio ad quibusdam omnis ipsa, cumque suscipit sit pariatur, reiciendis dolores ea mollitia fugit. Laudantium aspernatur eaque voluptatibus blanditiis eligendi omnis a, pariatur, ipsum harum nulla illo dignissimos impedit ea alias dolor doloremque odit vitae est. Neque nesciunt itaque minus possimus odio blanditiis quaerat ducimus sequi velit? Architecto perspiciatis voluptatibus rerum? Sunt, repudiandae voluptatum! Omnis, inventore. Repellat, quisquam ipsam error iste in reprehenderit eum saepe nemo pariatur itaque fuga ex obcaecati ipsum hic minus debitis vel voluptas quia accusantium quae! Ullam rem sunt ea. Nostrum, recusandae molestiae ab architecto necessitatibus distinctio rerum culpa, voluptates hic sint fugiat ut inventore laborum, quia quos similique nihil dignissimos nesciunt eveniet modi temporibus nam! Quidem sunt quisquam nemo? Eius eos dolores repellendus. Commodi, accusamus! Ducimus, officiis! Nulla soluta quasi et natus magni laudantium ipsum delectus sapiente. Explicabo quaerat, possimus tempora architecto aliquam eveniet temporibus eius ab ex consequatur consequuntur atque eaque nam laborum nemo vel. Aliquid illum sint ut eligendi."

// let myActualTweet = myTweet.slice(0,280)
// console.log(myActualTweet);
// console.log(myActualTweet.length);


// substr()
// var str = 'Apple, Bananan, Mango, Kiwi';

// let res = str.substr(7,-2) // No output because -ve values cannot br taken by substr()
// let res = str.substr(-4)
// console.log(res);

// Replacing String Content()
// The replace() method replaces a specified value with another value in a string.
// It does not change the string it is called on. It returns a new string.
// This is case sensitive.

// var str = 'Apple, Banana, Mango, Kiwi, Banana';
// let res = str.replace('Banana', 'Chiku');
// let res = str.replaceAll('Banana', 'Chiku');
// console.log(str);
// console.log(res);


// Extracting String Characters
// let str = "Hello World!";
// console.log(str.charAt(0));

// let str = "Hello World!";
// console.log(str.charCodeAt(-1));
// console.log(`${str[str.length-1]} = ${str.charCodeAt(str.length-1)}`);


// Property Access

var str = "Hello World!"
// console.log(str[0]);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
