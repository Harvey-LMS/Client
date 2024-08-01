"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';


const TestPage = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('../api/test');
                const data = await response.data;

                console.log(data)
            } catch (error) {
                console.error('Failed to fetch users:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}
 
export default TestPage;