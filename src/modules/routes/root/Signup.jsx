import './stylesheets/Signup.css';

import { useFetcher, Link } from 'react-router';

import FormLevelError from './FormLevelError';
import FormRow from './FormRow';
import FormLoader from '../../utilities/miscUI/FormLoader';

export default function Signup() {
    const fetcher = useFetcher();

    return (
        <fetcher.Form method='POST' className='reader-form signup-form'>
            <h1 className='form-heading'>Sign Up</h1>
            <p className='form-description'>
                Create a reader account to join discussions.
            </p>

            {fetcher.data?.errors?.formLevel !== null &&
                fetcher.data?.errors?.formLevel !== undefined && (
                    <FormLevelError errorText={fetcher.data.errors.formLevel} />
                )}

            <FormRow
                labelContent='Username'
                inputType='text'
                fieldName='username'
                error={fetcher.data?.errors?.username}
            />

            <FormRow
                labelContent='Name'
                inputType='text'
                fieldName='name'
                error={fetcher.data?.errors?.name}
            />

            <FormRow
                labelContent='Password'
                inputType='password'
                fieldName='password'
                error={fetcher.data?.errors?.password}
            />

            <FormRow
                labelContent='Confirm Password'
                inputType='password'
                fieldName='cpassword'
                error={fetcher.data?.errors?.cpassword}
            />

            <button type='submit'>
                {fetcher.state === 'idle' ? 'Create Account' : <FormLoader />}
            </button>

            <p className='login-notice'>
                Already have an account?&nbsp;
                <Link to='/login'>Log in</Link>
            </p>
        </fetcher.Form>
    );
}
