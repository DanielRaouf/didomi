import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { create, set } from './slice'

const useUsersConsents = () => {
    const list = useSelector((state) => state.usersConsents.list)
    const dispatch = useDispatch()

    useEffect(() => {
        if (list) return;
        async function fetchUserConsents() {
            const res = await fetch('localhost/user/consents').then(res => res.json())
            dispatch(set(res))
        }
        fetchUserConsents()
    }, [dispatch, list])

    const addUserConsent = useCallback((item) => {
        const createUserConsent = async () => {
            const consent = await fetch('localhost/user/consents', { method: 'POST', body: JSON.stringify(item) }).then(res => res.json())
            dispatch(create(consent))
        }
        createUserConsent()
    }, [dispatch])

    return { list, addUserConsent }
}

export default useUsersConsents;