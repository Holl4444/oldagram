const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function incrementLikes (index) {
    console.log('Running increment for index', index);
    const likeCountEl = document.getElementById(`${posts[index]['username']}-likecount`);
    posts[index].likes += 1;
    likeCountEl.innerText = `${posts[index].likes} likes`;

}

const oldagram = document.querySelector('.content');
const postDiv = document.createElement('div');
postDiv.className = 'post-div';
let postScriptLol = '';

posts.forEach((post, index) => {
    postScriptLol += `<article class="post">
                <section class="user">
                    <img class="avatar" src="${post.avatar}" alt="A painted image of ${post.name}.">
                    <div class="avatar-text">
                        <h1 class="full-name">${post.name}</h1>
                        <p class="location">${post.location}</p>
                    </div>
                </section>
                <section class="post-content">
                    <img class="post-img" src="${post.post}"/>
                    <div class="post-info">
                        <div  class="icon-wrapper">
                            <button id="${post.username}-btn" data-index="${index}" class="heart icon-btn" role="button" type="like" aria-role="like">
                                <img class="icon" src="images/icon-heart.png" alt="heart-icon" />
                            </button>
                            <button class="comment icon-btn" role="button" type="comment" aria-role="comment">
                                <img class="icon" src="images/icon-comment.png" alt="comment-icon" />
                            </button>
                            <button class="dm icon-btn" role="button" type="dm" aria-role="dm">
                                <img class="icon" src="images/icon-dm.png" alt="dm-icon" />
                            </button>
                        </div>
                        <div class="post-text">
                            <p class="like-count" id=${post.username}-likecount>${post.likes} likes</p>
                            <p class="user-comment"><span class="user-name">${post.name} </span>${post.comment}</p>
                        </div>
                    </div>
                    <div class="post-divider"></div>
                </section>
            </article>`
});

postDiv.innerHTML = postScriptLol;
postDiv.addEventListener('click', function(e) {
    const heartBtn = e.target.closest('.heart.icon-btn');
    if (heartBtn) {
        const index = heartBtn.getAttribute('data-index');
        if (index) {
        incrementLikes(index);
        }
    }
    });

oldagram.appendChild(postDiv);

