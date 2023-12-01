import { useCallback, useEffect, useState } from "react";
import crow from "./public/crow.png";

function computeFieldTransform(canvasHeight: number, canvasWidth: number, scale: number) {
    const imageHeight = 374;
    const imageWidth = 269;
    const heightToWidth = imageWidth / imageHeight;
    const widthToHeight = imageHeight / imageWidth;

    const height = Math.min(
        canvasHeight,
        canvasWidth * widthToHeight
    ) * scale;
    const width = height * heightToWidth;

    // const PIXEL = height / imageHeight;

    const xShift = (canvasWidth - width) / 2;
    const yShift = (canvasHeight - height) / 2;
    return { left: xShift, top: yShift, height };
}

export function Home(): JSX.Element {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    const resizeCanvas = useCallback(() => {
        const div = document.getElementById("home");
        if (div) {
            if (height !== div.offsetHeight ||
                width !== div.offsetWidth) {
                setHeight(div.offsetHeight);
                setWidth(div.offsetWidth);
            }
        }
        // callback doesn't need to be recalculated when height/width change
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        return () => window.removeEventListener("resize", resizeCanvas);
    }, [resizeCanvas]);

    const transform = computeFieldTransform(height, width, 0.5);
    console.log(transform);

    return (<div id="home">
        <img
            id="crow-img"
            src={crow}
            alt={""}
            style={{ ...transform }}
        />
    </div>);
}