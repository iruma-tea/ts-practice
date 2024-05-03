{
    interface Rectangle {
        width: number;
        height: number;
    }

    interface Circle {
        radius: number;
    }

    interface Square {
        width: number;
    }

    type Shape = Rectangle | Square | Circle;

    function printArea(shape: Shape) {
        if ("width" in shape) {
            console.log(`Area: ${shape.width * shape.height}`);
            // NG
            // >> Property 'height' does not exist on type 'Rectangle | Square'.
            //  >> Property 'height' does not exist on type 'Square'.
        }
    }
}