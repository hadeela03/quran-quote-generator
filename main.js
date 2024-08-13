let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes=
    [
        '"Indeed the only guidance is Allah Guidance!" (Al-Quran 6:7)',
        '"And whoever puts all his trust in Allah. He will be enough for him." (Al-Quran 65:3)',
        '"I will be with those who have patience." (Al-Quran 2:153)',
        '"Seek forgiveness of your Lord and repent to Him."(Al-Quran 11:3)',
        '"and He is with you wherever you are." ~Quran 57:4',
        '"Surely I know that which ye know not" (Al-Baqara - 2:30)',
        '"And be steadfast in prayer; practise regular charity; and bow down your heads with those who bow down (in worship)" (Al-Baqara - 2:43)',
        '“He created the heavens and earth in truth and formed you and perfected your forms; and to Him is the [final] destination” [Quran 64:3]',
        '“So verily, with the hardship, there is a relief. Verily, with the hardship, there is relief” [Quran 94:5-6]',
        '“Allah does not burden a soul beyond that it can bear” [Quran 2:286]',
    ]; 

btn.addEventListener('clcik', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})
