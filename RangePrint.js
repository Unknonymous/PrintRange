function printRange(x, y, s)
{
s = s || 0;
if (y == undefined)
{
    y = y || x;
    x = 0;
}
if (s <= 0)
{
    s = 1;
    console.log("Skip value 0 or less was incremented to 1 for your protection.")
}
console.log("Now counting from " + x + " to " + y + " by " + s + "s.  Enjoy!")
if (x < y)
{
    while (x < y)
    {
    console.log(x);
    x += s;   
    }
} else if (x > y)
{
    while (x > y)
    {
        console.log(x);
        x -= s;
    }
}
}
printRange ( -5, 108, 13)