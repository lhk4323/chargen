//Need to add an ENABLE BUTTON function for even2 3 and 4, add scenarios, then CSS it out.  Add character images, maybe an image for security desk guard and jordan vill.  Maybe a sound for attacks.
/*    **The below were originally intended to be used with the functions for the character backgrounds, but could not get it working correctly**
var life1 = 0
var life2 = 0
var life3 = 0
var life4 = 0
var pAction = ""
var pFam = ""
var pItem = ""
var pSelf = ""
var pBack = ""
var pFam2 = ""
var pItem2 = ""
var pSelf2 = ""
*/

//reloads the page without needing to actually click on reload.
function reloader() {
  window.scrollTo(0, 0);
  location.reload(true);
}

function Character(firstName, lastName, age, race, chClass, strength, speed, stam, wit, intel, charisma) //this is the Character constructor
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = firstName + " " + lastName;
  this.age = age;
  this.race = race;
  this.chClass = chClass;
  this.strength = strength;
  this.speed = speed;
  this.stam = stam;
  this.wit = wit;
  this.intel = intel;
  this.charisma = charisma;
}

function randomizer(array) //this randomizer function is used for strings
{
 var randomNumber = Math.floor(Math.random() * array.length);
 selectedNumber = array[randomNumber];
 return selectedNumber;
}

function RNG(multip, rngnum) //this randomizer function is used for numbers
{
 randNum = Math.floor((Math.random() * multip) + rngnum);
 return randNum;
}

function lifeevent1(pAction)
{
  document.getElementById('r1').disabled = true
  document.getElementById('e1').disabled = true
  document.getElementById('e2').disabled = true
  document.getElementById('e3').disabled = true
  document.getElementById('e1res').innerHTML =("<br>" + "You were born to " + pAction + " family.");
  
}

function lifeevent2(pFam)
{
  
  document.getElementById('e4').disabled = true
  document.getElementById('e5').disabled = true
  document.getElementById('e6').disabled = true
  document.getElementById('e2res').innerHTML =("<br>" + "Your family is " + pFam);
}

function lifeevent3(pItem)
{
  
  document.getElementById('p1').disabled = true
  document.getElementById('p2').disabled = true
  document.getElementById('p3').disabled = true
  document.getElementById('e3res').innerHTML =("<br>" + "You always kept a special " + pItem + " around as it holds a special meaning for you.");
  
}

function lifeevent4(pSelf)
{
  
  document.getElementById('v1').disabled = true
  document.getElementById('v2').disabled = true
  document.getElementById('v3').disabled = true
  document.getElementById('r1').disabled = false
  document.getElementById('e4res').innerHTML =("<br>" + pSelf + " is your goal and what drives you in life.");
  
}

function ResetBG(redobg)  
{
  document.getElementById('e1').disabled = false
  document.getElementById('e2').disabled = false
  document.getElementById('e3').disabled = false
  document.getElementById('e4').disabled = false
  document.getElementById('e5').disabled = false
  document.getElementById('e6').disabled = false
  document.getElementById('p1').disabled = false
  document.getElementById('p2').disabled = false
  document.getElementById('p3').disabled = false
  document.getElementById('v1').disabled = false
  document.getElementById('v2').disabled = false
  document.getElementById('v3').disabled = false
}

document.getElementById('r1').disabled = true

/* **I could not get this function to work. The idea was, after user selects his options, a random background would be constructed based off the user's choices. Unfortunately due to time constraints, I am not able to implement this feature. I'm not sure how to return the values to a function that would generate the life story. The function has to be initiated by the user, thus I would need to send the variables pBack, pFam2, pItem2, and pSelf2, back to the HTML portion of the page. The user would then click the "make my story" button, which would pass back the updated values from pBack, pFam2, pItem2, and pSelf2 ti the lifestory function, which would generate the output I wanted **

function lifestory (pBack, pFam2, pItem2, pSelf2)
{
document.getElementById('BG').innerHTML =(lifebutton);
}
*/    


//first names generator
var firstName = ["Morgan", "Taylor", "Alex", "Chris"];
var selectedFname = randomizer(firstName) 
    //last names generator
var lastName = ["Reigns", "Bryant", "Austin", "Banks"];
var selectedLname = randomizer(lastName) 
    //character age generator
