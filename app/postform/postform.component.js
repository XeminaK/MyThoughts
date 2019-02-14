"use strict";
const postform = {
    bindings: {
        formToggle: "<",
        showForm: "&",
        addPost: "&"

    },
    templateUrl: "app/postform/postform.html"
}

angular.module("SocialApp").component("postform", postform)