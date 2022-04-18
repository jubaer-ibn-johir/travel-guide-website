import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if(loading){
        return <Loading></Loading>
    }
    if (error) {

        errorElement = <p className='text-danger'>Error: {error?.message}</p>   

    }

    if (user) {
        navigate('/home');
    }
    return (
        <div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-success w-50 d-block mx-auto mt-5'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;