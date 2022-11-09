import * as React from 'react';
import { useState } from 'react';
import { apiService, TOKEN_KEY } from '../services/api-services';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        apiService('/auth/login', 'POST', {email, password})
            .then(token => {
                localStorage.setItem(TOKEN_KEY, token)
                nav('/');
            })
            .catch(() => console.log('oops!'));
    }

    return (
        <main className="container">
            <section className="row justify-content-center mt-4">
                <div className="col-12 col-md-4">
                    <form className="form-group border rounded shadow p-4">
                        <label htmlFor="email">Email</label>
                        <input className="form-control mb-2" value={email} onChange={e => setEmail(e.target.value)} />
                        <label htmlFor="password">Password</label>
                        <input className="form-control mb-2" value={password} onChange={e => setPassword(e.target.value)} />
                        <button onClick={handleLogin} className="btn btn-primary">Login</button>

                    </form>
                </div>
            </section>
        </main>
    )


};

export default Login;