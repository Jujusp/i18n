import React from 'react'
import { FormattedDate, FormattedNumber, FormattedMessage } from 'react-intl'

const Job = (props) => {
    return (
        <tr>
            <th scope='row'>{props.offer.id}</th>
            <td>{props.offer.name}</td>
            <td>{props.offer.company}</td>
            <td>
                <FormattedMessage
                    id='Salary.mil'
                    defaultMessage='{salary} million'
                    values={{ salary: props.offer.salary }}
                    currency='COP'
                ></FormattedMessage>
            </td>
            <td>{props.offer.city}</td>
            <td>
                <FormattedDate
                    value={new Date(props.offer.date)}
                    year='numeric'
                    month='long'
                    day='numeric'
                    weekday='long'
                />
            </td>
            <td>
                {
                    <FormattedNumber
                        value={props.offer.views}
                        notation='compact'
                        compactDisplay='long'
                    ></FormattedNumber>
                }
            </td>
        </tr>
    )
}

export default Job
