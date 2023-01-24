//convert temperatures to and from Celsius, Fahrenheit.

function celToFahr(celsius) 
{
  let celTemp = celsius;
  let celToFahr = celTemp * 9 / 5 + 32;
  let output = celTemp +'\xB0C is ' 
  + celToFahr + '\xB0F.';
    console.log(output);
}

function fahrToCel(fahrenheit) 
{
  let fahrTemp = fahrenheit;
  let fahrToCel = (fahrTemp - 32) * 5 / 9;
  let output = fahrTemp +'\xB0F is ' 
  + fahrToCel + '\xB0C.';
    console.log(output);
} 
celToFahr(60);
fahrToCel(140);