RNG(10, 21);
var age= randNum
    //race selection generator
var chRace = ["Human", "Psionic", "Beastman", "Android"];
var selectedRace = randomizer(chRace);
    //class selection generator, only Psionics can become technomancers 
var chClass = ["Mercenary", "Investigator", "Hacker"];
  if (selectedRace == "Psionic")
    {
      var chClass = ["Mercenary", "Investigator", "Technomancer", "Hacker"];
      var selectedClass = randomizer(chClass);
    }
  else {
    var selectedClass = randomizer(chClass);
    }
    //attribute stat points, base points dependent on race
var charStats = selectedRace
  switch (charStats)
    {
      case "Human":
        basestats = [5, 10, 5, 10, 5, 10];
        break;
      case "Psionic":
        basestats = [0, 10, 5, 5, 20, 5];
        break;
      case "Beastman":
        basestats = [10, 20, 5, 5, 0, 5];
        break;
      case "Android":
        basestats = [15, 5, 15, 0, 10, 0];
        break;
      default:
        break;
    }
var statCount = 0
while (statCount < 6) //this loop makes random modifier bonuses to each attribute on top of the base stats dependent on race
{
  RNG (5, 5)
  basestats[statCount] = basestats[statCount] + randNum;
  statCount ++;
}

      //character output
var myPC = new Character(selectedFname, selectedLname, age, selectedRace, selectedClass,basestats[0], basestats[1], basestats[2], basestats[3], basestats[4], basestats[5]);

document.getElementById('cname').innerHTML =("NAME: " + myPC.fullName);
document.getElementById('cage').innerHTML =("AGE: " + myPC.age);
document.getElementById('crace').innerHTML =("RACE: " + myPC.race);
document.getElementById('cclass').innerHTML =("CLASS: " + myPC.chClass);
document.getElementById('cstats').innerHTML =("<br>" + "STRENGTH: " + myPC.strength +
                                              "<br>" + "SPEED: " + myPC.speed +
                                              "<br>" + "STAMINA: " + myPC.stam +
                                              "<br>" + "WITS: " + myPC.wit +
                                              "<br>" + "INTELLIGENCE: " + myPC.intel +
                                              "<br>" + "CHARISMA: " + myPC.charisma);


      //character skills, depending on class
var charSkills = selectedClass
  switch (charSkills)
    {
      case "Mercenary":
        baseskills = ["Melee", " Ranged", " Unarmed", " Battle tactics"];
        break;
      case "Investigator":
        baseskills = ["Stealth", " Ranged", " Hacking", " Interrogation"];
        break;
      case "Technomancer":
        baseskills = ["Strategy", " Focus", " Psi", " Debate"];
        break;
      case "Hacker":
        baseskills = ["Stealth", " Ranged", " Hacking", " Computers"];
        break;
      default:
        break;
    }
document.getElementById('cskills').innerHTML =("<br>" + "SKILLS: " + baseskills);

    //character pic, which is based on class
function charPic (selectedClass) {
  var picType = selectedClass
       if (picType == "Mercenary") {
     document.getElementById("charHold").src = "https://res.cloudinary.com/dgkosrbms/image/upload/v1552892413/merc288.jpg"; }
  else if (picType == "Investigator") {
     document.getElementById("charHold").src = "https://res.cloudinary.com/dgkosrbms/image/upload/v1552895678/investigator.jpg"; }
  else if (picType == "Technomancer") {
     document.getElementById("charHold").src = "https://res.cloudinary.com/dgkosrbms/image/upload/v1552892413/psionic288.jpg"; }
  else if (picType == "Hacker") {
     document.getElementById("charHold").src = "https://res.cloudinary.com/dgkosrbms/image/upload/v1552892413/hacker288.jpg"; }
}
charPic(selectedClass);

    //background description of race and class
charBG(selectedRace, selectedClass);

