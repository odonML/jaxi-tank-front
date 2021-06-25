import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return <header className={classes.header}>
        <Link to='/'>
        <div className={classes.logo}>OdonML</div>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
                <li>
                    <Link to='/tasks'>Tasks</Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;