"use strict";
const socialposts = {
    templateUrl: "app/socialPosts/socialPosts.html",
    controller: [function() {
        const vm = this;
        vm.formToggle = false; 
        vm.postLibrary = [
            {
                title: "My Day",
                thought: "Awesome"
            },
            {
                title: "My Class",
                thought: "Pretty chill"
            },
            {
                title: "My food",
                thought: "delicious"
            },
        ] //end of the array
        vm.addPost = function(newPost) {
            vm.postLibrary.push({...newPost});
            console.log(newPost);
            vm.formToggle = false;
            document.getElementById("input1").value= "";
            document.getElementById("input2").value= ""
        };
        vm.removePost = function(index) {
            vm.postLibrary.splice(index, 1);
            console.log("remove this shit");
            console.log(index)
        };
        vm.showForm = function() { //when you click
            vm.formToggle = true;
            console.log("This workssss")
        }
    }] 

};



angular.module("SocialApp").component("socialposts", socialposts);