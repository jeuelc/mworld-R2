(function($) {
    var currentDrag = "";
    var ruleChecked = false;
    var dragCounter = 0;
    var mouseX = 0;
    var mouseY = 0;
    var liftX = 0;
    var liftY = 0;
	
    $(document).bind('mousemove touchmove', function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
        $("#ghost").css({
            top: (mouseY-liftY)+"px", 
            left: (mouseX-liftX)+"px"
        });
    }); 

    function isValidDrop(id) {
        var returnValue = false;
        var currentDragParent = "#" + $(currentDrag).parent().attr("id");
        if (currentDragParent == id) {
            if (ruleChecked) {
                returnValue = true;
            } else {
                returnValue = false;
            }
        } else {
            returnValue = true;
        }
        ruleChecked = true;
		
        return returnValue;
    }

    function ProcessDragEvent(id, dragCallback) {
        currentDrag = id;
        ruleChecked = false;
        $("#ghost").remove();
        $(currentDrag).clone().attr("id", "ghost").css({
            position: "absolute"
        }).appendTo("body").fadeTo(0, 0.5);
        dragCallback();
    }
	
    function ProcessDropEvent(id, dropCallback) {
        if (isValidDrop(id)) {
            dropCallback(id, currentDrag);
        }
        $("#ghost").remove();
    }
	
    $.fn.mobiledraganddrop = function (settings) {
        var config = {
            classmodifier: "mobiledraganddrop",
            targets: ".drop",
            dragCallback: function() {},
            dropCallback: function(dropSelector, currentDrag) {}
        };
		
        dragCounter++;
        var selectorForDropZones = "";
        var selectorForDraggables = "";

        if (settings) {
            $.extend(config, settings);
        }

        selectorForDropZones = "." + config.classmodifier + dragCounter + "drop";
        $(config.targets).addClass(config.classmodifier + dragCounter + "drop");
			
        selectorForDraggables = "." + config.classmodifier + dragCounter + "drag";
        $(this).addClass(config.classmodifier + dragCounter + "drag");
			
        $(selectorForDraggables).unbind("mousedown");
        $(selectorForDraggables).unbind("touchstart");
        $(selectorForDraggables).live("mousedown touchstart", function() {
            var id = "#" + $(this).attr("id");
            ProcessDragEvent(id, config.dragCallback);
            return false;
        });
			
        $(selectorForDropZones).live("mouseup touchend", function () {
            var id = "#" + $(this).attr("id");
            ProcessDropEvent(id, config.dropCallback);
            return false;
        });
    };
})(jQuery);