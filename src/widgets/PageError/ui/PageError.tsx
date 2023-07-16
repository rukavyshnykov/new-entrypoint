import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface PageErrorProps {
    className: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const {t} = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [])}>
            <p>{t('Произошла непредвиденнвя ошибка')}</p>
            <Button onClick={reloadPage} theme={ThemeButton.CLEAR}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}