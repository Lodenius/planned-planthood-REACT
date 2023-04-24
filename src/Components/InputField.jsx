function InputField(props) {
    return ( 
        <article className="inputField">
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={(e) => props.action(e.target.value)} />
        </article>
     );
}

export default InputField;