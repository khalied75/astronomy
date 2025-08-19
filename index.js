
const click = document.querySelector("#click");
const fact=document.getElementById("fact");
const  photo=document.getElementById("photo");
click.addEventListener("click", () =>  {
const arry =
    [
          { text: "المشتري هو أكبر كوكب في المجموعة الشمسية.", img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg" },
    { text: "أقرب نجم إلى الأرض بعد الشمس هو بروكسيما سنتوري.", img: "https://upload.wikimedia.org/wikipedia/commons/9/95/New_shot_of_Proxima_Centauri%2C_our_nearest_neighbour.jpg" },
    { text: "الثقب الأسود يجعل أي شيء يقترب منه يختفي حتى الضوء.", img: "https://live.staticflickr.com/65535/53529871114_ac64ee24d3_o.jpg" },
    { text: "مجرة درب التبانة تحتوي على أكثر من 100 مليار نجم.", img: "https://cdn.britannica.com/29/148329-050-269A9EFE/night-sky-Milky-Way-Galaxy.jpg" },
    { text: "اليوم على كوكب الزهرة أطول من سنته.", img: "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg" }
    ];
    console.log("done");
    const random = Math.floor(Math.random() * arry.length);
    fact.innerText = arry[random].text;
    photo.src= arry[random].img;
});