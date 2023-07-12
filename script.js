document.querySelectorAll(".allPaths").forEach(e => {
    e.addEventListener("mouseover", function (data) {
        window.onmousemove = function (j) {
            x = j.clientX
            y = j.clientY
            document.getElementById('name').style.top = y - 60 + 'px'
            document.getElementById('name').style.left = x + 10 + 'px'


        }
        // 
        // document.querySelectorAll(".allPaths").forEach(i => {
        //     i.style.fill = "#ececec"
        // })
        // var cle = data.target.attributes
        // var lien = cle.lien.textContent
        // var emails = cle.title.nodeValue
        // console.log(lien);
        document.getElementById("image").innerHTML=`<img src=${e.href.baseVal} alt="">`
        // document.getElementById("title").innerText = emails
        e.style.fill = "orange"
        document.getElementById("name").style.opacity = 1

        document.getElementById("namep").innerText = e.id

       
        // console.log(e.href);
    })
    e.addEventListener("mouseleave", function () {
        e.style.fill = "#ececec"
        document.getElementById("name").style.opacity = 0

    })

    // e.addEventListener("click", function () {
    //     getUser(e.id)

    // })

})