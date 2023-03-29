fetch('/video.json')
    .then(data=>data.json())
    .then((res)=>{
        let videoSect=document.querySelector(".video-section");
        var video=document.createElement("video");
        video.src=res.videoUrl;
        video.controls=true;
        video.poster="/images/Screenshot 2023-03-22 at 7.25.34 PM.png";
        videoSect.appendChild(video);
        var h2=document.createElement("h2");
        h2.innerText=res.title;
        videoSect.after(h2);
        var p=document.createElement("p");
        p.setAttribute("class","video-descrptn");
        p.innerText=res.description;
        document.querySelector("h2").after(p);
        let hr=document.createElement("hr");
        p.after(hr);
        let h3=document.createElement("h3");
        h3.innerText="Comments";
        hr.after(h3);
        for(let comment of res.comments){
            let card=document.createElement("div");
            card.setAttribute("class","card");
            let cardimg=document.createElement("div");
            cardimg.setAttribute("class","cardimg");
            let img=document.createElement('img');
            img.setAttribute("src",comment.image);
            cardimg.append(img);
            let text=document.createElement("div");
            text.setAttribute("class","text");
            let p=document.createElement('p');
            p.setAttribute("class","name");
            p.innerHTML=comment.name;
            let p1=document.createElement("p");
            p1.setAttribute('class',"comment");
            p1.innerHTML=comment.comment;
            text.append(p);
            text.append(p1);
            card.append(cardimg);
            card.append(text);
            document.querySelector(".comment-section").append(card);
        }
        let hr1=document.createElement("hr");
        hr1.setAttribute("class","hr-tag");
        document.querySelector(".left-container").appendChild(hr1);
    })

fetch('/posters.json')
    .then(data=>data.json())
    .then((res)=>{
        for(let image of res){
            let div=document.createElement('div');
            div.setAttribute("class","imag-container");
            let img=document.createElement("img");
            img.src=image.imageUrl;
            img.alt=image.title;
            div.appendChild(img);
            document.querySelector(".right-container").append(div);
        }
    })