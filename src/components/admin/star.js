export const Star = (props) => {
    return (<>
        <div className="text-[8px]">
            {props.count >= 1 ? <span class="material-icons md-18  text-yellow-400">&#xE838; </span> :
                <span class="material-icons md-18  text-yellow-400"> &#xE83A; </span>}
            {props.count >= 2 ? <span class="material-icons md-18  text-yellow-400">&#xE838; </span> :
                <span class="material-icons md-18  text-yellow-400"> &#xE83A; </span>}
            {props.count >= 3 ? <span class="material-icons md-18  text-yellow-400">&#xE838; </span> :
                <span class="material-icons md-18  text-yellow-400"> &#xE83A; </span>}
            {props.count >= 4 ? <span class="material-icons md-18  text-yellow-400">&#xE838; </span> :
                <span class="material-icons md-18  text-yellow-400"> &#xE83A; </span>}
            {props.count >= 5 ? <span class="material-icons md-18  text-yellow-400">&#xE838; </span> :
                <span class="material-icons md-18  text-yellow-400"> &#xE83A; </span>}
        </div>
    </>)
}