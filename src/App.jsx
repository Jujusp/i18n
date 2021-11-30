import localeEsMessages from './locales/es'
import localeEnMessages from './locales/en'

import { IntlProvider } from 'react-intl'
import JobsList from './components/jobslist'

function App() {
    var userLang = navigator.language || navigator.userLanguage
    return (
        <IntlProvider
            locale={userLang}
            messages={
                userLang === 'en' || userLang === 'en-US'
                    ? localeEnMessages
                    : localeEsMessages
            }
        >
            <JobsList />
        </IntlProvider>
    )
}
export default App
