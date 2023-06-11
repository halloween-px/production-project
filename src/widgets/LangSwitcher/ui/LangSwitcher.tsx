import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation('translation');

    const toggle = () => {
        const language = i18n.language === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(language);
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};
