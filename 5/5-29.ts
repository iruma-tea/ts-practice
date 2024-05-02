{
    interface Rectangle {
        width: number;
        height: number;
    }

    interface Circle {
        radius: number;
    }

    function printArea(shape: Rectangle | Circle) {
        if ("width" in shape) {
            // shapeはRectangle型として扱われる。
            console.log(`Area: ${shape.width * shape.height}`);
        } else {
            // chapeはCircle型として扱われる。
            console.log(`Radius: ${shape.radius ** 2 * 3.14}`);
        }
    }
}