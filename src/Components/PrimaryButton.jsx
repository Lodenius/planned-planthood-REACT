function PrimaryButton(props) {
    return ( 
        <button className="PrimaryButton" onClick={(e) => {props.action(e)}}>{props.title}</button>
    );
}

export default PrimaryButton;