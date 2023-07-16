import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
    className: string
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('lds-ellipsis', {}, [])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}