
//Ödevde bizlerden bir sayı dizisi içinde verilen hedefi sağlayan dizi elemanlarının geri döndürülmesi istenmektedir.


var dizi=function(sayilar,hedef)   //Bir fonksiyon oluşturulup sayılar ve hedef değeri atanır.   
{
  for(let i=0; i<sayilar.length; i++)  
  {
    for(let j=i+1; j<sayilar.length; j++)
    {
      if(sayilar[i]+sayilar[j]==hedef) //döngü ile dizi gezilir ve hedef değeri sağlayan ikililer geri döndürülür.
      {
        return[i,j];
      }
    }
  }
};

//sırası ile ekrana bastırma işlemleri.

console.log(dizi([2,7,11,15],9));
console.log(dizi([3,2,4],6));
console.log(dizi([3,3],6)); 