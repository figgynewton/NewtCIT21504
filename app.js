let chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

const eleMaker=(itm)=>{
    let ele =document.createElement("div");
    let nameEle =document.createElement("h4");
    let classEle =document.createElement("h4");
    let vehicleEle =document.createElement("h4");
    let imgEle =document.createElement("img");

    ele.classList.add("character");
    ele.classList.add("img");

    nameEle.innerHTML="Name: "+itm.name;
    classEle.innerHTML="Class: "+itm.class.toUpperCase();
    vehicleEle.innerHTML="Vehicle: "+itm.vehicle;

    if(itm.afl==="autobot"){
        imgEle.setAttribute(
            "src", "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png"
        );
        ele.classList.add("autobot")
    }else if(itm.afl==="decepticon"){
        imgEle.setAttribute(
            "src", "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png"
        );
        ele.classList.add("decepticon")
    }

    if (itm.vehicle === "truck"){
        vehicleEle.style.color = "blue";
    }else if(itm.vehicle === "tank"){
        vehicleEle.style.color = "green";
    }else if(itm.vehicle === "car"){
        vehicleEle.style.color = "gold";
    }else if(itm.vehicle === "plane"){
        vehicleEle.style.color = "white";
    }

    ele.appendChild(nameEle);
    ele.appendChild(classEle);
    ele.appendChild(vehicleEle);
    ele.appendChild(imgEle);

    document.body.appendChild(ele);

}

for(let i=0; i<chrs.length; i++){
    eleMaker(chrs[i]);
}