function charBG (bgRace, bgClass)
{
  document.write("<br>");
  switch (bgRace)
{
case "Human":
 var raceDesc = ("Humans in the 24th century tend to be average among all physical and mental traits, but are the most charismatic of all known races. Humans have the capacity to adapt to any role. While not performing one exceptionally compared to a race that is physically or mentally suited better, humans make the most fascinating leaders.");
 break;
case "Psionic":
 var raceDesc = ("Psionics are humans that evolved mentally, possessing much more intelligence than the average human. However, they tend to be physically weaker and their intelligent nature makes them less tolerable in social situations as they value logic over emotion and wit. Any role that involves intelligence along with wit and speed suits a Psionic. Psionics also have access to technomancy.");
 break;
case "Beastman":
 var raceDesc = ("Beastmen were at one point canine in nature, however since the event known as the Cosmic Awakening, some canines have physically and mentally evolved to become almost human. They socialize, act, and think as humans, albeit on a different level. Beastmen have only come around recently and are simultaneously prejudiced and loved, depending on who you talk with. Beastmen are fantasic at roles that require stealth and can handle their own if they get in trouble.");
 break;
case "Android":
 var raceDesc = ("Technology has evolved to a point where androids have become commonplace. There is a great debate whether they should be considered beings or property, due to their artifical creation. However, no one will ever dispute having an Android on their side. They are much stronger physically, depending on construction, than any other known race, as well as having a strong intelligence due to their design to compute quickly and store large amounts of knowledge. Due to their artifical nature, they are poorly capable of banter outside of facts or opinions based on known facts. Carrying on a conversation with an android is quite dull.");
 break;
default:
 break;
}
  switch (bgRace, bgClass)
{
case "Human":
var raceDesc = ("Humans in the 24th century tend to be average among all physical and mental traits, but are the most charismatic of all known races. Humans have the capacity to adapt to any role. While not performing one exceptionally compared to a race that is physically or mentally suited better, humans make the most fascinating leaders.");
break;
case "Psionic":
var raceDesc = ("Psionics are humans that evolved mentally, possessing much more intelligence than the average human. However, they tend to be physically weaker and their intelligent nature makes them less tolerable in social situations as they value logic over emotion and wit. Any role that involves intelligence along with wit and speed suits a Psionic. Psionics also have access to technomancy.");
break;
case "Beastman":
var raceDesc = ("Beastmen were at one point canine in nature, however since the event known as the Cosmic Awakening, some canines have physically and mentally evolved to become almost human. They socialize, act, and think as humans, albeit on a different level. Beastmen have only come around recently and are simultaneously prejudiced and loved, depending on who you talk with. Beastmen are fantasic at roles that require stealth and can handle their own if they get in trouble.");
break;
case "Android":
var raceDesc = ("Technology has evolved to a point where androids have become commonplace. There is a great debate whether they should be considered beings or property, due to their artifical creation. However, no one will ever dispute having an Android on their side. They are much stronger physically, depending on construction, than any other known race, as well as having a strong intelligence due to their design to compute quickly and store large amounts of knowledge. Due to their artifical nature, they are poorly capable of banter outside of facts or opinions based on known facts. Carrying on a conversation with an android is quite dull.");
break;
  case "Mercenary":
var classDesc = ("Mercenaries are your typical physical fighter. Usually comprised of former soldiers, law enforcement, bullies, or PMCs, mercenaries (or mercs) have a wide variety of skills revolving around combat, such as combat knowledge, battle tactics, and weapon knowledge.");

    break;

  case "Investigator":
var classDesc = ("Investigators have cropped up over the years. The world knows that media is controlled by the most powerful, so there has been a large underground movement over the many years for unbiased information about events around the world. Investigators typically excel at stealth, with some hacking skills to get past electronic obstacles and some combat skills to escape with the truth.");
    break;

case "Technomancer":
var classDesc = ("Technomancers are typically exclusive to psionics, though a beastman or human could become one if they are extremely intelligent. It's very rare to find a technomancer that is not a psionic. Technomancers have a unique ability to channel their incredible mental capabilities to physical force, such as limited telekinesis and telepathy. ");
    break;

case "Hacker":
var classDesc = ("Hackers are the most dangerous around any hardware that has an electronic component. If there's a way to access something electronically, it'll almost never be safe around a hacker, which is why low-grade tech still exists. An electronic lock might still have a physical deadbolt, which will stop a hacker unless they're skilled enough to pick it....in which case extreme measures become the only way to deal with a hacker that's a thorn on your side.");
    break;
default:
break;
}
  document.getElementById('crbg').innerHTML =("<br>" + raceDesc + "<br>");
  document.getElementById('ccbg').innerHTML =("<br>" + classDesc + "<br>");
}

