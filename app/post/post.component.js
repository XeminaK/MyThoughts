"use strict";
const post = {
    bindings: {
        library: "<",
        removePost: "&"

    },
    templateUrl: "app/post/post.html"
}

angular.module("SocialApp").component("post", post)