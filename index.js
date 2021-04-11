// Code your solutions in this file
function writeCards(name,event)
{
  for(let i=0;i<name.length;i++)
  {
   console.log('Thank you, ${name[i]} for the wonderful'  +event+  'gift');
 }
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");
function countDown(nb){
  while(nb>= 0){
    console.log(nb);
    nb--
  }
}
countDown(10);
