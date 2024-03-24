import { Link } from 'react-router-dom';
import RegisterPage from './RegisterPage';
export default function LoginPage(){
    return  (
        <div className="mt-[20%] max-w-[65%] mx-auto my-auto text-gray-500">
            <h1 className="text-3xl font-bold">Login</h1>
            <br />
            <form className="flex flex-col max-w-[65%] mx-auto my-auto">
                <label htmlFor="email">Email</label>
                <input className="border border-gray-400 rounded-lg" type="email" id="email" name="email" />
            <br />

                <label htmlFor="password">Password</label>
                <input className="border border-gray-400 rounded-lg" type="password" id="password" name="password" />
            <br />

                <button className="border bg-black text-white rounded-full mt-2 py-1" type="submit">Login</button>

                <div className='text-center'>
                    Don't have an account? <Link className='underline text-black' to={'/register'}>Register now</Link>
                </div>
            </form>
        </div>
    )
}