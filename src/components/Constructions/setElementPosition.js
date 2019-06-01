export default function setElementPosition(element, setStateFunction) {
    return (setStateFunction({
        top: element.current.offsetTop,
        left: element.current.offsetLeft,
        bottom: element.current.offsetTop + element.current.clientHeight,
        right: element.current.offsetLeft + element.current.offsetWidth
    }))
}