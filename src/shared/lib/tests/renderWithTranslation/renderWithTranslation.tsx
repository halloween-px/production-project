import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nFromTest from '../../../config/i18n/i18nFromTest';

export const renderWithTranslation = (component: ReactNode) => {
    return render(
        <I18nextProvider i18n={i18nFromTest}>
            {component}
        </I18nextProvider>,
    );
};
