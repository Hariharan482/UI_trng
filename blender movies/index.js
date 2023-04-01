fetch('/video.json')
    .then(data => data.json())
    .then((res) => {
        let videoSect = document.querySelector(".video-section");
        let video = createElement('video','video-player');
        video.src = res.videoUrl;
        video.controls=true;
        video.poster = "/images/Screenshot 2023-03-22 at 7.25.34 PM.png";
        video.alt-"poster";
        videoSect.appendChild(video);
        let h2 = createElement('h2','h2');
        h2.innerText = res.title;
        videoSect.after(h2);
        let p=createElement('p','video-descrptn');
        p.innerText = res.description;
        document.querySelector("h2").after(p);
        let hr=createElement('hr','break-line');
        p.after(hr);
        let h3=createElement('h3','comments')
        h3.innerText = "Comments";
        hr.after(h3);
        for (let comment of res.comments) {
            let card=createElement('div','card');
            let cardimg = createElement("div","cardimg");
            let img = createElement('img');
            img.setAttribute("src", comment.image);
            img.alt="cardimg";
            cardimg.append(img);
            let text=createElement('div','text');
            let p=createElement('p','name');
            p.innerHTML = comment.name;
            let p1=createElement('p','comment');
            p1.innerHTML = comment.comment;
            text.append(p);
            text.append(p1);
            card.append(cardimg);
            card.append(text);
            document.querySelector(".comment-section").append(card);
        }
        let hr1=createElement('hr','hr-tag');
        document.querySelector(".left-container").appendChild(hr1);
    }).catch((err) => {
        console.log(err);
    })

fetch('/posters.json')
    .then(data => data.json())
    .then((res) => {
        for (let image of res) {
            let div=createElement('div','imag-container')
            // let div = document.createElement('div');
            // div.setAttribute("class", "imag-container");
            let img = createElement("img",'image');
            img.src = image.imageUrl;
            img.alt = image.title;
            div.appendChild(img);
            document.querySelector(".right-container").append(div);
        }

    }).catch((err) => {
        console.log(err);
    })

function createElement(elementType,className){
    let element=document.createElement(elementType);
    element.setAttribute('class',className);
    return element;
} 
        
document.addEventListener('DOMContentLoaded', () => {
    let videosect= document.querySelector('.video-section').children;
    document.querySelector('.video-section').addEventListener('click',()=>{
        console.log(videosect);
        videosect.setAttribute('controls','');
    })
})
