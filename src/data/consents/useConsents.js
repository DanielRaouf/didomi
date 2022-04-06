import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set } from './slice'

const useConsents = () => {
    const list = useSelector((state) => state.consents.list)
    const dispatch = useDispatch()

    useEffect(() => {
        if (list) return;
        async function fetchConsents() {
            const res = await fetch('localhost/consents').then(res => res.json())
            dispatch(set(res))
        }
        fetchConsents()
    }, [dispatch, list])

    return { list }
}

export default useConsents;