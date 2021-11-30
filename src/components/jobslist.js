import React, { useState } from 'react'
import Job from './job'
import { FormattedMessage } from 'react-intl'
import { useIntl } from 'react-intl'
import './joblists.css'

const JobsList = () => {
    const intl = useIntl()
    const [offers] = useState([
        {
            id: '0001',
            name: 'Manager',
            company: 'Schneider Electric',
            salary: 4.5,
            city: 'Bogotá, Colombia',
            date: '2019-03-26',
            views: 10000000023
        },
        {
            id: '0002',
            name: 'Software Engineer',
            company: 'Google Inc.',
            salary: 20,
            city: 'Palo Alto, CA, USA',
            date: '2019-03-27',
            views: 1000000
        },
        {
            id: '0003',
            name: 'Nurse',
            company: 'Clínica La Aurora',
            salary: 1,
            city: 'Cali, Colombia',
            date: '2019-03-28',
            views: 2022
        },
        {
            id: '0003',
            name: 'Nurse',
            company: 'Clínica La Aurora',
            salary: 1,
            city: 'Cali, Colombia',
            date: '2019-03-28',
            views: 2000000
        }
    ])
    console.log(intl.locale)
    return (
        <div>
            <table className='table'>
                <thead className={intl.locale === 'en' ? 'dark' : 'light'}>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>
                            <FormattedMessage id='Position' />
                        </th>
                        <th scope='col'>
                            <FormattedMessage id='Company' />
                        </th>
                        <th scope='col'>
                            <FormattedMessage id='Salary' />
                        </th>
                        <th scope='col'>
                            <FormattedMessage id='Salary' />
                        </th>
                        <th scope='col'>
                            <FormattedMessage id='PublicationDate' />
                        </th>
                        <th scope='col'>
                            <FormattedMessage id='Views' />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {console.log('Offers', offers)}
                    {offers.map((e, i) => (
                        <Job key={i} offer={e} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default JobsList
