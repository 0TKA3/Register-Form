const SubmitButton = (props) => {

    function showUserData() {
        console.log(props.user)
    }


    return (
        <button type='button' onClick={showUserData}>Register</button>
    );
}
 
export default SubmitButton;