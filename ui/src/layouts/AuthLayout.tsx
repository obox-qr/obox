
import {Outlet} from 'react-router-dom'

const AuthLayout =()=>{
return (<div>
    <header>
        <h1>Auth Layout Header</h1>
    </header>
    <main>
        <Outlet/>
    </main>
    <footer>
        <p>Auth Layout footer</p>
    </footer>
</div>)

}

export default AuthLayout