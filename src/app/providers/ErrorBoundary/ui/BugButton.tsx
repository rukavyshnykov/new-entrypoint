import { classNames } from 'shared/lib/classNames/classNames'
import { useEffect, useState } from 'react'

interface BugButtonProps {
    className: string
}

//Test component
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false)

    const throwError = () => setError(true)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <div onClick={throwError}>
            throw error
        </div>
    )
}