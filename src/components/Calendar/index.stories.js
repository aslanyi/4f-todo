import React ,{ useState,Fragment } from 'react';
import Calendar from './index';
import '../../../public/Calendar.css';


export default { title: 'Calendar' };

export const DefaultCalendar = () => {

    const [value,setValue] = useState();

    const onChange = (date) => {
        const localeDate = date.toLocaleDateString();
        setValue(localeDate);
    };
    return <Fragment>
            <Calendar onChange={onChange} />
            <div> Seçilen Tarih: {value}</div>
         </Fragment>;
    
};
