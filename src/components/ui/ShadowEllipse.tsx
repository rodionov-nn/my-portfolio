export default function ShadowEllipse(){
    return (
        <div className="absolute inset-0 -z-10 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
    )
}