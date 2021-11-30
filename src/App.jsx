import localeEsMessages from './locales/es'
import localeEsMessagesEn from './locales/en'

import { IntlProvider } from 'react-intl'
import JobsList from './components/jobslist'

function App() {
    var userLang = navigator.language || navigator.userLanguage

    return (
        <IntlProvider
            locale={userLang}
            messages={userLang === 'en' ? localeEsMessagesEn : localeEsMessages}
        >
            <JobsList />
        </IntlProvider>
    )
}
export default App
