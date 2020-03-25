# Android Table of Elements

A collection of ordered subjects and curated tutorials for learning Android development.

## Local Development

To develop the site locally use the following command:

```npm run build -- --watch```

## Deployment

The site auto deploys when merging to master.

## Content

The table of elements is composed of sections and subjects.

**Section:** A section is simply a grouping of subjects and represents an area of Android development eg. Programming Language, User Interface or Networking. Every section has a base color. The base color and it’s shades are used to define the subjects within a section (see the color guide at the end of this readme for more details).

//Image

**Subject:** Subjects represent a well-defined topic of Android development eg. Kotlin, RecyclerView or Firebase. Subjects within a section are organised from left to right.

//Image

Subjects that are similar or represent an area of Android development that is closely related should be organised vertically in a column to create a sub-section eg. Animations and Transitions.

//Image

## Configuring the Table of Elements

The table of elements is built on a 5 column square grid.

//Image

Squares on the grid are configurable through JSON objects. The JSON for the table is stored in: ```/src/data/content.json``` Objects are displayed on the grid according to their object number from left to right. To see the JSON object number of each corresponding square, use the grid view when configuring the table of elements /grid.

An object can have the following attributes:

```
elementClass (String): HTML classes to adapt a square for a section, subject or fill
elementSection (String): HTML href anchor for a section
elementName (String): Display name of a section or subject
elementCode (String): Code in the left hand corner of a subject (just for laughs)
elementDescription (String): Description of the subject
elementTutorials (Array): Subject tutorials and links (Articles, Video Courses, Books)
```
```
{
  "elementClass": "",
  "elementSection": "",
  "elementName": "",
  "elementCode": "",
  "elementDescription": ""
  "elementTutorials": [ [“”, ””] ]
  }
```

There are three types of elements that can be placed on the grid squares:

* Section
* Subject
* Fill/Empty

An explanation and example object configuration for each element is as follows:

```
**Section: Element to define the start of a group of subjects**

{
  "elementClass": "light-green-1",
  "elementSection": "section-1",
  "elementName": "Programming"
}
```

```
//Subject: Element to define a subject

{
  "elementClass": "light-green-1",
  "elementName": "Kotlin",
  "elementCode": "Kn",
  "elementDescription": "...",
  "elementTutorials": [
    [“Programming in Kotlin (Article)”, “https://www.raywenderlich.com/...”],
    [“Programming in Kotlin (Video Course)”, “https://www.raywenderlich.com/...”]
  ]
}
```

```
//Fill: Element to fill up empty squares at the end of a row

{
  "elementClass": "fill",
}
```

```
//Empty: Element to fill up empty squares at the end of a row

{
  "elementClass": "empty",
}
```

## Color Guide

Sections and subjects on the grid are colored through special classes. To create harmony between sections, organise them vertically according to the color wheel. You can use the color page to quickly reference color class names /colors.

When choosing a base color for a section start with the left-most shade. The section name and first column of subjects use the base color. Subsequent columns of subjects use the next shade of the base color. The color classes are added to the elementClass of an object to color the text for the section and the background of the subject square.





