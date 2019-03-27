import Link from 'next/link';
import TeamPage from '../components/TeamPage/TeamPage.js';

export default () => <>
    <div>Next js about page</div>
    <Link href="/index">Go to index page</Link>
    <TeamPage/>
</>