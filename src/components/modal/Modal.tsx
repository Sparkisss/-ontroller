import ReactDOM from 'react-dom'; 
import classes from './Modal.module.css'  

const portal = document.getElementById('portal') as HTMLElement

const Modal = () => {

    return ReactDOM.createPortal(
        <section>
            <div className={classes.formBox}>
                <div className={classes.formValue}>
                    <form action="">
                        <h2>Login</h2>
                        <div className={classes.inputbox}>
                            <input type="email" required/>
                            <label htmlFor="">Email</label>
                        </div>
                        <div className={classes.inputbox}>
                            <input type="password" required/>
                            <label htmlFor="">Password</label>
                        </div>
                        <div className={classes.forget}>
                            <label htmlFor=""><input type='checkbox'/>Remember<a href="#">Forget password</a></label>
                            
                        </div>
                        <button>Log in</button>
                        <div className={classes.register}> 
                            <p>Don't have a acount <a href="#">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>,
    portal
    )
};

export default Modal;