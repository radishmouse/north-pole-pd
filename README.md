# Fork and clone this repo!

Make sure to fork this repo and clone it to your computer.
Work through as many exercises as you can, and then submit a Pull Request through github.


# Small Exercises

## isSevere?

Write a function that takes a single case object as an argument.
It should return `true` if the case is 4 or greater.

## isOpen?

Write a function that takes a single case object as an argument.
It should return `true` if the case's status is "open".

## Open cases

How many cases are still open?
Create a function taht returns an array of the open cases.

## Severe cases

How many cases have a severity of 4 or more?
Create a function that returns an array of these cases.

## "Meh" cases

Create a function that returns an array of open cases that are not severe.

# Medium Exercises

## Unique Offenses

How many unique offenses are there in our database of cases?
Create an array of the titles (e.g., "Playing with matches"). 
There should be no duplicates.

(Bonus/Alternative: Search MDN for documentation on the Set data type).

## Unique Offenders

How many different individuals committed offenses?
How many total coals will each of them receive?

Create an array of objects, where each object contains the name of the offender and how many total coals they'll be receiving.

Each object in the array should look like this:

```
{
    name: "P. Rogers Nelson",
    coals: 23
}
```


(Bonus/Alternative: Search MDN for documentation on the Map data type).

# Large Exercises

## Wanted List

Write a function that creates an array of the most wanted offenders. 

These are the indviduals who have committed the most offenses and have at least 1 case that is open.

## Cold Cases

Write a function that creates an array of the 10 oldest cases that are still open. 