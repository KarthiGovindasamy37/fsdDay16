//validation not working
document.querySelector(".form").addEventListener("submit",submitdata)
function submitdata(evt){
    evt.preventDefault()
    let foodar=[]
     if(document.querySelector(".c1").checked){
         foodar.push(document.querySelector(".c1").value)
     }
     if(document.querySelector(".c2").checked){
         foodar.push(document.querySelector(".c2").value)
     }
     if(document.querySelector(".c3").checked){
         foodar.push(document.querySelector(".c3").value)
     }
     if(document.querySelector(".c4").checked){
         foodar.push(document.querySelector(".c4").value)
     }
     if(document.querySelector(".c5").checked){
         foodar.push(document.querySelector(".c5").value)
     }
     // this  part
    if(document.querySelector("#fname").value==""){
        document.querySelector(".fner").innerText="please enter first name"
     }
     if(document.querySelector("#lname").value==""){
        document.querySelector(".lner").innerText="please enter last name"
     }
     if(document.querySelector("#adrs").value==""){
        document.querySelector(".ader").innerText="please enter address"
     }
     if(document.querySelector("#zip").value==""){
        document.querySelector(".ziper").innerText="please enter zip"
     }
     if(document.querySelector("#state").value==""){
        document.querySelector(".ster").innerText="please enter state"
     }
     if(document.querySelector("#cntry").value==""){
        document.querySelector(".cner").innerText="please enter country"
     }
     if(document.querySelector(".radio1").checked==false && document.querySelector(".radio2").checked==false){
        document.querySelector(".gener").innerText="please select gender"
     }
     
     if(foodar.length<2){
        document.querySelector(".fder").innerText="please select atleast two food item"
     }
     //
    let table=document.querySelector(".table")
    let tbody=document.querySelector(".tbody")
    let tr=document.createElement("tr")
    tbody.append(tr)
    let fnm=document.querySelector("#fname").value
    let fnmtd=document.createElement("td")
    fnmtd.innerText=fnm
    tr.append(fnmtd)
    let lnm=document.querySelector("#lname").value
    let lnmtd=document.createElement("td")
    lnmtd.innerText=lnm
    tr.append(lnmtd)
    let adrs=document.querySelector("#adrs").value
    let adrstd=document.createElement("td")
    adrstd.innerText=adrs
    tr.append(adrstd)
    let zip=document.querySelector("#zip").value
    let ziptd=document.createElement("td")
    ziptd.innerText=zip
    tr.append(ziptd)
    let state=document.querySelector("#state").value
    let statetd=document.createElement("td")
    statetd.innerText=state
    tr.append(statetd)
    let cntry=document.querySelector("#cntry").value
    let cntrytd=document.createElement("td")
    cntrytd.innerText=cntry
    tr.append(cntrytd)
    let genar=[]
    if(document.querySelector(".radio1").checked){
        genar.push(document.querySelector(".radio1").value)
    }
    if(document.querySelector(".radio2").checked){
        genar.push(document.querySelector(".radio2").value)
    }
    let gentd=document.createElement("td")
    gentd.innerText=genar[0]
    tr.append(gentd)
    
    let foodtd=document.createElement("td")
    tr.append(foodtd)
    let ul=document.createElement("ul")
    foodtd.append(ul)
    foodar.forEach((ele)=>{
    let li=document.createElement("li")
    li.innerText=ele
    ul.append(li)
})

}