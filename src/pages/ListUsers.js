import { useState, useEffect } from 'react';
import Input from '../components/Input';
import useDebounce from '../hooks/useDebounce';

const ListUsers = () => {

    /* ---------------------------------- users --------------------------------- */
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const func = async () => {
            const res = await fetch('/api/users');
            if (res.status === 200) {
                const users = await res.json();
                setUsers(users);
            } else {
                const msg = await res.json();
                console.error(msg);
            }
        }
        func();
    }, []);

    /* --------------------------------- search --------------------------------- */
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 100);

    const onSearchChange = evt => {
        setSearchTerm(evt.target.value);
    }

    useEffect(() => {
        if (debouncedSearchTerm) {
            let filtered = users.filter(user => user.username === debouncedSearchTerm);
            setFilteredUsers(filtered);
            return;
        }
        setFilteredUsers([]);
    }, [debouncedSearchTerm, users]);

    const renderUsers = () => {
        return (
            <ul className='search--users-list'>
                {filteredUsers.map(u => (
                    <li key={u.email}>{u.username}: {u.email}</li>
                ))}
            </ul>
        );
    }

    return (
        <section className='search'>
            <div className='search--container'>
                <Input
                    label='Search User'
                    type='text'
                    value={searchTerm}
                    onChange={onSearchChange}
                />
            </div>
            <div className='search--users'>
                {renderUsers()}
            </div>
        </section>
    );
}

export default ListUsers;
