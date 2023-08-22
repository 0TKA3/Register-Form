const Sucsess = ({sucsession}) => {
    let classes
    if (sucsession==true) {
        classes = 'sucsess'
    } else {
        classes = "sucsess not-visible"
    }


    return (
        <div className={classes}>
            <p>Регистрация прошла успешно</p>
        </div>
    );
}
 
export default Sucsess;