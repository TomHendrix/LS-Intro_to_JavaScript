// Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'?

// There is no built-in method to capitalize the first letter of a string or each word in a string

// Capitalizing the first letter of a string could be done by utilizing string.charAt(0) to grab the first letter,
// use toUpperCase() to capitalize the first letter, slice everything out of the string that isn't the first letter,
// and then reattaching the capitalized first character back to the remaining portion of the string using concatenation.

// This could be done to multiple words in a string by splitting each word to an index in an array and looping through each
// element in the array using the above steps