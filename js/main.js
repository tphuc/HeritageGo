mHeritageGoService.getPhotos().then(function (value) {
    for (let i = 0; i < value.length; i++) {
        mHeritageGoService.getPhoto(value[i]).then(function (value) {
            //-------------form of the post @@ ------------------------
            var div = document.createElement('div');
            div.className = "post border p-1 rounded container mt-4"
            div.innerHTML = 
            '<div class="post__header media mb-2"> \
            <div class="post__avatar m-2"> \
            <img src="https:' +value.account.picture_url+ '" alt="" class="img-fluid"> \
            </div> \
            <div class="post__detail container"> \
            <div class="post__top row mb-2"> \
            <div class="post__title font-weight-bold"> \
            ' + value.title[0].content + '\
            </div> \
            <img src="./img/translate_icon.png" id="translate-icon" class="ml-auto mr-3"> \
            </div> \
            <div class="post__siteinfo row"> \
            <i class="fas fa-map-marker-alt m-1"></i>'+value.area_name+'\
            <i class="far fa-clock m-1 ml-4">'+value.update_time.slice(0,4)+'</i> \
            </div> \
            </div> \
            </div> \
            <img src="https:'+value.image_url+'" alt="postImage" class="post__image img-fluid"> \
            <div class="container border-bottom px-1 mb-2"> \
            <div class="post__reaction row mx-4 my-2"> \
            <div class="reaction__left row"> \
            <i class="fa-lg fas fa-heart p-2">&nbsp0</i> \
            <i class="fa-lg fas fa-comment p-2">&nbsp0</i> \
            <i class="fa-lg fas fa-camera p-2">&nbsp0</i>   \
            </div> \
            <div class="reaction__right ml-auto">\
            <div class="reaction__bookmark">\
            <i class="fa-lg fas fa-bookmark pt-2"></i> \
            </div> \
            </div> \
            </div> \
            </div> \
            <div class="post__comment"> \
            <input class="my-2" type="text" placeholder="Write a comment" id="comment"></input> \
            <span class="fas fa-paper-plane" id="plane-icon"></span> \
            </div> \
            </div> '
            //---------------------------------------------------
            /*
            format: - account.picture_url
                    - title[0].content
                    - area_name
                    - creation_time/update_time
                    - image_url
            */
            var container = document.getElementsByClassName("main_mid mx-auto")[0].append(div);

        })
    }

}).catch(function (value) {
    console.log("Promise Rejected");
});