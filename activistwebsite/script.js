/* .js files add interaction to your website */

//randomizer
var quoteList = [
    "1 in 5 young people (age 13-18) has or will develop a mental illness in their lifetime.",
    "Youth depression rates have risen from 5.9% to 8.2% since 2012. Depression symptoms can impact performance in school and interfere with personal relationships.",
    "Most Americans lack access to adequate mental health treatment. 56% of American adults with mental illness did not receive care in the last year.",
    "Mental illnesses can affect people of any age, race, religion, or income. A mental illness is a medical condition that disrupts a person’s thinking, feeling, mood, and ability to relate to others and daily functioning.",
    "Many factors contribute to the development of a mental health condition, including life experiences (such as trauma or a history of abuse), biological factors, and family history of mental illness.",
    "Depression is the leading cause of disability worldwide.",
    "Members of LGBTQ+ community are almost 3 times more likely to experience a mental health condition such as major depression or generalized anxiety disorder.",
    "Common signs of mental health issues include: extreme mood swings, changes in eating habits, excessive worrying or fear, problems concentrating, and avoiding friends or social activities.",
    "1/2 of all mental illnesses show early signs before a person turns 14 years old, and 3/4 of mental illnesses begin before age 24.",
    "More than 1 in 4 adults living with serious mental illnesses also struggles with substance abuse."
  ];
  //https://www.dosomething.org/us/facts/11-facts-about-mental-health
  
  //variables
  var quote = document.getElementById("quote");
  var myBtn = document.getElementById("MyBtn");
  var count = 0;
  
  //call button when click
  myBtn.addEventListener("click", displayQuote);
  
  function displayQuote(){
      quote.innerHTML = quoteList[count];
      count++;
      if (count == quoteList.length){
        count = 0;
      }
  }