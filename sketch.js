
function setup() {
  createCanvas(800,800);
  // for (i=1;i<=50;i++)
  // {
  //   if(i%5==0)
  //   {
  //     console.log(i)
  //   }
  // }
  //  for(i=10;i<=20;i++)
  //  {
  //    var c= i%10;
  //    var d= Math.trunc(i/10)
  //   console.log(c+d)
  //  }
  // }
// var a =13;
// var i =a%10;
// var j = Math.trunc(a/10);
// console.log(j+i)
// }
// var count=0;
// for (i=1;i<=30;i++)
// {
//   if (i%2==0)
//   {
//    count+=1;
//   }
// }
// console.log(count)
// }
// var a=[10,20,30,40,50]
// for(i=0;i<=4;i++)
// {
//    console.log(a[i])
// }  
// var a=[1,7,21,22,13,15,49,55,35]
// for(i=0;i<=9;i++)
// {
//   if(a[i]%7==0 || a[i]%0==7)
//   {
//      console.log(a[i])
//   }  
// }
// var a=[2,3,4,5,6,7,8,9,10,11,12,13]
// var b=0;
//  for(i=0;i<=13;i++)
//  {
//    if(a[i]%2==0)
//   {
//     b += a[i];
//   }
//  }
//  console.log(b)
// }
//  var a = 21;
//  var b =a%10;
//  var c = Math.trunc(a/10);
//  console.log (b,c)
//
// var a = 41;
//  var b =a%10;
//  var c = Math.trunc(a/10);
//  var d = b*10+c;
//  console.log (d)
// reversethearray()
// }
// function reversethearray ()
// {
// var a =[12,13,14,15,16]
// for(var i=4;i>=0;i--)
// {
//  console.log(a[i])
// }
teststring()
}
 function averagearray()
{
var average=0;
var p=[40,25,20,30,35]
var c=[39,20,23,26,29]
var b=[42,30,25,32,30]
for (var i=0;i<=4;i++)
{
  average = (p[i]+c[i]+b[i])/3;
  console.log(average)
}
}
function searchingelement()
{
  var a =[10,20,30,40,50,60]
  var s =30;
  var c=0;
  for(i=0;i<=5;i++)
  {
    if(s==a[i])
    {
      c=1;
      break;
    }
  }
  if(c==1)
  {
    console.log("search sucessful" )
  }
  else 
  {
    console.log("search unsucessful" )
  }
}
function oddproduct ()
{
var b=1;
var a=[17, 20, 24, 29, 16, 87, 19, 52]
for (var i=0;i<=7;i++)
{
  if(a[i]%2!=0)
  {
    b*=a[i]
  }
}
console.log(b)
}
function factorial()
{
  var a =5;
  var b=1;
  for (vari=1;i<=5;i++)
  {
     b*=i ;
  } 
  console.log(b)
}
function teststring ()
{
 var a = "mayank";
 var c = a.charAt(6);
 var b = a.indexOf('y')
 var m = 'My name is Mayank';
 var n = '';
for (var i =0;i<=m.length;i++)
{
  var b = m.charAt(i);
  if (b.toUpperCase()==b)
  {
    n+=b.toLowerCase();
  }
  else 
  {
    n+=b.toUpperCase();
  }
}
console.log(n)
}