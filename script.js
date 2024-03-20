        /* actual script, do not alter */

        var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
}, delayInMilliseconds);

        var classname = ".note";
        var footname = ".footnote";

        var annot_name = ".annotation";

        var footnote_block_name = ".footnote-text";

        var elms=document.querySelectorAll(classname);
        var footnotes = document.querySelectorAll(footname);

        var annotations = document.querySelectorAll(annot_name);
        var annotation = annotations[0];

        var footnote_block = document.querySelector(footnote_block_name);

        var annot_paragraph = annotation.querySelector("p");

        var flourishes = document.querySelectorAll(".flourish-embed");
        var flourish_heights = 434;

        if (window.innerWidth > 820) {
            for(var i=0;i<elms.length;i++){
                elms[i].onclick = function(){
            
                    annotation.style.transitionDuration = "1s";
                    annotation.style.borderColor = "#eb5e28";
            
                    var new_annotation = annotations_dict[this.textContent];
            
                    annot_paragraph.textContent = new_annotation;
            
                    var annotation_position = annotation.getBoundingClientRect();
            
                    var mid_height = annotation_position.height / 2;
            
                    var self_position = this.getBoundingClientRect();
                    var self_y_formatted = self_position.y;
                    self_y_formatted += window.scrollY;
                    self_y_formatted = self_y_formatted - mid_height + 10;
            
                    self_y_formatted = self_y_formatted.toString();
                    self_y_formatted = self_y_formatted.concat("px");
            
                    annotation.style.top = self_y_formatted;
            
                };
            }

            for(var j=0;j<footnotes.length;j++){
                footnotes[j].onclick = function(){
            
                    annotation.style.transitionDuration = "1s";
                    annotation.style.borderColor = "black";
            
                    var new_annotation = footnotes_dict[this.textContent];
                    new_annotation = this.textContent.concat("."," ",new_annotation);
            
                    annot_paragraph.textContent = new_annotation;
            
                    var annotation_position = annotation.getBoundingClientRect();
            
                    var mid_height = annotation_position.height / 2;
            
                    var self_position = this.getBoundingClientRect();
                    var self_y_formatted = self_position.y;
                    self_y_formatted += window.scrollY;
                    self_y_formatted = self_y_formatted - mid_height + 10;
            
                    self_y_formatted = self_y_formatted.toString();
                    self_y_formatted = self_y_formatted.concat("px");
            
                    annotation.style.top = self_y_formatted;
            
                };
            }
            
            if (elms.length > 0) {
                annotation.style.transitionDuration = "0s";
            
                var curr = elms[0];
            
                var new_annotation = annotations_dict[curr.textContent];
            
                annot_paragraph.textContent = new_annotation;
            
                var annotation_position = annotation.getBoundingClientRect();
            
                var mid_height = annotation_position.height / 2;
            
                var self_position = curr.getBoundingClientRect();
                var self_y_formatted = self_position.y;
                self_y_formatted += window.scrollY;
                self_y_formatted += flourish_heights;
                self_y_formatted = self_y_formatted - mid_height + 10;
            
                self_y_formatted = self_y_formatted.toString();
                self_y_formatted = self_y_formatted.concat("px");
            
                annotation.style.top = self_y_formatted;
            }
        } else {
            annotation.style.maxHeight = "0px";
            for(var i=0;i<elms.length;i++){
                elms[i].onclick = function(){

                    if (parseFloat(annotation.style.maxHeight) > 0) {
                        annotation.style.maxHeight = "0px";
                    } else {
                        var new_annotation = annotations_dict[this.textContent];
            
                        annot_paragraph.textContent = new_annotation;

                        annotation.style.maxHeight = "500px";
                    }
            
                    annotation.style.transitionDuration = "1s";
            
                };
            }

            addEventListener("scroll", (event) => {});

            onscroll = (event) => {
                annotation.style.maxHeight = "0px";
            };
        }