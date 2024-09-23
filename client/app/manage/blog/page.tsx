import { headers } from 'next/headers';

export default function Page() {
    const headerRequest = headers();
    const user = JSON.parse(headerRequest.get('user') || '{}');
    
    return (
        <div>
            <h1>Manage Blog</h1>
            <div>Email: {user.email || 'No email found'}</div>
        </div>
    );
}
