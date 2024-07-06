import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import classes from './Modal.module.css'; 

const portal = document.getElementById('portal') as HTMLElement

const Modal = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        defaultValues: {
            email: "",
            password: ''
        },
        mode: "onBlur"
    })

    const onSubmit = (data:any):void => {
        alert(JSON.stringify(data))
        reset()
    }

    return ReactDOM.createPortal(
        <section>
            <div className={classes.formBox}>
                <div className={classes.formValue}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Login</h2>
                        <div className={classes.inputbox}>
                            <input type="email" required placeholder='Email'/>                       
                        </div>                        
                        <div className={classes.inputbox}>
                            <input {...register("password", {required: "This is required", 
                            minLength: {
                                value: 5,
                                message: "Min length is 5"
                            }})} 
                            type="password" required placeholder='Password'/>
                            <p>{errors.password?.message}</p>
                        </div>
                        <div className={classes.forget}>
                            <label htmlFor=""><input type='checkbox'/>Remember<a href="#">Forget password</a></label>                            
                        </div>
                        <button disabled={!isValid}>Log in</button>
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